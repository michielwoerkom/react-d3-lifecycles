"use strict";

var _react = _interopRequireDefault(require("react"));

var _ToggleSmall = _interopRequireDefault(require("../ToggleSmall"));

var _ToggleSmall2 = _interopRequireDefault(require("../ToggleSmall/ToggleSmall.Skeleton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('ToggleSmall', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ToggleSmall.default, {
      id: "toggle-1",
      ariaLabel: "test label"
    }));
    var input = wrapper.find('input');
    it('Switch and label Ids should match', function () {
      var toggleLabel = wrapper.find('.bx--toggle__label');
      expect(input.id).toEqual(toggleLabel.htmlFor);
    });
    it('should set defaultChecked as expected', function () {
      expect(input.props().defaultChecked).toEqual(false);
      wrapper.setProps({
        defaultToggled: true
      });
      expect(wrapper.find('input').props().defaultChecked).toEqual(true);
    });
    it('Can set defaultToggled state', function () {
      wrapper.setProps({
        defaultToggled: true
      });
      expect(wrapper.find('.bx--toggle').props().defaultChecked).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      wrapper.setProps({
        className: 'extra-class'
      });
      expect(wrapper.find('div').hasClass('extra-class')).toEqual(true);
    });
    it('Can be disabled', function () {
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.find('.bx--toggle').props().disabled).toEqual(true);
    });
  });
  it('toggled prop sets checked prop on input', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ToggleSmall.default, {
      id: "test",
      ariaLabel: "test label",
      toggled: true
    }));

    var input = function input() {
      return wrapper.find('input');
    };

    expect(input().props().checked).toEqual(true);
    wrapper.setProps({
      toggled: false
    });
    expect(input().props().checked).toEqual(false);
  });
  describe('events', function () {
    it('passes along onChange to <input>', function () {
      var onChange = jest.fn();
      var id = 'test-input';
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ToggleSmall.default, {
        ariaLabel: "test label",
        id: id,
        onChange: onChange
      }));
      var input = wrapper.find('input');
      var inputElement = input.instance();
      inputElement.checked = true;
      wrapper.find('input').simulate('change');
      expect(onChange.mock.calls.map(function (call) {
        return call.map(function (arg, i) {
          return i > 0 ? arg : arg.target;
        });
      })).toEqual([[inputElement]]);
    });
    it('should invoke onToggle with expected arguments', function () {
      var onToggle = jest.fn();
      var id = 'test-input';
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ToggleSmall.default, {
        ariaLabel: "test label",
        id: id,
        onToggle: onToggle
      }));
      var input = wrapper.find('input');
      var inputElement = input.instance();
      inputElement.checked = true;
      wrapper.find('input').simulate('change');
      var call = onToggle.mock.calls[0];
      expect(call[0]).toEqual(true);
      expect(call[1]).toEqual(id);
      expect(call[2].target).toBe(inputElement);
    });
  });
});
describe('ToggleSmallSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_ToggleSmall2.default, null));
    var input = wrapper.find('input');
    var toggleLabel = wrapper.find('.bx--toggle__label');
    it('Has the expected classes', function () {
      expect(input.hasClass('bx--skeleton')).toEqual(true);
      expect(input.hasClass('bx--toggle')).toEqual(true);
      expect(toggleLabel.hasClass('bx--skeleton')).toEqual(true);
    });
  });
});