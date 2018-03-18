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

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * image wrapper for vcode
 *
 */
var VCode = function VCode(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-vcode-img': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', (0, _extends3.default)({ className: cls }, others))
    );
};

exports.default = VCode;
module.exports = exports['default'];