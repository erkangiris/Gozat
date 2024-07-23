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
                <Link href={data.url} title={data.name}>
                    <Image src={data.image} alt={data.name} width={100} height={100} className='rounded-full' />
                </Link>
            </figure>
            <Typography variant='h6' className="truncate">
                <Link href={data.url} title={data.name}>{data.name}</Link>
            </Typography>
            <div className='w-full flex flex-col gap-2 justify-center items-center'>
                <FollowButton isFollow={data.isFollow} />
                <Typography variant='xxs'>{data.followerCount} Takipçi</Typography>
            </div>
        </div>
    )
}
