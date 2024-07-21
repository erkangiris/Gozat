import React from 'react'

export default function Box({smallPadding, className, children}) {
  return (
    <div className={`${smallPadding ? 'p-3' : 'p-5'} w-full bg-card-bg bg-opacity-70 rounded-lg flex flex-col gap-2 ${className} lg:p-10`}>{children}</div>
  )
}
