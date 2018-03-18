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
 * Content wrapper for each Tab Item
 */
var TabBodyItem = function (_React$Component) {
    (0, _inherits3.default)(TabBodyItem, _React$Component);

    function TabBodyItem() {
        (0, _classCallCheck3.default)(this, TabBodyItem);
        return (0, _possibleConstructorReturn3.default)(this, (TabBodyItem.__proto__ || (0, _getPrototypeOf2.default)(TabBodyItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBodyItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'active']);

            var cls = (0, _classnames2.default)({
                'weui-tab__bd-item': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: { display: active ? 'block' : 'none' } }, others),
                children
            );
        }
    }]);
    return TabBodyItem;
}(_react2.default.Component);

TabBodyItem.propTypes = {
    /**
     * display this component
     *
     */
    active: _propTypes2.default.bool
};
TabBodyItem.defaultProps = {
    active: false
};
exports.default = TabBodyItem;
module.exports = exports['default'];