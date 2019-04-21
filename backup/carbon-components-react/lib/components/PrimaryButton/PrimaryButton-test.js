"use strict";

var _react = _interopRequireDefault(require("react"));

var _PrimaryButton = _interopRequireDefault(require("../PrimaryButton"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/search/16"));

var _carbonIcons = require("carbon-icons");

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('PrimaryButton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_PrimaryButton.default, {
      small: true,
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "child"
    }, "Test"), _react.default.createElement("div", {
      className: "child"
    }, "Test")));
    it('Renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(2);
      expect(wrapper.find('svg').length).toBe(0);
    });
    it('Renders wrapper as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('Has the expected kind set to "primary"', function () {
      expect(wrapper.props().kind).toEqual('primary');
    });
    it('Has the expected small property set to true', function () {
      expect(wrapper.props().small).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    describe('Renders icon buttons', function () {
      var iconButton = (0, _enzyme.mount)(_react.default.createElement(_PrimaryButton.default, {
        icon: !_FeatureFlags.componentsX && _carbonIcons.iconSearch,
        renderIcon: _FeatureFlags.componentsX && _.default,
        iconDescription: "Search"
      }, "Search"));
      var icon = iconButton.find('svg');
      it('should have the appropriate icon', function () {
        expect(icon.hasClass('bx--btn__icon')).toBe(true);
      });
    });
  });
});