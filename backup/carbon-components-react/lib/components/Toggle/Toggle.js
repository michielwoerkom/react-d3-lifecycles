"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _setupGetInstanceId = _interopRequireDefault(require("../../tools/setupGetInstanceId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;
var getInstanceId = (0, _setupGetInstanceId.default)();

var Toggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toggle).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          defaultToggled = _this$props.defaultToggled,
          toggled = _this$props.toggled,
          _onChange = _this$props.onChange,
          onToggle = _this$props.onToggle,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this.inputId = this.inputId || "__carbon-toggle_".concat(getInstanceId()) : _this$props$id,
          labelText = _this$props.labelText,
          labelA = _this$props.labelA,
          labelB = _this$props.labelB,
          other = _objectWithoutProperties(_this$props, ["className", "defaultToggled", "toggled", "onChange", "onToggle", "id", "labelText", "labelA", "labelB"]);

      var input;
      var wrapperClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--form-item"), true), _defineProperty(_classNames, className, className), _classNames));
      var checkedProps = {};

      if (typeof toggled !== 'undefined') {
        checkedProps.checked = toggled;
      } else {
        checkedProps.defaultChecked = defaultToggled;
      }

      var labelTextId = !labelText ? undefined : "".concat(id, "-label");
      return _react.default.createElement(_react.default.Fragment, null, labelText && _react.default.createElement("div", {
        id: labelTextId,
        className: "".concat(prefix, "--label")
      }, labelText), _react.default.createElement("div", {
        className: wrapperClasses
      }, _react.default.createElement("input", _extends({}, other, checkedProps, {
        type: "checkbox",
        id: id,
        className: "".concat(prefix, "--toggle"),
        "aria-labelledby": labelTextId,
        onChange: function onChange(evt) {
          _onChange && _onChange(evt);
          onToggle(input.checked, id, evt);
        },
        ref: function ref(el) {
          input = el;
        }
      })), _react.default.createElement("label", {
        className: "".concat(prefix, "--toggle__label"),
        htmlFor: id
      }, _react.default.createElement("span", {
        className: "".concat(prefix, "--toggle__text--left"),
        "aria-hidden": "true"
      }, labelA), _react.default.createElement("span", {
        className: "".concat(prefix, "--toggle__appearance")
      }), _react.default.createElement("span", {
        className: "".concat(prefix, "--toggle__text--right"),
        "aria-hidden": "true"
      }, labelB))));
    }
  }]);

  return Toggle;
}(_react.default.Component);

_defineProperty(Toggle, "propTypes", {
  /**
   * Specify a custom className to apply to the form-item node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the toggle should be on by default
   */
  defaultToggled: _propTypes.default.bool,

  /**
   * Provide an optional hook that is called when the control is toggled
   */
  onToggle: _propTypes.default.func,

  /**
   * Provide an id that unique represents the underlying <input>
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Specify whether the control is toggled
   */
  toggled: _propTypes.default.bool,

  /**
   * Specify the label for the "off" position
   */
  labelA: _propTypes.default.string.isRequired,

  /**
   * Specify the label for the "on" position
   */
  labelB: _propTypes.default.string.isRequired
});

_defineProperty(Toggle, "defaultProps", {
  defaultToggled: false,
  label: '',
  labelA: 'Off',
  labelB: 'On',
  onToggle: function onToggle() {}
});

var _default = Toggle;
exports.default = _default;