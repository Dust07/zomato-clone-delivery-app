import React from 'react'
import "./style.scss"

const ExploreCard = ({ item }) => {
  const name = item?.info?.name ?? "";
  const coverImg = item?.info?.image?.url;
  const deliveryTime = item?.order?.deliveryTime;
  const rating = item?.info?.rating?.rating_text;
  const approxPrice = item?.info?.cfo?.text;
  const offers = item?.bulkOffers ?? [];
  const cuisines = item?.info?.cuisine?.map((item) => item.name).slice(0, 3)
  const bottomContainers = item?.bottomContainers;
  const goldOff = item?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null

  return (
    <div className="explore-card cursor-pointer">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="item-row">
        <div className="item-name">{name}</div>
        {rating && <div className="item-rating absolute-center">
          {rating} <i className="fi fi-rr-star absolute-center"></i>
        </div>}
      </div>
      <div className="item-row">
        {cuisines.length && <div className="item-cuisine">
          {cuisines.map((cuisine, index) => {
            return (
              <span className="item-cuisine-tag">{cuisine}{index !== cuisines.length - 1 && ","}</span>
            )
          })}
        </div>}
        <div className="item-price">{approxPrice}</div>
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{ height: "18px" }} />
            <div className="item-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  )
}
export default ExploreCard