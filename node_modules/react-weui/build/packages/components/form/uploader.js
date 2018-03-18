'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = require('../../utils/deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui style uploader
 *
 */
var Uploader = function (_Component) {
    (0, _inherits3.default)(Uploader, _Component);

    function Uploader() {
        (0, _classCallCheck3.default)(this, Uploader);
        return (0, _possibleConstructorReturn3.default)(this, (Uploader.__proto__ || (0, _getPrototypeOf2.default)(Uploader)).apply(this, arguments));
    }

    (0, _createClass3.default)(Uploader, [{
        key: 'detectVerticalSquash',


        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
         * With react fix by n7best
         */
        value: function detectVerticalSquash(img) {
            var data = void 0;
            var ih = img.naturalHeight;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            try {
                // Prevent cross origin error
                data = ctx.getImageData(0, 0, 1, ih).data;
            } catch (err) {
                // hopeless, assume the image is well and good.
                console.log('Cannot check verticalSquash: CORS?');
                return 1;
            }
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = ey + sy >> 1;
            }
            var ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        }
    }, {
        key: 'handleFile',
        value: function handleFile(file, cb) {
            var _this2 = this,
                _arguments = arguments;

            var reader = void 0;
            if (typeof FileReader !== 'undefined') {
                reader = new FileReader();
            } else {
                if (window.FileReader) reader = new window.FileReader();
            }

            reader.onload = function (e) {
                var img = void 0;
                if (typeof Image !== 'undefined') {
                    img = new Image();
                } else {
                    if (window.Image) img = new window.Image();
                }
                img.onload = function () {
                    var w = Math.min(_this2.props.maxWidth, img.width);
                    var h = img.height * (w / img.width);
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');

                    //check canvas support, for test
                    if (ctx) {
                        //patch subsampling bug
                        //http://jsfiddle.net/gWY2a/24/
                        var drawImage = ctx.drawImage;
                        ctx.drawImage = function (_img, sx, sy, sw, sh, dx, dy, dw, dh) {
                            var vertSquashRatio = 1;
                            // Detect if img param is indeed image
                            if (!!_img && _img.nodeName === 'IMG') {
                                vertSquashRatio = _this2.detectVerticalSquash(_img);
                                if (typeof sw === 'undefined') sw = _img.naturalWidth;
                                if (typeof sh === 'undefined') sh = _img.naturalHeight;
                            }

                            // Execute several cases (Firefox does not handle undefined as no param)
                            // by call (apply is bad performance)
                            if (_arguments.length === 9) drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);else if (typeof sw !== 'undefined') drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);else drawImage.call(ctx, _img, sx, sy);
                        };

                        canvas.width = w;
                        canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);

                        var base64 = canvas.toDataURL('image/png');

                        cb({
                            nativeFile: file,
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            data: base64
                        }, e);
                    } else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var _this3 = this;

            var langs = this.props.lang;
            var _files = e.target.files;

            if (_files.length === 0) return;

            if (this.props.files.length >= this.props.maxCount) {
                this.props.onError(langs.maxError(this.props.maxCount));
                return;
            }

            for (var key in _files) {
                if (!_files.hasOwnProperty(key)) continue;
                var file = _files[key];

                this.handleFile(file, function (_file, _e) {
                    if (_this3.props.onChange) _this3.props.onChange(_file, _e);
                    _reactDom2.default.findDOMNode(_this3.refs.uploader).value = '';
                }, e);
            }
        }
    }, {
        key: 'renderFiles',
        value: function renderFiles() {
            var _this4 = this;

            return this.props.files.map(function (file, idx) {
                var url = file.url,
                    error = file.error,
                    status = file.status,
                    onClick = file.onClick,
                    others = (0, _objectWithoutProperties3.default)(file, ['url', 'error', 'status', 'onClick']);

                var fileStyle = {
                    backgroundImage: 'url(' + url + ')'
                };
                var cls = (0, _classnames2.default)({
                    'weui-uploader__file': true,
                    'weui-uploader__file_status': error || status
                });

                if (onClick) {
                    (0, _deprecationWarning2.default)('File onClick', 'Uploader onFileClick');
                }

                var handleFileClick = onClick ? onClick : function (e) {
                    if (_this4.props.onFileClick) _this4.props.onFileClick(e, file, idx);
                };

                return _react2.default.createElement(
                    'li',
                    (0, _extends3.default)({ className: cls, key: idx, style: fileStyle, onClick: handleFileClick }, others),
                    error || status ? _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__file-content' },
                        error ? _react2.default.createElement(_icon2.default, { value: 'warn' }) : status
                    ) : false
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                title = _props.title,
                maxCount = _props.maxCount,
                files = _props.files,
                onChange = _props.onChange,
                onFileClick = _props.onFileClick,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'title', 'maxCount', 'files', 'onChange', 'onFileClick']);

            var inputProps = (0, _assign2.default)({}, others);
            delete inputProps.lang;
            delete inputProps.onError;
            delete inputProps.maxWidth;

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-uploader': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'div',
                    { className: 'weui-uploader__hd' },
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-uploader__title' },
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__info' },
                        files.length,
                        '/',
                        maxCount
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-uploader__bd' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'weui-uploader__files' },
                        this.renderFiles()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__input-box' },
                        _react2.default.createElement('input', (0, _extends3.default)({
                            ref: 'uploader' //let react to reset after onchange
                            , className: 'weui-uploader__input',
                            type: 'file',
                            accept: 'image/*',
                            capture: 'camera',
                            onChange: this.handleChange.bind(this)
                        }, inputProps))
                    )
                )
            );
        }
    }]);
    return Uploader;
}(_react.Component);

Uploader.propTypes = {
    /**
     * title of uploader
     *
     */
    title: _propTypes2.default.string,
    /**
     * max amount of allow file
     *
     */
    maxCount: _propTypes2.default.number,
    /**
     * maxWidth of image for uploader to compress
     *
     */
    maxWidth: _propTypes2.default.number,
    /**
     * when file change, pass property `(event, file)`
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * when there is error, pass property `msg`
     *
     */
    onError: _propTypes2.default.func,
    /**
     * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
     *
     */
    files: _propTypes2.default.array,
    /**
     * languages object, with property `maxError`
     *
     */
    lang: _propTypes2.default.object
};
Uploader.defaultProps = {
    title: '图片上传',
    maxCount: 4,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    lang: { maxError: function maxError(maxCount) {
            return '\u6700\u591A\u53EA\u80FD\u4E0A\u4F20' + maxCount + '\u5F20\u56FE\u7247';
        } }
};
exports.default = Uploader;
;
module.exports = exports['default'];