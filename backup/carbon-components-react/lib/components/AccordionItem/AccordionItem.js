"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _carbonIcons = require("carbon-icons");

var _carbonComponents = require("carbon-components");

var _Icon = _interopRequireDefault(require("../Icon"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/chevron--right/16"));

var _key2 = require("../../tools/key");

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var defaultRenderExpando = function defaultRenderExpando(props) {
  return _react.default.createElement("button", props);
};

var AccordionItem =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
      _this.props.onClick(evt);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleHeadingClick", function (evt) {
      var open = !_this.state.open;

      _this.setState({
        open: open
      });

      _this.props.onHeadingClick({
        isOpen: open,
        event: evt
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
      if ((0, _key2.match)(evt.which, _key2.keys.ESC) && _this.state.open && evt.target.classList.contains("".concat(prefix, "--accordion__heading"))) {
        _this.handleHeadingClick(evt);
      }
    });

    return _this;
  }

  _createClass(AccordionItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          Expando = _this$props.renderExpando,
          iconDescription = _this$props.iconDescription,
          children = _this$props.children,
          onClick = _this$props.onClick,
          onHeadingClick = _this$props.onHeadingClick,
          other = _objectWithoutProperties(_this$props, ["className", "title", "renderExpando", "iconDescription", "children", "onClick", "onHeadingClick"]);

      var classNames = (0, _classnames2.default)(_defineProperty({}, "".concat(prefix, "--accordion__item--active"), this.state.open), "".concat(prefix, "--accordion__item"), className);
      return _react.default.createElement("li", _extends({
        className: classNames,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        role: "presentation"
      }, other), _react.default.createElement(Expando, {
        type: "button",
        "aria-expanded": this.state.open,
        className: "".concat(prefix, "--accordion__heading"),
        onClick: this.handleHeadingClick,
        title: iconDescription
      }, _FeatureFlags.componentsX ? _react.default.createElement(_.default, {
        className: "".concat(prefix, "--accordion__arrow"),
        "aria-label": iconDescription
      }) : _react.default.createElement(_Icon.default, {
        className: "".concat(prefix, "--accordion__arrow"),
        icon: _carbonIcons.iconChevronRight,
        description: iconDescription,
        role: null // eslint-disable-line jsx-a11y/aria-role

      }), _react.default.createElement("div", {
        className: "".concat(prefix, "--accordion__title")
      }, title)), _react.default.createElement("div", {
        className: "".concat(prefix, "--accordion__content")
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var open = _ref.open;
      var prevOpen = state.prevOpen;
      return prevOpen === open ? null : {
        open: open,
        prevOpen: open
      };
    }
  }]);

  return AccordionItem;
}(_react.Component);

exports.default = AccordionItem;

_defineProperty(AccordionItem, "propTypes", {
  /**
   * Provide the contents of your AccordionItem
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * The accordion title.
   */
  title: _propTypes.default.node,

  /**
   * The callback function to render the expando button.
   * Can be a React component class.
   */
  renderExpando: _propTypes.default.func,

  /**
   * The description of the expando icon.
   */
  iconDescription: _propTypes.default.string,

  /**
   * `true` to open the expando.
   */
  open: _propTypes.default.bool,

  /**
   * The handler of the massaged `click` event.
   */
  onClick: _propTypes.default.func,

  /**
   * The handler of the massaged `click` event on the heading.
   */
  onHeadingClick: _propTypes.default.func
});

_defineProperty(AccordionItem, "defaultProps", {
  title: 'title',
  renderExpando: defaultRenderExpando,
  iconDescription: 'Expand/Collapse',
  open: false,
  onClick: function onClick() {},
  onHeadingClick: function onHeadingClick() {}
});