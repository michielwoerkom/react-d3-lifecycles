"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _FileUploader = _interopRequireWildcard(require("../FileUploader"));

var _FileUploader2 = _interopRequireDefault(require("../FileUploader/FileUploader.Skeleton"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var buttonKinds = {
  'Primary (primary)': 'primary',
  'Secondary (secondary)': 'secondary',
  'Danger (danger)': 'danger',
  'Ghost (ghost)': 'ghost',
  'Danger Primary (danger--primary)': 'danger--primary',
  'Tertiary (tertiary)': 'tertiary'
};
var filenameStatuses = {
  'Edit (edit)': 'edit',
  'Complete (complete)': 'complete',
  'Uploading (uploading)': 'uploading'
};
var props = {
  fileUploaderButton: function fileUploaderButton() {
    var buttonKind = (0, _addonKnobs.select)('Button kind (buttonKind)', buttonKinds, '');
    return {
      className: 'bob',
      labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Add files'),
      name: (0, _addonKnobs.text)('Form item name: (name)', ''),
      multiple: (0, _addonKnobs.boolean)('Supports multiple files (multiple)', true),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      buttonKind: buttonKind || 'primary',
      disableLabelChanges: (0, _addonKnobs.boolean)('Prevent the label from being replaced with file selected file (disableLabelChanges)', false),
      role: (0, _addonKnobs.text)('ARIA role of the button (role)', ''),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex)', 0),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  fileUploader: function fileUploader() {
    return {
      labelTitle: (0, _addonKnobs.text)('The label title (labelTitle)', 'Upload'),
      labelDescription: (0, _addonKnobs.text)('The label description (labelDescription)', 'only .jpg files at 500mb or less'),
      buttonLabel: (0, _addonKnobs.text)('The button label (buttonLabel)', 'Add files'),
      filenameStatus: (0, _addonKnobs.select)('Status for file name (filenameStatus)', filenameStatuses, 'edit'),
      accept: (0, _addonKnobs.array)('Accepted file extensions (accept)', ['.jpg', '.png'], ','),
      name: (0, _addonKnobs.text)('Form item name: (name)', ''),
      multiple: (0, _addonKnobs.boolean)('Supports multiple files (multiple)', true)
    };
  }
};
(0, _react2.storiesOf)('FileUploader', module).addDecorator(_addonKnobs.withKnobs).add('FileUploaderButton', function () {
  return _react.default.createElement(_FileUploader.FileUploaderButton, props.fileUploaderButton());
}, {
  info: {
    text: "\n            The FileUploaderButton can be used as a standalone component if you do not need the extra UI that comes with FileUploader. The FileUploaderButton is used in FileUploader.\n          "
  }
}).add('FileUploader', function () {
  var fileUploader;
  return _react.default.createElement("div", {
    className: "bx--file__container"
  }, _react.default.createElement(_FileUploader.default, _extends({}, props.fileUploader(), {
    ref: function ref(node) {
      return fileUploader = node;
    }
  })), _react.default.createElement(_Button.default, {
    kind: "secondary",
    small: true,
    style: {
      marginTop: '1rem'
    },
    onClick: function onClick() {
      fileUploader.clearFiles();
    }
  }, "Clear File"));
}, {
  info: {
    text: "\n            The FileUploader components allow the user to upload any necessary files. This uses the FileUploaderButton and Filename components. Filename components will appear below the FileUploaderButton when files are added. Use the filenameStatus prop to control what icon appears in Filename ('edit', 'complete', or 'uploading').\n          "
  }
}).add('skeleton', function () {
  return _react.default.createElement("div", {
    style: {
      width: '500px'
    }
  }, _react.default.createElement(_FileUploader2.default, null));
}, {
  info: {
    text: "\n    Placeholder skeleton state to use when content is loading.\n    "
  }
});