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

var _index = require('../mask/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../icon/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  pop out indicator to inform users
 *
 */
var Toast = function (_Component) {
    (0, _inherits3.default)(Toast, _Component);

    function Toast() {
        (0, _classCallCheck3.default)(this, Toast);
        return (0, _possibleConstructorReturn3.default)(this, (Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).apply(this, arguments));
    }

    (0, _createClass3.default)(Toast, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                icon = _props.icon,
                show = _props.show,
                children = _props.children,
                iconSize = _props.iconSize,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'icon', 'show', 'children', 'iconSize']);

            var cls = (0, _classnames2.default)('weui-toast', (0, _defineProperty3.default)({}, className, className));
            return _react2.default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement(_index2.default, { transparent: true }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    _react2.default.createElement(_index4.default, { value: icon, size: iconSize, className: 'weui-icon_toast' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-toast_content' },
                        children
                    )
                )
            );
        }
    }]);
    return Toast;
}(_react.Component);

Toast.propTypes = {
    /**
     * Icon Value
     *
     */
    icon: _propTypes2.default.string,
    /**
     * Icon Size
     *
     */
    iconSize: _propTypes2.default.string,
    /**
     * display toast
     *
     */
    show: _propTypes2.default.bool
};
Toast.defaultProps = {
    icon: 'toast',
    show: false
};
exports.default = Toast;
module.exports = exports['default'];