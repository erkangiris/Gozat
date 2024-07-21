import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isMobile } from 'react-device-detect'
import Typography from '../ui/Typography'

export default function MostExpectedCard({data, bg}) {
  return (
    <Link href={data.url} title={data.title} className={`w-full h-140 flex justify-between rounded-lg ${bg ? 'bg-card-bg bg-opacity-70' : 'bg-gozatgray-200'}`}>
        <div className='flex flex-col justify-between p-4'>
            <Typography variant='subtitle'>{data.date}, {data.city}</Typography>
            <Typography variant='h3' className="leading-tight font-bold line-clamp-2">{data.title}</Typography>
        </div>
        <figure className='h-140'>
            <Image src={`${isMobile ? data.mobilImg : data.desktopImg}`} alt={data.title}  className='rounded-r-lg h-140 min-w-28 w-28  object-cover' width={112} height={140} />
        </figure>
    </Link>
  )
}
