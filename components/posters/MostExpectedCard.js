import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isMobile } from 'react-device-detect'

export default function MostExpectedCard({data}) {
  return (
    <Link href={data.url} title={data.title} className='w-full h-140 bg-gozatgray-200  flex justify-between rounded-lg'>
        <div className='flex flex-col justify-between p-4'>
            <span className='text-xs text-gozatgray-500'>{data.date}, {data.city}</span>
            <h3 className='text-26 leading-tight font-bold line-clamp-2'>{data.title} </h3>
        </div>
        <figure className='h-140'>
            <Image src={`${isMobile ? data.mobilImg : data.desktopImg}`} alt={data.title}  className='rounded-r-lg h-140 min-w-28 w-28  object-cover' width={112} height={140} />
        </figure>
    </Link>
  )
}
