"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Modal = _interopRequireDefault(require("../Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var props = function props() {
  return {
    className: 'some-class',
    open: (0, _addonKnobs.boolean)('Open (open)', true),
    passiveModal: (0, _addonKnobs.boolean)('Without footer (passiveModal)', false),
    danger: (0, _addonKnobs.boolean)('Danger mode (danger)', false),
    shouldSubmitOnEnter: (0, _addonKnobs.boolean)('Enter key to submit (shouldSubmitOnEnter)', false),
    modalHeading: (0, _addonKnobs.text)('Modal heading (modalHeading)', 'Modal heading'),
    modalLabel: (0, _addonKnobs.text)('Optional label (modalLabel)', 'Label'),
    modalAriaLabel: (0, _addonKnobs.text)('ARIA label (modalAriaLabel)', ''),
    primaryButtonText: (0, _addonKnobs.text)('Primary button text (primaryButtonText)', 'Primary Button'),
    secondaryButtonText: (0, _addonKnobs.text)('Secondary button text (secondaryButtonText)', 'Secondary Button'),
    selectorPrimaryFocus: (0, _addonKnobs.text)('Primary focus element selector (selectorPrimaryFocus)', '[data-modal-primary-focus]'),
    iconDescription: (0, _addonKnobs.text)('Close icon description (iconDescription)', 'Close the modal'),
    onBlur: (0, _addonActions.action)('onBlur'),
    onClick: (0, _addonActions.action)('onClick'),
    onFocus: (0, _addonActions.action)('onFocus'),
    onRequestClose: (0, _addonActions.action)('onRequestClose'),
    onRequestSubmit: (0, _addonActions.action)('onRequestSubmit'),
    onSecondarySubmit: (0, _addonActions.action)('onSecondarySubmit')
  };
};

(0, _react2.storiesOf)('Modal', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement(_Modal.default, props(), _react.default.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}, {
  info: {
    text: "\n            Modals communicate information via a secondary window and allow the user to maintain the context of a particular task.\n            Use the Modal Wrapper component to encapsulate your Modal within a button.\n          "
  }
});