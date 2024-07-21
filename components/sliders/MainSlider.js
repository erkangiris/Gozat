"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import SliderPoster from '../posters/SliderPoster';

export default function MainSlider({ data, notext }) {

    return (
        <Swiper
            modules={[Pagination]}
            className='w-full'
            spaceBetween={8}
            pagination={{ clickable: true }}
            style={{ "--swiper-navigation-color": "#000", "--swiper-pagination-color": "#fff", }}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1400: {
                    slidesPerView: 3,
                },
                1700: {
                    slidesPerView: 'auto',
                    spaceBetween:20
                },

            }}
        >
            {
                data?.map((item) => (
                    <SwiperSlide key={item.id} className='max-w-96'>
                        <SliderPoster notext data={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
