'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
 * weui wrapper for select
 *
 */
var Select = function (_Component) {
    (0, _inherits3.default)(Select, _Component);

    function Select() {
        (0, _classCallCheck3.default)(this, Select);
        return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).apply(this, arguments));
    }

    (0, _createClass3.default)(Select, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return _react2.default.createElement(
                    'option',
                    (0, _extends3.default)({
                        key: i,
                        value: item.value
                    }, item),
                    item.label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                data = _props.data,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'data', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-select': true
            }, className, className));

            return _react2.default.createElement(
                'select',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return Select;
}(_react.Component);

Select.propTypes = {
    /**
     * object arrays of options, `value` and `label` properties is required
     *
     */
    data: _propTypes2.default.array
};
Select.defaultProps = {
    data: []
};
exports.default = Select;
;
module.exports = exports['default'];