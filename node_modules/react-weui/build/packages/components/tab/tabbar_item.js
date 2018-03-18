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

var _tabbar_icon = require('./tabbar_icon');

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = require('./tabbar_label');

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Tabbar item
 *
 */
var TabBarItem = function (_React$Component) {
    (0, _inherits3.default)(TabBarItem, _React$Component);

    function TabBarItem() {
        (0, _classCallCheck3.default)(this, TabBarItem);
        return (0, _possibleConstructorReturn3.default)(this, (TabBarItem.__proto__ || (0, _getPrototypeOf2.default)(TabBarItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                icon = _props.icon,
                label = _props.label,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'active', 'icon', 'label']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar__item': true,
                'weui-bar__item_on': active
            }, className);

            if (icon || label) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    icon ? _react2.default.createElement(
                        _tabbar_icon2.default,
                        null,
                        icon
                    ) : false,
                    label ? _react2.default.createElement(
                        _tabbar_label2.default,
                        null,
                        label
                    ) : false
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    children
                );
            }
        }
    }]);
    return TabBarItem;
}(_react2.default.Component);

TabBarItem.propTypes = {
    /**
     * indicate currently active
     *
     */
    active: _propTypes2.default.bool,
    /**
     * icon of item
     *
     */
    icon: _propTypes2.default.any,
    /**
     * label of item
     *
     */
    label: _propTypes2.default.string
};
TabBarItem.defaultProps = {
    active: false,
    icon: false,
    label: ''
};
exports.default = TabBarItem;
module.exports = exports['default'];