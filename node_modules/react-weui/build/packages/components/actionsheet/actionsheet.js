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
 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
 */
var ActionSheet = function (_Component) {
    (0, _inherits3.default)(ActionSheet, _Component);

    function ActionSheet(props) {
        (0, _classCallCheck3.default)(this, ActionSheet);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ActionSheet.__proto__ || (0, _getPrototypeOf2.default)(ActionSheet)).call(this, props));

        _this.handleMaskClick = _this.handleMaskClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ActionSheet, [{
        key: 'renderMenuItem',
        value: function renderMenuItem() {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label,
                    className = menu.className,
                    others = (0, _objectWithoutProperties3.default)(menu, ['label', 'className']);

                var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                    'weui-actionsheet__cell': true
                }, className, className));

                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            return this.props.actions.map(function (action, idx) {
                var label = action.label,
                    className = action.className,
                    others = (0, _objectWithoutProperties3.default)(action, ['label', 'className']);

                var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                    'weui-actionsheet__cell': true
                }, className, className));

                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'handleMaskClick',
        value: function handleMaskClick(e) {
            if (this.props.onRequestClose) this.props.onRequestClose(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                type = _props.type,
                onRequestClose = _props.onRequestClose,
                menus = _props.menus,
                actions = _props.actions,
                others = (0, _objectWithoutProperties3.default)(_props, ['show', 'type', 'onRequestClose', 'menus', 'actions']);

            var cls = (0, _classnames2.default)({
                'weui-actionsheet': true,
                'weui-actionsheet_toggle': show
            });

            var styleType = type ? type : 'ios';

            return _react2.default.createElement(
                'div',
                {
                    className: styleType === 'android' ? 'weui-skin_android' : ''
                },
                _react2.default.createElement(_index2.default, { style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-actionsheet__menu' },
                        this.renderMenuItem()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-actionsheet__action' },
                        this.renderActions()
                    )
                )
            );
        }
    }]);
    return ActionSheet;
}(_react.Component);

ActionSheet.propTypes = {
    /**
     * Array of Objects for menus, `label` property is Required
     *
     */
    menus: _propTypes2.default.array,
    /**
     * Array of Objects for actions, `label` property is Required
     *
     */
    actions: _propTypes2.default.array,
    /**
     * To display ActionSheet
     *
     */
    show: _propTypes2.default.bool,
    /**
     * Function triggers when user click on the mask
     *
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * style: ios/android
     */
    type: _propTypes2.default.string
};
ActionSheet.defaultProps = {
    type: '',
    menus: [],
    actions: [],
    show: false
};
;

exports.default = ActionSheet;
module.exports = exports['default'];