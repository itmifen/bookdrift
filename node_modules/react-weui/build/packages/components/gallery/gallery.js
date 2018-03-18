'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _swiper = require('../swiper');

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Full screen photo display
 *
 */
var Gallery = function (_Component) {
    (0, _inherits3.default)(Gallery, _Component);

    function Gallery(props) {
        (0, _classCallCheck3.default)(this, Gallery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Gallery.__proto__ || (0, _getPrototypeOf2.default)(Gallery)).call(this, props));

        _this.state = {
            currentIndex: _this.props.defaultIndex
        };
        return _this;
    }

    (0, _createClass3.default)(Gallery, [{
        key: 'handleClick',
        value: function handleClick(func) {
            var _this2 = this;

            return function (e) {
                if (func) func(e, _this2.state.currentIndex);
            };
        }
    }, {
        key: 'renderImages',
        value: function renderImages(imgs) {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'weui-gallery__img' },
                _react2.default.createElement(
                    _swiper2.default,
                    {
                        indicators: false,
                        defaultIndex: this.props.defaultIndex,
                        onChange: function onChange(prev, next) {
                            return _this3.setState({ currentIndex: next });
                        }
                    },
                    imgs.map(function (img, i) {
                        var imgStyle = {
                            backgroundImage: 'url(' + img + ')',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center'
                        };
                        return _react2.default.createElement('span', { key: i, style: imgStyle });
                    })
                )
            );
        }
    }, {
        key: 'renderOprs',
        value: function renderOprs() {
            var _this4 = this;

            if (Array.isArray(this.props.children)) {
                return this.props.children.map(function (child, i) {
                    return _react2.default.cloneElement(child, {
                        key: i,
                        onClick: _this4.handleClick(child.props.onClick)
                    });
                });
            } else {
                if (this.props.children) {
                    return _react2.default.cloneElement(this.props.children, {
                        onClick: this.handleClick(this.props.children.props.onClick)
                    });
                } else {
                    return false;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                show = _props.show,
                src = _props.src,
                defaultIndex = _props.defaultIndex,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'show', 'src', 'defaultIndex']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-gallery': true
            }, className, className));

            if (!show) return false;

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: { display: show ? 'block' : 'none' } }, others),
                Array.isArray(src) ? this.renderImages(src) : _react2.default.createElement('span', { className: 'weui-gallery__img', style: { backgroundImage: 'url(' + src + ')' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-gallery__opr' },
                    this.renderOprs()
                )
            );
        }
    }]);
    return Gallery;
}(_react.Component);

Gallery.propTypes = {
    /**
     * indicate whather the component is display
     *
     */
    show: _propTypes2.default.bool,
    /**
     * image source, string for single element, array for multiple element
     *
     */
    src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * indicate whather the component is display
     *
     */
    defaultIndex: _propTypes2.default.number
};
Gallery.defaultProps = {
    show: undefined,
    src: '',
    defaultIndex: 0
};
exports.default = Gallery;
module.exports = exports['default'];