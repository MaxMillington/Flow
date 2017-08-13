import React, { Component } from 'react'
import 'react-select/dist/react-select.css'
import Select from 'react-select'
import './flowContainer.css'
import FlowTable from './FlowTable'

class FlowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnValue: null,
      inputValue: '',
      error: false,
      splitValues: null
    }
  }

  logSelectChange = (val) => {
    this.setState({ columnValue: val.value })
  }

  logInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  getTables = () => {
    if (!this.state.columnValue || this.state.inputValue === '') {
      this.setState({ error: true })
    } else {
      this.setState({ splitValues: this.state.inputValue.split(',') })
    }
  }

  renderTable = () => {
    const splitValues = this.state.splitValues
    if (!splitValues || this.state.error) {
      return <div />
    } else {
      return (
        <FlowTable splitValues={splitValues} columnValue={this.state.columnValue} />
      )
    }
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
    const errorMessage = this.state.error ? 'Looks like one of your inputs is not correct' : null

    return (
      <div className="flow-outer-container">
        <div className="flow-error">{errorMessage}</div>
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
        <button
          className="flow-button"
          onClick={this.getTables}
        >
          Get My Table!
        </button>
        {this.renderTable()}
      </div>
    );
  }
}

export default FlowContainer;