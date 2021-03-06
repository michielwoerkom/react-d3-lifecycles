"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccordionSkeleton;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _SkeletonText = _interopRequireDefault(require("../SkeletonText"));

var _carbonIcons = require("carbon-icons");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/chevron--right/16"));

var _carbonComponents = require("carbon-components");

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;

function AccordionSkeleton(props) {
  var Item = function Item() {
    return _react.default.createElement("li", {
      className: "".concat(prefix, "--accordion__item")
    }, _react.default.createElement("button", {
      type: "button",
      className: "".concat(prefix, "--accordion__heading")
    }, _FeatureFlags.componentsX ? _react.default.createElement(_.default, {
      className: "".concat(prefix, "--accordion__arrow")
    }) : _react.default.createElement(_Icon.default, {
      className: "".concat(prefix, "--accordion__arrow"),
      icon: _carbonIcons.iconChevronRight
    }), _react.default.createElement(_SkeletonText.default, {
      className: "".concat(prefix, "--accordion__title")
    })));
  };

  return _react.default.createElement("ul", {
    className: "".concat(prefix, "--accordion ").concat(prefix, "--skeleton")
  }, props.open ? _react.default.createElement("li", {
    className: "".concat(prefix, "--accordion__item ").concat(prefix, "--accordion__item--active")
  }, _react.default.createElement("button", {
    type: "button",
    className: "".concat(prefix, "--accordion__heading")
  }, _FeatureFlags.componentsX ? _react.default.createElement(_.default, {
    className: "".concat(prefix, "--accordion__arrow")
  }) : _react.default.createElement(_Icon.default, {
    className: "".concat(prefix, "--accordion__arrow"),
    icon: _carbonIcons.iconChevronRight
  }), _react.default.createElement(_SkeletonText.default, {
    className: "".concat(prefix, "--accordion__title")
  })), _react.default.createElement("div", {
    className: "".concat(prefix, "--accordion__content")
  }, _react.default.createElement(_SkeletonText.default, {
    width: "90%"
  }), _react.default.createElement(_SkeletonText.default, {
    width: "80%"
  }), _react.default.createElement(_SkeletonText.default, {
    width: "95%"
  }))) : _react.default.createElement(Item, null), Array.from({
    length: props.count ? props.count - 1 : AccordionSkeleton.defaultProps.count
  }).map(function (v, i) {
    return _react.default.createElement(Item, {
      key: "skeleton-accordion-item-".concat(props.uid, "-").concat(i)
    });
  }));
}

AccordionSkeleton.propTypes = {
  /**
   * `false` to not display the first item opened
   */
  open: _propTypes.default.bool,

  /**
   * Set number of items to render
   */
  count: _propTypes.default.number,

  /**
   * Set unique identifier to generate unique item keys
   */
  uid: _propTypes.default.any
};
AccordionSkeleton.defaultProps = {
  open: true,
  count: 4,
  uid: ''
};