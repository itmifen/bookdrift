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
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
var Cell = function Cell(props) {
    var className = props.className,
        children = props.children,
        access = props.access,
        href = props.href,
        link = props.link,
        component = props.component,
        htmlFor = props.htmlFor,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'access', 'href', 'link', 'component', 'htmlFor']);

    var DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell': true,
        'weui-cell_access': access,
        'weui-cell_link': link
    }, className, className));

    return _react2.default.createElement(
        CellComponent,
        (0, _extends3.default)({
            className: cls,
            href: href,
            htmlFor: htmlFor
        }, others),
        children
    );
};

Cell.propTypes = {
    /**
     * if cell should have arrow or link
     *
     */
    access: _propTypes2.default.bool,
    /**
     * if this cell body is link
     *
     */
    link: _propTypes2.default.bool,
    /**
     * pass in an component to replace Cell but apply same style
     *
     */
    component: _propTypes2.default.func
};

Cell.defaultProps = {
    access: false,
    link: false
};

exports.default = Cell;
module.exports = exports['default'];