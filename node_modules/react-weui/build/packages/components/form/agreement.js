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
 * Agreement style checkbox
 *
 */
var Agreement = function Agreement(props) {
    var className = props.className,
        children = props.children,
        id = props.id,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'id']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-agree': true
    }, className, className));

    return _react2.default.createElement(
        'label',
        { className: cls, htmlFor: id },
        _react2.default.createElement('input', (0, _extends3.default)({ id: id, type: 'checkbox', className: 'weui-agree__checkbox' }, others)),
        _react2.default.createElement(
            'span',
            { className: 'weui-agree__text' },
            children
        )
    );
};

exports.default = Agreement;
module.exports = exports['default'];