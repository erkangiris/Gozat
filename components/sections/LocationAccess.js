import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import Image from 'next/image'
import StandartButton from '../ui/StandartButton'

export default function LocationAccess({title,subtitle}) {
  return (
    <Box>
        <Title title={title} subtitle={subtitle} />
        <Image src="/images/static/location_access.svg" alt="Konuma İzin Ver" width={300} height={190} />
        <StandartButton title='Konuma İzin Ver' />
    </Box>
  )
}
