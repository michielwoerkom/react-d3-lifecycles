"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Filename = exports.FileUploaderButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _Icon = _interopRequireDefault(require("../Icon"));

var _uniqueId = _interopRequireDefault(require("../../tools/uniqueId"));

var _types = require("../../prop-types/types");

var _carbonIcons = require("carbon-icons");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/close--filled/16"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/checkmark--filled/16"));

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var FileUploaderButton =
/*#__PURE__*/
function (_Component) {
  _inherits(FileUploaderButton, _Component);

  function FileUploaderButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FileUploaderButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FileUploaderButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
      var files = evt.target.files;
      var length = evt.target.files.length;

      if (files && !_this.props.disableLabelChanges) {
        if (length > 1) {
          _this.setState({
            labelText: "".concat(length, " files")
          });
        } else if (length === 1) {
          _this.setState({
            labelText: files[0].name
          });
        }
      }

      _this.props.onChange(evt);
    });

    return _this;
  }

  _createClass(FileUploaderButton, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          disableLabelChanges = _this$props.disableLabelChanges,
          labelText = _this$props.labelText,
          multiple = _this$props.multiple,
          role = _this$props.role,
          tabIndex = _this$props.tabIndex,
          buttonKind = _this$props.buttonKind,
          accept = _this$props.accept,
          name = _this$props.name,
          disabled = _this$props.disabled,
          other = _objectWithoutProperties(_this$props, ["className", "disableLabelChanges", "labelText", "multiple", "role", "tabIndex", "buttonKind", "accept", "name", "disabled"]);

      var classes = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--").concat(buttonKind), true), _defineProperty(_classNames, "".concat(prefix, "--btn--sm"), _FeatureFlags.componentsX), _defineProperty(_classNames, className, className), _classNames));
      this.uid = this.props.id || (0, _uniqueId.default)();
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", _extends(_defineProperty({
        role: "button",
        tabIndex: tabIndex || 0,
        className: classes,
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 13 || evt.which === 32) {
            _this2.input.click();
          }
        },
        htmlFor: this.uid
      }, "role", role), other), this.state.labelText), _react.default.createElement("input", {
        className: "".concat(prefix, "--visually-hidden"),
        ref: function ref(input) {
          return _this2.input = input;
        },
        id: this.uid,
        disabled: disabled,
        type: "file",
        tabIndex: "-1",
        multiple: multiple,
        accept: accept,
        name: name,
        onChange: this.handleChange,
        onClick: function onClick(evt) {
          evt.target.value = null;
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var labelText = _ref.labelText;
      var prevLabelText = state.prevLabelText;
      return prevLabelText === labelText ? null : {
        labelText: labelText,
        prevLabelText: labelText
      };
    }
  }]);

  return FileUploaderButton;
}(_react.Component);

exports.FileUploaderButton = FileUploaderButton;

_defineProperty(FileUploaderButton, "propTypes", {
  /**
   * Provide a custom className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether you want to disable any updates to the FileUploaderButton
   * label
   */
  disableLabelChanges: _propTypes.default.bool,

  /**
   * Provide a unique id for the underlying <input> node
   */
  id: _propTypes.default.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * this control
   */
  labelText: _propTypes.default.string,

  /**
   * Specify whether you want the component to list the files that have been
   * submitted to be uploaded
   */
  listFiles: _propTypes.default.bool,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: _propTypes.default.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: _propTypes.default.string,

  /**
   * Provide an optional `onChange` hook that is called each time the <input>
   * value changes
   */
  onChange: _propTypes.default.func,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Provide an accessibility role for the <FileUploaderButton>
   */
  role: _propTypes.default.string,

  /**
   * Provide a custom tabIndex value for the <FileUploaderButton>
   */
  tabIndex: _propTypes.default.number,

  /**
   * Specify the type of underlying button
   */
  buttonKind: _types.ButtonTypes.buttonKind,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Specify whether file input is disabled
   */
  disabled: _propTypes.default.bool
});

