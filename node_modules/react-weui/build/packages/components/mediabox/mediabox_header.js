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

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header of MediaBox, if detects Img tag inside content will automatically adds corresponding class
 *
 */
var MediaBoxHeader = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxHeader, _React$Component);

    function MediaBoxHeader() {
        (0, _classCallCheck3.default)(this, MediaBoxHeader);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxHeader.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxHeader)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var clz = (0, _classnames2.default)({
                'weui-media-box__hd': true
            }, className);

            var childrenWithProps = _react2.default.Children.map(children, function (child) {
                if (child.type === 'img' && !child.props.className) {
                    return _react2.default.cloneElement(child, { className: 'weui-media-box__thumb' });
                } else {
                    return child;
                }
            });

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: clz }, others),
                childrenWithProps
            );
        }
    }]);
    return MediaBoxHeader;
}(_react2.default.Component);

exports.default = MediaBoxHeader;
;
module.exports = exports['default'];