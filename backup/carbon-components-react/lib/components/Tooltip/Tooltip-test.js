"use strict";

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/information/16"));

var _carbonIcons = require("carbon-icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _FloatingMenu = _interopRequireDefault(require("../../internal/FloatingMenu"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _enzyme = require("enzyme");

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/overflow-menu--vertical/16"));

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

jest.mock('lodash.debounce');

_lodash.default.mockImplementation(function (fn) {
  return fn;
});

describe('Tooltip', function () {
  // An icon component class
  var CustomIcon =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CustomIcon, _Component);

    function CustomIcon() {
      _classCallCheck(this, CustomIcon);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomIcon).apply(this, arguments));
    }

    _createClass(CustomIcon, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("div", null);
      }
    }]);

    return CustomIcon;
  }(_react.Component);

  describe('Renders as expected with defaults', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
      triggerText: "Tooltip"
    }, _react.default.createElement("p", {
      className: "bx--tooltip__label"
    }, "Tooltip label"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet")));
    var trigger = wrapper.find('.bx--tooltip__trigger');
    describe('tooltip trigger', function () {
      it('renders a tooltip container', function () {
        expect(trigger.length).toEqual(1);
      });
      it('renders the info icon', function () {
        var icon = trigger.find(!_FeatureFlags.componentsX ? _Icon.default : _.default);
        expect(icon.length).toBe(1);

        if (!_FeatureFlags.componentsX) {
          expect(icon.props().icon).toBe(_carbonIcons.iconInfoGlyph);
          expect(icon.props().iconTitle).toBe('');
        }
      });
    });
  });
  describe('Renders as expected with specified properties', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
      className: "tooltip--class",
      triggerClassName: "tooltip--trigger-class",
      triggerText: "Tooltip",
      direction: "bottom",
      menuOffset: {
        left: 10,
        top: 15
      },
      showIcon: false,
      open: true
    }, _react.default.createElement("p", null, "Tooltip label"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet")));
    var label = wrapper.find('.bx--tooltip__label');
    var floatingMenu = wrapper.find(_FloatingMenu.default);
    describe('tooltip container', function () {
      it("sets the tooltip's position", function () {
        expect(floatingMenu.prop('menuDirection')).toEqual('bottom');
      });
      it("sets the tooltip's offset", function () {
        expect(floatingMenu.prop('menuOffset')).toEqual({
          left: 10,
          top: 15
        });
      });
      it('does not render info icon', function () {
        var icon = label.find(_Icon.default);
        expect(icon.exists()).toBe(false);
      });
      it('sets the tooltip class', function () {
        expect(floatingMenu.find('[data-floating-menu-direction]').first().prop('className')).toBe('bx--tooltip bx--tooltip--shown tooltip--class');
      });
      it('sets the trigger class', function () {
        expect(label.prop('className')).toBe('bx--tooltip__label tooltip--trigger-class');
      });
    });
  });
  describe('Renders as expected when an Icon component wrapped with forwardRef is provided', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
      renderIcon: _react.default.forwardRef(function () {
        return _react.default.createElement(_Icon.default, {
          name: "icon--add"
        });
      })
    }));
    it('does render Icon', function () {
      var icon = wrapper.find(_Icon.default);
      expect(icon.exists()).toBe(true);
    });
  });
  describe('Renders as expected when custom icon component with forwardRef is provided', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
      renderIcon: _react.default.forwardRef(function () {
        return _react.default.createElement(CustomIcon, null);
      })
    }));
    it('does not render Icon', function () {
      var icon = wrapper.find(_Icon.default);
      expect(icon.exists()).toBe(false);
    });
    it('does render provided custom icon component instance', function () {
      var icon = wrapper.find(CustomIcon);
      expect(icon.exists()).toBe(true);
    });
  });
  describe('Renders as expected when custom icon component with inner forwardRef is provided', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
      renderIcon: _2.default
    }));
    it('does not render Icon', function () {
      var icon = wrapper.find(_Icon.default);
      expect(icon.exists()).toBe(false);
    });
    it('does render provided custom icon component instance', function () {
      var icon = wrapper.find(_2.default);
      expect(icon.exists()).toBe(true);
    });
  });
  describe('events', function () {
    it('hover changes state with icon', function () {
      if (!_FeatureFlags.breakingChangesX) {
        var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
          triggerText: "Tooltip"
        }));
        var icon = wrapper.find(_Icon.default);
        icon.simulate('mouseover');
        expect(wrapper.state().open).toEqual(true);
        icon.simulate('mouseout');
        expect(wrapper.state().open).toEqual(false);
      }
    });
    it('focus/blur changes state with icon', function () {
      if (!_FeatureFlags.breakingChangesX) {
        var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
          triggerText: "Tooltip"
        }));
        var icon = wrapper.find(_Icon.default);
        icon.simulate('focus');
        expect(wrapper.state().open).toEqual(true);
        icon.simulate('blur');
        expect(wrapper.state().open).toEqual(false);
      }
    });
    it('hover changes state with no icon', function () {
      if (!_FeatureFlags.breakingChangesX) {
        var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
          showIcon: false,
          triggerText: "Tooltip"
        }));
        var label = wrapper.find('.bx--tooltip__label');
        label.simulate('mouseover');
        expect(wrapper.state().open).toEqual(true);
        label.simulate('mouseout');
        expect(wrapper.state().open).toEqual(false);
      }
    });
    it('focus/blur changes state with no icon', function () {
      if (!_FeatureFlags.breakingChangesX) {
        var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
          showIcon: false,
          triggerText: "Tooltip"
        }));
        var label = wrapper.find('.bx--tooltip__label');
        label.simulate('focus');
        expect(wrapper.state().open).toEqual(true);
        label.simulate('blur');
        expect(wrapper.state().open).toEqual(false);
      }
    });
    it('hover changes state with custom icon', function () {
      if (!_FeatureFlags.breakingChangesX) {
        var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
          renderIcon: _react.default.forwardRef(function (props, ref) {
            return _react.default.createElement("div", {
              className: "custom-icon",
              ref: ref
            });
          }),
          triggerText: "Tooltip"
        }));
        var icon = wrapper.find('.custom-icon');
        icon.simulate('mouseover');
        expect(wrapper.state().open).toEqual(true);
        icon.simulate('mouseout');
        expect(wrapper.state().open).toEqual(false);
      }
    });
    it('click changes state when clickToOpen is set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(!_FeatureFlags.componentsX ? _Icon.default : _.default);
      icon.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(true);
      icon.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('click changes state when clickToOpen and custom icon are set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        renderIcon: _react.default.forwardRef(function (props, ref) {
          return _react.default.createElement("div", {
            className: "custom-icon",
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.custom-icon');
      icon.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(true);
      icon.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('hover does not change state when clickToOpen is set', function () {
      if (!_FeatureFlags.breakingChangesX) {
        var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
          clickToOpen: true,
          triggerText: "Tooltip"
        }));
        var icon = wrapper.find(_Icon.default);
        icon.simulate('mouseover');
        expect(wrapper.state().open).toEqual(false);
        icon.simulate('mouseout');
        expect(wrapper.state().open).toEqual(false);
      }
    });
    it('hover does not change state when clickToOpen and custom icon are set', function () {
      if (!_FeatureFlags.breakingChangesX) {
        var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
          renderIcon: _react.default.forwardRef(function (props, ref) {
            return _react.default.createElement("div", {
              className: "custom-icon",
              ref: ref
            });
          }),
          clickToOpen: true,
          triggerText: "Tooltip"
        }));
        var icon = wrapper.find('.custom-icon');
        icon.simulate('mouseover');
        expect(wrapper.state().open).toEqual(false);
        icon.simulate('mouseout');
        expect(wrapper.state().open).toEqual(false);
      }
    });
    it('Enter key press changes state when clickToOpen is set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(!_FeatureFlags.componentsX ? _Icon.default : _.default);
      icon.simulate('keyDown', {
        which: 'Enter'
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(true);
      icon.simulate('keyDown', {
        key: 13
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('Enter key press changes state when clickToOpen and custom icon are set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        renderIcon: _react.default.forwardRef(function (props, ref) {
          return _react.default.createElement("div", {
            className: "custom-icon",
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.custom-icon');
      icon.simulate('keyDown', {
        which: 'Enter'
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(true);
      icon.simulate('keyDown', {
        key: 13
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('Space key press changes state when clickToOpen is set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(!_FeatureFlags.componentsX ? _Icon.default : _.default);
      icon.simulate('keyDown', {
        which: ' '
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(true);
      icon.simulate('keyDown', {
        key: 32
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('Space key press changes state when clickToOpen and custom icon are set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        renderIcon: _react.default.forwardRef(function (props, ref) {
          return _react.default.createElement("div", {
            className: "custom-icon",
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.custom-icon');
      icon.simulate('keyDown', {
        which: ' '
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(true);
      icon.simulate('keyDown', {
        key: 32
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('A different key press does not change state', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(!_FeatureFlags.componentsX ? _Icon.default : _.default);
      icon.simulate('keyDown', {
        which: 'x'
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('A different key press does not change state when custom icon is set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        renderIcon: _react.default.forwardRef(function (props, ref) {
          return _react.default.createElement("div", {
            className: "custom-icon",
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.custom-icon');
      icon.simulate('keyDown', {
        which: 'x'
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('should be in a closed state after handleOutsideClick() is invoked', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        clickToOpen: true,
        triggerText: "Tooltip"
      })); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('Tooltip').instance().state.open).toEqual(false); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('Tooltip').instance().setState({
        open: true
      });
      rootWrapper.update();
      rootWrapper.find('Tooltip').instance().handleClickOutside(); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
    it('prop.open change should update open state', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        open: false,
        triggerText: "Tooltip"
      })); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('Tooltip').instance().state.open).toEqual(false);
      rootWrapper.setProps({
        open: true,
        triggerText: 'Tooltip'
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('Tooltip').instance().state.open).toEqual(true);
    });
    it('should avoid change the open state upon setting props, unless there the value actually changes', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, null));
      rootWrapper.setProps({
        open: true
      }); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('Tooltip').instance().setState({
        open: false
      });
      rootWrapper.update();
      rootWrapper.setProps({
        open: true
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('Tooltip').instance().state.open).toEqual(false);
    });
  });
  describe('getTriggerPosition', function () {
    it('sets triggerPosition when triggerEl is set', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        clickToOpen: true,
        triggerText: "Tooltip"
      })); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('Tooltip').instance().setState({
        triggerPosition: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      });
      rootWrapper.update();
      rootWrapper.find('Tooltip').instance().getTriggerPosition(); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('Tooltip').state.triggerPosition).not.toEqual({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
    it('does not set triggerPosition when triggerEl is not set', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_Tooltip.default, {
        clickToOpen: true,
        triggerText: "Tooltip"
      })); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('Tooltip').instance().setState({
        triggerPosition: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      });
      rootWrapper.update();
      delete rootWrapper.find('Tooltip').instance().triggerEl;
      rootWrapper.find('Tooltip').instance().getTriggerPosition(); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('Tooltip').instance().state.triggerPosition).toEqual({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  });
});