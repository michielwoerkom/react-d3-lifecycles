function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { settings } from 'carbon-components';
import { componentsX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;

var ProgressIndicatorSkeleton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressIndicatorSkeleton, _React$Component);

  function ProgressIndicatorSkeleton() {
    _classCallCheck(this, ProgressIndicatorSkeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressIndicatorSkeleton).apply(this, arguments));
  }

  _createClass(ProgressIndicatorSkeleton, [{
    key: "render",
    value: function render() {
      var currentSvg = componentsX ? React.createElement("svg", null, React.createElement("path", {
        d: "M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0"
      })) : React.createElement("svg", null, React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12"
      }), React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "6"
      }));
      var step = React.createElement("li", {
        className: "".concat(prefix, "--progress-step ").concat(prefix, "--progress-step--incomplete")
      }, React.createElement("div", {
        className: "".concat(prefix, "--progress-step-button ").concat(prefix, "--progress-step-button--unclickable")
      }, currentSvg, React.createElement("p", {
        className: "".concat(prefix, "--progress-label")
      }), React.createElement("span", {
        className: "".concat(prefix, "--progress-line")
      })));
      return React.createElement("ul", {
        className: "".concat(prefix, "--progress ").concat(prefix, "--skeleton")
      }, step, step, step, step);
    }
  }]);

  return ProgressIndicatorSkeleton;
}(React.Component);

export { ProgressIndicatorSkeleton as default };