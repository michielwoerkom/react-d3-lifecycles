"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _carbonComponents = require("carbon-components");

var _addonKnobs = require("@storybook/addon-knobs");

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/overflow-menu--vertical/16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
var directions = {
  'Bottom (bottom)': 'bottom',
  'Left (left)': 'left',
  'Top (top)': 'top',
  'Right (right)': 'right'
};
var props = {
  withIcon: function withIcon() {
    return {
      clickToOpen: (0, _addonKnobs.boolean)('Click to open (clickToOpen, using `false` here is deprecated)', true),
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: (0, _addonKnobs.text)('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tooltip>)', 0)
    };
  },
  withoutIcon: function withoutIcon() {
    return {
      clickToOpen: (0, _addonKnobs.boolean)('Click to open (clickToOpen, using `false` here is deprecated)', true),
      showIcon: false,
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: (0, _addonKnobs.text)('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tooltip>)', 0)
    };
  },
  customIcon: function customIcon() {
    return {
      showIcon: true,
      clickToOpen: (0, _addonKnobs.boolean)('Click to open (clickToOpen, using `false` here is deprecated)', true),
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: (0, _addonKnobs.text)('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tooltip>)', 0),
      renderIcon: _react.default.forwardRef(function (props, ref) {
        return _react.default.createElement("div", {
          style: {
            width: '10px',
            height: '10px',
            borderRadius: '5px',
            background: 'red'
          },
          ref: ref
        });
      })
    };
  },
  customIconOnly: function customIconOnly() {
    return {
      showIcon: true,
      clickToOpen: (0, _addonKnobs.boolean)('Click to open (clickToOpen, using `false` here is deprecated)', true),
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: null,
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tooltip>)', 0),
      renderIcon: _.default
    };
  }
};
(0, _react2.storiesOf)('Tooltip', module).addDecorator(_addonKnobs.withKnobs).add('default (bottom)', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.withIcon(), _react.default.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), _react.default.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, _react.default.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), _react.default.createElement("button", {
    className: "".concat(prefix, "--btn ").concat(prefix, "--btn--primary"),
    type: "button"
  }, "Create"))));
}, {
  info: {
    text: "\n            Tooltips are used to supply additional information to an element when hovering over it. By default,\n            the tooltip will render above the element. The example below shows the default scenario.\n          "
  }
}).add('no icon', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.withoutIcon(), _react.default.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), _react.default.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, _react.default.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), _react.default.createElement("button", {
    className: "".concat(prefix, "--btn ").concat(prefix, "--btn--primary"),
    type: "button"
  }, "Create"))));
}, {
  info: {
    text: "\n            Tooltips are used to supply additional information to an element when hovering over it. By default,\n            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('custom icon', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.customIcon(), _react.default.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), _react.default.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, _react.default.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), _react.default.createElement("button", {
    className: "".concat(prefix, "--btn ").concat(prefix, "--btn--primary"),
    type: "button"
  }, "Create"))));
}, {
  info: {
    text: "\n            Tooltips are used to supply additional information to an element when hovering over it. By default,\n            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('only custom icon', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.customIconOnly(), _react.default.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), _react.default.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, _react.default.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), _react.default.createElement("button", {
    className: "".concat(prefix, "--btn ").concat(prefix, "--btn--primary"),
    type: "button"
  }, "Create"))));
}, {
  info: {
    text: "\n            Tooltips are used to supply additional information to an element when hovering over it. By default,\n            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
});