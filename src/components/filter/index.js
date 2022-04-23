import React from 'react'
import FilterItem from './filterItem'
import "./style.scss"
const filterList = [
  {
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    icon: <i class="fi fi-rr-truck-side absolute-center"></i>,
    title: "Delivery time"
  },
  {
    title: "Rating: 4.0+"
  },
  {
    title: "Pure Veg"
  },
  {
    title: "Cuisines"
  },
  {
    title: "Great Offers"
  },
]

const Filter = () => {
  return (
    <div className="filter">
      {filterList && filterList.map((filter, index) => {
        return (
          <div>
            <FilterItem filter={filter} key={index} />
          </div>
        )
      })}
    </div>
  )
}

export default Filter