"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIcon = findIcon;
exports.setIconsList = setIconsList;
exports.getSvgData = getSvgData;
exports.svgShapes = svgShapes;
exports.isPrefixed = isPrefixed;
Object.defineProperty(exports, "icons", {
  enumerable: true,
  get: function get() {
    return _carbonIcons.default;
  }
});
exports.default = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _carbonIcons = _interopRequireDefault(require("carbon-icons"));

var _isRequiredOneOf = _interopRequireDefault(require("../../prop-types/isRequiredOneOf"));

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * The icons list object from `carbon-icons`.
 * @type {Object}
 */
var iconsList = _carbonIcons.default;
/**
 * Returns a single icon Object
 * @param {string} name - "name" property of icon
 * @param {Object} [iconsObj=icons] - JSON Array of Objects
 * @example
 * // Returns a single icon Object
 * this.findIcon('copy-code', icons.json);
 */

function findIcon(name) {
  var iconsObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : iconsList;
  var icon = iconsObj.filter(function (obj) {
    return obj.name === name;
  });

  if (icon.length === 0) {
    return false;
  } else if (icon.length > 1) {
    throw new Error('Multiple icons found...');
  } else {
    return icon[0];
  }
}
/**
 * Sets the icons list object from `carbon-icons`.
 * Doing so instead of having this module directly import `carbon-icons`
 * avoids the icons list being included in applications' bundles if only limited set of icons is in use.
 * @param {Object} list The icons list from `carbon-icons`.
 */


function setIconsList(list) {
  iconsList = list;
}
/**
 * Returns "svgData" Object
 * @param {string} iconName - "name" property of icon
 * @example
 * // Returns svgData Object for given iconName
 * this.getSvgData('copy-code');
 */


function getSvgData(iconName) {
  var icon = findIcon(iconName);
  return icon ? icon.svgData : false;
}
/**
 * @param {Object} svgData - JSON Object for an SVG icon
 * @returns {ReactElement} Elements/Nodes for SVG
 * @example
 * // Returns SVG elements
 * const svgData = getSvgData('copy-code');
 * svgShapes(svgData);
 */


function svgShapes(svgData) {
  var svgElements = Object.keys(svgData).filter(function (key) {
    return svgData[key];
  }).map(function (svgProp) {
    var data = svgData[svgProp];

    if (svgProp === 'circles') {
      return data.map(function (circle, index) {
        var circleProps = {
          cx: circle.cx,
          cy: circle.cy,
          r: circle.r,
          key: "circle".concat(index)
        };
        return _react.default.createElement("circle", circleProps);
      });
    } else if (svgProp === 'paths') {
      return data.map(function (path, index) {
        return _react.default.createElement("path", {
          d: path.d,
          key: "key".concat(index)
        });
      });
    } else if (svgProp === 'polygons') {
      return data.map(function (polygon, index) {
        return _react.default.createElement("polygon", {
          points: polygon.points,
          key: "key".concat(index)
        });
      });
    }

    return '';
  });
  return svgElements;
}

function isPrefixed(name) {
  if (process.env.NODE_ENV !== "production") {
    !(typeof name === 'string') ? process.env.NODE_ENV !== "production" ? (0, _invariant.default)(false, '[Icon] icon name is missing. You likely forgot to specify the icon, ' + 'or are using older (pre-`7.x`) version of `carbon-icons` library. ' + 'To specify the icon, use either `icon` (data) or `name` (icon name) properties.') : invariant(false) : void 0;
  }

  return name && name.split('--')[0] === 'icon';
}

var didWarnAboutDeprecation;

var findIconWithPrefix = function findIconWithPrefix(name) {
  return isPrefixed(name) ? findIcon(name) : findIcon("icon--".concat(name));
};

var Icon = function Icon(_ref) {
  var className = _ref.className,
      iconTitle = _ref.iconTitle,
      description = _ref.description,
      fill = _ref.fill,
      fillRule = _ref.fillRule,
      height = _ref.height,
      name = _ref.name,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? !_FeatureFlags.breakingChangesX && findIconWithPrefix(name) : _ref$icon,
      role = _ref.role,
      style = _ref.style,
      width = _ref.width,
      iconRef = _ref.iconRef,
      other = _objectWithoutProperties(_ref, ["className", "iconTitle", "description", "fill", "fillRule", "height", "name", "icon", "role", "style", "width", "iconRef"]);

  if (process.env.NODE_ENV !== "production" && _FeatureFlags.breakingChangesX && name) {
    process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The `name` property in the `Icon` component is being removed in the next release of ' + '`carbon-components-react`. Please use `icon` instead.') : void 0;
    didWarnAboutDeprecation = true;
  }

  var props = _objectSpread({
    className: className,
    fill: fill,
    fillRule: fillRule,
    height: height || icon.height,
    name: isPrefixed ? name : "icon--".concat(name),
    role: role,
    style: style,
    viewBox: icon.viewBox,
    width: width || icon.width,
    ref: iconRef
  }, other);

  var svgContent = icon ? svgShapes(icon.svgData) : '';
  return _react.default.createElement("svg", _extends({}, props, {
    "aria-label": description,
    alt: description
  }), _react.default.createElement("title", null, typeof iconTitle === 'undefined' ? description : iconTitle), svgContent);
};

Icon.propTypes = _objectSpread({
  /**
   * The CSS class name.
   */
  className: _propTypes.default.string,

  /**
   * The icon title.
   */
  iconTitle: _propTypes.default.string,

  /**
   * The icon description.
   */
  description: _propTypes.default.string.isRequired,

  /**
   * The `<svg>` `fill` attribute.
   */
  fill: _propTypes.default.string,

  /**
   * The `<svg>` `fillRule` attribute.
   */
  fillRule: _propTypes.default.string,

  /**
   * The `<svg>` `height` attribute.
   */
  height: _propTypes.default.string
}, (0, _isRequiredOneOf.default)({
  /**
   * The icon data.
   */
  icon: _propTypes.default.shape({
    width: _propTypes.default.string,
    height: _propTypes.default.string,
    viewBox: _propTypes.default.string.isRequired,
    svgData: _propTypes.default.object.isRequired
  }),

  /**
   * The name in the sprite.
   */
  name: _propTypes.default.string
}), {
  /**
   * The `role` attribute.
   */
  role: _propTypes.default.string,

  /**
   * The CSS styles.
   */
  style: _propTypes.default.object,

  /**
   * The `<svg>` `viewbox` attribute.
   */
  viewBox: _propTypes.default.string,

  /**
   * The `<svg>` `width` attribute.
   */
  width: _propTypes.default.string,

  /**
   * The `ref` callback for the icon.
   */
  iconRef: _propTypes.default.func
});
Icon.defaultProps = {
  fillRule: 'evenodd',
  role: 'img',
  description: 'Provide a description that will be used as the title'
};
var _default = Icon;
exports.default = _default;