_defineProperty(FileUploaderButton, "defaultProps", {
  tabIndex: 0,
  disableLabelChanges: false,
  labelText: 'Add file',
  buttonKind: 'primary',
  multiple: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  accept: [],
  disabled: false
});

var Filename =
/*#__PURE__*/
function (_Component2) {
  _inherits(Filename, _Component2);

  function Filename() {
    _classCallCheck(this, Filename);

    return _possibleConstructorReturn(this, _getPrototypeOf(Filename).apply(this, arguments));
  }

  _createClass(Filename, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          iconDescription = _this$props2.iconDescription,
          status = _this$props2.status,
          style = _this$props2.style,
          other = _objectWithoutProperties(_this$props2, ["iconDescription", "status", "style"]);

      if (status === 'uploading') {
        return _react.default.createElement("div", _extends({
          className: "".concat(prefix, "--loading"),
          style: _objectSpread({}, style, {
            width: '1rem',
            height: '1rem'
          })
        }, other), _react.default.createElement("svg", {
          className: "".concat(prefix, "--loading__svg"),
          viewBox: "-42 -42 84 84"
        }, _react.default.createElement("circle", {
          cx: "0",
          cy: "0",
          r: "37.5"
        })));
      } else if (status === 'edit') {
        return _FeatureFlags.componentsX ? _react.default.createElement(_.default, _extends({
          className: "".concat(prefix, "--file-close"),
          "aria-label": iconDescription,
          style: style
        }, other), iconDescription && _react.default.createElement("title", null, iconDescription)) : _react.default.createElement(_Icon.default, _extends({
          description: iconDescription,
          className: "".concat(prefix, "--file-close"),
          icon: _carbonIcons.iconCloseSolid,
          style: style
        }, other));
      } else if (status === 'complete') {
        return _FeatureFlags.componentsX ? _react.default.createElement(_2.default, _extends({
          className: "".concat(prefix, "--file-complete"),
          "aria-label": iconDescription,
          style: style
        }, other), iconDescription && _react.default.createElement("title", null, iconDescription)) : _react.default.createElement(_Icon.default, _extends({
          description: iconDescription,
          className: "".concat(prefix, "--file-complete"),
          icon: _carbonIcons.iconCheckmarkSolid,
          style: style
        }, other));
      } else {
        return null;
      }
    }
  }]);

  return Filename;
}(_react.Component);

exports.Filename = Filename;

