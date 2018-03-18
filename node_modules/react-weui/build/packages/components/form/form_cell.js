'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

/**
 * form wrapper for `Cell`
 *
 */
var FormCell = function (_Component) {
    (0, _inherits3.default)(FormCell, _Component);

    function FormCell() {
        (0, _classCallCheck3.default)(this, FormCell);
        return (0, _possibleConstructorReturn3.default)(this, (FormCell.__proto__ || (0, _getPrototypeOf2.default)(FormCell)).apply(this, arguments));
    }

    (0, _createClass3.default)(FormCell, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                radio = _props.radio,
                checkbox = _props.checkbox,
                vcode = _props.vcode,
                warn = _props.warn,
                select = _props.select,
                selectPos = _props.selectPos,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'radio', 'checkbox', 'vcode', 'warn', 'select', 'selectPos']);

            var cellDomProps = (0, _assign2.default)({}, others);
            delete cellDomProps.switch;
            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-cell': true,
                'weui-cell_vcode': vcode,
                'weui-cell_warn': warn,
                'weui-cell_switch': this.props.switch,
                'weui-cell_select': select,
                'weui-cell_select-before': selectPos === 'before',
                'weui-cell_select-after': selectPos === 'after',
                'weui-check__label': radio || checkbox
            }, className, className));

            if (radio || checkbox) {
                return _react2.default.createElement(
                    'label',
                    (0, _extends3.default)({ className: cls }, cellDomProps),
                    children
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, cellDomProps),
                    children
                );
            }
        }
    }]);
    return FormCell;
}(_react.Component);

FormCell.propTypes = {
    /**
     * if cell use for vcode
     *
     */
    vcode: _propTypes2.default.bool,
    /**
     * display warn style of cell
     *
     */
    warn: _propTypes2.default.bool,
    /**
     * if cell use for radio
     *
     */
    radio: _propTypes2.default.bool,
    /**
     * if cell use for checkbox
     *
     */
    checkbox: _propTypes2.default.bool,
    /**
     * if cell use for switch checkbox
     *
     */
    'switch': _propTypes2.default.bool,
    /**
     * if cell use for select
     *
     */
    select: _propTypes2.default.bool,
    /**
     * select position, options: before, after
     *
     */
    selectPos: _propTypes2.default.string
};
FormCell.defaultProps = {
    vcode: false,
    warn: false,
    radio: false,
    checkbox: false,
    select: false,
    'switch': false,
    selectPos: undefined
};
exports.default = FormCell;
;
module.exports = exports['default'];