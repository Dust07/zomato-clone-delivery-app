import React from 'react'
import "./style.scss"

const Header = () => {
  return (
    <div className="max-width header">
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className="header-logo" />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <p>Bangladesh</p>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input placeholder='Search for restaurant, cuisine or dish' className="search-input" />
          </div>

        </div>
        <div className='profile-wrapper'>
          <img src="https://lh3.googleusercontent.com/ogw/ADea4I5XsrqOseI7Si-N_W6tOtrVKeKaWstXaQpTDFfi=s32-c-mo" alt="user-icon" className="header-profile-image" />
          <span className="header-username">Tien Phat</span>
          <i className="fi fi-rr-caret-down absolute-center profile-options-icon"></i>

        </div>
      </div>
    </div>

  )
}

export default Header