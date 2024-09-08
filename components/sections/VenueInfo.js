import React from 'react'
import Box from '../ui/Box'
import Typography from '../ui/Typography'
import Icons from '../ui/Icons'
import Link from 'next/link'
import FollowCard from '../ui/FollowCard'
import { dateFormat } from '../utils/dateFormat'

export default function Venuenfo({ data, artist }) {
    const bornDate = dateFormat(data.bornDate)
    const dieDate = dateFormat(data.dieDate)
    console.log(data.dieDate)


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
                    <FollowCard name={data.venueName} follower={data.followerCount} isFollow image={data.logo} className="mt-5" />
                }
                {
                    artist ?
                        <div className='flex flex-col mt-4 gap-4'>
                            <div className='flex w-full gap-4 items-center'>
                                <Icons icon="/images/static/pin.svg" />
                                <div className='flex flex-col'>
                                    <Typography variant='xxs'>Doğum Yeri</Typography>
                                    <Typography variant='h5' className="font-medium">{data.bornCity}</Typography>
                                </div>
                            </div>
                            <div className='flex w-full gap-4 items-center'>
                                <Icons icon="/images/static/phone.svg" />
                                <Link href={`tel:${data.venuePhone}`} className='flex flex-col'>
                                    <Typography variant='xxs'>Doğum Tarihi</Typography>
                                    <Typography variant='h5' className="font-medium">{bornDate.shortDate}</Typography>
                                </Link>
                            </div>
                            <div className='flex w-full gap-4 items-center'>
                                <Icons icon="/images/static/direction.svg" />
                                <Link href={`tel:${data.venueDirection}`} className='flex flex-col'>
                                    <Typography variant='xxs'>Ölüm Tarihi</Typography>
                                    <Typography variant='h5' className="font-medium">{dieDate.shortDate}</Typography>
                                </Link>
                            </div>
                        </div>
                        :
                        <div className='flex flex-col mt-4 gap-4'>
                            <div className='flex w-full gap-4 items-center'>
                                <Icons icon="/images/static/pin.svg" />
                                <div className='flex flex-col'>
                                    <Typography variant='xxs'>Adres</Typography>
                                    <Typography variant='h5' className="font-medium">{data.venueAddress}</Typography>
                                </div>
                            </div>
                            <div className='flex w-full gap-4 items-center'>
                                <Icons icon="/images/static/phone.svg" />
                                <Link href={`tel:${data.venuePhone}`} className='flex flex-col'>
                                    <Typography variant='xxs'>Telefon</Typography>
                                    <Typography variant='h5' className="font-medium">{data.venuePhone}</Typography>
                                </Link>
                            </div>
                            <div className='flex w-full gap-4 items-center'>
                                <Icons icon="/images/static/direction.svg" />
                                <Link href={`tel:${data.venueDirection}`} className='flex flex-col'>
                                    <Typography variant='xxs'>Yol Tarifi</Typography>
                                    <Typography variant='h5' className="font-medium">Mekana Yol Tarifi Al</Typography>
                                </Link>
                            </div>
                        </div>
                }
            </div>
        </Box >
    )
}
