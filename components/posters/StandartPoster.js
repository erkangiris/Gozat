import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dateFormat } from '../utils/dateFormat'
export default function StandartPoster({ data }) {

    const date = dateFormat(data.date)

    console.log(data)
    
    return (
        <>
            <div className='w-140 bg-cover flex flex-col lg:w-72'>
                <figure>
                    <Link href={data.url} title={data.name} className='relative'>
                        <Image src={data.image} width={288} height={374} alt={data.name} className='rounded-lg' />
                        <time datatime="" className='absolute bottom-1 left-1 dark:text-black text-xxs font-medium whitespace-nowrap px-3 py-1 rounded bg-black bg-opacity-50 backdrop-blur-lg'>{date.shortDayMonth} {data.city ? `, ${data.city}` : ''}</time>
                    </Link>
                </figure>
                <div className='flex flex-col w-full pt-3 gap-1'>
                    <Link href={data.url} title={data.title} className='text-white dark:text-black text-sm lg:text-base lg:font-bold  font-medium line-clamp-2'>{data.name}</Link>
                    {data.venueUrl && <Link href={data.venueUrl} title={data.title} className='text-gozatgray-500 text-xs dark:text-gray-800 truncate'>{data.venue}</Link>}
                    
                </div>
            </div>
        </>

    )
}
