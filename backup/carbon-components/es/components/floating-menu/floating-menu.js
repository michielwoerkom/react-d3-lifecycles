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

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
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


import mixin from '../../globals/js/misc/mixin';
import createComponent from '../../globals/js/mixins/create-component';
import eventedShowHideState from '../../globals/js/mixins/evented-show-hide-state';
import trackBlur from '../../globals/js/mixins/track-blur';
import getLaunchingDetails from '../../globals/js/misc/get-launching-details';
import optimizedResize from '../../globals/js/misc/resize';
/**
 * The structure for the position of floating menu.
 * @typedef {Object} FloatingMenu~position
 * @property {number} left The left position.
 * @property {number} top The top position.
 * @property {number} right The right position.
 * @property {number} bottom The bottom position.
 */

/**
 * The structure for the size of floating menu.
 * @typedef {Object} FloatingMenu~size
 * @property {number} width The width.
 * @property {number} height The height.
 */

/**
 * The structure for the position offset of floating menu.
 * @typedef {Object} FloatingMenu~offset
 * @property {number} top The top position.
 * @property {number} left The left position.
 */

export var DIRECTION_LEFT = 'left';
export var DIRECTION_TOP = 'top';
export var DIRECTION_RIGHT = 'right';
export var DIRECTION_BOTTOM = 'bottom';
/**
 * @param {Object} params The parameters.
 * @param {FloatingMenu~size} params.menuSize The size of the menu.
 * @param {FloatingMenu~position} params.refPosition The position of the triggering element.
 * @param {FloatingMenu~offset} [params.offset={ left: 0, top: 0 }] The position offset of the menu.
 * @param {string} [params.direction=bottom] The menu direction.
 * @param {number} [params.scrollX=0] The scroll position of the viewport.
 * @param {number} [params.scrollY=0] The scroll position of the viewport.
 * @returns {FloatingMenu~offset} The position of the menu, relative to the top-left corner of the viewport.
 * @private
 */

