"use strict";

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../Link"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('Link', function () {
  describe('Renders as expected', function () {
    var link = (0, _enzyme.shallow)(_react.default.createElement(_Link.default, {
      href: "www.google.com",
      className: "some-class"
    }, "A simple link"));
    it('should use the appropriate link class', function () {
      expect(link.hasClass('bx--link')).toEqual(true);
    });
    it('should inherit the href property', function () {
      expect(link.props().href).toEqual('www.google.com');
    });
    it('should include child content', function () {
      expect(link.text()).toEqual('A simple link');
    });
    it('should all for custom classes to be applied', function () {
      expect(link.hasClass('some-class')).toEqual(true);
    });
  });
});