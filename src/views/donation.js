import React from 'react'

import { Helmet } from 'react-helmet'

import './Styles/donation.css'

const Donation = (props) => {
  return (
    <div className="donation-container">
      <Helmet>
        <title>Donation - NGO</title>
        <meta property="og:title" content="Donation - Agitated Brisk Chicken" />
      </Helmet>
      <div className="donation-container1">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="donation-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="donation-slider-slide swiper-slide"
            >
              <span>Text</span>
            </div>
            <div
              data-thq="slider-slide"
              className="donation-slider-slide1 swiper-slide"
            >
              <span>Lorem</span>
            </div>
            <div
              data-thq="slider-slide"
              className="donation-slider-slide2 swiper-slide"
            >
              <span className="donation-text2">Text</span>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="donation-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
      <div className="donation-container2">
        <div className="donation-container3">
          <h1 className="donation-text3">Donate</h1>
          <div className="donation-container4">
            <input type="text" placeholder="Enter Amount" className="input" />
            <div className="donation-container5">
              <button type="button" className="button">
                Gpay
              </button>
              <button type="button" className="donation-button1 button">
                <span>
                  <span>Net </span>
                  <span>Banking</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="donation-container6">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="donation-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Donation
