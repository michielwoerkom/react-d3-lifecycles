function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


import settings from '../../globals/js/settings';
import eventMatches from '../../globals/js/misc/event-matches';
import mixin from '../../globals/js/misc/mixin';
import createComponent from '../../globals/js/mixins/create-component';
import initComponentBySearch from '../../globals/js/mixins/init-component-by-search';
import eventedShowHideState from '../../globals/js/mixins/evented-show-hide-state';
import handles from '../../globals/js/mixins/handles';
import FloatingMenu, { DIRECTION_TOP, DIRECTION_BOTTOM, DIRECTION_LEFT, DIRECTION_RIGHT } from '../floating-menu/floating-menu';
import getLaunchingDetails from '../../globals/js/misc/get-launching-details';
import on from '../../globals/js/misc/on';
import { componentsX } from '../../globals/js/feature-flags';
/**
 * The CSS property names of the arrow keyed by the floating menu direction.
 * @type {Object<string, string>}
 */

var triggerButtonPositionProps =
/* #__PURE__ */
function () {
  var _ref;

  return _ref = {}, _defineProperty(_ref, DIRECTION_TOP, 'bottom'), _defineProperty(_ref, DIRECTION_BOTTOM, 'top'), _defineProperty(_ref, DIRECTION_LEFT, 'left'), _defineProperty(_ref, DIRECTION_RIGHT, 'right'), _ref;
}();
/**
 * Determines how the position of arrow should affect the floating menu position.
 * @type {Object<string, number>}
 */


var triggerButtonPositionFactors =
/* #__PURE__ */
function () {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, DIRECTION_TOP, -2), _defineProperty(_ref2, DIRECTION_BOTTOM, -1), _defineProperty(_ref2, DIRECTION_LEFT, -2), _defineProperty(_ref2, DIRECTION_RIGHT, -1), _ref2;
}();
/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} direction The floating menu direction.
 * @param {Element} trigger The trigger button.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */


export var getMenuOffset = function getMenuOffset(menuBody, direction, trigger) {
  var triggerButtonPositionProp = triggerButtonPositionProps[direction];
  var triggerButtonPositionFactor = triggerButtonPositionFactors[direction];

  if (!triggerButtonPositionProp || !triggerButtonPositionFactor) {
    console.warn('Wrong floating menu direction:', direction); // eslint-disable-line no-console
  }

  var menuWidth = menuBody.offsetWidth;
  var menuHeight = menuBody.offsetHeight;
  var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
  var values = [triggerButtonPositionProp, 'left', 'width', 'height', 'border-top-width'].reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-.]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
  }, {});

  if (Object.keys(values).every(function (name) {
    return !isNaN(values[name]);
  })) {
    var left = values.left,
        width = values.width,
        height = values.height,
        borderTopWidth = values['border-top-width'];
    return {
      left: menuWidth / 2 - (left + Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2),
      top: Math.sqrt(Math.pow(borderTopWidth, 2) * 2) + triggerButtonPositionFactor * values[triggerButtonPositionProp]
    };
  }

  if (componentsX) {
    // eslint-disable-next-line no-use-before-define
    var menu = OverflowMenu.components.get(trigger);

    if (!menu) {
      throw new TypeError('Overflow menu instance cannot be found.');
    }

    var flip = menuBody.classList.contains(menu.options.classMenuFlip);

    if (triggerButtonPositionProp === 'top' || triggerButtonPositionProp === 'bottom') {
      var triggerWidth = trigger.offsetWidth;
      return {
        left: (!flip ? 1 : -1) * (menuWidth / 2 - triggerWidth / 2),
        top: 0
      };
    }

    if (triggerButtonPositionProp === 'left' || triggerButtonPositionProp === 'right') {
      var triggerHeight = trigger.offsetHeight;
      return {
        left: 0,
        top: (!flip ? 1 : -1) * (menuHeight / 2 - triggerHeight / 2)
      };
    }
  }

  return undefined;
};

