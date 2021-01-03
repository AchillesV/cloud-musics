import React, {useEffect, useState} from 'react';
import { SliderContainer } from './style';
import 'swiper/swiper-bundle.css'
import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination])

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const {bannerList = []} = props;
  console.log(bannerList)
  useEffect(() => {
    if(bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {el: '.swiper-pagination'}
      });
      
      setSliderSwiper(newSliderSwiper);
    }
  },[bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className="before" />
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map ((slider,index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div> 
    </SliderContainer>
  )
}

export default Slider;