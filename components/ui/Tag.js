import React from 'react'
import Typography from './Typography'
import Image from 'next/image'

export default function Tag({ data }) {
    return (
        <>
            {data.isFollow ?
                <button className=' bg-gozatblue-400  rounded-lg px-3 flex items-center justify-center py-2 gap-3'>
                    <Typography variant='followActiveBig'>{data.name}</Typography>
                </button>
                :
                <button className='border border-gozatblue-400 rounded-lg px-3 flex items-center justify-center py-1 gap-2'>
                    <Typography variant='followBig'>{data.name}</Typography>
                    <Image src='/images/static/plus_blue.svg' alt="Takibi Bırak" width={12} height={12} />
                </button>
            }
        </>
    )
}
