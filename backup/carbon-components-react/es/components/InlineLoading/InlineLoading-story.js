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

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import Button from '../Button';
import InlineLoading from '../InlineLoading';

var props = function props() {
  return {
    success: boolean('Loading successful state (success)', false),
    description: text('Loading progress description (description)', 'Loading data...'),
    successDelay: number('The duration for successful state before `onSuccess` fires (successDelay)', 1500),
    onSuccess: action('onSuccess')
  };
};

storiesOf('InlineLoading', module).addDecorator(withKnobs).add('Inline loading', function () {
  return React.createElement("div", null, React.createElement(InlineLoading, props()));
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
  }(PureComponent);

  return React.createElement(MockSubmission, null, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
        submitting = _ref.submitting,
        success = _ref.success;
    return React.createElement("div", {
      style: {
        display: 'flex',
        width: '300px'
      }
    }, React.createElement(Button, {
      kind: "secondary",
      disabled: submitting || success
    }, "Cancel"), submitting || success ? React.createElement(InlineLoading, {
      style: {
        marginLeft: '1rem'
      },
      description: "Submitting...",
      success: success
    }) : React.createElement(Button, {
      onClick: handleSubmit
    }, "Submit"));
  });
}, {
  info: {
    text: "\n            This is a full example of how to levarage the <InlineLoading /> component to create a nice user experience when submitting a form.\n    \n            For the full source code of this example, check out the 'story' panel below.\n          "
  }
});