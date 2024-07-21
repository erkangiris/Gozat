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
                                <a href={genre.url} key={genre.id} className='bg-cardupper-bg text-xxs px-3 py-1 rounded'>
                                    {genre.name}
                                </a>
                            ))}
                        </div>
                    )
                }

                <Typography variant='text' className="text-gozatgray-500 leading-relaxed">{data.text}</Typography>
                {
                    data.type === "venue" &&
                    <FollowCard name={data.venueName} follower={data.followerCount} isFollow image="/images/delete/blogo.webp" className="mt-5" />
                }
                <div className='flex flex-col mt-4 gap-4'>
                    {
                        data.features && data.features.map((item) => (
                            item.url ?
                                <Link href={item.url} key={item.id} title={item.title} target={item.type === "direction" ? "_blank" : "_self"} className='flex w-full gap-4 items-center'>
                                    <Icons icon={item.icon} />
                                    <div className='flex flex-col'>
                                        <Typography variant='xxs'>{item.title}</Typography>
                                        {
                                            item.type === "adres" ? <address><Typography variant='h5' className="font-medium not-italic">{item.content}</Typography></address> : <Typography variant='h5' className="font-medium">{item.content}</Typography>
                                        }
                                    </div>
                                </Link> :
                                <div key={item.id} className='flex w-full gap-4 items-center'>
                                    <Icons icon={item.icon} />
                                    <div className='flex flex-col'>
                                        <Typography variant='xxs'>{item.title}</Typography>
                                        <Typography variant='h5' className="font-medium">{item.content}</Typography>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </Box >
    )
}
