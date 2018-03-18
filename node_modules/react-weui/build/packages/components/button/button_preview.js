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

var PreviewButton = function PreviewButton(props) {
    var className = props.className,
        primary = props.primary,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'primary', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default': !primary,
        'weui-form-preview__btn_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

PreviewButton.propTypes = {
    /**
     * Primary style of button
     *
     */
    primary: _propTypes2.default.bool
};

PreviewButton.defaultProps = {
    primary: false
};

exports.default = PreviewButton;
module.exports = exports['default'];