'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var ButtonArea = function (_Component) {
    (0, _inherits3.default)(ButtonArea, _Component);

    function ButtonArea() {
        (0, _classCallCheck3.default)(this, ButtonArea);
        return (0, _possibleConstructorReturn3.default)(this, (ButtonArea.__proto__ || (0, _getPrototypeOf2.default)(ButtonArea)).apply(this, arguments));
    }

    (0, _createClass3.default)(ButtonArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                direction = _props.direction,
                children = _props.children,
                className = _props.className;

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-btn-area': true,
                'weui-btn-area_inline': direction === 'horizontal'
            }, className, className));

            return _react2.default.createElement(
                'div',
                { className: cls },
                children
            );
        }
    }]);
    return ButtonArea;
}(_react.Component);

ButtonArea.propTypes = {
    /**
     * Direction of Button Layout inside, Options: veritical, horizontal
     *
     */
    direction: _propTypes2.default.string
};
ButtonArea.defaultProps = {
    direction: 'vertical'
};
;

exports.default = ButtonArea;
module.exports = exports['default'];