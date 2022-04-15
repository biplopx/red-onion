import React from 'react';
import banner from '../../images/bannerbackground.png';
import './Banner.css';

const Banner = () => {
  return (
    <section className='banner'>
      <div className="container">
        <h1>Best food waiting for your belly</h1>
        <div className="input-group">
          <input type="text" placeholder='Search food items' name="" id="" />
          <button className='search-btn'>Search</button>
        </div>
      </div>

    </section>
  );
};

export default Banner;