import React from 'react'
import "./style.scss"
import ExploreCard from "./exploreCard"

const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((item, index) => {
          return <ExploreCard item={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default ExploreSection