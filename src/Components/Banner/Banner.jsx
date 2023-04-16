import React from 'react';
import backgroundBanners from "../../images/bannerbackground.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <img src={backgroundBanners} alt="" />
            <div className="banner-section">
                <h1>Best food waiting for your belly</h1>
                <span>
                    <input className='searchFood' type="text" name="search" placeholder="Search food items" id="" />
                    <button>Search</button>
                </span>
            </div>
        </div>
    );
};

export default Banner;