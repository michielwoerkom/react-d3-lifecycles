import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './components/form';
import GraphMethod1 from './components/graphMethod1';
import GraphMethod2 from './components/graphMethod2';
import SprintTable from './components/data-table';

import './app.scss';
import styles from './app.module.scss';

class App extends Component {
  render() {
    console.log('app Render');
    return (
      <div className={styles.main}>
        <div className="bx--grid">
          <Form />
          <div className="bx--row">
            <div className="bx--col">
              <GraphMethod1 rows={this.props.rows}/>
              <GraphMethod2 rows={this.props.rows}/>
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

const mapStateToProps = (state) => {
  return {rows: state};
};

export default connect(mapStateToProps)(App);
