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
      { key: 'Name', header: 'Name' },
      { key: 'Points', header: 'Amount of points' },
      { key: 'Delete', header: 'delete' }
    ];

    const rows = this.props.rows;

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
                  rows.map((d, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell>{d.sprintName}</TableCell>
                        <TableCell>{d.sprintPoints}</TableCell>
                        <TableCell>delete</TableCell>
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
