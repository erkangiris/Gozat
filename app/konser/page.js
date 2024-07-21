import Icons from '@/components/ui/Icons'
import Typography from '@/components/ui/Typography'
import React from 'react'
import FakeData from '@/data'
import MostExpected from '@/components/sections/MostExpected';
import MostExpectedCard from '@/components/posters/MostExpectedCard';
import Title from '@/components/ui/Title';

export default function page() {
    const { sliderData, populerData, MostExpectedData, artistData, tagsData, festivalData } = FakeData;

    return (
        <div className='flex flex-col border-t border-gozatgray-200 pt-6 px-4'>
            <div className='flex justify-between items-center gap-10   mb-6'>
                <Typography variant='h1'>Konser Takvimi</Typography>
                <button>
                    <Icons icon='/images/static/filter.svg' />
                </button>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    MostExpectedData.map((item) => (
                        <MostExpectedCard data={item} bg key={item.id} />
                    ))
                }
            </div>
            <div className='mt-12 mb-5'>
                <Title title="Gozat Öneriyor" subtitle="Sizin için en iyi seçimler!"/>
                <div className='flex flex-col gap-2'>
                    {
                        MostExpectedData.slice(0, 2).map((item) => (
                            <MostExpectedCard data={item} bg key={item.id} />
                        ))
                    }
                </div>
            </div>
            <div className='mt-12 mb-5'>
                <Title title="Öne Çıkan Festivaller" subtitle="Bu muhteşem Festivalleri Kaçırma!" />
                <div className='flex flex-col gap-2'>
                    {
                        festivalData.map((item) => (
                            <MostExpectedCard data={item} bg key={item.id} />
                        ))
                    }
                </div>
            </div>
            <div className='mt-12 mb-5'>
                <Title title="Tüm Konser & Festivaller" subtitle="Sizin için en iyi seçimler!"/>
                <div className='flex flex-col gap-2'>
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
