import React from 'react'
import Typography from './Typography'

export default function StandartButton({title, className}) {
  return (
    <button className={`w-full rounded-lg bg-gozatblue-400 h-10 flex justify-center items-center ${className && className}`}>
        <Typography variant='smallbold'>{title}</Typography>
    </button>
  )
}
