'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _index = require('../ptr/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../infiniteloader/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Component for a standard page
 *
 */
var Page = function (_Component) {
    (0, _inherits3.default)(Page, _Component);

    function Page(props) {
        (0, _classCallCheck3.default)(this, Page);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, props));

        _this.state = {
            ptrRefreshing: false,
            contentScrollOnTop: true
        };

        _this.handleRefresh = _this.handleRefresh.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Page, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.infiniteLoader) {
                this.setState({ contentScrollOnTop: true });
            } else {
                this.setState({ contentScrollOnTop: false });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //console.log('unmounting page');
        }
    }, {
        key: 'handleRefresh',
        value: function handleRefresh(resolve) {
            var _this2 = this;

            this.setState({
                ptrRefreshing: true
            }, function () {
                _this2.props.ptrOnRefresh(function () {
                    _this2.setState({
                        ptrRefreshing: false
                    });
                    resolve();
                });
            });
        }
    }, {
        key: 'handleContentScroll',
        value: function handleContentScroll(e) {
            if (e.target.scrollTop <= 0) {
                this.setState({ contentScrollOnTop: true });
            } else {
                this.setState({ contentScrollOnTop: false });
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent(children, ptr, infiniteLoader) {
            var _this3 = this;

            if (!infiniteLoader && !ptr) return children;

            var ContentWithInfiniteLoader = _react2.default.createElement(
                _index4.default,
                {
                    height: '100%',
                    disable: this.state.ptrRefreshing,
                    onScroll: function onScroll(e) {
                        return _this3.handleContentScroll(e);
                    },
                    onLoadMore: this.props.onLoadMore
                },
                children
            );
            if (!ptr && infiniteLoader) return ContentWithInfiniteLoader;
            if (ptr && !infiniteLoader) return _react2.default.createElement(
                _index2.default,
                {
                    onRefresh: this.handleRefresh,
                    disable: !this.state.contentScrollOnTop
                },
                children
            );

            return _react2.default.createElement(
                _index2.default,
                {
                    onRefresh: this.handleRefresh,
                    disable: !this.state.contentScrollOnTop
                },
                ContentWithInfiniteLoader
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                style = _props.style,
                className = _props.className,
                infiniteLoader = _props.infiniteLoader,
                transition = _props.transition,
                ptr = _props.ptr;

            var cls = (0, _classnames2.default)('weui-page', className);

            return _react2.default.createElement(
                'div',
                {
                    className: cls,
                    style: (0, _assign2.default)({}, { animationName: transition ? 'pageInRight' : '' }, style) },
                this.renderContent(children, ptr, infiniteLoader)
            );
        }
    }]);
    return Page;
}(_react.Component);

Page.propTypes = {
    /**
     * indicate to use ptr
     *
     */
    ptr: _propTypes2.default.bool,
    /**
     * function to call when ptr refresh, pass function resolve to finish loading
     *
     */
    ptrOnRefresh: _propTypes2.default.func,
    /**
     * indicate to use infiniteloader
     *
     */
    infiniteLoader: _propTypes2.default.bool,
    /**
     * callback when it's requesting for more content, pass resolve function and finish function
     *
     */
    onLoadMore: _propTypes2.default.func,
    /**
     * enable page transition
     *
     */
    transition: _propTypes2.default.bool
};
Page.defaultProps = {
    ptr: true,
    ptrOnRefresh: function ptrOnRefresh(resolve) {
        setTimeout(function () {
            resolve();
        }, 1000);
    },
    infiniteLoader: true,
    onLoadMore: function onLoadMore(resolve, finish) {
        //mock request
        setTimeout(function () {
            finish();
        }, 1000);
    },
    transition: true
};
exports.default = Page;
module.exports = exports['default'];