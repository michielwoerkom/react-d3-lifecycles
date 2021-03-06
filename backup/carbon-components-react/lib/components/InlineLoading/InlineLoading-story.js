"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = _interopRequireDefault(require("../Button"));

var _InlineLoading = _interopRequireDefault(require("../InlineLoading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = function props() {
  return {
    success: (0, _addonKnobs.boolean)('Loading successful state (success)', false),
    description: (0, _addonKnobs.text)('Loading progress description (description)', 'Loading data...'),
    successDelay: (0, _addonKnobs.number)('The duration for successful state before `onSuccess` fires (successDelay)', 1500),
    onSuccess: (0, _addonActions.action)('onSuccess')
  };
};

(0, _react2.storiesOf)('InlineLoading', module).addDecorator(_addonKnobs.withKnobs).add('Inline loading', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_InlineLoading.default, props()));
}, {
  info: {
    text: "\n            Inline Loading spinners are used when creating, updating, or deleting an item.\n            They help notify users that their change is underway, with different states for 'loading' and 'success'.\n          "
  }
}).add('UX example', function () {
  var MockSubmission =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(MockSubmission, _PureComponent);

    function MockSubmission() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MockSubmission);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockSubmission)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        submitting: false,
        success: false
      });

      return _this;
    }

    _createClass(MockSubmission, [{
      key: "handleSubmit",
      value: function handleSubmit() {
        var _this2 = this;

        this.setState({
          submitting: true
        }); // Instead of making a real request, we mock it with a timer

        setTimeout(function () {
          _this2.setState({
            submitting: false,
            success: true
          }); // To make submittable again, we reset the state after a bit so the user gets completion feedback


          setTimeout(function () {
            return _this2.setState({
              success: false
            });
          }, 1500);
        }, 2000);
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        var _this$state = this.state,
            submitting = _this$state.submitting,
            success = _this$state.success;
        var handleSubmit = this.handleSubmit.bind(this);
        return children({
          handleSubmit: handleSubmit,
          submitting: submitting,
          success: success
        });
      }
    }]);

    return MockSubmission;
  }(_react.PureComponent);

  return _react.default.createElement(MockSubmission, null, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
        submitting = _ref.submitting,
        success = _ref.success;
    return _react.default.createElement("div", {
      style: {
        display: 'flex',
        width: '300px'
      }
    }, _react.default.createElement(_Button.default, {
      kind: "secondary",
      disabled: submitting || success
    }, "Cancel"), submitting || success ? _react.default.createElement(_InlineLoading.default, {
      style: {
        marginLeft: '1rem'
      },
      description: "Submitting...",
      success: success
    }) : _react.default.createElement(_Button.default, {
      onClick: handleSubmit
    }, "Submit"));
  });
}, {
  info: {
    text: "\n            This is a full example of how to levarage the <InlineLoading /> component to create a nice user experience when submitting a form.\n    \n            For the full source code of this example, check out the 'story' panel below.\n          "
  }
});