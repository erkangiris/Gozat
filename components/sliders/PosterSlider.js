"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Box from '../ui/Box'
import Title from '../ui/Title'
import StandartPoster from '../posters/StandartPoster';

export default function PosterSlider({ data }) {
    return (
        <Box>
            <Title title='Popüler Etkinlikler' subtitle='Şehrindeki popüler konserler' />
            <Swiper
                className='w-full'
                spaceBetween={8}
                slidesPerView={"auto"}
                freeMode
            >
                {
                    data?.map((item) => (
                        <SwiperSlide key={item.id} className='w-140'>
                            <StandartPoster data={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}
