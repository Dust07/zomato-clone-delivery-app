import React from 'react'
import Filter from '../filter'
import TopBrands from '../topBrands'
import DeliveryCollection from './deliveryCollection'
import "./style.scss"

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter />
      </div>
      <DeliveryCollection />
      <TopBrands />
    </div>
  )
}

export default Delivery