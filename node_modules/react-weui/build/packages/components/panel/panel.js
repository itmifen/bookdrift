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

var _deprecationWarning = require('../../utils/deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel Object, consists of `PanelHeader`, `PanelBody` and `PanelFooter`
 *
 */
var Panel = function (_React$Component) {
    (0, _inherits3.default)(Panel, _React$Component);

    function Panel() {
        (0, _classCallCheck3.default)(this, Panel);
        return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).apply(this, arguments));
    }

    (0, _createClass3.default)(Panel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                access = _props.access,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'access']);


            if (access) {
                (0, _deprecationWarning2.default)('panel access', 'cell access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#panel');
            }

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return Panel;
}(_react2.default.Component);

Panel.propTypes = {
    /**
     * deprecated property from 0.4.x
     *
     */
    access: _propTypes2.default.bool
};
Panel.defaultProps = {
    access: false
};
exports.default = Panel;
;
module.exports = exports['default'];