import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Home.css";
import 'swiper/css/pagination';
import {Autoplay, Pagination } from 'swiper/modules';
import cardata from './Car_data/Data';

export default function Home() {
    return (
        <>
            <div className='swiper'>
                <Swiper
                    pagination={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    loop={100}
                >
                    {
                        cardata.map((val)=>(
                            <SwiperSlide><img className='car-img' src={val.img} alt="Some Carousel image" /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
