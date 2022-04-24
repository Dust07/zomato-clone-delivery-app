import React from 'react'
import Slider from 'react-slick/lib/slider'
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';
import "./style.scss"

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const Collections = ({ list }) => {
  return (
    <div className="collections-wrapper">
      <div className="max-width collections">
        <div className="collection-title">Collections</div>
        <div className="collections-subtitle-row">
          <div className="collections-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
          </div>
          <div className="collections-location">
            All collections in Delhi NCR
            <i className="fi fi-rr-caret-right absolute-center"></i>
          </div>

        </div>

        <Slider {...settings}>
          {list.map((item) => {
            return (
              <div>
                <div className="collections-cover">
                  <img src={item.cover} alt={item.title} className="collections-image" />
                  <div className="gradient-bg"></div>
                  <div className="collections-card-title">{item.title}</div>
                  <div className="collections-card-places">
                    {item.places}
                    <i className="fi fi-rr-caret-right absolute-center"></i>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Collections