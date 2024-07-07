import React from 'react'

export default function Box({smallPadding, className, children}) {
  return (
    <div className={`${smallPadding ? 'p-3' : 'p-5'} w-full bg-card-bg bg-opacity-70 rounded-lg ${className}`}>{children}</div>
  )
}
