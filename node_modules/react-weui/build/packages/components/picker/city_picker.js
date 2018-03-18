'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _picker = require('./picker');

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  An city pick component build on top of picker
 *
 */
var CityPicker = function (_React$Component) {
    (0, _inherits3.default)(CityPicker, _React$Component);

    function CityPicker(props) {
        (0, _classCallCheck3.default)(this, CityPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CityPicker.__proto__ || (0, _getPrototypeOf2.default)(CityPicker)).call(this, props));

        var _this$props = _this.props,
            data = _this$props.data,
            selected = _this$props.selected,
            dataMap = _this$props.dataMap;

        var _this$parseData = _this.parseData(data, dataMap.items, selected),
            groups = _this$parseData.groups,
            newselected = _this$parseData.newselected;

        _this.state = {
            groups: groups,
            selected: newselected,
            picker_show: false,
            text: ''
        };
        //console.log(this.state.groups)
        _this.updateGroup = _this.updateGroup.bind(_this);
        _this.parseData = _this.parseData.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    //@return array of group with options


    (0, _createClass3.default)(CityPicker, [{
        key: 'parseData',
        value: function parseData(data, subKey) {
            var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var newselected = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

            var _selected = 0;

            if (Array.isArray(selected) && selected.length > 0) {
                var _selectedClone = selected.slice(0);
                _selected = _selectedClone.shift();
                selected = _selectedClone;
            }

            if (typeof data[_selected] === 'undefined') {
                _selected = 0;
            }

            newselected.push(_selected);

            var item = data[_selected];

            var _group = JSON.parse((0, _stringify2.default)(data));
            _group.forEach(function (g) {
                return delete g[subKey];
            });
            group.push({ items: _group, mapKeys: { 'label': this.props.dataMap.id } });

            if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
                return this.parseData(item[subKey], subKey, selected, group, newselected);
            } else {
                return { groups: group, newselected: newselected };
            }
        }
    }, {
        key: 'updateDataBySelected',
        value: function updateDataBySelected(selected, cb) {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                dataMap = _props.dataMap;
            //validate if item exists

            var _parseData = this.parseData(data, dataMap.items, selected),
                groups = _parseData.groups,
                newselected = _parseData.newselected;

            var text = '';
            try {
                groups.forEach(function (group, _i) {
                    text += group['items'][selected[_i]][_this2.props.dataMap.id] + ' ';
                });
            } catch (err) {
                //wait
                text = this.state.text;
            }

            this.setState({
                groups: groups,
                text: text,
                selected: newselected
            }, function () {
                return cb();
            });
        }
    }, {
        key: 'updateGroup',
        value: function updateGroup(item, i, groupIndex, selected, picker) {
            var _this3 = this;

            this.updateDataBySelected(selected, function () {
                //update picker
                picker.setState({
                    selected: _this3.state.selected
                });
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(selected) {
            var _this4 = this;

            //handle unchange
            if (selected === this.state.selected) {
                this.updateDataBySelected(selected, function () {
                    if (_this4.props.onChange) _this4.props.onChange(_this4.state.text);
                });
            }

            if (this.props.onChange) this.props.onChange(this.state.text);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_picker2.default, {
                show: this.props.show,
                onGroupChange: this.updateGroup,
                onChange: this.handleChange,
                defaultSelect: this.state.selected,
                groups: this.state.groups,
                onCancel: this.props.onCancel,
                lang: this.props.lang
            });
        }
    }]);
    return CityPicker;
}(_react2.default.Component);

CityPicker.propTypes = {
    /**
     * Array of item trees, consists property for label and subitems
     *
     */
    data: _propTypes2.default.array.isRequired,
    /**
     * keys for data provide, `id` to indicate property name for label, `items` to indicate property name for subitems
     *
     */
    dataMap: _propTypes2.default.object,
    /**
     * currently selected item
     *
     */
    selected: _propTypes2.default.array,
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
CityPicker.defaultProps = {
    data: [],
    dataMap: { id: 'name', items: 'sub' },
    selected: [],
    show: false,
    lang: { leftBtn: '取消', rightBtn: '确定' }
};
exports.default = CityPicker;
module.exports = exports['default'];