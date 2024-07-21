import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import SmallPoster from '../posters/SmallPoster'
import StandartButton from '../ui/StandartButton'

export default function ThisWeekCard({ data, title, subtitle }) {
    return (
        <Box>
            <Title title={title} subtitle={subtitle} />
            <div className='w-full flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:gap-5'>
                {
                    data.map((item)=>(
                        <SmallPoster data={item} key={item.id} />
                    ))
                }
            </div>
            <StandartButton title='Tümünü Keşfet' className='mt-5' />
        </Box>
    )
}
