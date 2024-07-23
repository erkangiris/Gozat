import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import Image from 'next/image'
import Typography from '../ui/Typography'

export default function TicketPrices({data}) {
    return (
        <Box>
            <Title title="Bilet Fiyatları" subtitle="Bilet fiyatları en ucuzdan sıralanmıştır. Biletinizi alırken koltuğun konumuna yada ilave paketlere dikkat edin." />
            <div className='w-full flex flex-col gap-2'>
               {
                data.map((item, index)=>(
                    <div key={item.id} className='bg-cardupper-bg w-full flex justify-between p-3 rounded-lg dark:bg-gray-200'>
                    <div className='flex gap-3 items-center justify-between w-full'>
                        <div className='flex gap-3 items-center'>
                            <Image src={item.image} width={60} height={60} alt={item.name} className='rounded-lg' />
                            <div className='flex flex-col'>
                                <Typography variant="subtitle">{item.name}</Typography>
                                <Typography variant="h4">{item.price}</Typography>
                            </div>
                        </div>
                        <div className='relative'>
                            {index === 0 && <div className='absolute right-2 -top-11 rounded px-3 py-1 bg-gozatblue-400 text-white text-xxs whitespace-nowrap font-medum'>EN UCUZ</div>}
                            <Image src="/images/static/right_arrow.svg" width={16} height={16} alt="Satın al" />
                        </div>
                    </div>
                </div>
                ))
               }
            </div>
        </Box>
    )
}
