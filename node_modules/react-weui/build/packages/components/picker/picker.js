'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _picker_group = require('./picker_group');

var _picker_group2 = _interopRequireDefault(_picker_group);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
var Picker = function (_Component) {
    (0, _inherits3.default)(Picker, _Component);

    function Picker(props) {
        (0, _classCallCheck3.default)(this, Picker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call(this, props));

        _this.state = {
            selected: _this.props.defaultSelect ? _this.props.defaultSelect : Array(_this.props.groups.length).fill(-1),
            actions: _this.props.actions.length > 0 ? _this.props.actions : [{
                label: _this.props.lang.leftBtn,
                onClick: function onClick(e) {
                    return _this.handleClose(function () {
                        if (_this.props.onCancel) _this.props.onCancel(e);
                    });
                }
            }, {
                label: _this.props.lang.rightBtn,
                onClick: function onClick(e) {
                    return _this.handleChanges();
                }
            }],
            closing: false
        };

        _this.handleChanges = _this.handleChanges.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Picker, [{
        key: 'handleChanges',
        value: function handleChanges() {
            var _this2 = this;

            this.handleClose(function () {
                if (_this2.props.onChange) _this2.props.onChange(_this2.state.selected, _this2);
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(item, i, groupIndex) {
            var _this3 = this;

            var selected = this.state.selected;

            selected[groupIndex] = i;
            this.setState({ selected: selected }, function () {
                if (_this3.props.onGroupChange) _this3.props.onGroupChange(item, i, groupIndex, _this3.state.selected, _this3);
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose(cb) {
            var _this4 = this;

            this.setState({
                closing: true
            }, function () {
                return setTimeout(function () {
                    _this4.setState({ closing: false });
                    cb();
                }, 300);
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            var elActions = this.state.actions.map(function (action, i) {
                var label = action.label,
                    others = (0, _objectWithoutProperties3.default)(action, ['label']);

                return _react2.default.createElement(
                    'a',
                    (0, _extends3.default)({}, others, { key: i, className: 'weui-picker__action' }),
                    ' ',
                    label
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'weui-picker__hd' },
                elActions
            );
        }
    }, {
        key: 'renderGroups',
        value: function renderGroups() {
            var _this5 = this;

            return this.props.groups.map(function (group, i) {
                return _react2.default.createElement(_picker_group2.default, (0, _extends3.default)({ key: i }, group, { onChange: _this5.handleChange, groupIndex: i, defaultIndex: _this5.state.selected[i] }));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props = this.props,
                className = _props.className,
                show = _props.show,
                actions = _props.actions,
                groups = _props.groups,
                defaultSelect = _props.defaultSelect,
                onGroupChange = _props.onGroupChange,
                onChange = _props.onChange,
                onCancel = _props.onCancel,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'show', 'actions', 'groups', 'defaultSelect', 'onGroupChange', 'onChange', 'onCancel']);

            var cls = (0, _classnames2.default)('weui-picker', {
                'weui-animate-slide-up': show && !this.state.closing,
                'weui-animate-slide-down': this.state.closing
            }, className);

            var maskCls = (0, _classnames2.default)({
                'weui-animate-fade-in': show && !this.state.closing,
                'weui-animate-fade-out': this.state.closing
            });

            return this.props.show ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_mask2.default, { className: maskCls, onClick: function onClick(e) {
                        return _this6.handleClose(function () {
                            if (_this6.props.onCancel) _this6.props.onCancel(e);
                        });
                    } }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    this.renderActions(),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-picker__bd' },
                        this.renderGroups()
                    )
                )
            ) : false;
        }
    }]);
    return Picker;
}(_react.Component);

Picker.propTypes = {
    /**
     * consists of array of object(max 2) with property `label` and others pass into element
     *
     */
    actions: _propTypes2.default.array,
    /**
     * array objects consists of groups for each scroll group
     *
     */
    groups: _propTypes2.default.array,
    /**
     * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
     *
     */
    defaultSelect: _propTypes2.default.array,
    /**
     * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
     *
     */
    onGroupChange: _propTypes2.default.func,
    /**
     * on selected change, pass property `selected` for array of slected index to `groups`
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * excute when the popup about to close
     *
     */
    onCancel: _propTypes2.default.func,
    /**
     * display the component
     *
     */
    show: _propTypes2.default.bool,
    /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
    lang: _propTypes2.default.object
};
Picker.defaultProps = {
    actions: [],
    groups: [],
    show: false,
    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
};
exports.default = Picker;
module.exports = exports['default'];