import './swipper.css'
import './swipper.js'
import 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js'
import 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Swipper() {
  return (
    <div className='Swipper'>
      {/* <!-- Swiper --> */}
      <div class="swiper mySwiper">
        <div class="swiper-wrapper"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  )  
}

export default Swipper