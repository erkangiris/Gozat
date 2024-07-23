import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typography from '../ui/Typography'
import { dateFormat } from '../utils/dateFormat'

export default function SmallPoster({ data }) {
    const date = dateFormat(data.date)


    return (
        <div className='w-full flex justify-between items-center gap-3'>
            <figure>
                <Link href={data.url} title={data.name}>
                    <Image src={data.image} alt={data.name} width={90} height={120} className='rounded-lg' />
                </Link>
            </figure>
            <div className='flex flex-col gap-1 w-full'>
                <Typography variant='h6'>
                    <Link href={data.url} title={data.name}>{data.name}</Link>
                </Typography>
                <Typography variant='subtitle'>{data.venue}</Typography>
                <Typography variant='subtitle' className={'text-white mt-2'}>{date.onlyDate}</Typography>
            </div>
        </div>
    )
}
