import React, { Component } from 'react'
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import { chunk } from 'lodash';
import './flowContainer.css';

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

  renderTopRow = () => {
    let myArray = []
    for(let i = 1; i <= this.state.columnValue; i++) {
      myArray.push(i)
    }
    const data = myArray.map((number, index) => {
      return (
        <th
          key={`${index}${number}`}
        >
          {number}
        </th>
      )
    })
    return (
      <thead>
        <tr>
          {data}
        </tr>
      </thead>
    )
  }

  renderBottomRows = (splitValues) => {
    const chunks = chunk(splitValues, this.state.columnValue)
    const length = chunks.length
    const filteredArrays = []
    for (let j = 0; j < length; j++) {
      let tempArray = []
      for (let i = j; i < splitValues.length; i=i+length) {
        tempArray.push(splitValues[i]);
      }
      if (tempArray.length < chunks[0].length) {
        const extra = chunks[0].length - tempArray.length
        for (let q = 1; q <= extra; q++) {
          tempArray.push(null)
        }
      }
      filteredArrays.push(tempArray)
    }

    const rows = filteredArrays.map((array, index) => {
      const data = array.map((element, index) => {
        return <td key={`${element}${index}`}>{element}</td>
      })
      return (
        <tr key={`${array}${index}`}>
          {data}
        </tr>
      )
    })
    return (
      <tbody>
         {rows}
      </tbody>
    )
  }

  renderTable = () => {
    const splitValues = this.state.splitValues
    if (!splitValues || this.state.error) {
      return <div />
    } else {
      return (
        <table className="flow-table">
          {this.renderTopRow()}
          {this.renderBottomRows(splitValues)}
        </table>
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