import React from 'react'
import Title from './Title'
import Box from './Box'
import Image from 'next/image'
import Icons from './Icons'

export default function Filter() {
  return (

    <Box className='flex flex-col'>
      <Title title='Filtrele' subtitle='Seçeceğin kriterlere göre etkinlikleri gör!' />
      <div className='w-full flex justify-between mt-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <Image src='/images/static/pin.svg' width={16} height={16} alt='Şehir' />
            <span className='text-sm font-medium'>İstanbul</span>
          </div>
          <div className='flex items-center gap-2'>
            <Image src='/images/static/calendar.svg' width={16} height={16} alt='Tarih' />
            <span className='text-sm font-medium'>Bu Hafta Sonu</span>
          </div>
        </div>
        <button className=''><Icons icon='/images/static/filter.svg' /></button>
      </div>
    </Box>
  )
}
