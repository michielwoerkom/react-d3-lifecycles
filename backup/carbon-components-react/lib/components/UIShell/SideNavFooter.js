"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/close/20"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/chevron--right/20"));

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
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
  var className = (0, _classnames.default)("".concat(prefix, "--side-nav__footer"), customClassName);
  return _react.default.createElement("footer", {
    className: className
  }, _react.default.createElement("button", {
    className: "".concat(prefix, "--side-nav__toggle"),
    type: "button",
    onClick: onToggle,
    title: assistiveText
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--side-nav__icon")
  }, isExpanded ? _react.default.createElement(_.default, null) : _react.default.createElement(_2.default, null)), _react.default.createElement("span", {
    className: "".concat(prefix, "--assistive-text")
  }, assistiveText)));
};

SideNavFooter.propTypes = {
  /**
   * Provide text to be read to screen readers and shown as a tooltip when
   * interacting with the toggle button in the footer
   */
  assistiveText: _propTypes.default.string.isRequired,

  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  isExpanded: _propTypes.default.bool.isRequired,

  /**
   * Provide a function that is called when the toggle button is interacted
   * with. Useful for controlling the expansion state of the side navigation.
   */
  onToggle: _propTypes.default.func.isRequired
};
SideNavFooter.defaultProps = {
  assistiveText: 'Toggle opening or closing the side navigation'
};
var _default = SideNavFooter;
exports.default = _default;