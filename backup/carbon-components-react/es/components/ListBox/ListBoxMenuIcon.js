var _defaultTranslations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { iconCaretDown } from 'carbon-icons';
import ChevronDown16 from '@carbon/icons-react/lib/chevron--down/16';
import { settings } from 'carbon-components';
import Icon from '../Icon';
import { componentsX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;
export var translationIds = {
  'close.menu': 'close.menu',
  'open.menu': 'open.menu'
};
var defaultTranslations = (_defaultTranslations = {}, _defineProperty(_defaultTranslations, translationIds['close.menu'], 'Close menu'), _defineProperty(_defaultTranslations, translationIds['open.menu'], 'Open menu'), _defaultTranslations);
/**
 * `ListBoxMenuIcon` is used to orient the icon up or down depending on the
 * state of the menu for a given `ListBox`
 */

var ListBoxMenuIcon = function ListBoxMenuIcon(_ref) {
  var _cx;

  var isOpen = _ref.isOpen,
      t = _ref.translateWithId;
  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--list-box__menu-icon"), true), _defineProperty(_cx, "".concat(prefix, "--list-box__menu-icon--open"), isOpen), _cx));
  var description = isOpen ? t('close.menu') : t('open.menu');
  return React.createElement("div", {
    className: className
  }, componentsX ? React.createElement(ChevronDown16, {
    name: "chevron--down",
    "aria-label": description
  }, React.createElement("title", null, description)) : React.createElement(Icon, {
    icon: iconCaretDown,
    description: description,
    alt: description,
    focusable: "false"
  }));
};

ListBoxMenuIcon.propTypes = {
  /**
   * Specify whether the menu is currently open, which will influence the
   * direction of the menu icon
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * i18n hook used to provide the appropriate description for the given menu
   * icon. This function takes in an id defined in `translationIds` and should
   * return a string message for that given message id.
   */
  translateWithId: PropTypes.func.isRequired
};
ListBoxMenuIcon.defaultProps = {
  translateWithId: function translateWithId(id) {
    return defaultTranslations[id];
  }
};
export default ListBoxMenuIcon;