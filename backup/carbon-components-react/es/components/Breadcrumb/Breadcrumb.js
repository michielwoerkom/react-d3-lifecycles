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
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { settings } from 'carbon-components';
import { componentsX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;

var Breadcrumb = function Breadcrumb(_ref) {
  var _cx;

  var children = _ref.children,
      customClassName = _ref.className,
      noTrailingSlash = _ref.noTrailingSlash,
      rest = _objectWithoutProperties(_ref, ["children", "className", "noTrailingSlash"]);

  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--breadcrumb"), true), _defineProperty(_cx, "".concat(prefix, "--breadcrumb--no-trailing-slash"), noTrailingSlash), _defineProperty(_cx, customClassName, !!customClassName), _cx));

  if (componentsX) {
    return React.createElement("nav", _extends({
      className: className
    }, rest), children);
  }

  return React.createElement("div", _extends({
    className: className
  }, rest), children);
};

Breadcrumb.propTypes = {
  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Optional prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash: PropTypes.bool
};
export default Breadcrumb;