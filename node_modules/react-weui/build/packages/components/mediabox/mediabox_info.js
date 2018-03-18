'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mediabox_info_meta = require('./mediabox_info_meta');

var _mediabox_info_meta2 = _interopRequireDefault(_mediabox_info_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Info Items for MediaBox
 *
 */
var MediaBoxInfo = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxInfo, _React$Component);

    function MediaBoxInfo() {
        (0, _classCallCheck3.default)(this, MediaBoxInfo);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxInfo.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxInfo)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxInfo, [{
        key: 'renderData',
        value: function renderData(metas) {
            return metas.map(function (meta, i) {
                return _react2.default.createElement(
                    _mediabox_info_meta2.default,
                    { key: i, extra: meta.extra },
                    meta.label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'data', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__info': true
            }, className);

            return _react2.default.createElement(
                'ul',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return MediaBoxInfo;
}(_react2.default.Component);

MediaBoxInfo.propTypes = {
    /**
     * automatically include Metas, object array of metas, property required: `extra`, `label`
     *
     */
    data: _propTypes2.default.array
};
MediaBoxInfo.defaultProps = {
    data: []
};
exports.default = MediaBoxInfo;
;
module.exports = exports['default'];