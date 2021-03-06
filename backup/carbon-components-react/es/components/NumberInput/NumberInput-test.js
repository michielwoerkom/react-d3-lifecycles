/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { iconCaretUp, iconCaretDown } from 'carbon-icons';
import CaretDownGlyph from '@carbon/icons-react/lib/caret--down/index';
import CaretUpGlyph from '@carbon/icons-react/lib/caret--up/index';
import Icon from '../Icon';
import NumberInput from '../NumberInput';
import NumberInputSkeleton from '../NumberInput/NumberInput.Skeleton';
import { componentsX } from '../../internal/FeatureFlags';
describe('NumberInput', function () {
  describe('should render as expected', function () {
    var wrapper;
    var label;
    var numberInput;
    var container;
    var formItem;
    var icons;
    var helper;
    beforeEach(function () {
      wrapper = mount(React.createElement(NumberInput, {
        min: 0,
        max: 100,
        id: "test",
        label: "Number Input",
        className: "extra-class",
        invalidText: "invalid text",
        helperText: "testHelper",
        translateWithId:
        /*
          Simulates a condition where up/down button's hover over text matches `iconDescription` in `v10`,
          which is, when the translation for up/down button are not there
        */
        function translateWithId() {
          return undefined;
        }
      }));
      var iconTypes = !componentsX ? [Icon] : [CaretDownGlyph, CaretUpGlyph];
      label = wrapper.find('label');
      numberInput = wrapper.find('input');
      container = wrapper.find('.bx--number');
      formItem = wrapper.find('.bx--form-item');
      icons = wrapper.findWhere(function (n) {
        return iconTypes.includes(n.type());
      });
      helper = wrapper.find('.bx--form__helper-text');
    });
    describe('input', function () {
      it('renders a numberInput', function () {
        expect(numberInput.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(container.hasClass('bx--number bx--number--helpertext')).toEqual(true);
      });
      it('has renders with form-item wrapper', function () {
        expect(formItem.hasClass('bx--form-item')).toEqual(true);
      });
      it('applies extra classes via className', function () {
        expect(container.hasClass('extra-class')).toEqual(true);
      });
      it('should set a min as expected', function () {
        expect(numberInput.prop('min')).toEqual(0);
        wrapper.setProps({
          min: 10
        });
        expect(wrapper.find('input').prop('min')).toEqual(10);
      });
      it('should set a max as expected', function () {
        expect(numberInput.prop('max')).toEqual(100);
        wrapper.setProps({
          max: 10
        });
        expect(wrapper.find('input').prop('max')).toEqual(10);
      });
      it('should set step as expected', function () {
        expect(numberInput.prop('step')).toEqual(1);
        wrapper.setProps({
          step: 10
        });
        expect(wrapper.find('input').prop('step')).toEqual(10);
      });
      it('should set disabled as expected', function () {
        expect(numberInput.prop('disabled')).toEqual(false);
        wrapper.setProps({
          disabled: true
        });
        expect(wrapper.find('input').prop('disabled')).toEqual(true);
      });
      it('should set invalid as expected', function () {
        expect(container.prop('data-invalid')).toEqual(undefined);
        wrapper.setProps({
          invalid: true
        });
        expect(wrapper.find('.bx--number').prop('data-invalid')).toEqual(true);
      });
      it('should set invalidText as expected', function () {
        expect(wrapper.find('.bx--form-requirement').length).toEqual(0);
        wrapper.setProps({
          invalid: true
        });
        var invalidText = wrapper.find('.bx--form-requirement');
        expect(invalidText.length).toEqual(1);
        expect(invalidText.text()).toEqual('invalid text');
      });
      it('should specify light number input as expected', function () {
        expect(wrapper.find('NumberInput').props().light).toEqual(false);
        wrapper.setProps({
          light: true
        });
        expect(wrapper.find('NumberInput').props().light).toEqual(true);
      });
      it('should hide label as expected', function () {
        expect(numberInput.prop('min')).toEqual(0);
        wrapper.setProps({
          hideLabel: true
        });
        expect(wrapper.find('label').hasClass('bx--visually-hidden')).toEqual(true);
        expect(wrapper.find('.bx--number').hasClass('bx--number--nolabel')).toEqual(true);
      });
      describe('initial rendering', function () {
        var getWrapper = function getWrapper(min, max, value) {
          return mount(React.createElement(NumberInput, {
            min: min,
            max: max,
            value: value,
            id: "test",
            label: "Number Input",
            className: "extra-class"
          }));
        };

        var getNumberInput = function getNumberInput(wrapper) {
          return wrapper.find('input');
        };

        it('should set value as expected when value > min', function () {
          var wrapper = getWrapper(-1, 100, 0);
          var numberInput = getNumberInput(wrapper);
          expect(numberInput.prop('value')).toEqual(0);
        });
        it('should set value as expected when min === 0 and value > min', function () {
          var wrapper = getWrapper(0, 100, 1);
          var numberInput = getNumberInput(wrapper);
          expect(numberInput.prop('value')).toEqual(1);
        });
        it('should set value to equal min when value < min', function () {
          var wrapper = getWrapper(5, 100, 0);
          var numberInput = wrapper.find('input');
          expect(numberInput.prop('value')).toEqual(5);
        });
        it('should set value when min is undefined', function () {
          var wrapper = getWrapper(undefined, 100, 5);
          var numberInput = wrapper.find('input');
          expect(numberInput.prop('value')).toEqual(5);
        });
        it('should set invalidText when value is empty string', function () {
          // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component
          wrapper.find('NumberInput').instance().setState({
            value: ''
          });
          wrapper.update();
          var invalidText = wrapper.find('.bx--form-requirement');
          expect(invalidText.length).toEqual(1);
          expect(invalidText.text()).toEqual('invalid text');
        });
        it('allow empty string value', function () {
          // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component
          wrapper.find('NumberInput').instance().setState({
            value: ''
          });
          wrapper.update();
          wrapper.setProps({
            allowEmpty: true
          });
          var invalidText = wrapper.find('.bx--form-requirement');
          expect(invalidText.length).toEqual(0);
        });
        it('should change the value upon change in props', function () {
          wrapper.setProps({
            value: 1
          }); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

          wrapper.find('NumberInput').instance().setState({
            value: 1
          });
          wrapper.update();
          wrapper.setProps({
            value: 2
          }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

          expect(wrapper.find('NumberInput').instance().state.value).toEqual(2);
        });
        it('should avoid change the value upon setting props, unless there the value actually changes', function () {
          wrapper.setProps({
            value: 1
          }); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

          wrapper.find('NumberInput').instance().setState({
            value: 2
          });
          wrapper.update();
          wrapper.setProps({
            value: 1
          }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

          expect(wrapper.find('NumberInput').instance().state.value).toEqual(2);
        });
      });
    });
    describe('Icon', function () {
      it('renders two Icon components', function () {
        expect(icons.length).toEqual(2);
      });
      it('has the expected default iconDescription', function () {
        expect(wrapper.find('NumberInput').prop('iconDescription')).toEqual('choose a number');
      });
      it('should use correct icons', function () {
        if (!componentsX) {
          expect(icons.at(0).prop('icon')).toEqual(iconCaretUp);
          expect(icons.at(1).prop('icon')).toEqual(iconCaretDown);
        } else {
          expect(icons.at(0).type()).toBe(CaretUpGlyph);
          expect(icons.at(1).type()).toBe(CaretDownGlyph);
        }
      });
      it('adds new iconDescription when passed via props', function () {
        wrapper.setProps({
          iconDescription: 'new description'
        });
        expect(wrapper.prop('iconDescription')).toEqual('new description');
      });
      it('should have iconDescription match Icon component description prop', function () {
        var iconUpText = !componentsX ? wrapper.find('.up-icon title').text() : wrapper.find('button.up-icon').prop('title');
        var iconDownText = !componentsX ? wrapper.find('.down-icon title').text() : wrapper.find('button.down-icon').prop('title');
        var iconDescription = wrapper.find('NumberInput').prop('iconDescription');
        var matches = iconDescription === iconUpText && iconDescription === iconDownText;
        expect(matches).toEqual(true);
      });
    });
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass('bx--label')).toEqual(true);
      });
    });
    describe('helper', function () {
      it('renders a helper', function () {
        expect(helper.length).toEqual(1);
      });
      it('renders children as expected', function () {
        wrapper.setProps({
          helperText: React.createElement("span", null, "This helper text has ", React.createElement("a", {
            href: "#"
          }, "a link"), ".")
        });
        var renderedHelper = wrapper.find('.bx--form__helper-text');
        expect(renderedHelper.props().children).toEqual(React.createElement("span", null, "This helper text has ", React.createElement("a", {
          href: "#"
        }, "a link"), "."));
      });
      it('should set helper text as expected', function () {
        wrapper.setProps({
          helperText: 'Helper text'
        });
        expect(helper.text()).toEqual('Helper text');
      });
    });
  });
  describe('events', function () {
    describe('disabled numberInput', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = mount(React.createElement(NumberInput, {
        id: "test",
        onClick: onClick,
        onChange: onChange,
        disabled: true
      }));
      var input = wrapper.find('input');
      var upArrow = wrapper.find('button.up-icon');
      var downArrow = wrapper.find('button.down-icon');
      it('should be disabled when numberInput is disabled', function () {
        expect(upArrow.prop('disabled')).toEqual(true);
        expect(downArrow.prop('disabled')).toEqual(true);
      });
      it('should not invoke onClick when up arrow is clicked', function () {
        upArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onClick when down arrow is clicked', function () {
        downArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onChange when numberInput is changed', function () {
        input.simulate('change');
        expect(onChange).not.toBeCalled();
      });
    });
    describe('enabled numberInput', function () {
      var onClick;
      var onChange;
      var input;
      var upArrow;
      var downArrow;
      var wrapper;
      beforeEach(function () {
        onClick = jest.fn();
        onChange = jest.fn();
        wrapper = mount(React.createElement(NumberInput, {
          id: "test",
          onClick: onClick,
          onChange: onChange,
          min: 0,
          max: 100
        }));
        input = wrapper.find('input');
        upArrow = wrapper.find(!componentsX ? 'Icon.up-icon' : CaretUpGlyph).closest('button');
        downArrow = wrapper.find(!componentsX ? 'Icon.down-icon' : CaretDownGlyph).closest('button');
      });
      it('should invoke onClick when numberInput is clicked', function () {
        input.simulate('click');
        expect(onClick).toBeCalled();
      });
      it('should invoke onClick when up arrow is clicked', function () {
        upArrow.simulate('click');
        expect(onClick).toBeCalled();
        expect(onClick).toHaveBeenCalledWith(expect.anything(), 'up');
      });
      it('should only increase the value on up arrow click if value is less than max', function () {
        wrapper.setProps({
          value: 100
        });
        upArrow.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(100);
        expect(onClick).not.toBeCalled();
      });
      it('should only decrease the value on down arrow click if value is greater than min', function () {
        wrapper.setProps({
          value: 0
        });
        downArrow.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(0);
        expect(onClick).not.toBeCalled();
      });
      it('should increase by the value of step', function () {
        wrapper.setProps({
          step: 10,
          value: 0
        }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(0);
        upArrow.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(10);
      });
      it('should decrease by the value of step', function () {
        wrapper.setProps({
          step: 10,
          value: 100
        }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(100);
        downArrow.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(90);
      });
      it('should not invoke onClick when down arrow is clicked and value is 0', function () {
        downArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should invoke onClick when down arrow is clicked and value is above min', function () {
        wrapper.setProps({
          value: 1
        });
        downArrow.simulate('click');
        expect(onClick).toBeCalled();
        expect(onChange).toBeCalled();
        expect(onClick).toHaveBeenCalledWith(expect.anything(), 'down');
      });
      it('should invoke onChange when numberInput is changed', function () {
        input.simulate('change');
        expect(onChange).toBeCalled();
        expect(onChange).toHaveBeenCalledWith(expect.anything());
      });
    });
  });
});
describe('NumberInputSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(NumberInputSkeleton, null));
    var container = wrapper.find('.bx--number');
    var label = wrapper.find('.bx--label');
    it('has the expected classes', function () {
      expect(container.hasClass('bx--skeleton')).toEqual(true);
      expect(label.hasClass('bx--skeleton')).toEqual(true);
    });
  });
});