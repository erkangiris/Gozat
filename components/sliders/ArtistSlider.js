"use client"
import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ArtistAvatar from '../artists/ArtistAvatar';
import StandartButton from '../ui/StandartButton';

export default function ArtistSlider({ data, title, description }) {
    return (
        <Box>
            <Title title={title} subtitle={description} />
            <Swiper
                className='w-full'
                spaceBetween={8}
                slidesPerView={"auto"}
                freeMode
            >
                {
                    data?.map((item) => (
                        <SwiperSlide key={item.id} className='w-32'>
                            <ArtistAvatar data={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <StandartButton title='Tümünü Keşfet' className='mt-5' />
        </Box>
    )
}
