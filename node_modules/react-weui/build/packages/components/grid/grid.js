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

var _grid_icon = require('./grid_icon');

var _grid_icon2 = _interopRequireDefault(_grid_icon);

var _grid_label = require('./grid_label');

var _grid_label2 = _interopRequireDefault(_grid_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
 *
 */
var Grid = function (_React$Component) {
  (0, _inherits3.default)(Grid, _React$Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          icon = _props.icon,
          label = _props.label,
          className = _props.className,
          component = _props.component,
          others = (0, _objectWithoutProperties3.default)(_props, ['children', 'icon', 'label', 'className', 'component']);

      var cls = (0, _classnames2.default)({
        'weui-grid': true
      }, className);
      var DefaultComponent = 'a';
      var GridComponent = component ? component : DefaultComponent;

      return _react2.default.createElement(
        GridComponent,
        (0, _extends3.default)({ className: cls }, others),
        icon ? _react2.default.createElement(
          _grid_icon2.default,
          null,
          icon
        ) : false,
        children,
        label ? _react2.default.createElement(
          _grid_label2.default,
          null,
          label
        ) : false
      );
    }
  }]);
  return Grid;
}(_react2.default.Component);

Grid.propTypes = {
  /**
   * Label string for grid
   *
   */
  label: _propTypes2.default.string,
  /**
   * Icon placeholder
   *
   */
  icon: _propTypes2.default.any,
  /**
   * pass in an component to replace Grid but apply same style
   */
  component: _propTypes2.default.func
};
Grid.defaultProps = {
  label: '',
  icon: false
};
exports.default = Grid;
;
module.exports = exports['default'];