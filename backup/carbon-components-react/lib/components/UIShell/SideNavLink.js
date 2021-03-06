"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createCustomSideNavLink = void 0;

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireWildcard(require("./Link"));

var _SideNavIcon = _interopRequireDefault(require("./SideNavIcon"));

var _SideNavItem = _interopRequireDefault(require("./SideNavItem"));

var _SideNavLinkText = _interopRequireDefault(require("./SideNavLinkText"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var SideNavLink = function SideNavLink(_ref) {
  var _cx;

  var customClassName = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      isActive = _ref.isActive,
      rest = _objectWithoutProperties(_ref, ["className", "children", "icon", "isActive"]);

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav__link"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav__link--current"), isActive), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return _react.default.createElement(_SideNavItem.default, null, _react.default.createElement(_Link.default, _extends({}, rest, {
    className: className
  }), _react.default.createElement(_SideNavIcon.default, {
    small: true
  }, icon), _react.default.createElement(_SideNavLinkText.default, null, children)));
};

SideNavLink.propTypes = _objectSpread({}, _Link.LinkPropTypes, {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: _propTypes.default.string,

  /**
   * Specify the text content for the link
   */
  children: _propTypes.default.string.isRequired
});
SideNavLink.defaultProps = {
  element: 'a'
};

var createCustomSideNavLink = function createCustomSideNavLink(element) {
  return function (props) {
    return _react.default.createElement(SideNavLink, _extends({
      element: element
    }, props));
  };
};

exports.createCustomSideNavLink = createCustomSideNavLink;
var _default = SideNavLink;
exports.default = _default;