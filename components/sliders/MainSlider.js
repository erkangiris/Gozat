"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import {isMobile} from 'react-device-detect';
import SliderPoster from '../posters/SliderPoster';

export default function MainSlider({ data }) {

    return (
        <Swiper
            modules={[Pagination]}
            className='w-full'
            spaceBetween={8}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={{ "--swiper-navigation-color": "#000", "--swiper-pagination-color": "#fff", }}
        >
            {
                data?.map((item) => (
                    <SwiperSlide key={item.id}>
                       <SliderPoster data={item}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
