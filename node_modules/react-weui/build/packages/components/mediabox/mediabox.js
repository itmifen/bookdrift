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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
 *
 */
var MediaBox = function (_React$Component) {
    (0, _inherits3.default)(MediaBox, _React$Component);

    function MediaBox() {
        (0, _classCallCheck3.default)(this, MediaBox);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBox.__proto__ || (0, _getPrototypeOf2.default)(MediaBox)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                type = _props.type,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'type', 'className']);

            var Component = this.props.href ? 'a' : 'div';
            var cls = (0, _classnames2.default)({
                'weui-media-box': true,
                'weui-media-box_appmsg': type === 'appmsg',
                'weui-media-box_text': type === 'text',
                'weui-media-box_small-appmsg': type === 'small_appmsg'
            }, className);

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBox;
}(_react2.default.Component);

MediaBox.propTypes = {
    /**
     * The layout of media box, Options: appmsg/text/small_appmsg
     *
     */
    type: _propTypes2.default.string
};
MediaBox.defaultProps = {
    type: 'text'
};
exports.default = MediaBox;
;
module.exports = exports['default'];