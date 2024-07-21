import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function StandartPoster({ data }) {
    
    return (
        <>
            <div className='w-140 bg-cover flex flex-col lg:w-72'>
                <figure>
                    <Link href={data.url} title={data.title} className='relative'>
                        <Image src={data.mobilImg} width={288} height={374} alt={data.title} className='rounded-lg' />
                        <time datatime="" className='absolute bottom-1 left-1 text-xxs font-medium whitespace-nowrap px-3 py-1 rounded bg-black bg-opacity-50 backdrop-blur-lg'>{data.date}, {data.city}</time>
                    </Link>
                </figure>
                <div className='flex flex-col w-full pt-3 gap-1'>
                    <Link href={data.venueUrl} title={data.title} className='text-white text-sm font-medium line-clamp-2'>{data.title}</Link>
                    <Link href={data.venueUrl} title={data.title} className='text-gozatgray-500 text-xs truncate'>{data.venueName}</Link>
                    
                </div>
            </div>
        </>

    )
}
