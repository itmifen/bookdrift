'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var presetStyles = {
    'default': {},
    'header': {
        position: 'absolute',
        top: '-.4em',
        right: '-.4em'
    },
    'body': {
        marginLeft: '5px'
    },
    'footer': {
        marginLeft: '5px',
        marginRight: '5px'
    }
};
/**
 * Small status descriptors for UI elements.
 *
 */

var Badge = function (_Component) {
    (0, _inherits3.default)(Badge, _Component);

    function Badge() {
        (0, _classCallCheck3.default)(this, Badge);
        return (0, _possibleConstructorReturn3.default)(this, (Badge.__proto__ || (0, _getPrototypeOf2.default)(Badge)).apply(this, arguments));
    }

    (0, _createClass3.default)(Badge, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                dot = _props.dot,
                style = _props.style,
                preset = _props.preset,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'dot', 'style', 'preset']);

            var clz = (0, _classnames2.default)('weui-badge', {
                'weui-badge_dot': dot
            }, className);

            var stylez = (0, _assign2.default)({}, presetStyles[preset], style);
            return _react2.default.createElement(
                'span',
                (0, _extends3.default)({ className: clz, style: stylez }, domProps),
                children
            );
        }
    }]);
    return Badge;
}(_react.Component);

Badge.propTypes = {
    /**
     * display dot style without content
     *
     */
    dot: _propTypes2.default.bool,
    /**
     * some preset layout for other UI elements, include 'header', 'body', 'footer'
     *
     */
    preset: _propTypes2.default.string
};
Badge.defaultProps = {
    dot: false,
    preset: 'default'
};
exports.default = Badge;
module.exports = exports['default'];