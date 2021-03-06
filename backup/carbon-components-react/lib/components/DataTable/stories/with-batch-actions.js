"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/download/16"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/edit/16"));

var _3 = _interopRequireDefault(require("@carbon/icons-react/lib/settings/16"));

var _Button = _interopRequireDefault(require("../../Button"));

var _DataTable = _interopRequireWildcard(require("../../DataTable"));

var _shared = require("./shared");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _default = function _default() {
  return _react.default.createElement(_DataTable.default, {
    rows: _shared.initialRows,
    headers: _shared.headers,
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getRowProps = _ref.getRowProps,
          getSelectionProps = _ref.getSelectionProps,
          getBatchActionProps = _ref.getBatchActionProps,
          onInputChange = _ref.onInputChange,
          selectedRows = _ref.selectedRows;
      return _react.default.createElement(_DataTable.TableContainer, {
        title: "DataTable",
        description: "With batch actions"
      }, _react.default.createElement(_DataTable.TableToolbar, null, _react.default.createElement(_DataTable.TableBatchActions, getBatchActionProps(), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: (0, _shared.batchActionClick)(selectedRows)
      }, "Ghost"), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: (0, _shared.batchActionClick)(selectedRows)
      }, "Ghost"), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: (0, _shared.batchActionClick)(selectedRows)
      }, "Ghost")), _react.default.createElement(_DataTable.TableToolbarSearch, {
        onChange: onInputChange
      }), _react.default.createElement(_DataTable.TableToolbarContent, null, _react.default.createElement(_DataTable.TableToolbarAction, {
        renderIcon: _.default,
        iconDescription: "Download",
        onClick: (0, _addonActions.action)('TableToolbarAction - Download')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        renderIcon: _2.default,
        iconDescription: "Edit",
        onClick: (0, _addonActions.action)('TableToolbarAction - Edit')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        renderIcon: _3.default,
        iconDescription: "Settings",
        onClick: (0, _addonActions.action)('TableToolbarAction - Settings')
      }), _react.default.createElement(_Button.default, {
        onClick: (0, _addonActions.action)('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), _react.default.createElement(_DataTable.Table, {
        sortable: true
      }, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, _react.default.createElement(_DataTable.TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, getRowProps({
          row: row
        }), _react.default.createElement(_DataTable.TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
};

exports.default = _default;