export var getFloatingPosition = function getFloatingPosition(_ref) {
  var _DIRECTION_LEFT$DIREC;

  var menuSize = _ref.menuSize,
      refPosition = _ref.refPosition,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? {} : _ref$offset,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? DIRECTION_BOTTOM : _ref$direction,
      _ref$scrollX = _ref.scrollX,
      scrollX = _ref$scrollX === void 0 ? 0 : _ref$scrollX,
      _ref$scrollY = _ref.scrollY,
      scrollY = _ref$scrollY === void 0 ? 0 : _ref$scrollY;
  var _refPosition$left = refPosition.left,
      refLeft = _refPosition$left === void 0 ? 0 : _refPosition$left,
      _refPosition$top = refPosition.top,
      refTop = _refPosition$top === void 0 ? 0 : _refPosition$top,
      _refPosition$right = refPosition.right,
      refRight = _refPosition$right === void 0 ? 0 : _refPosition$right,
      _refPosition$bottom = refPosition.bottom,
      refBottom = _refPosition$bottom === void 0 ? 0 : _refPosition$bottom;
  var width = menuSize.width,
      height = menuSize.height;
  var _offset$top = offset.top,
      top = _offset$top === void 0 ? 0 : _offset$top,
      _offset$left = offset.left,
      left = _offset$left === void 0 ? 0 : _offset$left;
  var refCenterHorizontal = (refLeft + refRight) / 2;
  var refCenterVertical = (refTop + refBottom) / 2;
  return (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_LEFT, {
    left: refLeft - width + scrollX - left,
    top: refCenterVertical - height / 2 + scrollY + top
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_TOP, {
    left: refCenterHorizontal - width / 2 + scrollX + left,
    top: refTop - height + scrollY - top
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_RIGHT, {
    left: refRight + scrollX + left,
    top: refCenterVertical - height / 2 + scrollY + top
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_BOTTOM, {
    left: refCenterHorizontal - width / 2 + scrollX + left,
    top: refBottom + scrollY + top
  }), _DIRECTION_LEFT$DIREC)[direction];
};

var FloatingMenu =
/*#__PURE__*/
function (_mixin) {
  _inherits(FloatingMenu, _mixin);
  /**
   * Floating menu.
   * @extends CreateComponent
   * @extends EventedShowHideState
   * @param {HTMLElement} element The element working as a modal dialog.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorContainer] The CSS selector to find the container to put this menu in.
   * @param {string} [options.attribDirection] The attribute name to specify menu placement direction (top/right/bottom/left).
   * @param {string} [options.classShown] The CSS class for shown state, for the menu.
   * @param {string} [options.classRefShown] The CSS class for shown state, for the trigger button.
   * @param {string} [options.eventBeforeShown]
   *   The name of the custom event fired before this menu is shown.
   *   Cancellation of this event stops hiding the menu.
   * @param {string} [options.eventAfterShown]
   *   The name of the custom event telling that menu is sure shown
   *   without being canceled by the event handler named by `eventBeforeShown` option (`floating-menu-beingshown`).
   * @param {string} [options.eventBeforeHidden]
   *   The name of the custom event fired before this menu is hidden.
   *   Cancellation of this event stops hiding the menu.
   * @param {string} [options.eventAfterHidden]
   *   The name of the custom event telling that menu is sure hidden
   *   without being canceled by the event handler named by `eventBeforeHidden` option (`floating-menu-beinghidden`).
   * @param {Element} [options.refNode] The launching element of the menu. Used for calculating the geometry of the menu.
   * @param {Object} [options.offset] The offset to adjust the geometry of the menu. Should have `top`/`left` properties.
   */


  function FloatingMenu(element, options) {
    var _this;

    _classCallCheck(this, FloatingMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FloatingMenu).call(this, element, options));

    var attribDirectionValue = _this.element.getAttribute(_this.options.attribDirection);

    if (!_this.options.direction) {
      _this.options.direction = attribDirectionValue || 'bottom';
    }

    if (!attribDirectionValue) {
      // Update attribute for styling
      _this.element.setAttribute(_this.options.attribDirection, _this.options.direction);
    }

    return _this;
  }
  /**
   * Focuses back on the trigger button if this component loses focus.
   */


  _createClass(FloatingMenu, [{
    key: "handleBlur",
    value: function handleBlur(event) {
      if (this.element.classList.contains(this.options.classShown)) {
        this.changeState('hidden', getLaunchingDetails(event));
        var refNode = this.options.refNode;

        if (this.element.contains(event.relatedTarget) && refNode && event.target !== refNode) {
          HTMLElement.prototype.focus.call(refNode); // SVGElement in IE11 does not have `.focus()` method
        }
      }
    }
    /**
     * @private
     * @returns {Element} The element that this menu should be placed to.
     */

  }, {
    key: "_getContainer",
    value: function _getContainer() {
      return this.element.closest(this.options.selectorContainer) || this.element.ownerDocument.body;
    }
    /**
     * @private
     * @returns {Object} The menu position, with `top` and `left` properties.
     */

  }, {
    key: "_getPos",
    value: function _getPos() {
      var element = this.element;
      var _this$options = this.options,
          refNode = _this$options.refNode,
          offset = _this$options.offset,
          direction = _this$options.direction;

      if (!refNode) {
        throw new Error('Cannot find the refernce node for positioning floating menu.');
      }

      return getFloatingPosition({
        menuSize: element.getBoundingClientRect(),
        refPosition: refNode.getBoundingClientRect(),
        offset: typeof offset !== 'function' ? offset : offset(element, direction, refNode),
        direction: direction,
        scrollX: refNode.ownerDocument.defaultView.pageXOffset,
        scrollY: refNode.ownerDocument.defaultView.pageYOffset
      });
    }
    /**
     * Sees if the computed style is what this floating menu expects.
     * @private
     */

  }, {
    key: "_testStyles",
    value: function _testStyles() {
      if (!this.options.debugStyle) {
        return;
      }

      var element = this.element;
      var computedStyle = element.ownerDocument.defaultView.getComputedStyle(element);
      var styles = {
        position: 'absolute',
        right: 'auto',
        margin: 0
      };
      Object.keys(styles).forEach(function (key) {
        var expected = typeof styles[key] === 'number' ? parseFloat(styles[key]) : styles[key];
        var actual = computedStyle.getPropertyValue(key);

        if (expected !== actual) {
          // eslint-disable-next-line no-console
          console.warn("Floating menu component expects ".concat(key, ": ").concat(styles[key], " style."));
        }
      });
    }
    /**
     * Places the menu.
     * @private
     */

  }, {
    key: "_place",
    value: function _place() {
      var element = this.element;

      var _this$_getPos = this._getPos(),
          left = _this$_getPos.left,
          top = _this$_getPos.top;

      element.style.left = "".concat(left, "px");
      element.style.top = "".concat(top, "px");

      this._testStyles();
    }
    /**
     * @param {string} state The new state.
     * @returns {boolean} `true` of the current state is different from the given new state.
     */

  }, {
    key: "shouldStateBeChanged",
    value: function shouldStateBeChanged(state) {
      return (state === 'shown' || state === 'hidden') && state !== (this.element.classList.contains(this.options.classShown) ? 'shown' : 'hidden');
    }
    /**
     * Changes the shown/hidden state.
     * @private
     * @param {string} state The new state.
     * @param {Object} detail The detail of the event trigging this action.
     * @param {Function} callback Callback called when change in state completes.
     */

  }, {
    key: "_changeState",
    value: function _changeState(state, detail, callback) {
      var _this2 = this;

      var shown = state === 'shown';
      var _this$options2 = this.options,
          refNode = _this$options2.refNode,
          classShown = _this$options2.classShown,
          classRefShown = _this$options2.classRefShown;

      if (!refNode) {
        throw new TypeError('Cannot find the refernce node for changing the style.');
      }

      this.element.classList.toggle(classShown, shown);

      if (classRefShown) {
        refNode.classList.toggle(classRefShown, shown);
      }

      if (state === 'shown') {
        if (!this.hResize) {
          this.hResize = optimizedResize.add(function () {
            _this2._place();
          });
        }

        this._getContainer().appendChild(this.element);

        this._place(); // IE11 puts focus on elements with `.focus()`, even ones without `tabindex` attribute


        if (!this.element.hasAttribute(this.options.attribAvoidFocusOnOpen)) {
          (this.element.querySelector(this.options.selectorPrimaryFocus) || this.element).focus();
        }
      }

      if (state === 'hidden' && this.hResize) {
        this.hResize.release();
        this.hResize = null;
      }

      callback();
    }
  }, {
    key: "release",
    value: function release() {
      if (this.hResize) {
        this.hResize.release();
        this.hResize = null;
      }

      _get(_getPrototypeOf(FloatingMenu.prototype), "release", this).call(this);
    }
  }]);

  FloatingMenu.options = {
    selectorContainer: '[data-floating-menu-container]',
    selectorPrimaryFocus: '[data-floating-menu-primary-focus]',
    attribDirection: 'data-floating-menu-direction',
    attribAvoidFocusOnOpen: 'data-avoid-focus-on-open',
    classShown: '',
    // Should be provided from options arg in constructor
    classRefShown: '',
    // Should be provided from options arg in constructor
    eventBeforeShown: 'floating-menu-beingshown',
    eventAfterShown: 'floating-menu-shown',
    eventBeforeHidden: 'floating-menu-beinghidden',
    eventAfterHidden: 'floating-menu-hidden',
    refNode: null,
    // Should be provided from options arg in constructor
    offset: {
      left: 0,
      top: 0
    }
  };
  FloatingMenu.components = new WeakMap();
  return FloatingMenu;
}(mixin(createComponent, eventedShowHideState, trackBlur));

export default FloatingMenu;