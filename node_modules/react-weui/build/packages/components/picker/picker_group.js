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

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerGroup = function (_Component) {
    (0, _inherits3.default)(PickerGroup, _Component);

    function PickerGroup(props) {
        (0, _classCallCheck3.default)(this, PickerGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PickerGroup.__proto__ || (0, _getPrototypeOf2.default)(PickerGroup)).call(this, props));

        _this.state = {
            touching: false,
            ogY: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            totalHeight: 0,
            selected: 0,
            animating: _this.props.animation
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.updateSelected = _this.updateSelected.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PickerGroup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.adjustPosition(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.adjustPosition(nextProps);
        }
    }, {
        key: 'adjustPosition',
        value: function adjustPosition(props) {
            var _this2 = this;

            var items = props.items,
                itemHeight = props.itemHeight,
                indicatorTop = props.indicatorTop,
                defaultIndex = props.defaultIndex;

            var totalHeight = items.length * itemHeight;
            var translate = totalHeight <= indicatorTop ? indicatorTop : 0;

            if (defaultIndex > -1) {
                if (translate === 0) {
                    var upperCount = Math.floor(indicatorTop / itemHeight);
                    if (defaultIndex > upperCount) {
                        //over
                        var overCount = defaultIndex - upperCount;
                        translate -= overCount * itemHeight;
                    } else if (defaultIndex === upperCount) {
                        translate = 0;
                    } else {
                        //less
                        translate += Math.abs(upperCount - defaultIndex) * itemHeight;
                    }
                    //if(props.groupIndex == 2) console.log(defaultIndex,translate, upperCount)
                } else {
                    //total item less than indicator height
                    translate -= itemHeight * defaultIndex;
                }
            }

            this.setState({ selected: defaultIndex, ogTranslate: translate, totalHeight: totalHeight, translate: translate
            }, function () {
                return defaultIndex > -1 ? _this2.updateSelected(false) : _this2.updateSelected();
            });
        }
    }, {
        key: 'updateSelected',
        value: function updateSelected() {
            var _this3 = this;

            var propagate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var _props = this.props,
                items = _props.items,
                itemHeight = _props.itemHeight,
                indicatorTop = _props.indicatorTop,
                indicatorHeight = _props.indicatorHeight,
                onChange = _props.onChange,
                groupIndex = _props.groupIndex;

            var selected = 0;
            items.forEach(function (item, i) {
                //console.log(i, this.state.translate, (this.state.translate + (itemHeight * i)), indicatorTop, this.state.translate + (itemHeight * i) + itemHeight , indicatorTop + indicatorHeight)
                if (!item.disabled && _this3.state.translate + itemHeight * i >= indicatorTop && _this3.state.translate + itemHeight * i + itemHeight <= indicatorTop + indicatorHeight) {
                    selected = i;
                }
            });

            if (onChange && propagate) onChange(items[selected], selected, groupIndex);
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.items.length <= 1) return;

            this.setState({
                touching: true,
                ogTranslate: this.state.translate,
                touchId: e.targetTouches[0].identifier,
                ogY: this.state.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.translate,
                animating: false
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.props.items.length <= 1) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var pageY = e.targetTouches[0].pageY;
            var diffY = pageY - this.state.ogY;

            this.setState({
                translate: diffY
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this4 = this;

            if (!this.state.touching || this.props.items.length <= 1) return;

            var _props2 = this.props,
                indicatorTop = _props2.indicatorTop,
                indicatorHeight = _props2.indicatorHeight,
                itemHeight = _props2.itemHeight;

            var translate = this.state.translate;

            if (Math.abs(translate - this.state.ogTranslate) < itemHeight * .51) {
                translate = this.state.ogTranslate;
            } else if (translate > indicatorTop) {
                //top boundry
                translate = indicatorTop;
            } else if (translate + this.state.totalHeight < indicatorTop + indicatorHeight) {
                //bottom
                translate = indicatorTop + indicatorHeight - this.state.totalHeight;
            } else {
                //pass single item range but not exceed boundry
                var step = 0,
                    adjust = 0;
                var diff = (translate - this.state.ogTranslate) / itemHeight;

                if (Math.abs(diff) < 1) {
                    step = diff > 0 ? 1 : -1;
                } else {
                    adjust = Math.abs(diff % 1 * 100) > 50 ? 1 : 0;
                    step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
                }

                translate = this.state.ogTranslate + step * itemHeight;
            }

            this.setState({
                touching: false,
                ogY: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate: translate
            }, function () {
                return _this4.updateSelected();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props3 = this.props,
                items = _props3.items,
                className = _props3.className,
                height = _props3.height,
                itemHeight = _props3.itemHeight,
                indicatorTop = _props3.indicatorTop,
                indicatorHeight = _props3.indicatorHeight,
                onChange = _props3.onChange,
                aniamtion = _props3.aniamtion,
                groupIndex = _props3.groupIndex,
                defaultIndex = _props3.defaultIndex,
                mapKeys = _props3.mapKeys,
                others = (0, _objectWithoutProperties3.default)(_props3, ['items', 'className', 'height', 'itemHeight', 'indicatorTop', 'indicatorHeight', 'onChange', 'aniamtion', 'groupIndex', 'defaultIndex', 'mapKeys']);

            var cls = (0, _classnames2.default)('weui-picker__group', className);
            var styles = {
                'transform': 'translate(0, ' + this.state.translate + 'px)',
                'transition': this.state.animating ? 'transform .3s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others, {
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd
                }),
                _react2.default.createElement('div', { className: 'weui-picker__mask' }),
                _react2.default.createElement('div', { className: 'weui-picker__indicator' }),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-picker__content',
                        style: styles,
                        ref: 'content' },
                    items.map(function (item, j) {
                        var label = item[_this5.props.mapKeys.label];
                        var itemCls = (0, _classnames2.default)('weui-picker__item', {
                            'weui-picker__item_disabled': item.disabled
                        });

                        return _react2.default.createElement(
                            'div',
                            { key: j, className: itemCls },
                            label
                        );
                    })
                )
            );
        }
    }]);
    return PickerGroup;
}(_react.Component);

PickerGroup.propTypes = {
    height: _propTypes2.default.number,
    itemHeight: _propTypes2.default.number,
    indicatorTop: _propTypes2.default.number,
    indicatorHeight: _propTypes2.default.number,
    onChange: _propTypes2.default.func,
    aniamtion: _propTypes2.default.bool,
    groupIndex: _propTypes2.default.number,
    defaultIndex: _propTypes2.default.number
};
PickerGroup.defaultProps = {
    height: 238,
    itemHeight: 25 + 9, //content + padding
    indicatorTop: 102,
    indicatorHeight: 34,
    aniamtion: true,
    groupIndex: -1,
    defaultIndex: -1,
    mapKeys: {
        label: 'label'
    }
};
exports.default = PickerGroup;
module.exports = exports['default'];