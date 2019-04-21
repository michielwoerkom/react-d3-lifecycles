"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Table = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Table = function Table(_ref) {
  var _cx;

  var zebra = _ref.zebra,
      className = _ref.className,
      children = _ref.children,
      short = _ref.short,
      shouldShowBorder = _ref.shouldShowBorder,
      isSortable = _ref.isSortable,
      other = _objectWithoutProperties(_ref, ["zebra", "className", "children", "short", "shouldShowBorder", "isSortable"]);

  var componentClass = (0, _classnames.default)("".concat(prefix, "--data-table"), className, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--data-table--zebra"), zebra), _defineProperty(_cx, "".concat(prefix, "--data-table--short"), short), _defineProperty(_cx, "".concat(prefix, "--data-table--sort"), isSortable), _defineProperty(_cx, "".concat(prefix, "--data-table--no-border"), !shouldShowBorder), _cx));
  return _react.default.createElement("table", _extends({}, other, {
    className: componentClass
  }), children);
};

exports.Table = Table;
Table.propTypes = {
  /**
   * The CSS class names.
   */
  className: _propTypes.default.string,

  /**
   * `true` to add zebra striping.
   */
  zebra: _propTypes.default.bool,

  /**
   * `true` for short data table.
   */
  short: _propTypes.default.bool,

  /**
   * `false` Applies styles for data tables with sorting functionality.
   */
  isSortable: _propTypes.default.bool,

  /**
   * `true` for data table without borders.
   */
  shouldShowBorder: _propTypes.default.bool
};
Table.defaultProps = {
  zebra: true,
  short: false,
  shouldShowBorder: true
};
var _default = Table;
exports.default = _default;