import React from 'react'
import Collections from '../collections'
import Filter from "../filter"
import { diningOut } from "../../data/diningOut"
import "./style.scss"
import ExploreSection from '../exploreSection'

const collectionList = [
  {
    title: "Live Cricket Screening",
    cover: "https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649144881.jpg?output-format=webp",
    places: "58 places"
  },
  {
    title: "Radaman Specials",
    cover: "https://b.zmtcdn.com/data/collections/15242b397d79d3498922b4779231c850_1555421190.jpg?output-format=webp",
    places: "22 places"
  },
  {
    title: "Newly Opened",
    cover: "https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708613.jpg?output-format=webp",
    places: "20 places"
  },
  {
    title: "Trending this week",
    cover: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040101.png?output-format=webp",
    places: "12 places"
  },
  {
    title: "Trending this week",
    cover: "https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649144881.jpg?output-format=webp",
    places: "31 places"
  },
  {
    title: "Best of Delhi NCR",
    cover: "https://b.zmtcdn.com/data/collections/dc55234ebcab4867fa2eb65730c4a695_1646987030.jpg?output-format=webp",
    places: "122 places"
  },
  {
    title: "Great Cafes",
    cover: "https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg?output-format=webp",
    places: "30 places"
  },

]


const diningOutFilterList = [
  {
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    icon: <i className="fi fi-rr-truck-side absolute-center"></i>,
    title: "Delivery time"
  },
  {
    title: "Outdoor Seating"
  },
  {
    title: "Serves Alcohol"
  },
  {
    title: "Open Now"
  },
  {
    title: "Great Offers"
  },
]

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collections list={collectionList} />
      <Filter filterList={diningOutFilterList} />
      <ExploreSection list={diningList} collectionName={"Dine-Out Restaurants in Vasant Kunj"} />
    </div>
  )
}

export default DiningOut