import React from "react";
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './HomeBanner.css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'


const HomeBanner = () => {
  return (
    <>

  <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectFade]}
        autoplay={true}
        effect='fade'
        className="app rounded-lg"
      >
        <SwiperSlide > <img className="h-96 w-full"  src="https://i.ibb.co/K58sjnn/car-1.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img className=" h-96 w-full" src="https://i.ibb.co/346jKYv/car-2.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img className=" h-96 w-full" src="https://i.ibb.co/P1tJTSP/car-3.jpg" alt="" /> </SwiperSlide>
        
      </Swiper>







    
    </>
    
  );
};

export default HomeBanner;
