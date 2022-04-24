import React from 'react'
import FilterItem from './filterItem'
import "./style.scss"

const Filter = ({ filterList }) => {
  return (
    <div className="max-width filter">
      {filterList && filterList.map((filter, index) => {
        return (
          <div key={index}>
            <FilterItem filter={filter} />
          </div>
        )
      })}
    </div>
  )
}

export default Filter