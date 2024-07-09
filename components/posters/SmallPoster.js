import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typography from '../ui/Typography'
import { isMobile } from 'react-device-detect'

export default function SmallPoster({ data }) {
    console.log(data)
    return (
        <div className='w-full flex justify-between items-center gap-3'>
            <figure>
                <Link href={data.url} title={data.title}>
                    <Image src={`${isMobile ? data.mobilImg : data.desktopImg}`} alt={data.title} width={90} height={120} className='rounded-lg' />
                </Link>
            </figure>
            <div className='flex flex-col gap-1 w-full'>
                <Typography variant='h6'>
                    <Link href={data.url} title={data.title}>{data.title}</Link>
                </Typography>
                <Typography variant='subtitle'>{data.venueName}</Typography>
                <Typography variant='subtitle'>{data.date}</Typography>
            </div>
        </div>
    )
}
