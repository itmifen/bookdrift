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

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer of Panel
 *
 */
var PanelFooter = function (_React$Component) {
    (0, _inherits3.default)(PanelFooter, _React$Component);

    function PanelFooter() {
        (0, _classCallCheck3.default)(this, PanelFooter);
        return (0, _possibleConstructorReturn3.default)(this, (PanelFooter.__proto__ || (0, _getPrototypeOf2.default)(PanelFooter)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelFooter, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var Component = this.props.href ? 'a' : 'div';
            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel__ft': true
            }, className, className));

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelFooter;
}(_react2.default.Component);

exports.default = PanelFooter;
;
module.exports = exports['default'];