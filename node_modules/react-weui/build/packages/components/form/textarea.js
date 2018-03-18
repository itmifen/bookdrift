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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for textarea
 *
 */
var TextArea = function (_Component) {
    (0, _inherits3.default)(TextArea, _Component);

    function TextArea() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            textCounter: _this.props.defaultValue ? _this.props.defaultValue.length : 0
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TextArea, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ textCounter: e.target.value.length });

            //forward event to props if any
            if (this.props.onChange) this.props.onChange(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                showCounter = _props.showCounter,
                maxLength = _props.maxLength,
                onChange = _props.onChange,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'showCounter', 'maxLength', 'onChange']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-textarea': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'textarea',
                    (0, _extends3.default)({
                        className: cls,
                        maxLength: maxLength,
                        onChange: this.handleChange.bind(this)
                    }, others),
                    children
                ),
                showCounter ? _react2.default.createElement(
                    'div',
                    { className: 'weui-textarea-counter' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.textCounter
                    ),
                    maxLength ? '/' + maxLength : false
                ) : false
            );
        }
    }]);
    return TextArea;
}(_react.Component);

TextArea.propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: _propTypes2.default.bool,
    /**
     * max character allow for textarea
     *
     */
    maxLength: _propTypes2.default.number,
    defaultValue: _propTypes2.default.string
};
TextArea.defaultProps = {
    showCounter: true,
    defaultValue: undefined
};
exports.default = TextArea;
;
module.exports = exports['default'];