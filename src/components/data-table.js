import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteRow } from '../store/actions';

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

let rows;

class SprintTable extends Component {
  delete(e) {
    const rowId = e.target.id;
    this.props.deleteRow(rowId);
    e.preventDefault();
  }

  render() {
    const headers = [
      { key: 'Name', header: 'Name' },
      { key: 'Points', header: 'Amount of points' },
      { key: 'Delete', header: 'delete' }
    ];

    rows = this.props.rows;

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
                        <TableCell id={i} className={styles.link} onClick={(e) => this.delete(e)}>delete</TableCell>
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
                        subtitle="Fill out the form."
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteRow }, dispatch);
}

export default connect(null, mapDispatchToProps)(SprintTable);
