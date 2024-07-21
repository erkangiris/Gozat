import React from 'react'
import Typography from './Typography'

export default function Title({title,subtitle, className}) {
  return (
    <div className={`w-full flex flex-col gap-1 mb-5 ${className && className}`}>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='subtitle'>{subtitle}</Typography>
    </div>
  )
}
