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

var _index = require('../button/index');

var _footer = require('../footer');

var _index2 = require('../icon/index');

var _index3 = _interopRequireDefault(_index2);

var _deprecationWarning = require('../../utils/deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A full notification page to indicate results
 *
 */
var Msg = function (_Component) {
    (0, _inherits3.default)(Msg, _Component);

    function Msg() {
        (0, _classCallCheck3.default)(this, Msg);
        return (0, _possibleConstructorReturn3.default)(this, (Msg.__proto__ || (0, _getPrototypeOf2.default)(Msg)).apply(this, arguments));
    }

    (0, _createClass3.default)(Msg, [{
        key: '_renderButtons',
        value: function _renderButtons() {

            return this.props.buttons.map(function (button, idx) {
                var type = button.type,
                    label = button.label,
                    others = (0, _objectWithoutProperties3.default)(button, ['type', 'label']);

                return _react2.default.createElement(
                    _index.Button,
                    (0, _extends3.default)({ key: idx }, others, { type: type }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                title = _props.title,
                description = _props.description,
                extraHref = _props.extraHref,
                extraText = _props.extraText,
                footer = _props.footer,
                buttons = _props.buttons,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'type', 'title', 'description', 'extraHref', 'extraText', 'footer', 'buttons']);

            var cls = (0, _classnames2.default)('weui-msg', (0, _defineProperty3.default)({}, className, className));

            var elFooter = footer ? footer : function () {
                return false;
            };

            if (!elFooter() && (extraHref || extraText)) {
                (0, _deprecationWarning2.default)('Msg extraHref/extraText', 'Msg footer');

                elFooter = function elFooter() {
                    return _react2.default.createElement(
                        _footer.Footer,
                        null,
                        _react2.default.createElement(
                            _footer.FooterLinks,
                            null,
                            _react2.default.createElement(
                                _footer.FooterLink,
                                { href: extraHref },
                                extraText
                            )
                        )
                    );
                };
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__icon-area' },
                    _react2.default.createElement(_index3.default, { value: type, size: 'large' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__text-area' },
                    title ? _react2.default.createElement(
                        'h2',
                        { className: 'weui-msg__title' },
                        title
                    ) : false,
                    description ? _react2.default.createElement(
                        'p',
                        { className: 'weui-msg__desc' },
                        description
                    ) : false,
                    children
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__opr-area' },
                    _react2.default.createElement(
                        _index.ButtonArea,
                        null,
                        this._renderButtons()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__extra-area' },
                    elFooter()
                )
            );
        }
    }]);
    return Msg;
}(_react.Component);

Msg.propTypes = {
    /**
     * Icon type
     *
     */
    type: _propTypes2.default.string,
    /**
     * Object array of Buttons, require at least `label` property
     *
     */
    buttons: _propTypes2.default.array,
    /**
     * Page Title
     *
     */
    title: _propTypes2.default.string,
    /**
     * Page Description
     *
     */
    description: _propTypes2.default.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraHref: _propTypes2.default.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraText: _propTypes2.default.string,
    /**
     * Footer Element of Page
     *
     */
    footer: _propTypes2.default.any
};
Msg.defaultProps = {
    type: 'success',
    buttons: []
};
exports.default = Msg;
module.exports = exports['default'];