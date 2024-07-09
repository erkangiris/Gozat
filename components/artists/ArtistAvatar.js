import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isMobile } from 'react-device-detect'
import Typography from '../ui/Typography'
import FollowButton from '../ui/FollowButton'

export default function ArtistAvatar({ data }) {
    return (
        <div className='w-full flex flex-col gap-3 justify-center items-center'>
            <figure>
                <Link href={data.url} title={data.title}>
                    <Image src={`${isMobile ? data.mobilImg : data.desktopImg}`} alt={data.title} width={128} height={128} className='rounded-full' />
                </Link>
            </figure>
            <Typography variant='h6'>
                <Link href={data.url} title={data.title}>{data.title}</Link>
            </Typography>
            <div className='w-full flex flex-col gap-2 justify-center items-center'>
                <FollowButton isFollow={data.isFollow} />
                <Typography variant='xxs'>{data.followerCount.toLocaleString('tr-TR')} Takipçi</Typography>
            </div>
        </div>
    )
}
