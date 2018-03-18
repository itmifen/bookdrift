'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var deprecateValue = {
    'safe_success': 'safe-success',
    'safe_warn': 'safe-warn',
    'success_circle': 'success-circle',
    'success_no_circle': 'success-no-circle',
    'waiting_circle': 'waiting-circle',
    'info_circle': 'info-circle'
};

/**
 * WeUI Icons
 *
 */

var Icon = function (_React$Component) {
    (0, _inherits3.default)(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
    }

    (0, _createClass3.default)(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                value = _props.value,
                size = _props.size,
                className = _props.className,
                primary = _props.primary,
                others = (0, _objectWithoutProperties3.default)(_props, ['value', 'size', 'className', 'primary']);


            if ((0, _keys2.default)(deprecateValue).indexOf(value) !== -1) {
                (0, _deprecationWarning2.default)('Icon ' + value, 'Icon ' + deprecateValue[value]);
            }

            var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, 'weui-icon-' + value, value !== 'loading'), (0, _defineProperty3.default)(_classNames, 'weui-icon_msg', size === 'large' && !primary), (0, _defineProperty3.default)(_classNames, 'weui-icon_msg-primary', size === 'large' && primary), (0, _defineProperty3.default)(_classNames, 'weui-loading', value === 'loading'), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

            return _react2.default.createElement('i', (0, _extends3.default)({}, others, { className: cls }));
        }
    }]);
    return Icon;
}(_react2.default.Component);

Icon.propTypes = {
    /**
     * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
     *
     */
    value: _propTypes2.default.string,
    /**
     * size of icon, options: small/large
     *
     */
    size: _propTypes2.default.string
};
Icon.defaultProps = {
    value: 'success',
    size: 'small'
};
exports.default = Icon;
module.exports = exports['default'];