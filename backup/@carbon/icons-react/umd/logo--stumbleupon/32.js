(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@carbon/icon-helpers'), require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@carbon/icon-helpers', 'prop-types', 'react'], factory) :
  (global.LogoStumbleupon32 = factory(global.CarbonIconHelpers,global.PropTypes,global.React));
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
  var LogoStumbleupon32 = React.forwardRef(function (_ref, ref) {
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
      d: 'M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm-.09 10.45a.84.84 0 0 0-.84.84v5.14a3.55 3.55 0 0 1-7.1 0v-2.34h2.71v2.24a.84.84 0 0 0 1.68 0v-5a3.55 3.55 0 0 1 7.09 0v1l-1.58.51-1.12-.51v-1a.85.85 0 0 0-.84-.88zm7.93 6a3.55 3.55 0 0 1-7.09 0v-2.31l1.12.51 1.58-.51v2.29a.84.84 0 0 0 1.68 0v-2.24h2.71z'
    }));
  });
  LogoStumbleupon32.displayName = 'LogoStumbleupon32';
  LogoStumbleupon32.propTypes = {
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
  LogoStumbleupon32.defaultProps = {
    width: 32,
    height: 32,
    viewBox: '0 0 32 32',
    xmlns: 'http://www.w3.org/2000/svg',
    preserveAspectRatio: 'xMidYMid meet'
  };

  return LogoStumbleupon32;

})));
