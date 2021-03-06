function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import warning from 'warning';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';
import Icon from '../Icon';
import isRequiredOneOf from '../../prop-types/isRequiredOneOf';
import { breakingChangesX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;
var didWarnAboutDeprecation = false;

var TableToolbarAction = function TableToolbarAction(_ref) {
  var className = _ref.className,
      renderIcon = _ref.renderIcon,
      icon = _ref.icon,
      iconName = _ref.iconName,
      iconDescription = _ref.iconDescription,
      rest = _objectWithoutProperties(_ref, ["className", "renderIcon", "icon", "iconName", "iconDescription"]);

  if (process.env.NODE_ENV !== "production" && breakingChangesX && (icon || iconName)) {
    process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The `icon`/`iconName` properties in the `TableToolbarAction` component is being removed in the next release of ' + '`carbon-components-react`. Please use `renderIcon` instead.') : void 0;
    didWarnAboutDeprecation = true;
  }

  var toolbarActionClasses = cx(className, "".concat(prefix, "--toolbar-action"));

  var tableToolbarActionIcon = function () {
    if (Object(renderIcon) === renderIcon) {
      var IconTag = renderIcon;
      return React.createElement(IconTag, {
        className: "".concat(prefix, "--toolbar-action__icon"),
        "aria-label": iconDescription
      });
    } else if (!breakingChangesX && (icon || iconName)) {
      return React.createElement(Icon, {
        className: "".concat(prefix, "--toolbar-action__icon"),
        icon: icon,
        name: iconName,
        description: iconDescription
      });
    }

    return null;
  }();

  return React.createElement("button", _extends({
    className: toolbarActionClasses,
    title: iconDescription
  }, rest), tableToolbarActionIcon);
};

TableToolbarAction.propTypes = _objectSpread({
  children: PropTypes.node,
  className: PropTypes.string
}, isRequiredOneOf({
  /**
   * Optional prop to allow overriding the toolbar icon rendering.
   * Can be a React component class
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Specify the icon for the toolbar action
   */
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired
  }),

  /**
   * Specify the name of the icon for the toolbar action
   */
  iconName: PropTypes.string
}), {
  /**
   * Specify the description of the icon for the toolbar action
   */
  iconDescription: PropTypes.string.isRequired
});
export default TableToolbarAction;