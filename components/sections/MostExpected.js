import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import MostExpectedCard from '../posters/MostExpectedCard'
import StandartButton from '../ui/StandartButton'

export default function MostExpected({ data, title, subtitle }) {
  return (
    <Box>
      <Title title={title} subtitle={subtitle} />
      <div className='w-full flex flex-col gap-2 lg:flex-row lg:gap-5'>
        {
          data.map((item) => (
            <MostExpectedCard key={item.id} data={item} />
          ))
        }
      </div>
      <StandartButton title='Tümünü Keşfet' className='mt-5' />
    </Box>
  )
}