var OverflowMenu =
/*#__PURE__*/
function (_mixin) {
  _inherits(OverflowMenu, _mixin);
  /**
   * Overflow menu.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a modal dialog.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorOptionMenu] The CSS selector to find the menu.
   * @param {string} [options.classShown] The CSS class for the shown state, for the trigger UI.
   * @param {string} [options.classMenuShown] The CSS class for the shown state, for the menu.
   * @param {string} [options.classMenuFlip] The CSS class for the flipped state of the menu.
   * @param {Object} [options.objMenuOffset] The offset locating the menu for the non-flipped state.
   * @param {Object} [options.objMenuOffsetFlip] The offset locating the menu for the flipped state.
   */


  function OverflowMenu(element, options) {
    var _this;

    _classCallCheck(this, OverflowMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverflowMenu).call(this, element, options));

    _this.getCurrentNavigation = function () {
      var focused = _this.element.ownerDocument.activeElement;
      return focused.nodeType === Node.ELEMENT_NODE && focused.matches(_this.options.selectorItem) ? focused : null;
    };

    _this.navigate = function (direction) {
      var items = _toConsumableArray(_this.element.ownerDocument.querySelectorAll(_this.options.selectorItem));

      var start = _this.getCurrentNavigation() || _this.element.querySelector(_this.options.selectorItemSelected);

      var getNextItem = function getNextItem(old) {
        var handleUnderflow = function handleUnderflow(index, length) {
          return index + (index >= 0 ? 0 : length);
        };

        var handleOverflow = function handleOverflow(index, length) {
          return index - (index < length ? 0 : length);
        }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


        var index = Math.max(items.indexOf(old) + direction, -1);
        return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
      };

      for (var current = getNextItem(start); current && current !== start; current = getNextItem(current)) {
        if (!current.matches(_this.options.selectorItemHidden) && !current.parentNode.matches(_this.options.selectorItemHidden) && !current.matches(_this.options.selectorItemSelected)) {
          current.focus();
          break;
        }
      }
    };

    _this.manage(on(_this.element.ownerDocument, 'click', function (event) {
      _this._handleDocumentClick(event);

      _this.wasOpenBeforeClick = undefined;
    }));

    _this.manage(on(_this.element.ownerDocument, 'keydown', function (event) {
      _this._handleKeyPress(event);
    }));

    _this.manage(on(_this.element, 'mousedown', function () {
      _this.wasOpenBeforeClick = element.classList.contains(_this.options.classShown);
    }));

    return _this;
  }
  /**
   * Changes the shown/hidden state.
   * @param {string} state The new state.
   * @param {Object} detail The detail of the event trigging this action.
   * @param {Function} callback Callback called when change in state completes.
   */


  _createClass(OverflowMenu, [{
    key: "changeState",
    value: function changeState(state, detail, callback) {
      if (state === 'hidden') {
        this.element.setAttribute('aria-expanded', 'false');
      } else {
        this.element.setAttribute('aria-expanded', 'true');
      }

      if (!this.optionMenu) {
        var optionMenu = this.element.querySelector(this.options.selectorOptionMenu);

        if (!optionMenu) {
          throw new Error('Cannot find the target menu.');
        } // Lazily create a component instance for menu


        this.optionMenu = FloatingMenu.create(optionMenu, {
          refNode: this.element,
          classShown: this.options.classMenuShown,
          classRefShown: this.options.classShown,
          offset: this.options.objMenuOffset
        });
        this.children.push(this.optionMenu);
      }

      if (this.optionMenu.element.classList.contains(this.options.classMenuFlip)) {
        this.optionMenu.options.offset = this.options.objMenuOffsetFlip;
      } // Delegates the action of changing state to the menu.
      // (And thus the before/after shown/hidden events are fired from the menu)


      this.optionMenu.changeState(state, Object.assign(detail, {
        delegatorNode: this.element
      }), callback);
    }
    /**
     * Handles click on document.
     * @param {Event} event The triggering event.
     * @private
     */

  }, {
    key: "_handleDocumentClick",
    value: function _handleDocumentClick(event) {
      var element = this.element,
          optionMenu = this.optionMenu,
          wasOpenBeforeClick = this.wasOpenBeforeClick;
      var isOfSelf = element.contains(event.target);
      var isOfMenu = optionMenu && optionMenu.element.contains(event.target);
      var shouldBeOpen = isOfSelf && !wasOpenBeforeClick;
      var state = shouldBeOpen ? 'shown' : 'hidden';

      if (isOfSelf) {
        if (element.tagName === 'A') {
          event.preventDefault();
        }

        event.delegateTarget = element; // eslint-disable-line no-param-reassign
      }

      if (!isOfMenu || eventMatches(event, this.options.selectorItem)) {
        this.changeState(state, getLaunchingDetails(event), function () {
          if (state === 'hidden' && isOfMenu) {
            element.focus();
          }
        });
      }
    }
    /**
     * Provides the element to move focus from
     * @returns {Element} Currently highlighted element.
     */

  }, {
    key: "_handleKeyPress",

    /**
     * Handles key press on document.
     * @param {Event} event The triggering event.
     * @private
     */
    value: function _handleKeyPress(event) {
      var key = event.which;
      var element = this.element,
          optionMenu = this.optionMenu,
          options = this.options;
      var isOfMenu = optionMenu && optionMenu.element.contains(event.target);
      var isExpanded = this.element.classList.contains(this.options.classShown);

      switch (key) {
        // Esc
        case 27:
          this.changeState('hidden', getLaunchingDetails(event), function () {
            if (isOfMenu) {
              element.focus();
            }
          });
          break;
        // Enter || Space bar

        case 13:
        case 32:
          {
            if (!isExpanded && this.element.ownerDocument.activeElement !== this.element) {
              return;
            }

            var isOfSelf = element.contains(event.target);
            var shouldBeOpen = isOfSelf && !element.classList.contains(options.classShown);
            var state = shouldBeOpen ? 'shown' : 'hidden';

            if (isOfSelf) {
              event.delegateTarget = element; // eslint-disable-line no-param-reassign

              event.preventDefault(); // prevent scrolling

              this.changeState(state, getLaunchingDetails(event), function () {
                if (state === 'hidden' && isOfMenu) {
                  element.focus();
                }
              });
            }

            break;
          }

        case 38: // up arrow

        case 40:
          // down arrow
          {
            if (!isExpanded) {
              return;
            }

            event.preventDefault(); // prevent scrolling

            var direction = {
              38: -1,
              40: 1
            }[event.which];
            this.navigate(direction);
          }
          break;

        default:
          break;
      }
    }
  }], [{
    key: "options",
    get: function get() {
      var prefix = settings.prefix;
      return {
        selectorInit: '[data-overflow-menu]',
        selectorOptionMenu: ".".concat(prefix, "--overflow-menu-options"),
        selectorItem: "\n        .".concat(prefix, "--overflow-menu-options--open >\n        .").concat(prefix, "--overflow-menu-options__option:not(.").concat(prefix, "--overflow-menu-options__option--disabled) >\n        .").concat(prefix, "--overflow-menu-options__btn\n      "),
        classShown: "".concat(prefix, "--overflow-menu--open"),
        classMenuShown: "".concat(prefix, "--overflow-menu-options--open"),
        classMenuFlip: "".concat(prefix, "--overflow-menu--flip"),
        objMenuOffset: getMenuOffset,
        objMenuOffsetFlip: getMenuOffset
      };
    }
  }]);

  OverflowMenu.components = new WeakMap();
  return OverflowMenu;
}(mixin(createComponent, initComponentBySearch, eventedShowHideState, handles));

export default OverflowMenu;