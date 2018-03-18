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

var _index = require('../mask/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  An Popup modal from bottom
 *
 */
var Popup = function (_Component) {
    (0, _inherits3.default)(Popup, _Component);

    function Popup() {
        (0, _classCallCheck3.default)(this, Popup);
        return (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).apply(this, arguments));
    }

    (0, _createClass3.default)(Popup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                show = _props.show,
                onRequestClose = _props.onRequestClose,
                enableMask = _props.enableMask,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'show', 'onRequestClose', 'enableMask']);

            var cls = (0, _classnames2.default)('weui-popup', {
                'weui-popup_toggle': show
            }, className);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_index2.default, { transparent: enableMask, style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    children
                )
            );
        }
    }]);
    return Popup;
}(_react.Component);

Popup.propTypes = {
    /**
     * display the component
     *
     */
    show: _propTypes2.default.bool,
    /**
     * show mask
     *
     */
    enableMask: _propTypes2.default.bool
};
Popup.defaultProps = {
    show: false,
    enableMask: false
};
exports.default = Popup;
module.exports = exports['default'];