'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../mask/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modals provide feedback to user
 *
 */
var Dialog = function (_Component) {
    (0, _inherits3.default)(Dialog, _Component);

    function Dialog(props) {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this, props));

        _this.state = {
            isAndroid: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Dialog, [{
        key: 'renderButtons',
        value: function renderButtons() {
            return this.props.buttons.map(function (action, idx) {
                var type = action.type,
                    label = action.label,
                    others = (0, _objectWithoutProperties3.default)(action, ['type', 'label']);

                var className = (0, _classnames2.default)({
                    'weui-dialog__btn': true,
                    'weui-dialog__btn_default': type === 'default',
                    'weui-dialog__btn_primary': type === 'primary'
                });

                return _react2.default.createElement(
                    'a',
                    (0, _extends3.default)({ key: idx, href: 'javascript:;' }, others, { className: className }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                show = _props.show,
                className = _props.className,
                children = _props.children,
                buttons = _props.buttons,
                type = _props.type,
                autoDectect = _props.autoDectect,
                others = (0, _objectWithoutProperties3.default)(_props, ['title', 'show', 'className', 'children', 'buttons', 'type', 'autoDectect']);

            var styleType = type ? type : 'ios';
            var cls = (0, _classnames2.default)('weui-dialog', (0, _defineProperty3.default)({
                'weui-skin_android': styleType === 'android'
            }, className, className));

            return _react2.default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement(_index2.default, null),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    title ? _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__hd' },
                        _react2.default.createElement(
                            'strong',
                            { className: 'weui-dialog__title' },
                            title
                        )
                    ) : false,
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__bd' },
                        children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__ft' },
                        this.renderButtons()
                    )
                )
            );
        }
    }]);
    return Dialog;
}(_react.Component);

Dialog.propTypes = {
    /**
     * Object Arrays of buttons, `label` property is require
     *
     */
    buttons: _propTypes2.default.array,
    /**
     * to display the dialog
     *
     */
    show: _propTypes2.default.bool,
    /**
     * Title of dialog
     *
     */
    title: _propTypes2.default.string,
    /**
     * Specify display style: ios/android, default is ios when autoDetect not on
     *
     */
    type: _propTypes2.default.string
};
Dialog.defaultProps = {
    buttons: [],
    show: false,
    title: '',
    type: ''
};
exports.default = Dialog;
module.exports = exports['default'];