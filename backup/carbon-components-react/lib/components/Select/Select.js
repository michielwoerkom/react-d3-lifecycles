"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonIcons = require("carbon-icons");

var _carbonComponents = require("carbon-components");

var _Icon = _interopRequireDefault(require("../Icon"));

var _FeatureFlags = require("../../internal/FeatureFlags");

var _index = _interopRequireDefault(require("@carbon/icons-react/lib/chevron--down/index"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/warning--filled/16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Select = _react.default.forwardRef(function (_ref, ref) {
  var _classNames, _classNames2;

  var className = _ref.className,
      id = _ref.id,
      inline = _ref.inline,
      labelText = _ref.labelText,
      disabled = _ref.disabled,
      children = _ref.children,
      iconDescription = _ref.iconDescription,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      light = _ref.light,
      other = _objectWithoutProperties(_ref, ["className", "id", "inline", "labelText", "disabled", "children", "iconDescription", "hideLabel", "invalid", "invalidText", "helperText", "light"]);

  var selectClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--select"), true), _defineProperty(_classNames, "".concat(prefix, "--select--inline"), inline), _defineProperty(_classNames, "".concat(prefix, "--select--light"), light), _defineProperty(_classNames, "".concat(prefix, "--select--invalid"), invalid), _defineProperty(_classNames, className, className), _classNames));
  var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--visually-hidden"), hideLabel), _defineProperty(_classNames2, "".concat(prefix, "--label--disabled"), disabled), _classNames2));
  var errorId = "".concat(id, "-error-msg");
  var error = invalid ? _react.default.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, invalidText) : null;
  var helperTextClasses = (0, _classnames.default)("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), disabled));
  var helper = helperText ? _react.default.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  var ariaProps = {};

  if (invalid) {
    ariaProps['aria-describedby'] = errorId;
  }

  var input = function () {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("select", _extends({}, other, ariaProps, {
      id: id,
      className: "".concat(prefix, "--select-input"),
      disabled: disabled || undefined,
      "data-invalid": invalid || undefined,
      "aria-invalid": invalid || undefined,
      ref: ref
    }), children), _FeatureFlags.componentsX ? _react.default.createElement(_index.default, {
      className: "".concat(prefix, "--select__arrow"),
      "aria-label": iconDescription
    }, _react.default.createElement("title", null, iconDescription)) : _react.default.createElement(_Icon.default, {
      icon: _carbonIcons.iconCaretDown,
      className: "".concat(prefix, "--select__arrow"),
      description: iconDescription
    }), _FeatureFlags.componentsX && invalid && _react.default.createElement(_.default, {
      className: "".concat(prefix, "--select__invalid-icon")
    }));
  }();

  return _react.default.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, _react.default.createElement("div", {
    className: selectClasses
  }, _react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText), !inline && helper, _FeatureFlags.componentsX && inline && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "".concat(prefix, "--select-input--inline__wrapper")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--select-input__wrapper"),
    "data-invalid": invalid || null
  }, input), error), helper), _FeatureFlags.componentsX && !inline && _react.default.createElement("div", {
    className: "".concat(prefix, "--select-input__wrapper"),
    "data-invalid": invalid || null
  }, input), !_FeatureFlags.componentsX && input, !_FeatureFlags.componentsX && inline && helper, (!_FeatureFlags.componentsX || _FeatureFlags.componentsX && !inline) && error));
});

Select.propTypes = {
  /**
   * Provide the contents of your Select
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the node containing the label and the select box
   */
  className: _propTypes.default.string,

  /**
   * Specify a custom `id` for the `<select>`
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Specify whether you want the inline version of this control
   */
  inline: _propTypes.default.bool,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: _propTypes.default.node,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying <input> changes
   */
  onChange: _propTypes.default.func,

  /**
   * Specify whether the control is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Optionally provide the default value of the `<select>`
   */
  defaultValue: _propTypes.default.any,

  /**
   * Provide a description for the twistie icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Specify if the currently value is invalid.
   */
  invalid: _propTypes.default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: _propTypes.default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * Specify whether you want the light version of this control
   */
  light: _propTypes.default.bool
};
Select.defaultProps = {
  disabled: false,
  labelText: 'Select',
  inline: false,
  iconDescription: 'open list of options',
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
var _default = Select;
exports.default = _default;