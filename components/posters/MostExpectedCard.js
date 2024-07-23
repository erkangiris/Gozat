import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isMobile } from 'react-device-detect'
import Typography from '../ui/Typography'
import { dateFormat } from '../utils/dateFormat'

export default function MostExpectedCard({data, bg}) {
  const date = dateFormat(data.date)

  return (
    <Link href={data.url} title={data.name} className={`w-full h-140 flex dark:bg-gray-200 dark:bg-opacity-100 justify-between rounded-lg ${bg ? 'bg-card-bg bg-opacity-70' : 'bg-gozatgray-200'}`}>
        <div className='flex flex-col justify-between p-4'>
            <Typography variant='subtitle'>{date.shortDayMonth}, {data.city}</Typography>
            <Typography variant='h3' className="leading-tight font-bold line-clamp-2">{data.name}</Typography>
        </div>
        <figure className='h-140'>
            <Image src={data.image} alt={data.name}  className='rounded-r-lg h-140 min-w-28 w-28  object-cover' width={112} height={140} />
        </figure>
    </Link>
  )
}
