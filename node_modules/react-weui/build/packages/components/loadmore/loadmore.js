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
 * Loadmore Indicators.
 *
 */
var LoadMore = function LoadMore(props) {
    var className = props.className,
        children = props.children,
        loading = props.loading,
        showLine = props.showLine,
        showDot = props.showDot,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'loading', 'showLine', 'showDot']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        loading ? _react2.default.createElement(_icon2.default, { value: 'loading' }) : false,
        _react2.default.createElement(
            'span',
            { className: 'weui-loadmore__tips' },
            children
        )
    );
};

LoadMore.propTypes = {
    /**
     * display laoding spinner
     *
     */
    loading: _propTypes2.default.bool,
    /**
     * display side lines
     *
     */
    showLine: _propTypes2.default.bool,
    /**
     * display dot in the center
     *
     */
    showDot: _propTypes2.default.bool
};

LoadMore.defaultProps = {
    loading: false,
    showLine: false,
    showDot: false
};

exports.default = LoadMore;
module.exports = exports['default'];