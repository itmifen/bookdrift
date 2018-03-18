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
 *  Drop down message from top
 *
 */
var Toptips = function Toptips(props) {
    var _classNames;

    var className = props.className,
        type = props.type,
        children = props.children,
        show = props.show,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'type', 'children', 'show']);

    var cls = (0, _classnames2.default)((_classNames = {
        'weui-toptips': true
    }, (0, _defineProperty3.default)(_classNames, 'weui-toptips_' + type, true), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others, { style: { display: show ? 'block' : 'none' } }),
        children
    );
};

Toptips.propTypes = {
    /**
     * display tips
     *
     */
    show: _propTypes2.default.bool,
    /**
     * type: `default`, `warn`, `info`, `primary`
     */
    type: _propTypes2.default.string
};

Toptips.defaultProps = {
    show: false,
    type: 'default'
};

exports.default = Toptips;
module.exports = exports['default'];