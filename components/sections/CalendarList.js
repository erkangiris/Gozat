import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import CalendarEvent from '../posters/CalendarEvent'
import StandartButton from '../ui/StandartButton'

export default function CalendarList({data}) {
  return (
    <Box>
        <Title title="Burna Boy’un Diğer Konserleri" subtitle="Sanatçının konser takvimindeki diğer konserler" />
        <div className='flex flex-col w-full gap-4 mb-6'>
            {
                data.slice(0,3).map((item)=>(
                    <CalendarEvent data={item} />
                ))
            }
        </div>
        <StandartButton title="Tümünü Keşfet" />
    </Box>
  )
}
