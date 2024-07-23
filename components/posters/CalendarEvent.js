import React from 'react'
import Typography from '../ui/Typography'
import Link from 'next/link'
import { dateFormat } from '../utils/dateFormat'
export default function CalendarEvent({ data }) {
  const date = dateFormat(data.startDate)

  return (
    <div className='flex w-full gap-3 items-center'>
      <time datatime="" className='flex flex-col w-12 h-12"'>
        <span className='w-full bg-gozatblue-400 rounded-t flex justify-center items-center text-white text-xxs font-medium h-4'>{date.shortMonth}</span>
        <b className='w-full h-8 flex justify-center items-center text-black text-lg bg-white dark:bg-gray-200 rounded-b'>{date.shortDay}</b>
      </time>
      <div className='flex flex-col gap-1'>
        <Typography variant='h5'>{data.name}</Typography>
        <Link href={data.venue.url} title={data.venue.name}><Typography variant='subtitle'>{data.venue.name}</Typography></Link>
      </div>
    </div>
  )
}
