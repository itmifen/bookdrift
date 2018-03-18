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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer of `Cell`
 *
 */
var CellFooter = function CellFooter(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'primary']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell__ft': true,
        'weui-cell_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

CellFooter.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: _propTypes2.default.bool
};

CellFooter.defaultProps = {
    primary: false
};

exports.default = CellFooter;
module.exports = exports['default'];