"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _TooltipDefinition = _interopRequireDefault(require("../TooltipDefinition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var directions = {
  'Bottom (bottom)': 'bottom',
  'Top (top)': 'top'
};

var props = function props() {
  return {
    direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
    tooltipText: (0, _addonKnobs.text)('Tooltip content (tooltipText)', 'Brief description of the dotted, underlined word above.')
  };
};

(0, _react2.storiesOf)('TooltipDefinition', module).addDecorator(_addonKnobs.withKnobs).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_TooltipDefinition.default, props(), "Definition Tooltip"));
}, {
  info: {
    text: "\n            Definition Tooltip\n          "
  }
});