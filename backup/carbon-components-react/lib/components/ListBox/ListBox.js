"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonComponents = require("carbon-components");

var _ListBoxField = _interopRequireDefault(require("./ListBoxField"));

var _ListBoxMenu = _interopRequireDefault(require("./ListBoxMenu"));

var _ListBoxPropTypes = require("./ListBoxPropTypes");

var _childrenOf = _interopRequireDefault(require("../../prop-types/childrenOf"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/warning--filled/16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var handleOnKeyDown = function handleOnKeyDown(event) {
  if (event.keyCode === 27) {
    event.stopPropagation();
  }
};

var handleClick = function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();
};
/**
 * `ListBox` is a generic container component that handles creating the
 * container class name in response to certain props.
 */


var ListBox = function ListBox(_ref) {
  var _cx;

  var ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      containerClassName = _ref.className,
      disabled = _ref.disabled,
      innerRef = _ref.innerRef,
      type = _ref.type,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      light = _ref.light,
      innerTabIndex = _ref.innerTabIndex,
      isOpen = _ref.isOpen,
      rest = _objectWithoutProperties(_ref, ["ariaLabel", "children", "className", "disabled", "innerRef", "type", "invalid", "invalidText", "light", "innerTabIndex", "isOpen"]);

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, containerClassName, !!containerClassName), _defineProperty(_cx, "".concat(prefix, "--list-box"), true), _defineProperty(_cx, "".concat(prefix, "--list-box--inline"), type === 'inline'), _defineProperty(_cx, "".concat(prefix, "--list-box--disabled"), disabled), _defineProperty(_cx, "".concat(prefix, "--list-box--light"), light), _defineProperty(_cx, "".concat(prefix, "--list-box--expanded"), isOpen), _cx));
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", _extends({}, rest, {
    role: "listbox",
    "aria-label": ariaLabel,
    tabIndex: innerTabIndex || 0,
    className: className,
    ref: innerRef,
    onKeyDown: handleOnKeyDown,
    onClick: handleClick,
    "data-invalid": invalid || undefined,
    "aria-invalid": invalid || undefined
  }), children), invalid ? _react.default.createElement("div", {
    className: "".concat(prefix, "--form-requirement")
  }, invalidText) : null);
};

ListBox.propTypes = {
  children: (0, _childrenOf.default)([_ListBoxField.default, _ListBoxMenu.default, _.default]),

  /**
   * Specify a class name to be applied on the containing list box node
   */
  className: _propTypes.default.string,

  /**
   * `innerRef` hook used for libraries like Downshift that require a reference
   * on a container node when it is not a native element
   */
  innerRef: _propTypes.default.func.isRequired,

  /**
   * Specify whether the ListBox is currently disabled
   */
  disabled: _propTypes.default.bool.isRequired,

  /**
   * Specify the "type" of the ListBox. Currently supports either `default` or
   * `inline` as an option.
   */
  type: _ListBoxPropTypes.ListBoxType.isRequired,

  /**
   * Specify the "aria-label" of the ListBox.
   */
  ariaLabel: _propTypes.default.string
};
ListBox.defaultProps = {
  innerRef: function innerRef() {},
  disabled: false,
  type: 'default',
  ariaLabel: 'Choose an item'
};
var _default = ListBox;
exports.default = _default;