import React from 'react'
import Typography from './Typography'

export default function FollowButton({ isFollow }) {
    return (
        <>
            {isFollow ?
                <button className=' bg-gozatblue-400  rounded-lg w-24 flex items-center justify-center py-1'>
                    <Typography variant='followActive'>Takibi Bırak</Typography>
                </button>
                :
                <button className='border border-gozatblue-400 rounded-lg w-24 flex items-center justify-center py-1'>
                    <Typography variant='follow'>Takip Et</Typography>
                </button>
            }
        </>
    )
}
