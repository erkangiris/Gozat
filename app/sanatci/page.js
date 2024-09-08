import Icons from '@/components/ui/Icons'
import Typography from '@/components/ui/Typography'
import React from 'react'
import Data from '@/homeData'
import Title from '@/components/ui/Title';
import MostExpectedCard from '@/components/posters/MostExpectedCard';
import ArtistAvatar from '@/components/artists/ArtistAvatar';

export default function page() {
    const { homeData } = Data;
    console.log(homeData)
    return (
        <div className='flex flex-col w-full border-t border-gozatgray-200 pt-6 px-4 lg:gap-10 lg:mx-auto lg:max-w-1440 lg:border-none'>

            <div className='flex justify-between items-center gap-10 mb-6 lg:my-8'>
                <Typography variant='h1'>Sanatçılar</Typography>
                <button>
                    <Icons icon='/images/static/filter.svg' />
                </button>
            </div>
            <div className='w-full grid grid-cols-2 gap-2 lg:grid lg:gap-5 lg:grid-cols-5'>
                {
                    homeData.popularArtist.map((item) => (
                        <div className='w-full rounded-lg border p-5 border-white border-opacity-5' key={item.id}>
                          <ArtistAvatar data={item} bg />
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