_defineProperty(Filename, "propTypes", {
  /**
   * Specify an optional object of styles to be applied inline to the root
   * node
   */
  style: _propTypes.default.object,

  /**
   * Specify the status of the File Upload
   */
  status: _propTypes.default.oneOf(['edit', 'complete', 'uploading']),

  /**
   * Provide a description for the complete/close icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string
});

_defineProperty(Filename, "defaultProps", {
  onKeyDown: function onKeyDown() {},
  status: 'uploading',
  style: {},
  tabIndex: 0
});

var FileUploader =
/*#__PURE__*/
function (_Component3) {
  _inherits(FileUploader, _Component3);

  function FileUploader() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, FileUploader);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(FileUploader)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      filenames: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "nodes", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleChange", function (evt) {
      evt.stopPropagation();

      _this3.setState({
        filenames: _this3.state.filenames.concat(Array.prototype.map.call(evt.target.files, function (file) {
          return file.name;
        }))
      });

      _this3.props.onChange(evt);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleClick", function (evt, index) {
      var filteredArray = _this3.state.filenames.filter(function (filename) {
        return filename !== _this3.nodes[index].innerText.trim();
      });

      _this3.setState({
        filenames: filteredArray
      });

      _this3.props.onClick(evt);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "clearFiles", function () {
      // A clearFiles function that resets filenames and can be referenced using a ref by the parent.
      _this3.setState({
        filenames: []
      });
    });

    return _this3;
  }

  _createClass(FileUploader, [{
    key: "render",
    value: function render() {
      var _classNames2,
          _this4 = this;

      var _this$props3 = this.props,
          iconDescription = _this$props3.iconDescription,
          buttonLabel = _this$props3.buttonLabel,
          buttonKind = _this$props3.buttonKind,
          filenameStatus = _this$props3.filenameStatus,
          labelDescription = _this$props3.labelDescription,
          labelTitle = _this$props3.labelTitle,
          className = _this$props3.className,
          multiple = _this$props3.multiple,
          accept = _this$props3.accept,
          name = _this$props3.name,
          other = _objectWithoutProperties(_this$props3, ["iconDescription", "buttonLabel", "buttonKind", "filenameStatus", "labelDescription", "labelTitle", "className", "multiple", "accept", "name"]);

      var classes = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--form-item"), true), _defineProperty(_classNames2, className, className), _classNames2));
      return _react.default.createElement("div", _extends({
        className: classes
      }, other), _react.default.createElement("strong", {
        className: _FeatureFlags.componentsX ? "".concat(prefix, "--file--label") : "".concat(prefix, "--label")
      }, labelTitle), _react.default.createElement("p", {
        className: "".concat(prefix, "--label-description")
      }, labelDescription), _react.default.createElement(FileUploaderButton, {
        labelText: buttonLabel,
        multiple: multiple,
        buttonKind: buttonKind,
        onChange: this.handleChange,
        disableLabelChanges: true,
        accept: accept,
        name: name
      }), _react.default.createElement("div", {
        className: "".concat(prefix, "--file-container")
      }, this.state.filenames.length === 0 ? null : this.state.filenames.map(function (name, index) {
        return _react.default.createElement("span", _extends({
          key: index,
          className: "".concat(prefix, "--file__selected-file"),
          ref: function ref(node) {
            return _this4.nodes[index] = node;
          } // eslint-disable-line

        }, other), _react.default.createElement("p", {
          className: "".concat(prefix, "--file-filename")
        }, name), _react.default.createElement("span", {
          className: "".concat(prefix, "--file__state-container")
        }, _react.default.createElement(Filename, {
          iconDescription: iconDescription,
          status: filenameStatus,
          onKeyDown: function onKeyDown(evt) {
            if (evt.which === 13 || evt.which === 32) {
              _this4.handleClick(evt, index);
            }
          },
          onClick: function onClick(evt) {
            if (filenameStatus === 'edit') {
              _this4.handleClick(evt, index);
            }
          }
        })));
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var filenameStatus = _ref2.filenameStatus;
      var prevFilenameStatus = state.prevFilenameStatus;
      return prevFilenameStatus === filenameStatus ? null : {
        filenameStatus: filenameStatus,
        prevFilenameStatus: filenameStatus
      };
    }
  }]);

  return FileUploader;
}(_react.Component);

exports.default = FileUploader;

_defineProperty(FileUploader, "propTypes", {
  /**
   * Provide a description for the complete/close icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * the <FileUploaderButton>
   */
  buttonLabel: _propTypes.default.string,

  /**
   * Specify the type of the <FileUploaderButton>
   */
  buttonKind: _types.ButtonTypes.buttonKind,

  /**
   * Specify the status of the File Upload
   */
  filenameStatus: _propTypes.default.oneOf(['edit', 'complete', 'uploading']).isRequired,

  /**
   * Specify the description text of this <FileUploader>
   */
  labelDescription: _propTypes.default.string,

  /**
   * Specify the title text of this <FileUploader>
   */
  labelTitle: _propTypes.default.string,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: _propTypes.default.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: _propTypes.default.string,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Provide a custom className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: _propTypes.default.arrayOf(_propTypes.default.string)
});

_defineProperty(FileUploader, "defaultProps", {
  iconDescription: 'Provide icon description',
  filenameStatus: 'uploading',
  buttonLabel: '',
  buttonKind: 'primary',
  multiple: false,
  onClick: function onClick() {},
  accept: []
});