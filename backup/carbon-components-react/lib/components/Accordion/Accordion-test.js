"use strict";

var _react = _interopRequireDefault(require("react"));

var _Accordion = _interopRequireDefault(require("../Accordion"));

var _Accordion2 = _interopRequireDefault(require("../Accordion/Accordion.Skeleton"));

var _SkeletonText = _interopRequireDefault(require("../SkeletonText"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('Accordion', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Accordion.default, {
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "child"
    }, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--accordion')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('AccordionSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Accordion2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--accordion')).toEqual(true);
    });
    it('Renders first item as expected', function () {
      expect(wrapper.contains(_react.default.createElement(_SkeletonText.default, {
        width: "90%"
      }))).toEqual(true);
    });
    it('Renders without opened item', function () {
      var noOpenedItem = (0, _enzyme.shallow)(_react.default.createElement(_Accordion2.default, {
        open: false
      }));
      expect(noOpenedItem.contains(_react.default.createElement(_SkeletonText.default, {
        width: "90%"
      }))).toEqual(false);
    });
    it('Renders number of items as expected', function () {
      var fullWrapper = (0, _enzyme.mount)(_react.default.createElement(_Accordion2.default, null));
      expect(fullWrapper.find('.bx--accordion__item')).toHaveLength(4);
    });
    it('Renders custom number of items', function () {
      var fullWrapper = (0, _enzyme.mount)(_react.default.createElement(_Accordion2.default, {
        count: 8
      }));
      expect(fullWrapper.find('.bx--accordion__item')).toHaveLength(8);
    });
  });
});