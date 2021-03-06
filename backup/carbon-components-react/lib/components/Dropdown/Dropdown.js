"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _downshift = _interopRequireDefault(require("downshift"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/warning--filled/16"));

var _ListBox = _interopRequireWildcard(require("../ListBox"));

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var defaultItemToString = function defaultItemToString(item) {
  if (typeof item === 'string') {
    return item;
  }

  return item ? item.label : '';
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (selectedItem) {
      if (_this.props.onChange) {
        _this.props.onChange({
          selectedItem: selectedItem
        });
      }
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _cx4;

      var _this$props = this.props,
          containerClassName = _this$props.className,
          disabled = _this$props.disabled,
          items = _this$props.items,
          label = _this$props.label,
          ariaLabel = _this$props.ariaLabel,
          itemToString = _this$props.itemToString,
          itemToElement = _this$props.itemToElement,
          type = _this$props.type,
          initialSelectedItem = _this$props.initialSelectedItem,
          selectedItem = _this$props.selectedItem,
          id = _this$props.id,
          titleText = _this$props.titleText,
          helperText = _this$props.helperText,
          light = _this$props.light,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText;
      var inline = type === 'inline';

      var className = function className(_ref) {
        var _cx;

        var isOpen = _ref.isOpen;
        return (0, _classnames.default)("".concat(prefix, "--dropdown"), containerClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--dropdown--invalid"), invalid), _defineProperty(_cx, "".concat(prefix, "--dropdown--open"), isOpen), _defineProperty(_cx, "".concat(prefix, "--dropdown--inline"), inline), _defineProperty(_cx, "".concat(prefix, "--dropdown--disabled"), disabled), _defineProperty(_cx, "".concat(prefix, "--dropdown--light"), light), _cx));
      };

      var titleClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--label--disabled"), disabled));
      var title = titleText ? _react.default.createElement("label", {
        htmlFor: id,
        className: titleClasses
      }, titleText) : null;
      var helperClasses = (0, _classnames.default)("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), disabled));
      var helper = helperText ? _react.default.createElement("div", {
        className: helperClasses
      }, helperText) : null;
      var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--dropdown__wrapper"), "".concat(prefix, "--list-box__wrapper"), (_cx4 = {}, _defineProperty(_cx4, "".concat(prefix, "--dropdown__wrapper--inline"), inline), _defineProperty(_cx4, "".concat(prefix, "--list-box__wrapper--inline"), inline), _defineProperty(_cx4, "".concat(prefix, "--dropdown__wrapper--inline--invalid"), inline && invalid), _defineProperty(_cx4, "".concat(prefix, "--list-box__wrapper--inline--invalid"), inline && invalid), _cx4)); // needs to be Capitalized for react to render it correctly

      var ItemToElement = itemToElement;

      var Dropdown = _react.default.createElement(_react.default.Fragment, null, title, !inline && helper, _react.default.createElement(_downshift.default, {
        id: id,
        onChange: this.handleOnChange,
        itemToString: itemToString,
        defaultSelectedItem: initialSelectedItem,
        selectedItem: selectedItem
      }, function (_ref2) {
        var isOpen = _ref2.isOpen,
            itemToString = _ref2.itemToString,
            selectedItem = _ref2.selectedItem,
            highlightedIndex = _ref2.highlightedIndex,
            getRootProps = _ref2.getRootProps,
            getButtonProps = _ref2.getButtonProps,
            getItemProps = _ref2.getItemProps,
            getLabelProps = _ref2.getLabelProps;
        return _react.default.createElement(_ListBox.default, _extends({
          type: type,
          className: className({
            isOpen: isOpen
          }),
          disabled: disabled,
          ariaLabel: ariaLabel,
          isOpen: isOpen,
          invalid: invalid,
          invalidText: invalidText
        }, getRootProps({
          refKey: 'innerRef'
        })), _FeatureFlags.componentsX && invalid && _react.default.createElement(_.default, {
          className: "".concat(prefix, "--list-box__invalid-icon")
        }), _react.default.createElement(_ListBox.default.Field, getButtonProps({
          disabled: disabled
        }), _react.default.createElement("span", _extends({
          className: "".concat(prefix, "--list-box__label")
        }, getLabelProps()), selectedItem ? itemToString(selectedItem) : label), _react.default.createElement(_ListBox.default.MenuIcon, {
          isOpen: isOpen
        })), isOpen && _react.default.createElement(_ListBox.default.Menu, null, items.map(function (item, index) {
          return _react.default.createElement(_ListBox.default.MenuItem, _extends({
            key: itemToString(item),
            isActive: selectedItem === item,
            isHighlighted: highlightedIndex === index || selectedItem === item
          }, getItemProps({
            item: item,
            index: index
          })), itemToElement ? _react.default.createElement(ItemToElement, _extends({
            key: itemToString(item)
          }, item)) : itemToString(item));
        })));
      }));

      return _FeatureFlags.componentsX ? _react.default.createElement("div", {
        className: wrapperClasses
      }, Dropdown) : Dropdown;
    }
  }]);

  return Dropdown;
}(_react.default.Component);

exports.default = Dropdown;

_defineProperty(Dropdown, "propTypes", {
  /**
   * Disable the control
   */
  disabled: _propTypes.default.bool,

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: _propTypes.default.array.isRequired,

  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),

  /**
   * Specify whether you want the inline version of this control
   */
  inline: _propTypes.default.bool,

  /**
   * Specify if the currently selected value is invalid.
   */
  invalid: _propTypes.default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: _propTypes.default.string,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString: _propTypes.default.func,

  /**
   * Function to render items as custom components instead of strings.
   * Defaults to null and is overriden by a getter
   */
  itemToElement: _propTypes.default.func,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occuring.
   */
  onChange: _propTypes.default.func,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: _propTypes.default.node.isRequired,

  /**
   * 'aria-label' of the ListBox component.
   */
  ariaLabel: _propTypes.default.string,

  /**
   * The dropdown type, `default` or `inline`
   */
  type: _ListBox.PropTypes.ListBoxType,

  /**
   * In the case you want to control the dropdown selection entirely.
   */
  selectedItem: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool,

  /**
   * Provide the title text that will be read by a screen reader when
   * visiting this control
   */
  titleText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * Provide helper text that is used alongside the control label for
   * additional help
   */
  helperText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node])
});

_defineProperty(Dropdown, "defaultProps", {
  disabled: false,
  type: 'default',
  itemToString: defaultItemToString,
  itemToElement: null,
  light: false,
  titleText: '',
  helperText: ''
});