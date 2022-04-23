import React from 'react'
import "./style.scss"

const BrandItem = ({ brand }) => {
  return (
    <div className="brand-item">
      <div className="brand-item-cover">
        <img src={brand.cover} alt={brand.name} className="brand-image" />
      </div>
      <div className="brand-name">{brand.name}</div>
      <div className="brand-time">{brand.time}</div>
    </div>
  )
}

export default BrandItem