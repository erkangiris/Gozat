import Link from 'next/link'
import React from 'react'
import { isMobile } from 'react-device-detect'

export default function SliderPoster({ data, notext }) {
    return (
        <div className='h-400 max-w-96 w-full bg-cover rounded-lg overflow-hidden flex flex-col justify-end pb-8' style={{ backgroundImage: `url(${isMobile ? data.mobilImg : data.desktopImg})` }}>
            {
                !notext &&
                <div className='w-full flex flex-col justify-center datas-center text-center'>



                    <Link href={data.url} className='text-2xl font-semibold text-white'>{data.title}</Link>
                    {
                        data.subtitleUrl ?
                            <Link href={data.subtitleUrl} className='text-gozatgray-500 text-sm'>{data.subtitle}</Link>
                            :
                            <span className='text-gozatgray-500 text-sm'>{data.subtitle}</span>
                    }
                </div>
            }
        </div>
    )
}
