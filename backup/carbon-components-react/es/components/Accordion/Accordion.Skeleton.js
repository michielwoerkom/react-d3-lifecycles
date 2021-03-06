/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import SkeletonText from '../SkeletonText';
import { iconChevronRight } from 'carbon-icons';
import ChevronRight16 from '@carbon/icons-react/lib/chevron--right/16';
import { settings } from 'carbon-components';
import { componentsX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;
export default function AccordionSkeleton(props) {
  var Item = function Item() {
    return React.createElement("li", {
      className: "".concat(prefix, "--accordion__item")
    }, React.createElement("button", {
      type: "button",
      className: "".concat(prefix, "--accordion__heading")
    }, componentsX ? React.createElement(ChevronRight16, {
      className: "".concat(prefix, "--accordion__arrow")
    }) : React.createElement(Icon, {
      className: "".concat(prefix, "--accordion__arrow"),
      icon: iconChevronRight
    }), React.createElement(SkeletonText, {
      className: "".concat(prefix, "--accordion__title")
    })));
  };

  return React.createElement("ul", {
    className: "".concat(prefix, "--accordion ").concat(prefix, "--skeleton")
  }, props.open ? React.createElement("li", {
    className: "".concat(prefix, "--accordion__item ").concat(prefix, "--accordion__item--active")
  }, React.createElement("button", {
    type: "button",
    className: "".concat(prefix, "--accordion__heading")
  }, componentsX ? React.createElement(ChevronRight16, {
    className: "".concat(prefix, "--accordion__arrow")
  }) : React.createElement(Icon, {
    className: "".concat(prefix, "--accordion__arrow"),
    icon: iconChevronRight
  }), React.createElement(SkeletonText, {
    className: "".concat(prefix, "--accordion__title")
  })), React.createElement("div", {
    className: "".concat(prefix, "--accordion__content")
  }, React.createElement(SkeletonText, {
    width: "90%"
  }), React.createElement(SkeletonText, {
    width: "80%"
  }), React.createElement(SkeletonText, {
    width: "95%"
  }))) : React.createElement(Item, null), Array.from({
    length: props.count ? props.count - 1 : AccordionSkeleton.defaultProps.count
  }).map(function (v, i) {
    return React.createElement(Item, {
      key: "skeleton-accordion-item-".concat(props.uid, "-").concat(i)
    });
  }));
}
AccordionSkeleton.propTypes = {
  /**
   * `false` to not display the first item opened
   */
  open: PropTypes.bool,

  /**
   * Set number of items to render
   */
  count: PropTypes.number,

  /**
   * Set unique identifier to generate unique item keys
   */
  uid: PropTypes.any
};
AccordionSkeleton.defaultProps = {
  open: true,
  count: 4,
  uid: ''
};