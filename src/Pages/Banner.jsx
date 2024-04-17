import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='mt-36 mb-7  lg:mt-10 '>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
          {/* 1st */}
          <SwiperSlide className='rounded-xl'><div  className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/BNGg0wD/pexels-pixabay-237371.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your dream home is
our top priority</h1>
      <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</p>
      <button className="btn btn-info text-white">Discover More</button>
    </div>
  </div>
</div></SwiperSlide>
 
{/* 2nd */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/wpDKT3q/viviennebaader-lifeofpix-viviennebaader-310854.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your dream home is
our top priority</h1>
      <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</p>
      <button className="btn btn-info text-white">Discover More</button>
    </div>
  </div>
</div></SwiperSlide>


{/* 3rd */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/R6hq2DS/pexels-tan-danh-1329711.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your dream home is
our top priority</h1>
      <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</p>
      <button className="btn btn-info text-white">Discover More</button>
    </div>
  </div>
</div></SwiperSlide>


{/* 4th */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/nkjYfwn/pexels-emre-can-acer-2079249.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your dream home is
our top priority</h1>
      <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</p>
      <button className="btn btn-info text-white">Discover More</button>
    </div>
  </div>
</div></SwiperSlide>


{/* 5th */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/jzYPd7r/pexels-aleksandra-platonova-2263510.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your dream home is
our top priority</h1>
      <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</p>
      <button className="btn btn-info text-white">Discover More</button>
    </div>
  </div>
</div></SwiperSlide>

{/* 6th */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/vsnTbPn/pexels-vincent-rivaud-2876787.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your dream home is
our top priority</h1>
      <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</p>
      <button className="btn btn-info text-white">Discover More</button>
    </div>
  </div>
</div></SwiperSlide>


<div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default Banner;