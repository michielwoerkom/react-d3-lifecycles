(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@carbon/icon-helpers'), require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@carbon/icon-helpers', 'prop-types', 'react'], factory) :
  (global.Accessibility24 = factory(global.CarbonIconHelpers,global.PropTypes,global.React));
}(this, (function (iconHelpers,PropTypes,React) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  var defaultStyle = {
    "willChange": "transform"
  };
  var Accessibility24 = React.forwardRef(function (_ref, ref) {
    var className = _ref.className,
        children = _ref.children,
        style = _ref.style,
        tabIndex = _ref.tabIndex,
        rest = _objectWithoutProperties(_ref, ["className", "children", "style", "tabIndex"]);

    var _getAttributes = iconHelpers.getAttributes(_objectSpread({}, rest, {
      tabindex: tabIndex
    })),
        tabindex = _getAttributes.tabindex,
        props = _objectWithoutProperties(_getAttributes, ["tabindex"]);

    if (className) {
      props.className = className;
    }

    if (tabindex !== undefined && tabindex !== null) {
      props.tabIndex = tabindex;
    }

    if (_typeof(style) === 'object') {
      props.style = _objectSpread({}, defaultStyle, style);
    } else {
      props.style = defaultStyle;
    }

    if (ref) {
      props.ref = ref;
    }

    return React.createElement('svg', props, children, React.createElement('path', {
      d: 'M29.55 26.11l-3.05 1.52L23.66 21H15a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v4h7v-2h-5v-2a4 4 0 0 0-8 0v1a9 9 0 1 0 8.77 11h-2.06A7 7 0 1 1 11 16v3a4 4 0 0 0 4 4h7.34l3.16 7.37 4.95-2.48zM15.5 8A3.5 3.5 0 1 1 19 4.5 3.5 3.5 0 0 1 15.5 8zm0-5A1.5 1.5 0 1 0 17 4.5 1.5 1.5 0 0 0 15.5 3z'
    }));
  });
  Accessibility24.displayName = 'Accessibility24';
  Accessibility24.propTypes = {
    'aria-hidden': PropTypes.bool,
    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.number,
    preserveAspectRatio: PropTypes.string,
    tabIndex: PropTypes.string,
    viewBox: PropTypes.string,
    width: PropTypes.number,
    xmlns: PropTypes.string
  };
  Accessibility24.defaultProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 32 32',
    xmlns: 'http://www.w3.org/2000/svg',
    preserveAspectRatio: 'xMidYMid meet'
  };

  return Accessibility24;

})));
