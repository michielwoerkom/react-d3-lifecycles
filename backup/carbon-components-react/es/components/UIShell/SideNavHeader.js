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
import SideNavIcon from './SideNavIcon';
var prefix = settings.prefix;

var SideNavHeader = function SideNavHeader(_ref) {
  var customClassName = _ref.className,
      children = _ref.children,
      icon = _ref.icon;
  var className = cx("".concat(prefix, "--side-nav__header"), customClassName);
  return React.createElement("header", {
    className: className
  }, React.createElement(SideNavIcon, null, icon), children);
};

SideNavHeader.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide an icon to render in the header of the side navigation. Should be
   * an <svg> element.
   */
  icon: PropTypes.node.isRequired
};
export default SideNavHeader;