/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import DataTable, { Table, TableBody, TableCell, TableContainer, TableExpandHeader, TableExpandRow, TableExpandedRow, TableHead, TableHeader, TableRow } from '../../DataTable';
import { initialRows, headers } from './shared';
export default (function () {
  return React.createElement(DataTable, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getRowProps = _ref.getRowProps;
      return React.createElement(TableContainer, {
        title: "DataTable",
        description: "With expansion"
      }, React.createElement(Table, {
        sortable: true
      }, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableExpandHeader, null), headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(React.Fragment, {
          key: row.id
        }, React.createElement(TableExpandRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        })), React.createElement(TableExpandedRow, {
          colSpan: headers.length + 1
        }, React.createElement("h1", null, "Expandable row content"), React.createElement("p", null, "Description here")));
      }))));
    }
  });
});