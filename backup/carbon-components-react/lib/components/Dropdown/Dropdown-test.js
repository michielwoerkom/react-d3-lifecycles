"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _testHelpers = require("../ListBox/test-helpers");

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

var _Dropdown2 = _interopRequireDefault(require("../Dropdown/Dropdown.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('Dropdown', function () {
  var mockProps;
  beforeEach(function () {
    mockProps = {
      items: (0, _testHelpers.generateItems)(5, _testHelpers.generateGenericItem),
      onChange: jest.fn(),
      label: 'input',
      placeholder: 'Filter...',
      type: 'default'
    };
  });
  it('should render', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, mockProps));
    expect(wrapper).toMatchSnapshot();
  });
  it('should initially render with the menu not open', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, mockProps));
    (0, _testHelpers.assertMenuClosed)(wrapper);
  });
  it('should let the user open the menu by clicking on the control', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, mockProps));
    (0, _testHelpers.openMenu)(wrapper);
    (0, _testHelpers.assertMenuOpen)(wrapper, mockProps);
  });
  it('should render with strings as items', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, _extends({}, mockProps, {
      items: ['zar', 'doz']
    })));
    (0, _testHelpers.openMenu)(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render custom item components', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, mockProps));
    wrapper.setProps({
      itemToElement: function itemToElement(item) {
        return _react.default.createElement("div", {
          className: "mock-item"
        }, item.label);
      }
    });
    (0, _testHelpers.openMenu)(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
  describe('title', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, _extends({
      titleText: "Email Input"
    }, mockProps)));
    var renderedLabel = wrapper.find('label');
    it('renders a title', function () {
      expect(renderedLabel.length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(renderedLabel.hasClass('bx--label')).toEqual(true);
    });
    it('should set title as expected', function () {
      expect(renderedLabel.text()).toEqual('Email Input');
    });
  });
  describe('helper', function () {
    it('renders a helper', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, _extends({
        helperText: "Email Input"
      }, mockProps)));
      var renderedHelper = wrapper.find('.bx--form__helper-text');
      expect(renderedHelper.length).toEqual(1);
    });
    it('renders children as expected', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, _extends({
        helperText: _react.default.createElement("span", null, "This helper text has ", _react.default.createElement("a", {
          href: "/"
        }, "a link"), ".")
      }, mockProps)));
      var renderedHelper = wrapper.find('.bx--form__helper-text');
      expect(renderedHelper.props().children).toEqual(_react.default.createElement("span", null, "This helper text has ", _react.default.createElement("a", {
        href: "/"
      }, "a link"), "."));
    });
    it('should set helper text as expected', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, mockProps));
      wrapper.setProps({
        helperText: 'Helper text'
      });
      var renderedHelper = wrapper.find('.bx--form__helper-text');
      expect(renderedHelper.text()).toEqual('Helper text');
    });
  });
  it('should render DropdownItem components', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, mockProps));
    wrapper.setProps({
      itemToElement: _DropdownItem.default
    });
    (0, _testHelpers.openMenu)(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
  it('should specify light version as expected', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, mockProps));
    expect(wrapper.props().light).toEqual(false);
    wrapper.setProps({
      light: true
    });
    expect(wrapper.props().light).toEqual(true);
  });
  it('should let the user select an option by clicking on the option node', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, mockProps));
    (0, _testHelpers.openMenu)(wrapper);
    (0, _testHelpers.findMenuItemNode)(wrapper, 0).simulate('click');
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith({
      selectedItem: mockProps.items[0]
    });
    (0, _testHelpers.assertMenuClosed)(wrapper);
    mockProps.onChange.mockClear();
    (0, _testHelpers.openMenu)(wrapper);
    (0, _testHelpers.findMenuItemNode)(wrapper, 1).simulate('click');
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith({
      selectedItem: mockProps.items[1]
    });
  });
  describe('should display initially selected item found in `initialSelectedItem`', function () {
    it('using an object type for the `initialSelectedItem` prop', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, _extends({}, mockProps, {
        initialSelectedItem: mockProps.items[0]
      })));
      expect(wrapper.find('span.bx--list-box__label').text()).toEqual(mockProps.items[0].label);
    });
    it('using a string type for the `initialSelectedItem` prop', function () {
      // Replace the 'items' property in mockProps with a list of strings
      mockProps = _objectSpread({}, mockProps, {
        items: ['1', '2', '3']
      });
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, _extends({}, mockProps, {
        initialSelectedItem: mockProps.items[1]
      })));
      expect(wrapper.find('span.bx--list-box__label').text()).toEqual(mockProps.items[1]);
    });
  });
});
describe('DropdownSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown2.default, {
      inline: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--dropdown-v2')).toEqual(true);
      expect(wrapper.hasClass('bx--list-box--inline')).toEqual(true);
    });
  });
});