"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/close/20"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib//menu/20"));

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AriaPropTypes = require("../../prop-types/AriaPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var HeaderMenuButton = function HeaderMenuButton(_ref) {
  var _cx;

  var ariaLabel = _ref['aria-label'],
      ariaLabelledBy = _ref['aria-labelledby'],
      customClassName = _ref.className,
      onClick = _ref.onClick,
      isActive = _ref.isActive,
      rest = _objectWithoutProperties(_ref, ["aria-label", "aria-labelledby", "className", "onClick", "isActive"]);

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, customClassName, !!customClassName), _defineProperty(_cx, "".concat(prefix, "--header__action"), true), _defineProperty(_cx, "".concat(prefix, "--header__menu-trigger"), true), _defineProperty(_cx, "".concat(prefix, "--header__action--active"), isActive), _cx));
  var accessibilityLabel = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy
  };
  return _react.default.createElement("button", _extends({}, rest, accessibilityLabel, {
    className: className,
    title: ariaLabel,
    type: "button",
    onClick: onClick
  }), isActive ? _react.default.createElement(_.default, null) : _react.default.createElement(_2.default, null));
};

HeaderMenuButton.propTypes = _objectSpread({}, _AriaPropTypes.AriaLabelPropType, {
  /**
   * Optionally provide a custom class name that is applied to the underlying
   * button
   */
  className: _propTypes.default.string,

  /**
   * Optionally provide an onClick handler that is called when the underlying
   * button fires it's onclick event
   */
  onClick: _propTypes.default.func,

  /**
   * Specify whether the action is currently active
   */
  isActive: _propTypes.default.bool
});
var _default = HeaderMenuButton;
exports.default = _default;