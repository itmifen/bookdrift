'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
 *
 */
var Grids = function (_Component) {
    (0, _inherits3.default)(Grids, _Component);

    function Grids() {
        (0, _classCallCheck3.default)(this, Grids);
        return (0, _possibleConstructorReturn3.default)(this, (Grids.__proto__ || (0, _getPrototypeOf2.default)(Grids)).apply(this, arguments));
    }

    (0, _createClass3.default)(Grids, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return _react2.default.createElement(_grid2.default, (0, _extends3.default)({
                    key: i,
                    icon: item.icon,
                    label: item.label
                }, item));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'data', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-grids': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return Grids;
}(_react.Component);

Grids.propTypes = {
    /**
     * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
     *
     */
    data: _propTypes2.default.array
};
Grids.defaultProps = {
    data: []
};
exports.default = Grids;
;
module.exports = exports['default'];