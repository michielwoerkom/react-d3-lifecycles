function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link, { LinkPropTypes } from './Link';
import SideNavIcon from './SideNavIcon';
import SideNavItem from './SideNavItem';
import SideNavLinkText from './SideNavLinkText';
var prefix = settings.prefix;

var SideNavLink = function SideNavLink(_ref) {
  var _cx;

  var customClassName = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      isActive = _ref.isActive,
      rest = _objectWithoutProperties(_ref, ["className", "children", "icon", "isActive"]);

  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav__link"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav__link--current"), isActive), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return React.createElement(SideNavItem, null, React.createElement(Link, _extends({}, rest, {
    className: className
  }), React.createElement(SideNavIcon, {
    small: true
  }, icon), React.createElement(SideNavLinkText, null, children)));
};

SideNavLink.propTypes = _objectSpread({}, LinkPropTypes, {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify the text content for the link
   */
  children: PropTypes.string.isRequired
});
SideNavLink.defaultProps = {
  element: 'a'
};
export var createCustomSideNavLink = function createCustomSideNavLink(element) {
  return function (props) {
    return React.createElement(SideNavLink, _extends({
      element: element
    }, props));
  };
};
export default SideNavLink;