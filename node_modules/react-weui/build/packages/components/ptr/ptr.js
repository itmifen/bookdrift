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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon/');

var _icon2 = _interopRequireDefault(_icon);

var _loadmore = require('../loadmore');

var _loadmore2 = _interopRequireDefault(_loadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  A Pull to refresh container enable user to pull the container and refresh it's content
 *
 */
var PullToRefresh = function (_Component) {
    (0, _inherits3.default)(PullToRefresh, _Component);

    function PullToRefresh(props) {
        (0, _classCallCheck3.default)(this, PullToRefresh);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PullToRefresh.__proto__ || (0, _getPrototypeOf2.default)(PullToRefresh)).call(this, props));

        _this.state = {
            pullPercent: 0,
            touching: false,
            ogY: 0,
            touchId: undefined,
            animating: false,
            loading: false,
            initScrollTop: 0
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.resolveRefresh = _this.resolveRefresh.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PullToRefresh, [{
        key: 'resolveRefresh',
        value: function resolveRefresh() {
            var _this2 = this;

            this.setState({
                loading: false,
                animating: true,
                pullPercent: 0
            }, function () {
                setTimeout(function () {
                    return _this2.setState({ animating: false });
                }, 500);
            });
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.state.loading || this.props.disable) return;

            var $content = _reactDom2.default.findDOMNode(this.refs.content);

            this.setState({
                touching: true,
                touchId: e.targetTouches[0].identifier,
                ogY: this.state.pullPercent === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.pullPercent,
                animating: false,
                initScrollTop: $content.scrollTop
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.state.loading || this.props.disable) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            var pageY = e.targetTouches[0].pageY;
            var diffY = pageY - this.state.ogY;

            //if it's scroll
            if (diffY < 0) return;

            //if it's not at top
            var $content = _reactDom2.default.findDOMNode(this.refs.content);
            if ($content.scrollTop > 0) return;

            //prevent move background
            e.preventDefault();

            diffY = diffY - this.state.initScrollTop > 100 ? 100 : diffY - this.state.initScrollTop;

            this.setState({
                pullPercent: diffY
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this3 = this;

            if (!this.state.touching || this.state.loading || this.props.disable) return;

            var pullPercent = this.state.pullPercent;
            var loading = false;

            if (pullPercent === 100) {
                loading = true;
            } else {
                pullPercent = 0;
            }

            this.setState({
                touching: false,
                ogY: 0,
                touchId: undefined,
                initScrollTop: 0,
                animating: loading,
                pullPercent: pullPercent,
                loading: loading
            }, function () {
                //triger after ui change
                if (loading) _this3.props.onRefresh(_this3.resolveRefresh);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                height = _props.height,
                loaderHeight = _props.loaderHeight,
                loaderDefaultIcon = _props.loaderDefaultIcon,
                loaderLoadingIcon = _props.loaderLoadingIcon,
                onRefresh = _props.onRefresh,
                disable = _props.disable,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'height', 'loaderHeight', 'loaderDefaultIcon', 'loaderLoadingIcon', 'onRefresh', 'disable']);

            var cls = (0, _classnames2.default)('react-weui-ptr', className);

            var containerStyle = {
                height: height
            };

            var loaderStyle = {
                //transform: `translate(0, ${this.state.pullPercent / 2}px)`,
                height: loaderHeight,
                marginTop: -loaderHeight + this.state.pullPercent / (100 / loaderHeight) + 'px',
                transition: this.state.animating ? 'all .5s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: containerStyle }, domProps),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-ptr__loader',
                        style: loaderStyle
                    },
                    this.state.loading ? loaderLoadingIcon : loaderDefaultIcon(this.state.pullPercent)
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-ptr__content',
                        ref: 'content',
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        onTouchEnd: this.handleTouchEnd
                    },
                    children
                )
            );
        }
    }]);
    return PullToRefresh;
}(_react.Component);

PullToRefresh.propTypes = {
    /**
     * height for the container, use string like '10px', default for '100%'
     *
     */
    height: _propTypes2.default.string,
    /**
     * height for the loader
     *
     */
    loaderHeight: _propTypes2.default.number,
    /**
     * element(icon) for default loader, function require, pass in pulldown progress
     *
     */
    loaderDefaultIcon: _propTypes2.default.func,
    /**
     * element(icon) for loading loader
     *
     */
    loaderLoadingIcon: _propTypes2.default.any,
    /**
     * callback when refresh is request, pass resolve function
     *
     */
    onRefresh: _propTypes2.default.func,
    /**
     * disable the loader
     *
     */
    disable: _propTypes2.default.bool
};
PullToRefresh.defaultProps = {
    height: '100%',
    loaderHeight: 100,
    loaderDefaultIcon: function loaderDefaultIcon(progress) {
        var style = {
            transform: 'rotate(-' + (progress !== 100 ? progress * 1.8 : 0) + 'deg)',
            color: progress !== 100 ? '#5f5f5f' : '#1AAD19'
        };
        return _react2.default.createElement(
            'div',
            { style: { flex: 1, padding: '5px' } },
            _react2.default.createElement(_icon2.default, { value: progress !== 100 ? 'download' : 'success', style: style })
        );
    },
    loaderLoadingIcon: _react2.default.createElement(_loadmore2.default, { loading: true }),
    onRefresh: function onRefresh(resolve, reject) {
        return setTimeout(function () {
            return resolve();
        }, 1000);
    },
    disable: false
};
exports.default = PullToRefresh;
module.exports = exports['default'];