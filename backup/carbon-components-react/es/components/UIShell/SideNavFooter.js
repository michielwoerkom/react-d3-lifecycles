/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Close20 from '@carbon/icons-react/lib/close/20';
import ChevronRight20 from '@carbon/icons-react/lib/chevron--right/20';
import { settings } from 'carbon-components';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
var prefix = settings.prefix;
/**
 * SideNavFooter is used for rendering the button at the bottom of the side
 * navigation that is a part of the UI Shell. It is responsible for handling the
 * user interaction to expand or collapse the side navigation.
 */

var SideNavFooter = function SideNavFooter(_ref) {
  var assistiveText = _ref.assistiveText,
      customClassName = _ref.className,
      isExpanded = _ref.isExpanded,
      onToggle = _ref.onToggle;
  var className = cx("".concat(prefix, "--side-nav__footer"), customClassName);
  return React.createElement("footer", {
    className: className
  }, React.createElement("button", {
    className: "".concat(prefix, "--side-nav__toggle"),
    type: "button",
    onClick: onToggle,
    title: assistiveText
  }, React.createElement("div", {
    className: "".concat(prefix, "--side-nav__icon")
  }, isExpanded ? React.createElement(Close20, null) : React.createElement(ChevronRight20, null)), React.createElement("span", {
    className: "".concat(prefix, "--assistive-text")
  }, assistiveText)));
};

SideNavFooter.propTypes = {
  /**
   * Provide text to be read to screen readers and shown as a tooltip when
   * interacting with the toggle button in the footer
   */
  assistiveText: PropTypes.string.isRequired,

  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  isExpanded: PropTypes.bool.isRequired,

  /**
   * Provide a function that is called when the toggle button is interacted
   * with. Useful for controlling the expansion state of the side navigation.
   */
  onToggle: PropTypes.func.isRequired
};
SideNavFooter.defaultProps = {
  assistiveText: 'Toggle opening or closing the side navigation'
};
export default SideNavFooter;