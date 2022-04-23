import React from 'react'
import Slider from 'react-slick/lib/slider';
import NextArrow from '../../carousel/NextArrow';
import PrevArrow from '../../carousel/PrevArrow';
import DeliveryItem from '../deliveryItem';
import "./style.scss"

const deliveryCollection = [
  {
    id: 1,
    title: "Home Style",
    cover: "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
  },
  {
    id: 2,
    title: "Paratha",
    cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
  },
  {
    id: 3,
    title: "Sandwich",
    cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
  },
  {
    id: 4,
    title: "Tea",
    cover: "https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png"
  },
  {
    id: 5,
    title: "Dosa",
    cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
  },
  {
    id: 6,
    title: "Vada",
    cover: "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png"
  },
  {
    id: 7,
    title: "Idli",
    cover: "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
  },
  {
    id: 8,
    title: "Chaat",
    cover: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
  },
  {
    id: 9,
    title: "Coffee",
    cover: "https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png"
  },
  {
    id: 10,
    title: "Burger",
    cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
  }
]

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const DeliveryCollection = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Inspiration for your first order</div>
        <Slider {...settings}>
          {deliveryCollection.map((item) => {
            return <DeliveryItem item={item} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default DeliveryCollection