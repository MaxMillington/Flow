import React, { Component } from 'react'
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import './flowContainer.css';


class FlowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { columnValue: null, inputValue: '' }
  }

  logSelectChange = (val) => {
    console.log("Selected: " + JSON.stringify(val));
    this.setState({ columnValue: val.value })
  }

  logInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    const options = [
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
      { value: 7, label: 7 },
      { value: 8, label: 8 },
      { value: 9, label: 9 },
    ];

    return (
      <div className="flow-outer-container">
        <div className="flow-inner-container">
          <input
            type="text"
            placeholder="input"
            className="flow-input"
            value={this.state.inputValue}
            onChange={this.logInputChange}
          />
          <Select
            name="form-field-name"
            className="flow-select"
            placeholder="# of columns"
            value={this.state.columnValue}
            options={options}
            onChange={this.logSelectChange}
          />
        </div>
        <button className="flow-button">Get My Table!</button>
      </div>
    );
  }
}

export default FlowContainer;