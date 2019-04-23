import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, TextInput, Button } from 'carbon-components-react';

import { rows } from '../store/actions';

import './form.scss';
import styles from './form.module.scss';

class MainForm extends Component {
  state = {
    sprintName: '',
    sprintPoints: ''
  };

  onSprintNameChange = e => {
    this.setState({ sprintName: e.target.value });
  }

  onSprintPointsChange = e => {
    this.setState({ sprintPoints: e.target.value });
  }

  onSubmit = (e) => {
    const formData = {sprintName: this.state.sprintName, sprintPoints: this.state.sprintPoints};
    this.props.rows(formData);
    e.preventDefault();
  };

  render() {
    return (
      <div className={styles.main}>
        <div className="bx--row">
          <Form onSubmit={this.onSubmit}>
              <TextInput
                id="sprint-name"
                labelText=""
                placeholder="Sprint name"
                value={this.state.sprintName}
                onChange={this.onSprintNameChange}
              />
              <TextInput
                id="sprint-points"
                labelText=""
                placeholder="Amount of points"
                value={this.state.sprintPoints}
                onChange={this.onSprintPointsChange}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ rows }, dispatch);
}

export default connect(null, mapDispatchToProps)(MainForm);
