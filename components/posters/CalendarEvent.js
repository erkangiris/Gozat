import React from 'react'
import Typography from '../ui/Typography'

export default function CalendarEvent({data}) {

  return (
    <div className='flex w-full gap-3 items-center'>
        <time datatime="" className='flex flex-col w-12 h-12"'>
            <span className='w-full bg-gozatblue-400 rounded-t flex justify-center items-center text-white text-xxs font-medium h-4'>{data.shortDate}</span>
            <b className='w-full h-8 flex justify-center items-center text-black text-lg bg-white rounded-b'>{data.day}</b>
        </time>
        <div className='flex flex-col gap-1'>
            <Typography variant='h5'>{data.name}</Typography>
            <Typography variant='subtitle'>{data.venue}</Typography>
        </div>
    </div>
  )
}
