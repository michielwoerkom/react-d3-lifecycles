import React, { Component } from 'react';
import { Form, TextInput, Button } from 'carbon-components-react';

import './form.scss';
import styles from './form.module.scss';

class MainForm extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className="bx--row">
          <Form>
              <TextInput
                className="some-class"
                id="test2"
                placeholder="Sprint name"
              />
              <TextInput
                className="some-class"
                id="test2"
                placeholder="Amount of points"
              />
            <Button type="submit" className="some-class">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default MainForm;
