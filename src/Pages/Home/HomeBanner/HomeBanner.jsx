import React from "react";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './HomeBanner.css'
import 'swiper/css/autoplay'


const HomeBanner = () => {
  return (
    <>

  <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="app w-11/12"
      >
        <SwiperSlide > <img className="h-96"  src="https://i.ibb.co/K58sjnn/car-1.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img className=" h-96" src="https://i.ibb.co/346jKYv/car-2.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img className=" h-96" src="https://i.ibb.co/P1tJTSP/car-3.jpg" alt="" /> </SwiperSlide>
        
      </Swiper>







    
    </>
    
  );
};

export default HomeBanner;
