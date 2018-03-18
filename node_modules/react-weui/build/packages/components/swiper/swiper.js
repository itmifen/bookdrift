'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *   The ultimate mobile swipe component
 *
 */
var Swiper = function (_Component) {
    (0, _inherits3.default)(Swiper, _Component);

    function Swiper(props) {
        (0, _classCallCheck3.default)(this, Swiper);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Swiper.__proto__ || (0, _getPrototypeOf2.default)(Swiper)).call(this, props));

        _this.state = {
            containerWidth: 0,
            containerHeight: 0,
            currentIndex: _this.props.defaultIndex,

            //touch
            touching: false,
            og: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            animating: false
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Swiper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var $container = _reactDom2.default.findDOMNode(this.refs.container);

            this.setState({
                wrapperWidth: this.props.direction === 'horizontal' ? $container.offsetWidth * this.props.children.length : $container.offsetWidth,
                wrapperHeight: this.props.direction === 'vertical' ? $container.offsetHeight * this.props.children.length : $container.offsetHeight,
                containerWidth: $container.offsetWidth,
                containerHeight: $container.offsetHeight,
                translate: this.props.defaultIndex <= this.props.children.length ? this.props.direction === 'horizontal' ? $container.offsetWidth * -this.props.defaultIndex : $container.offsetHeight * -this.props.defaultIndex : 0
            });
            //console.log($container.offsetWidth, $container.offsetHeight)
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.children.length <= 1) return;

            var og = 0;

            if (this.props.direction === 'horizontal') {
                og = e.targetTouches[0].pageX - this.state.translate;
            } else {
                og = e.targetTouches[0].pageY - this.state.translate;
            }

            this.setState({
                touching: true,
                ogTranslate: this.state.translate,
                touchId: e.targetTouches[0].identifier,
                og: og,
                animating: false
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.props.children.length <= 1) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var diff = this.state.translate;

            if (this.props.direction === 'horizontal') {
                var pageX = e.targetTouches[0].pageX;
                diff = pageX - this.state.og;
            } else {
                //vertical
                var pageY = e.targetTouches[0].pageY;
                diff = pageY - this.state.og;
            }

            this.setState({
                translate: diff
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this2 = this;

            if (!this.state.touching || this.props.children.length <= 1) return;

            var translate = this.state.translate;
            var max = this.props.direction === 'horizontal' ? this.state.wrapperWidth - this.state.containerWidth : this.state.wrapperHeight - this.state.containerHeight;
            var currentIndex = this.state.currentIndex;
            var ogIndex = currentIndex;

            if (translate > 0) {
                //start
                translate = 0;
            } else if (translate < -max) {
                //end
                translate = -max;
            } else {
                //default case
                var diff = Math.abs(translate - this.state.ogTranslate);
                var isNext = translate - this.state.ogTranslate < 0 ? true : false;
                //console.log(translate - this.state.ogTranslate, diff, isNext)

                if (diff >= this.props.threshold) {

                    if (isNext) {
                        //next slide
                        translate = this.state.ogTranslate - (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
                        currentIndex += 1;
                    } else {
                        //prev slide
                        translate = this.state.ogTranslate + (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
                        currentIndex -= 1;
                    }
                } else {
                    //revert back
                    translate = this.state.ogTranslate;
                }
            }

            this.setState({
                touching: false,
                og: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate: translate,
                currentIndex: currentIndex
            }, function () {
                return setTimeout(function () {
                    return _this2.setState({ animating: false });
                }, _this2.props.speed);
            });

            if (this.props.onChange) this.props.onChange(ogIndex, currentIndex);
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var _this3 = this;

            return this.props.children.map(function (child, i) {
                var clx = (0, _classnames2.default)('react-weui-swiper__pagination-bullet', {
                    active: i === _this3.state.currentIndex
                });
                return _react2.default.createElement('span', { className: clx, key: i });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                className = _props.className,
                children = _props.children,
                height = _props.height,
                width = _props.width,
                defaultIndex = _props.defaultIndex,
                direction = _props.direction,
                speed = _props.speed,
                indicators = _props.indicators,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'height', 'width', 'defaultIndex', 'direction', 'speed', 'indicators']);

            var clx = (0, _classnames2.default)('react-weui-swiper__container', className, {
                'react-weui-swiper__container-horizontal': direction === 'horizontal',
                'react-weui-swiper__container-vertical': direction === 'vertical'
            });

            var containerStyle = {
                height: height ? height + 'px' : '100%',
                width: width ? width + 'px' : '100%'
            };

            var wrapperStyle = {
                width: this.state.wrapperWidth,
                height: this.state.wrapperHeight,
                transition: this.state.animating ? 'transform .' + speed / 100 + 's' : 'none',
                transform: 'translate(' + (direction === 'horizontal' ? this.state.translate : 0) + 'px, ' + (direction === 'vertical' ? this.state.translate : 0) + 'px)'
            };

            return _react2.default.createElement(
                'div',
                {
                    className: clx,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd,
                    style: containerStyle,
                    ref: 'container'
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-swiper__wrapper',
                        style: wrapperStyle
                    },
                    children.map(function (child, i) {
                        return _react2.default.cloneElement(child, {
                            className: (0, _classnames2.default)('react-weui-swiper__item', child.className),
                            key: i,
                            style: (0, _assign2.default)({}, child.props.style, {
                                display: direction === 'horizontal' ? 'inline-block' : 'block',
                                verticalAlign: direction === 'horizontal' ? 'top' : 'bottom',
                                width: _this4.state.containerWidth,
                                height: _this4.state.containerHeight
                            })
                        });
                    })
                ),
                indicators ? _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-swiper__pagination'
                    },
                    this.renderPagination()
                ) : false
            );
        }
    }]);
    return Swiper;
}(_react.Component);

Swiper.propTypes = {
    /**
     * height for the container, number in px
     *
     */
    height: _propTypes2.default.number,
    /**
     * width for the container, number in px
     *
     */
    width: _propTypes2.default.number,
    /**
     * threshold for the swiper, number in px
     *
     */
    threshold: _propTypes2.default.number,
    /**
     * speed for the slide transition, number in ms
     *
     */
    speed: _propTypes2.default.number,
    /**
     * default slider index
     *
     */
    defaultIndex: _propTypes2.default.number,
    /**
     * direction of swiper
     *
     */
    direction: _propTypes2.default.oneOf(['vertical', 'horizontal']),
    /**
     * show indicators
     *
     */
    indicators: _propTypes2.default.bool,
    /**
     * callback when slide change is trigger, pass indexs of (prev, next)
     *
     */
    onChange: _propTypes2.default.func
};
Swiper.defaultProps = {
    height: null,
    width: null,
    defaultIndex: 0,
    direction: 'horizontal',
    threshold: 50,
    speed: 300,
    indicators: true
};
exports.default = Swiper;
module.exports = exports['default'];