"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _carbonComponents = require("carbon-components");

var _carbonIcons = require("carbon-icons");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/add--filled/16"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/search/16"));

var _Button = _interopRequireDefault(require("../Button"));

var _Button2 = _interopRequireDefault(require("../Button/Button.Skeleton"));

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var icons = {
  None: 'None'
};

if (_FeatureFlags.breakingChangesX) {
  icons['Add with filled circle (iconAddSolid from `carbon-icons`)'] = 'iconAddSolid';
  icons['Search (iconSearch from `carbon-icons`)'] = 'iconSearch';
}

icons['Add with filled circle (AddFilled16 from `@carbon/icons`)'] = 'AddFilled16';
icons['Search (Search16 from `@carbon/icons`)'] = 'Search16';
var iconMap = {
  iconAddSolid: _carbonIcons.iconAddSolid,
  iconSearch: _carbonIcons.iconSearch,
  AddFilled16: _.default,
  Search16: _2.default
};
var kinds = {
  'Primary button (primary)': 'primary',
  'Secondary button (secondary)': 'secondary',
  'Danger button (danger)': 'danger',
  'Ghost button (ghost)': 'ghost'
};

if (!_FeatureFlags.componentsX) {
  kinds['Danger primary button (danger--primary)'] = 'danger--primary';
}

var props = {
  regular: function regular() {
    var iconToUse = iconMap[(0, _addonKnobs.select)('Icon (icon)', icons, 'none')];
    return {
      className: 'some-class',
      kind: (0, _addonKnobs.select)('Button kind (kind)', kinds, 'primary'),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      small: (0, _addonKnobs.boolean)('Small (small)', false),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      icon: !iconToUse || !iconToUse.svgData ? undefined : iconToUse,
      iconDescription: (0, _addonKnobs.text)('Icon description (iconDescription)', 'Button icon'),
      onClick: (0, _addonActions.action)('onClick'),
      onFocus: (0, _addonActions.action)('onFocus')
    };
  },
  set: function set() {
    var iconToUse = iconMap[(0, _addonKnobs.select)('Icon (icon)', icons, 'none')];
    return {
      className: 'some-class',
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      small: (0, _addonKnobs.boolean)('Small (small)', false),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      icon: !iconToUse || !iconToUse.svgData ? undefined : iconToUse,
      iconDescription: (0, _addonKnobs.text)('Icon description (iconDescription)', 'Button icon'),
      onClick: (0, _addonActions.action)('onClick'),
      onFocus: (0, _addonActions.action)('onFocus')
    };
  }
};

var CustomLink = function CustomLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["children", "href"]);

  return _react.default.createElement("a", _extends({
    href: href
  }, other), children);
};

(0, _react2.storiesOf)('Buttons', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  var regularProps = props.regular();
  return _react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, _react.default.createElement(_Button.default, _extends({}, regularProps, {
    className: "some-class"
  }), "Button"), "\xA0", _react.default.createElement(_Button.default, _extends({}, regularProps, {
    href: "#",
    className: "some-class"
  }), "Link"), "\xA0", _react.default.createElement(_Button.default, _extends({}, regularProps, {
    as: "p",
    href: "#",
    className: "some-class"
  }), "Element"), "\xA0", _react.default.createElement(_Button.default, _extends({}, regularProps, {
    as: CustomLink,
    href: "#",
    className: "some-class"
  }), "Custom component"));
}, {
  info: {
    text: "\n          Buttons are used to initialize an action, either in the background or\n          foreground of an experience.\n\n          There are several kinds of buttons.\n\n          Primary buttons should be used for the principle call to action\n          on the page.\n\n          Secondary buttons should be used for secondary actions on each page.\n\n          Danger buttons should be used for a negative action (such as Delete) on the page.\n\n          Modify the behavior of the button by changing its event properties.\n\n          Small buttons may be used when there is not enough space for a\n          regular sized button. This issue is most found in tables. Small button should have three words\n          or less.\n\n          When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are\n          always paired with text.\n        "
  }
}).add('Sets of Buttons', function () {
  var setProps = props.set();
  return _react.default.createElement("div", {
    className: "".concat(prefix, "--btn-set")
  }, _react.default.createElement(_Button.default, _extends({
    kind: "secondary"
  }, setProps), "Secondary button"), _react.default.createElement(_Button.default, _extends({
    kind: "primary"
  }, setProps), "Primary button"));
}, {
  info: {
    text: "\n          When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.\n        "
  }
}).add('skeleton', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Button2.default, null), "\xA0", _react.default.createElement(_Button2.default, {
    href: "#"
  }), "\xA0", _react.default.createElement(_Button2.default, {
    small: true
  }));
}, {
  info: {
    text: "\n          Placeholder skeleton state to use when content is loading.\n        "
  }
});