import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import MostExpectedCard from '../posters/MostExpectedCard'

export default function MostExpected({ data }) {
  return (
    <Box>
      <Title title={'Yılın En Beklenen Konserleri'} subtitle={'Bu yıl gerçekleşecek en büyük konserler!'} />
      <div className='w-full flex flex-col gap-2'>
        {
          data.map((item) => (
            <MostExpectedCard key={item.id} data={item} />
          ))
        }
      </div>
    </Box>
  )
}
