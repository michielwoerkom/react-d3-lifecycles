"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var prefix = _carbonComponents.settings.prefix;

var RadioButtonSkeleton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioButtonSkeleton, _React$Component);

  function RadioButtonSkeleton() {
    _classCallCheck(this, RadioButtonSkeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioButtonSkeleton).apply(this, arguments));
  }

  _createClass(RadioButtonSkeleton, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--radio-button-wrapper"), {
        radioButtonWrapper: !_FeatureFlags.breakingChangesX
      });
      return _react.default.createElement("div", {
        className: wrapperClasses
      }, _react.default.createElement("div", {
        className: "".concat(prefix, "--radio-button ").concat(prefix, "--skeleton")
      }),
      /* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
      _react.default.createElement("label", {
        className: "".concat(prefix, "--radio-button__label ").concat(prefix, "--skeleton"),
        htmlFor: id
      }));
    }
  }]);

  return RadioButtonSkeleton;
}(_react.default.Component);

exports.default = RadioButtonSkeleton;