import React from 'react'
import PropTypes from 'prop-types'
import { chunk } from 'lodash'
import 'react-select/dist/react-select.css'
import './flowContainer.css'

const FlowTable = (props) => {
  const renderTopRow = () => {
    let myArray = []
    for(let i = 1; i <= props.columnValue; i++) {
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

  const renderBottomRows = (splitValues) => {
    const chunks = chunk(splitValues, props.columnValue)
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

  return (
    <table className="flow-table">
      {renderTopRow()}
      {renderBottomRows(props.splitValues)}
    </table>
  )
}

FlowTable.propTypes = {
  splitValues: PropTypes.array.isRequired,
  columnValue: PropTypes.number.isRequired
}

export default FlowTable