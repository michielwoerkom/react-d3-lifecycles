"use strict";

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _AccordionItem = _interopRequireDefault(require("../AccordionItem"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/chevron--right/16"));

var _FeatureFlags = require("../../internal/FeatureFlags");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('AccordionItem', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_AccordionItem.default, {
      title: "A heading",
      className: "extra-class"
    }, "Lorem ipsum."));
    it('renders children as expected', function () {
      expect(wrapper.find('.bx--accordion__content').text()).toBe('Lorem ipsum.');
    });
    it('renders heading as expected', function () {
      var heading = wrapper.find('.bx--accordion__heading');
      var icon = _FeatureFlags.componentsX ? _.default : _Icon.default;
      expect(heading.length).toBe(1);
      expect(heading.find(icon).length).toBe(1);
      expect(heading.find('.bx--accordion__title').text()).toBe('A heading');
    });
    it('should use correct icon', function () {
      var heading = wrapper.find('.bx--accordion__heading');

      if (_FeatureFlags.componentsX) {
        expect(heading.find(_.default).length).toBe(1);
      } else {
        expect(heading.find(_Icon.default).props().icon).toEqual(_carbonIcons.iconChevronRight);
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
      var openItem = (0, _enzyme.shallow)(_react.default.createElement(_AccordionItem.default, {
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
      var openItem = (0, _enzyme.shallow)(_react.default.createElement(_AccordionItem.default, {
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
      var toggler = (0, _enzyme.mount)(_react.default.createElement(_AccordionItem.default, null));
      var item = toggler.find('li');
      expect(item.hasClass('bx--accordion__item--active')).toEqual(false);
      toggler.setState({
        open: true
      });
      expect(toggler.find('li').hasClass('bx--accordion__item--active')).toEqual(true);
    });
  });
  describe('Renders a node title as expected', function () {
    var titleNode = (0, _enzyme.shallow)(_react.default.createElement("h2", {
      className: "TitleClass"
    }, _react.default.createElement("img", {
      src: "some_image.png",
      alt: "Something"
    }), "A heading"));
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_AccordionItem.default, {
      title: titleNode,
      className: "extra-class"
    }, "Lorem ipsum."));
    it('renders heading as expected', function () {
      var heading = wrapper.find('.bx--accordion__heading');
      expect(heading.length).toBe(1);
      expect(heading.find(_FeatureFlags.componentsX ? _.default : _Icon.default).length).toBe(1);
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
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_AccordionItem.default, {
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
    var toggler = (0, _enzyme.mount)(_react.default.createElement(_AccordionItem.default, {
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
      toggler = (0, _enzyme.mount)(_react.default.createElement(_AccordionItem.default, {
        title: "A heading"
      }, "Lorem ipsum.", _react.default.createElement("input", {
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