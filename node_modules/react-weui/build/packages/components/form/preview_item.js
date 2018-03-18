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
 * Preview Item for all purpose usage
 *
 */
var PreviewItem = function PreviewItem(props) {
    var className = props.className,
        label = props.label,
        value = props.value,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'label', 'value']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__item': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        _react2.default.createElement(
            'label',
            { className: 'weui-form-preview__label' },
            label
        ),
        _react2.default.createElement(
            'em',
            { className: 'weui-form-preview__value' },
            value
        )
    );
}; //1.0.0 components

PreviewItem.propTypes = {
    /**
     * The label of item
     *
     */
    label: _propTypes2.default.string,
    /**
     * Value of the label
     *
     */
    value: _propTypes2.default.string

};

PreviewItem.defaultProps = {
    label: false,
    value: false
};

exports.default = PreviewItem;
module.exports = exports['default'];