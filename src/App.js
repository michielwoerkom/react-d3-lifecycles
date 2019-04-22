import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './components/form';
import Graph from './components/graph';
import SprintTable from './components/data-table';

import './app.scss';
import styles from './app.module.scss';

class App extends Component {

  render() {
    return (
      <div className={styles.main}>
        <div className="bx--grid">
          <Form />
          <div className="bx--row">
            <div className="bx--col">
              <Graph rows={this.props.rows}/>
            </div>
            <div className="bx--col">
              <SprintTable rows={this.props.rows}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rows: state
});

export default connect(mapStateToProps)(App);
