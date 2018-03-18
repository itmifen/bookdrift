'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tab_body = require('./tab_body');

var _tab_body2 = _interopRequireDefault(_tab_body);

var _tab_body_item = require('./tab_body_item');

var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar_item = require('./navbar_item');

var _navbar_item2 = _interopRequireDefault(_navbar_item);

var _tabbar = require('./tabbar');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbar_item = require('./tabbar_item');

var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

var _tabbar_icon = require('./tabbar_icon');

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = require('./tabbar_label');

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */
var Tab = function (_React$Component) {
    (0, _inherits3.default)(Tab, _React$Component);

    function Tab() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            index: _this.props.defaultIndex
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Tab, [{
        key: 'handleHeaderClick',
        value: function handleHeaderClick(idx) {
            this.setState({ index: idx });
            if (this.props.onChange) this.props.onChange(idx);
        }
    }, {
        key: 'parseChild',
        value: function parseChild(childrenInput) {
            var ChildHeaders = [];
            var ChildContents = [];

            _react2.default.Children.map(childrenInput, function (child) {
                if (!child) return;
                var _child$props = child.props,
                    children = _child$props.children,
                    type = _child$props.type,
                    others = (0, _objectWithoutProperties3.default)(_child$props, ['children', 'type']);

                if (child.type === _tabbar_item2.default || child.type === _navbar_item2.default) {
                    ChildHeaders.push(child);
                    if (children) ChildContents.push(_react2.default.createElement(_tab_body_item2.default, { children: children }));
                } else if (child.type === _tab_body_item2.default) {
                    ChildContents.push(child);
                }
            });

            return { ChildHeaders: ChildHeaders, ChildContents: ChildContents };
        }
    }, {
        key: 'renderBar',
        value: function renderBar(type, children, cls) {
            var _this2 = this;

            var _parseChild = this.parseChild(children),
                ChildHeaders = _parseChild.ChildHeaders,
                ChildContents = _parseChild.ChildContents;

            var _headers = ChildHeaders.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    onClick: _this2.handleHeaderClick.bind(_this2, idx, item)
                });
            });

            var _contents = ChildContents.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    tabIndex: idx
                });
            });

            if (type === 'tabbar') {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    _react2.default.createElement(
                        _tab_body2.default,
                        null,
                        _contents
                    ),
                    _react2.default.createElement(
                        _tabbar2.default,
                        null,
                        _headers
                    )
                );
            } else if (type === 'navbar') {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    _react2.default.createElement(
                        _navbar2.default,
                        null,
                        _headers
                    ),
                    _react2.default.createElement(
                        _tab_body2.default,
                        null,
                        _contents
                    )
                );
            } else {
                return false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'type']);

            var divProps = (0, _assign2.default)({}, others);
            delete divProps.defaultIndex;

            var cls = (0, _classnames2.default)({
                'weui-tab': true
            }, className);

            if (type === 'normal') {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, divProps),
                    children
                );
            } else {
                return this.renderBar(type, children, cls);
            }
        }
    }]);
    return Tab;
}(_react2.default.Component);

Tab.propTypes = {
    /**
     * layout of the tab, auto mount components when set to `navbar` or `tabbar`
     *
     */
    type: _propTypes2.default.string,
    /**
     * default select index
     *
     */
    defaultIndex: _propTypes2.default.number,
    onChange: _propTypes2.default.func
};
Tab.defaultProps = {
    type: 'normal',
    defaultIndex: 0
};
exports.default = Tab;
module.exports = exports['default'];