/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { iconChevronRight } from 'carbon-icons';
import AccordionItem from '../AccordionItem';
import Icon from '../Icon';
import ChevronRight16 from '@carbon/icons-react/lib/chevron--right/16';
import { componentsX } from '../../internal/FeatureFlags';
import { shallow, mount } from 'enzyme';
describe('AccordionItem', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(AccordionItem, {
      title: "A heading",
      className: "extra-class"
    }, "Lorem ipsum."));
    it('renders children as expected', function () {
      expect(wrapper.find('.bx--accordion__content').text()).toBe('Lorem ipsum.');
    });
    it('renders heading as expected', function () {
      var heading = wrapper.find('.bx--accordion__heading');
      var icon = componentsX ? ChevronRight16 : Icon;
      expect(heading.length).toBe(1);
      expect(heading.find(icon).length).toBe(1);
      expect(heading.find('.bx--accordion__title').text()).toBe('A heading');
    });
    it('should use correct icon', function () {
      var heading = wrapper.find('.bx--accordion__heading');

      if (componentsX) {
        expect(heading.find(ChevronRight16).length).toBe(1);
      } else {
        expect(heading.find(Icon).props().icon).toEqual(iconChevronRight);
      }
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--accordion__item')).toEqual(true);
      expect(wrapper.hasClass('bx--accordion__item--active')).toEqual(false);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('changes the open state upon change in props', function () {
      var openItem = shallow(React.createElement(AccordionItem, {
        title: "A heading",
        open: true
      }, "Lorem ipsum."));
      expect(openItem.hasClass('bx--accordion__item--active')).toEqual(true);
      expect(openItem.state().open).toEqual(true);
      openItem.setState({
        open: true
      });
      openItem.setProps({
        open: false
      });
      expect(openItem.state().open).toEqual(false);
    });
    it('avoids change the open state upon setting props, unless the value actually changes', function () {
      var openItem = shallow(React.createElement(AccordionItem, {
        title: "A heading",
        open: true
      }, "Lorem ipsum."));
      openItem.setState({
        open: false
      });
      openItem.setProps({
        open: true
      });
      expect(openItem.state().open).toEqual(false);
    });
    it('should apply the active class when the state is open', function () {
      var toggler = mount(React.createElement(AccordionItem, null));
      var item = toggler.find('li');
      expect(item.hasClass('bx--accordion__item--active')).toEqual(false);
      toggler.setState({
        open: true
      });
      expect(toggler.find('li').hasClass('bx--accordion__item--active')).toEqual(true);
    });
  });
  describe('Renders a node title as expected', function () {
    var titleNode = shallow(React.createElement("h2", {
      className: "TitleClass"
    }, React.createElement("img", {
      src: "some_image.png",
      alt: "Something"
    }), "A heading"));
    var wrapper = shallow(React.createElement(AccordionItem, {
      title: titleNode,
      className: "extra-class"
    }, "Lorem ipsum."));
    it('renders heading as expected', function () {
      var heading = wrapper.find('.bx--accordion__heading');
      expect(heading.length).toBe(1);
      expect(heading.find(componentsX ? ChevronRight16 : Icon).length).toBe(1);
      var title = heading.find('.bx--accordion__title');
      expect(title.text()).toBe('A heading');
      expect(title.find('h2').exists()).toEqual(true);
      expect(title.find('h2').hasClass('TitleClass')).toEqual(true);
      expect(title.find('img').exists()).toEqual(true);
      expect(title.find('img').props()).toEqual({
        alt: 'Something',
        src: 'some_image.png'
      });
    });
  });
  describe('Check that functions passed in as props are called', function () {
    var onClick = jest.fn();
    var onHeadingClick = jest.fn();
    var wrapper = mount(React.createElement(AccordionItem, {
      onClick: onClick,
      onHeadingClick: onHeadingClick
    }));
    var heading = wrapper.find('button.bx--accordion__heading');
    it('should call onClick', function () {
      wrapper.simulate('click');
      expect(onClick).toBeCalled();
    });
    it('should call onHeadingClick', function () {
      heading.simulate('click');
      expect(onHeadingClick).toBeCalled();
    });
  });
  describe('Check that clicking the item toggles its open state', function () {
    var toggler = mount(React.createElement(AccordionItem, {
      title: "A heading"
    }, "Lorem ipsum."));
    var heading = toggler.find('button.bx--accordion__heading');
    it('should set state to open when clicked', function () {
      expect(toggler.state().open).toEqual(false);
      heading.simulate('click');
      expect(toggler.state().open).toEqual(true);
    });
  });
  describe('Check that the keyboard toggles its open state', function () {
    var toggler;
    var heading;
    beforeEach(function () {
      toggler = mount(React.createElement(AccordionItem, {
        title: "A heading"
      }, "Lorem ipsum.", React.createElement("input", {
        className: "testInput"
      })));
      heading = toggler.find('button.bx--accordion__heading');
    });
    it('should close open AccordionItem when using Esc', function () {
      toggler.setState({
        open: true
      });
      heading.simulate('keydown', {
        which: 27
      });
      expect(toggler.state().open).toEqual(false);
    });
    it('should not close if Esc keypress is made in a child element', function () {
      toggler.setState({
        open: true
      });
      var input = toggler.find('.testInput');
      input.simulate('keydown', {
        which: 27
      });
      expect(toggler.state().open).toEqual(true);
    });
    afterEach(function () {
      toggler.setState({
        open: false
      });
    });
  });
});