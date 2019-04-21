import React, { Component } from 'react';
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
              <Graph />
            </div>
            <div className="bx--col">
              <SprintTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
