import React from 'react'

export default function Title({title,subtitle}) {
  return (
    <div className='w-full flex flex-col gap-1 mb-5'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-xs text-gozatgray-500'>{subtitle}</p>
    </div>
  )
}
