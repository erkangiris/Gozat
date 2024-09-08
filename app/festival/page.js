import Icons from '@/components/ui/Icons'
import Typography from '@/components/ui/Typography'
import React from 'react'
import FakeData from '@/data'
import MostExpected from '@/components/sections/MostExpected';
import MostExpectedCard from '@/components/posters/MostExpectedCard';
import Title from '@/components/ui/Title';

export default function page() {
    const {MostExpectedData, festivalData } = FakeData;

    return (
        <div className='flex flex-col border-t border-gozatgray-200 pt-6 px-4 lg:gap-10 lg:mx-auto lg:max-w-1440 lg:border-none'>
            <div className='flex justify-between items-center gap-10 mb-6 lg:my-8'>
                <Typography variant='h1'>Festival Takvimi</Typography>
                <button>
                    <Icons icon='/images/static/filter.svg' />
                </button>
            </div>
            <div className='flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-5'>
                {
                    MostExpectedData.map((item) => (
                        <MostExpectedCard data={item} bg key={item.id} />
                    ))
                }
            </div>
            <div className='mt-12 mb-5'>
                <Title title="Gozat Öneriyor" subtitle="Sizin için en iyi seçimler!"/>
                <div className='flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-5'>
                    {
                        MostExpectedData.slice(0, 2).map((item) => (
                            <MostExpectedCard data={item} bg key={item.id} />
                        ))
                    }
                </div>
            </div>
            <div className='mt-12 mb-5'>
                <Title title="Tüm Festivaller" subtitle="Sizin için en iyi seçimler!"/>
                <div className='flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-5'>
                    {
                        MostExpectedData.map((item) => (
                            <MostExpectedCard data={item} bg key={item.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
