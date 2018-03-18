'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _version = require('./version');

var _version2 = _interopRequireDefault(_version);

var _index = require('./components/button/index');

var _index2 = require('./components/cell/index');

var _index3 = require('./components/mask/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./components/form/index');

var _index6 = require('./components/label/index');

var _index7 = _interopRequireDefault(_index6);

var _index8 = require('./components/toast/index');

var _index9 = _interopRequireDefault(_index8);

var _index10 = require('./components/progress/index');

var _index11 = _interopRequireDefault(_index10);

var _index12 = require('./components/actionsheet/index');

var _index13 = _interopRequireDefault(_index12);

var _index14 = require('./components/dialog/index');

var _index15 = _interopRequireDefault(_index14);

var _index16 = require('./components/msg/index');

var _index17 = _interopRequireDefault(_index16);

var _index18 = require('./components/article/index');

var _index19 = _interopRequireDefault(_index18);

var _index20 = require('./components/icon/index');

var _index21 = _interopRequireDefault(_index20);

var _index22 = require('./components/grid/index');

var _index23 = require('./components/panel/index');

var _index24 = require('./components/mediabox/index');

var _index25 = require('./components/tab/index');

var _index26 = require('./components/searchbar/index');

var _index27 = _interopRequireDefault(_index26);

var _index28 = require('./components/flex/index');

var _toptips = require('./components/toptips');

var _toptips2 = _interopRequireDefault(_toptips);

var _gallery = require('./components/gallery');

var _footer = require('./components/footer');

var _loadmore = require('./components/loadmore');

var _loadmore2 = _interopRequireDefault(_loadmore);

var _picker = require('./components/picker');

var _badge = require('./components/badge');

var _badge2 = _interopRequireDefault(_badge);

var _popup = require('./components/popup');

var _ptr = require('./components/ptr');

var _ptr2 = _interopRequireDefault(_ptr);

var _infiniteloader = require('./components/infiniteloader');

var _infiniteloader2 = _interopRequireDefault(_infiniteloader);

var _swiper = require('./components/swiper');

var _swiper2 = _interopRequireDefault(_swiper);

var _page = require('./components/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.0.0 components
/**
 * Created by jf on 15/10/27.
 */
exports.default = {
    version: _version2.default,

    //0.4.x
    Button: _index.Button,
    ButtonArea: _index.ButtonArea,
    Cells: _index2.Cells,
    CellsTitle: _index2.CellsTitle,
    CellsTips: _index2.CellsTips,
    Cell: _index2.Cell,
    CellHeader: _index2.CellHeader,
    CellBody: _index2.CellBody,
    CellFooter: _index2.CellFooter,
    Mask: _index4.default,
    Form: _index5.Form,
    FormCell: _index5.FormCell,
    Radio: _index5.Radio,
    Checkbox: _index5.Checkbox,
    Input: _index5.Input,
    TextArea: _index5.TextArea,
    Switch: _index5.Switch,
    Select: _index5.Select,
    Uploader: _index5.Uploader,
    Label: _index7.default,
    Toast: _index9.default,
    Progress: _index11.default,
    ActionSheet: _index13.default,
    Dialog: _index15.default,
    Msg: _index17.default,
    Article: _index19.default,
    Icon: _index21.default,
    Grids: _index22.Grids,
    Grid: _index22.Grid,
    GridIcon: _index22.GridIcon,
    GridLabel: _index22.GridLabel,
    Panel: _index23.Panel,
    PanelHeader: _index23.PanelHeader,
    PanelBody: _index23.PanelBody,
    PanelFooter: _index23.PanelFooter,
    MediaBox: _index24.MediaBox,
    MediaBoxHeader: _index24.MediaBoxHeader,
    MediaBoxBody: _index24.MediaBoxBody,
    MediaBoxTitle: _index24.MediaBoxTitle,
    MediaBoxDescription: _index24.MediaBoxDescription,
    MediaBoxInfo: _index24.MediaBoxInfo,
    MediaBoxInfoMeta: _index24.MediaBoxInfoMeta,
    NavBar: _index25.NavBar,
    NavBarItem: _index25.NavBarItem,
    Tab: _index25.Tab,
    TabBody: _index25.TabBody,
    TabBodyItem: _index25.TabBodyItem,
    TabBar: _index25.TabBar,
    TabBarIcon: _index25.TabBarIcon,
    TabBarItem: _index25.TabBarItem,
    TabBarLabel: _index25.TabBarLabel,
    SearchBar: _index27.default,

    //1.0.0
    Flex: _index28.Flex,
    FlexItem: _index28.FlexItem,
    VCode: _index5.VCode,
    Agreement: _index5.Agreement,
    Toptips: _toptips2.default,
    Gallery: _gallery.Gallery,
    GalleryDelete: _gallery.GalleryDelete,
    Footer: _footer.Footer,
    FooterText: _footer.FooterText,
    FooterLinks: _footer.FooterLinks,
    FooterLink: _footer.FooterLink,
    LoadMore: _loadmore2.default,
    Preview: _index5.Preview,
    PreviewHeader: _index5.PreviewHeader,
    PreviewBody: _index5.PreviewBody,
    PreviewFooter: _index5.PreviewFooter,
    PreviewItem: _index5.PreviewItem,
    PreviewButton: _index.PreviewButton,
    Picker: _picker.Picker,
    PickerGroup: _picker.PickerGroup,
    CityPicker: _picker.CityPicker,
    Slider: _index5.Slider,
    Badge: _badge2.default,

    //non-standard
    Popup: _popup.Popup,
    PopupHeader: _popup.PopupHeader,
    PullToRefresh: _ptr2.default,
    InfiniteLoader: _infiniteloader2.default,
    Swiper: _swiper2.default,
    Page: _page2.default
};
//non standard


//0.4.x components

module.exports = exports['default'];