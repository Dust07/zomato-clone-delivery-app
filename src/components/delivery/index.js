import React from 'react'
import { restaurants } from '../../data/restaurants'
import ExploreSection from '../exploreSection'
import Filter from '../filter'
import TopBrands from '../topBrands'
import DeliveryCollection from './deliveryCollection'
import "./style.scss"

const deliveryFilterList = [
  {
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    icon: <i className="fi fi-rr-truck-side absolute-center"></i>,
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

const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <Filter filterList={deliveryFilterList} />
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection list={restaurantList} collectionName="Best food in Bangladesh" />
    </div>
  )
}

export default Delivery