/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { settings } from 'carbon-components';
import { withKnobs, boolean, select, text, number } from '@storybook/addon-knobs';
import Tooltip from '../Tooltip';
import OverflowMenuVertical16 from '@carbon/icons-react/lib/overflow-menu--vertical/16';
var prefix = settings.prefix;
var directions = {
  'Bottom (bottom)': 'bottom',
  'Left (left)': 'left',
  'Top (top)': 'top',
  'Right (right)': 'right'
};
var props = {
  withIcon: function withIcon() {
    return {
      clickToOpen: boolean('Click to open (clickToOpen, using `false` here is deprecated)', true),
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0)
    };
  },
  withoutIcon: function withoutIcon() {
    return {
      clickToOpen: boolean('Click to open (clickToOpen, using `false` here is deprecated)', true),
      showIcon: false,
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0)
    };
  },
  customIcon: function customIcon() {
    return {
      showIcon: true,
      clickToOpen: boolean('Click to open (clickToOpen, using `false` here is deprecated)', true),
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0),
      renderIcon: React.forwardRef(function (props, ref) {
        return React.createElement("div", {
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
      clickToOpen: boolean('Click to open (clickToOpen, using `false` here is deprecated)', true),
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: null,
      tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0),
      renderIcon: OverflowMenuVertical16
    };
  }
};
storiesOf('Tooltip', module).addDecorator(withKnobs).add('default (bottom)', function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Tooltip, props.withIcon(), React.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), React.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, React.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), React.createElement("button", {
    className: "".concat(prefix, "--btn ").concat(prefix, "--btn--primary"),
    type: "button"
  }, "Create"))));
}, {
  info: {
    text: "\n            Tooltips are used to supply additional information to an element when hovering over it. By default,\n            the tooltip will render above the element. The example below shows the default scenario.\n          "
  }
}).add('no icon', function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Tooltip, props.withoutIcon(), React.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), React.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, React.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), React.createElement("button", {
    className: "".concat(prefix, "--btn ").concat(prefix, "--btn--primary"),
    type: "button"
  }, "Create"))));
}, {
  info: {
    text: "\n            Tooltips are used to supply additional information to an element when hovering over it. By default,\n            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('custom icon', function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Tooltip, props.customIcon(), React.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), React.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, React.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), React.createElement("button", {
    className: "".concat(prefix, "--btn ").concat(prefix, "--btn--primary"),
    type: "button"
  }, "Create"))));
}, {
  info: {
    text: "\n            Tooltips are used to supply additional information to an element when hovering over it. By default,\n            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('only custom icon', function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Tooltip, props.customIconOnly(), React.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), React.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, React.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), React.createElement("button", {
    className: "".concat(prefix, "--btn ").concat(prefix, "--btn--primary"),
    type: "button"
  }, "Create"))));
}, {
  info: {
    text: "\n            Tooltips are used to supply additional information to an element when hovering over it. By default,\n            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
});