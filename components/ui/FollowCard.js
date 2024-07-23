import Image from 'next/image'
import React from 'react'
import Typography from './Typography'
import FollowButton from './FollowButton'

export default function FollowCard({ name, image, url, follower, isFollow, className, type }) {
    return (
        <div className={`w-full flex items-center max-w-1440 lg:mx-auto bg-card-bg bg-opacity-70 dark:bg-white dark:bg-opacity-100 rounded-lg ${type === "big" ? 'flex-col justify-center p-10 text-center' : 'justify-between p-3'} ${className}`}>
            <div className={`flex gap-3 items-center ${type === "big" && 'flex-col justify-center mb-6'} `}>
                <Image src={image} width={type === "big" ? 125 : 60} height={type === "big" ? 125 : 60} alt={name} className={`${type === "big" ? 'rounded-full' : 'rounded-lg'}`} />
                <div className='flex flex-col'>
                    <Typography variant={`${type === "big" ? 'h2' : 'h4'}`}>{name}</Typography>
                    <Typography variant={`${type === "big" ? 'subtitle' : 'xxs'}`}>{follower}</Typography>
                </div>
            </div>
            <FollowButton isFollow={isFollow} />
        </div>
    )
}
