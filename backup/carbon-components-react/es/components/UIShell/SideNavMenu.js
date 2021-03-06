function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import ChevronDown20 from '@carbon/icons-react/lib/chevron--down/20';
import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SideNavIcon from './SideNavIcon';
var prefix = settings.prefix;
export var SideNavMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavMenu, _React$Component);

  function SideNavMenu(props) {
    var _this;

    _classCallCheck(this, SideNavMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleExpand", function () {
      _this.setState(function (state) {
        return {
          isExpanded: !state.isExpanded
        };
      });
    });

    _this.state = {
      isExpanded: props.defaultExpanded || false
    };
    return _this;
  }

  _createClass(SideNavMenu, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          buttonRef = _this$props.buttonRef,
          customClassName = _this$props.className,
          children = _this$props.children,
          icon = _this$props.icon,
          isActive = _this$props.isActive,
          title = _this$props.title;
      var isExpanded = this.state.isExpanded;
      var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav__item"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav__item--active"), isActive), _defineProperty(_cx, customClassName, !!customClassName), _cx));
      return React.createElement("li", {
        className: className
      }, React.createElement("button", {
        "aria-haspopup": "true",
        "aria-expanded": isExpanded,
        className: "".concat(prefix, "--side-nav__submenu"),
        onClick: this.handleToggleExpand,
        ref: buttonRef,
        type: "button"
      }, React.createElement(SideNavIcon, null, icon), React.createElement("span", {
        className: "".concat(prefix, "--side-nav__submenu-title")
      }, title), React.createElement(SideNavIcon, {
        className: "".concat(prefix, "--side-nav__submenu-chevron"),
        small: true
      }, React.createElement(ChevronDown20, null))), React.createElement("ul", {
        className: "".concat(prefix, "--side-nav__menu"),
        role: "menu"
      }, children));
    }
  }]);

  return SideNavMenu;
}(React.Component);

_defineProperty(SideNavMenu, "propTypes", {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide <SideNavMenuItem>'s inside of the `SideNavMenu`
   */
  children: PropTypes.node,

  /**
   * Pass in a custom icon to render next to the `SideNavMenu` title
   */
  icon: PropTypes.node.isRequired,

  /**
   * Specify whether the `SideNavMenu` is "active". `SideNavMenu` should be
   * considered active if one of its menu items are a link for the current
   * page.
   */
  isActive: PropTypes.bool,

  /**
   * Provide the text for the overall menu name
   */
  title: PropTypes.string.isRequired,

  /**
   * Specify whether the menu should default to expanded. By default, it will
   * be closed.
   */
  defaultExpanded: PropTypes.bool
});

_defineProperty(SideNavMenu, "defaultProps", {
  defaultExpanded: false,
  isActive: false
});

export default React.forwardRef(function (props, ref) {
  return React.createElement(SideNavMenu, _extends({}, props, {
    buttonRef: ref
  }));
});