/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Close20 from '@carbon/icons-react/lib/close/20';
import Icon from '../Icon';
import Modal from '../Modal';
import ModalWrapper from '../ModalWrapper';
import { shallow, mount } from 'enzyme';
import { componentsX } from '../../internal/FeatureFlags'; // The modal is the 0th child inside the wrapper on account of focus-trap-react

var getModal = function getModal(wrapper) {
  return wrapper.childAt(0);
};

describe('Modal', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(Modal, {
      className: "extra-class"
    }));
    var mounted = mount(React.createElement(Modal, {
      className: "extra-class"
    }));
    it('has the expected classes', function () {
      expect(getModal(wrapper).hasClass('bx--modal')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(getModal(wrapper).hasClass('extra-class')).toEqual(true);
    });
    it('should not be a passive modal by default', function () {
      expect(getModal(wrapper).hasClass('bx--modal-tall')).toEqual(true);
    });
    it('should be a passive modal when passiveModal is passed', function () {
      wrapper.setProps({
        passiveModal: true
      });
      expect(getModal(wrapper).hasClass('bx--modal-tall')).toEqual(false);
    });
    it('should set id if one is passed via props', function () {
      var modal = shallow(React.createElement(Modal, {
        id: "modal-1"
      }));
      expect(getModal(modal).props().id).toEqual('modal-1');
    });
    it('has the expected default iconDescription', function () {
      expect(mounted.props().iconDescription).toEqual('close the modal');
    });
    it('adds new iconDescription when passed via props', function () {
      mounted.setProps({
        iconDescription: 'new description'
      });
      expect(mounted.props().iconDescription).toEqual('new description');
    });
    it('should have iconDescription match Icon component description prop', function () {
      var description = !componentsX ? mounted.find(Icon).props().description : mounted.find(Close20).props()['aria-label'];
      var matches = mounted.props().iconDescription === description;
      expect(matches).toEqual(true);
    });
    it('enables primary button by default', function () {
      var primaryButton = mounted.find('.bx--btn.bx--btn--primary').at(0);
      expect(primaryButton.prop('disabled')).toEqual(false);
    });
    it('disables primary button when diablePrimaryButton prop is passed', function () {
      mounted.setProps({
        primaryButtonDisabled: true
      });
      var primaryButton = mounted.find('.bx--btn.bx--btn--primary').at(0);
      expect(primaryButton.props().disabled).toEqual(true);
    });
  });
  describe('Adds props as expected to the right children', function () {
    it('should set label if one is passed via props', function () {
      var wrapper = shallow(React.createElement(Modal, {
        modalLabel: "modal-1"
      }));
      var label = wrapper.find('.bx--modal-header__label');
      expect(label.props().children).toEqual('modal-1');
    });
    it('should set modal heading if one is passed via props', function () {
      var wrapper = shallow(React.createElement(Modal, {
        modalHeading: "modal-1"
      }));
      var heading = wrapper.find('.bx--modal-header__heading');
      expect(heading.props().children).toEqual('modal-1');
    });
    it('should set button text if one is passed via props', function () {
      var wrapper = shallow(React.createElement(Modal, {
        primaryButtonText: "Submit",
        secondaryButtonText: "Cancel"
      }));
      var modalButtons = wrapper.find('.bx--modal-footer').props().children;
      expect(modalButtons[0].props.children).toEqual('Cancel');
      expect(modalButtons[1].props.children).toEqual('Submit');
    });
  });
  describe('events', function () {
    it('should set expected class when state is open', function () {
      var wrapper = mount(React.createElement(ModalWrapper, null));
      var modal = wrapper.find(Modal);
      var modalContainer = modal.find('.bx--modal');
      var openClass = 'is-visible';
      expect(modalContainer.hasClass(openClass)).not.toEqual(true);
      wrapper.setState({
        isOpen: true
      });
      expect(wrapper.find('.bx--modal').hasClass(openClass)).toEqual(true);
    });
    it('should set state to open when trigger button is clicked', function () {
      var wrapper = mount(React.createElement(ModalWrapper, null));
      var triggerBtn = wrapper.children().childAt(0);
      expect(wrapper.state('isOpen')).not.toEqual(true);
      triggerBtn.simulate('click');
      expect(wrapper.state('isOpen')).toEqual(true);
    });
    it('should set open state to false when close button is clicked', function () {
      var wrapper = mount(React.createElement(ModalWrapper, null));
      var modal = wrapper.find(Modal);
      var closeBtn = modal.find('.bx--modal-close');
      wrapper.setState({
        isOpen: true
      });
      expect(wrapper.state('isOpen')).toEqual(true);
      closeBtn.simulate('click');
      expect(wrapper.state('isOpen')).not.toEqual(true);
    });
    it('should stay open when "inner modal" is clicked', function () {
      var wrapper = mount(React.createElement(ModalWrapper, null));
      var modal = wrapper.find(Modal);
      var div = modal.find('.bx--modal-container');
      wrapper.setState({
        isOpen: true
      });
      div.simulate('click');
      expect(wrapper.state('isOpen')).toEqual(true);
    });
    it('should close when "outer modal" is clicked...not "inner modal"', function () {
      var wrapper = mount(React.createElement(ModalWrapper, null));
      var modal = wrapper.find(Modal);
      var div = modal.find('.bx--modal');
      wrapper.setState({
        isOpen: true
      });
      div.simulate('click');
      expect(wrapper.state('isOpen')).toEqual(false);
    });
    it('should handle close keyDown events', function () {
      var onRequestClose = jest.fn();
      var wrapper = mount(React.createElement(Modal, {
        onRequestClose: onRequestClose
      }));
      wrapper.simulate('keyDown', {
        which: 26
      });
      expect(onRequestClose).not.toBeCalled();
      wrapper.simulate('keyDown', {
        which: 27
      });
      expect(onRequestClose).toBeCalled();
    });
    it('should handle submit keyDown events with shouldSubmitOnEnter enabled', function () {
      var onRequestSubmit = jest.fn();
      var wrapper = mount(React.createElement(Modal, {
        onRequestSubmit: onRequestSubmit,
        shouldSubmitOnEnter: true
      }));
      wrapper.simulate('keyDown', {
        which: 14
      });
      expect(onRequestSubmit).not.toBeCalled();
      wrapper.simulate('keyDown', {
        which: 13
      });
      expect(onRequestSubmit).toBeCalled();
    });
    it('should not handle submit keyDown events with shouldSubmitOnEnter not enabled', function () {
      var onRequestSubmit = jest.fn();
      var wrapper = mount(React.createElement(Modal, {
        onRequestSubmit: onRequestSubmit
      }));
      wrapper.simulate('keyDown', {
        which: 14
      });
      expect(onRequestSubmit).not.toBeCalled();
      wrapper.simulate('keyDown', {
        which: 13
      });
      expect(onRequestSubmit).not.toBeCalled();
    });
    it('should close by default on secondary button click', function () {
      var onRequestClose = jest.fn();
      var modal = mount(React.createElement(Modal, {
        onRequestClose: onRequestClose
      }));
      var secondaryBtn = modal.find('.bx--btn--secondary');
      secondaryBtn.simulate('click');
      expect(onRequestClose).toBeCalled();
    });
    it('should handle custom secondary button events', function () {
      var onSecondarySubmit = jest.fn();
      var modal = mount(React.createElement(Modal, {
        onSecondarySubmit: onSecondarySubmit
      }));
      var secondaryBtn = modal.find('.bx--btn--secondary');
      secondaryBtn.simulate('click');
      expect(onSecondarySubmit).toBeCalled();
    });
  });
});
describe('Modal Wrapper', function () {
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(ModalWrapper, null));
    it('should default to primary button', function () {
      expect(wrapper.find('.bx--btn--primary').length).toEqual(2);
    });
    it('should render ghost button when ghost is passed', function () {
      wrapper.setProps({
        triggerButtonKind: 'ghost'
      });
      expect(wrapper.find('.bx--btn--ghost').length).toEqual(1);
    });
    it('should render danger button when danger is passed', function () {
      wrapper.setProps({
        triggerButtonKind: 'danger'
      });
      expect(wrapper.find('.bx--btn--danger').length).toEqual(1);
    });
    it('should render secondary button when secondary is passed', function () {
      wrapper.setProps({
        triggerButtonKind: 'secondary'
      });
      expect(wrapper.find('.bx--btn--secondary').length).toEqual(2);
    });
  });
});
describe('Danger Modal', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(Modal, {
      danger: true
    }));
    it('has the expected classes', function () {
      expect(getModal(wrapper).hasClass('bx--modal--danger')).toEqual(true);
    });
    it('has correct button combination', function () {
      var modalButtons = wrapper.find('.bx--modal-footer').props().children;
      expect(modalButtons[0].props.kind).toEqual(!componentsX ? 'tertiary' : 'secondary');
      expect(modalButtons[1].props.kind).toEqual('danger--primary');
    });
  });
});