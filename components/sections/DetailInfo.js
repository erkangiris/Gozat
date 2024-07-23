import React from 'react'
import Box from '../ui/Box'
import Typography from '../ui/Typography'
import Icons from '../ui/Icons'
import Link from 'next/link'
import FollowCard from '../ui/FollowCard'

export default function DetailInfo({ data }) {


    return (
        <Box>
            <div className='w-full flex flex-col gap-1'>
                <Typography variant='h2'>{data.name}</Typography>
                {
                    data.genres && (
                        <div className='w-full flex gap-1 mt-2 mb-4'>
                            {data.genres.map((genre) => (
                                <a href={genre.url} key={genre.id} className='bg-cardupper-bg text-xxs px-3 py-1 rounded dark:bg-gray-200'>
                                    {genre.name}
                                </a>
                            ))}
                        </div>
                    )
                }

                <Typography variant='text' className="text-gozatgray-500 leading-relaxed dark:text-black">{data.text}</Typography>
                {
                    data.type === "venue" &&
                    <FollowCard name={data.venueName} follower={data.followerCount} isFollow image="/images/delete/blogo.webp" className="mt-5" />
                }
                <div className='flex flex-col mt-4 gap-4'>
                    {
                        data.date &&
                        <div className='flex w-full gap-4 items-center'>
                            <Icons icon="/images/static/calendar.svg" />
                            <div className='flex flex-col'>
                                <Typography variant='xxs' className="dark:text-gray-700">Etkinlik Tarihi</Typography>
                                <Typography variant='h5' className="font-medium not-italic">{data.date.startDate}</Typography>
                            </div>
                        </div>
                    }
                    {
                        data.venue &&
                        <div className='flex w-full gap-4 items-center'>
                            <Icons icon="/images/static/pin.svg" />
                            <div className='flex flex-col'>
                                <Typography variant='xxs' className="dark:text-gray-700">Etkinlik Yeri</Typography>
                                <Link href={data.venue.url}><Typography variant='h5' className="font-medium not-italic">{data.venue.venueName}</Typography></Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Box >
    )
}
