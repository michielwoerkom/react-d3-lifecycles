function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
import { settings } from 'carbon-components';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { AriaLabelPropType } from '../../prop-types/AriaPropTypes';
import SideNavFooter from './SideNavFooter';
var prefix = settings.prefix;
var translations = {
  'carbon.sidenav.state.open': 'Close',
  'carbon.sidenav.state.closed': 'Open'
};

function translateById(id) {
  return translations[id];
}

var SideNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNav, _React$Component);

  function SideNav(props) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNav).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleExpand", function () {
      _this.setState(function (state) {
        return {
          isExpanded: !state.isExpanded
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFocus", function () {
      _this.setState(function (state) {
        if (!state.isFocused) {
          return {
            isFocused: true
          };
        }

        return null;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBlur", function () {
      _this.setState(function (state) {
        if (state.isFocused) {
          return {
            isFocused: false
          };
        }

        return null;
      });
    });

    _this.state = {
      prevIsExpanded: props.isExpanded,
      isExpanded: props.isExpanded,
      isFocused: false
    };
    return _this;
  }

  _createClass(SideNav, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          ariaLabelledBy = _this$props['aria-labelledby'],
          children = _this$props.children,
          customClassName = _this$props.className,
          t = _this$props.translateById;
      var _this$state = this.state,
          isExpanded = _this$state.isExpanded,
          isFocused = _this$state.isFocused;
      var accessibilityLabel = {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy
      };
      var assistiveText = isExpanded || isFocused ? t('carbon.sidenav.state.open') : t('carbon.sidenav.state.closed');
      var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav--expanded"), isExpanded || isFocused), _defineProperty(_cx, customClassName, !!customClassName), _cx));
      return React.createElement("nav", _extends({
        className: "".concat(prefix, "--side-nav__navigation ").concat(className)
      }, accessibilityLabel, {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }), children, React.createElement(SideNavFooter, {
        assistiveText: assistiveText,
        isExpanded: isExpanded,
        onToggle: this.handleExpand
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var isExpanded = _ref.isExpanded;
      return state && state.prevIsExpanded === isExpanded ? null : {
        prevIsExpanded: isExpanded,
        isExpanded: isExpanded
      };
    }
  }]);

  return SideNav;
}(React.Component);

_defineProperty(SideNav, "propTypes", _objectSpread({
  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  isExpanded: PropTypes.bool
}, AriaLabelPropType, {
  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Provide a custom function for translating all message ids within this
   * component. This function will take in two arguments: the mesasge Id and the
   * state of the component. From this, you should return a string representing
   * the label you want displayed or read by screen readers.
   */
  translateById: PropTypes.func
}));

_defineProperty(SideNav, "defaultProps", {
  translateById: translateById,
  isExpanded: false
});

export { SideNav as default };