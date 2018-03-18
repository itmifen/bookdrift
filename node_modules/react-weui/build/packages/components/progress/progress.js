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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  progress bar
 *
 */
var Progress = function Progress(props) {
    var className = props.className,
        showCancel = props.showCancel,
        value = props.value,
        _onClick = props.onClick,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'showCancel', 'value', 'onClick']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-progress': true
    }, className, className));

    var pgWdith = value > 100 ? 100 : value < 0 ? 0 : value;

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        _react2.default.createElement(
            'div',
            { className: 'weui-progress__bar' },
            _react2.default.createElement('div', { className: 'weui-progress__inner-bar', style: { width: pgWdith + '%' } })
        ),
        showCancel ? _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: 'weui-progress__opr', onClick: function onClick(e) {
                    if (_onClick) _onClick(e);
                } },
            _react2.default.createElement(_icon2.default, { value: 'cancel' })
        ) : false
    );
};

Progress.propTypes = {
    /**
     * value of the bar
     *
     */
    value: _propTypes2.default.number,
    /**
     * enable cancel button
     *
     */
    showCancel: _propTypes2.default.bool
};

Progress.defaultProps = {
    value: 0,
    showCancel: true
};

exports.default = Progress;
module.exports = exports['default'];