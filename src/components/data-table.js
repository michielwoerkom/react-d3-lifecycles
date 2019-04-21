import React, { Component } from 'react';

import { DataTable, InlineNotification} from 'carbon-components-react';

import './data-table.scss';
import styles from './data-table.module.scss';

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;

class SprintTable extends Component {

  render() {
    const headers = [
      { key: 'ID', header: 'id' },
      { key: 'Name', header: 'Name' },
      { key: 'Points', header: 'Amount of points' },
      { key: 'Delete', header: 'delete' }
    ];
    const rows = [
      {id:1, name: 'sprint1', amount: '15', delete: 'delete'},
      {id:2, name: 'sprint2', amount: '16', delete: 'delete'},
      {id:3, name: 'sprint3', amount: '17', delete: 'delete'}
    ];
    if (rows) {
      return (
        <div className={styles.main}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => {
                    return (
                      <TableHeader key={header.key}>
                        {header.header}
                      </TableHeader>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.length ? (
                  rows.map(value => {
                    return (
                      <TableRow key={value.id}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.amount}</TableCell>
                        <TableCell>{value.delete}</TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan="3">
                      <InlineNotification
                        hideCloseButton={true}
                        kind="info"
                        title="No data found"
                        subtitle="No machines found."
                      />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  }
}

export default SprintTable;
