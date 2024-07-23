import React from 'react'

export default function Box({smallPadding, className, children}) {
  return (
    <div className={`${smallPadding ? 'p-3' : 'p-5'} w-full lg:max-w-1440 lg:mx-auto bg-card-bg bg-opacity-50 rounded-lg dark:bg-white dark:bg-opacity-100 flex flex-col gap-2 ${className} lg:p-10`}>{children}</div>
  )
}
