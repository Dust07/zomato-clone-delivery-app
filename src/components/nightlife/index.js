import React from 'react'
import { nightLife } from "../../data/nightLife"
import Collections from '../collections'
import ExploreSection from '../exploreSection'
import Filter from '../filter'
import "./style.scss"

const collectionList = [
  {
    title: "Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1646983582.jpg",
    places: "22 places"
  },
  {
    title: "Where's the party",
    cover: "https://b.zmtcdn.com/data/collections/b05dc8713287671124d8408fb6198bb3_1631608443.jpg",
    places: "34 places"
  },


]


const nightLifeFilterList = [
  {
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    icon: <i className="fi fi-rr-truck-side absolute-center"></i>,
    title: "Delivery time"
  },
  {
    title: "Rating 4.0+"
  },
  {
    title: "Pub & Bars"
  },
  {
    title: "Open Now"
  },
]

const nightLifeList = nightLife;

const Nightlife = () => {
  return (
    <div>
      <Collections list={collectionList} />
      <Filter filterList={nightLifeFilterList} />
      <ExploreSection list={nightLifeList} collectionName={"Nightlife Restaurants in Vasant Kunj"} />
    </div>
  )
}

export default Nightlife