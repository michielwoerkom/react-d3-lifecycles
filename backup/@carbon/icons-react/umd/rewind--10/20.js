(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@carbon/icon-helpers'), require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@carbon/icon-helpers', 'prop-types', 'react'], factory) :
  (global.Rewind_1020 = factory(global.CarbonIconHelpers,global.PropTypes,global.React));
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
  var Rewind_1020 = React.forwardRef(function (_ref, ref) {
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
      d: 'M4 18A12 12 0 1 0 16 6h-4V1L6 7l6 6V8h4A10 10 0 1 1 6 18z'
    }), React.createElement('path', {
      d: 'M19.63 22.13a2.84 2.84 0 0 1-1.28-.27 2.44 2.44 0 0 1-.89-.77 3.57 3.57 0 0 1-.52-1.25 7.69 7.69 0 0 1-.17-1.68 7.83 7.83 0 0 1 .17-1.68 3.65 3.65 0 0 1 .52-1.25 2.44 2.44 0 0 1 .89-.77 2.84 2.84 0 0 1 1.28-.27 2.44 2.44 0 0 1 2.16 1 5.23 5.23 0 0 1 .7 2.93 5.23 5.23 0 0 1-.7 2.93 2.44 2.44 0 0 1-2.16 1.08zm0-1.22a1.07 1.07 0 0 0 1-.55 3.38 3.38 0 0 0 .37-1.51v-1.38a3.31 3.31 0 0 0-.29-1.5 1.23 1.23 0 0 0-2.06 0 3.31 3.31 0 0 0-.29 1.5v1.38a3.38 3.38 0 0 0 .29 1.51 1.06 1.06 0 0 0 .98.55zm-9 1.09v-1.18h2v-5.19l-1.86 1-.55-1.06 2.32-1.3H14v6.5h1.78V22z'
    }));
  });
  Rewind_1020.displayName = 'Rewind_1020';
  Rewind_1020.propTypes = {
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
  Rewind_1020.defaultProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 32 32',
    xmlns: 'http://www.w3.org/2000/svg',
    preserveAspectRatio: 'xMidYMid meet'
  };

  return Rewind_1020;

})));
