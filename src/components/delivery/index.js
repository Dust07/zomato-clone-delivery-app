import React from 'react'
import { restaurants } from '../../data/restaurants'
import ExploreSection from '../exploreSection'
import Filter from '../filter'
import TopBrands from '../topBrands'
import DeliveryCollection from './deliveryCollection'
import "./style.scss"

const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection list={restaurantList} collectionName="Best food in Bangladesh" />
    </div>
  )
}

export default Delivery