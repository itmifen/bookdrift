"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FlexItem Container
 *
 */
var Flex = function Flex(props) {
    return _react2.default.createElement(
        "div",
        (0, _extends3.default)({ className: "weui-flex" }, props),
        props.children
    );
}; //1.0.0 components

exports.default = Flex;
module.exports = exports["default"];