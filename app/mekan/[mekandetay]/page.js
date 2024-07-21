import React from 'react'
import FakeData from '@/data'
import MainSlider from '@/components/sliders/MainSlider';
import FollowCard from '@/components/ui/FollowCard';
import Typography from '@/components/ui/Typography';
import DetailInfo from '@/components/sections/DetailInfo';
import TicketPrices from '@/components/sections/TicketPrices';
import CalendarList from '@/components/sections/CalendarList';
import ArtistSlider from '@/components/sliders/ArtistSlider';
import PosterSlider from '@/components/sliders/PosterSlider';

export default function page(params) {
  const { venueSliderData, populerData, MostExpectedData, artistData, tagsData, eventData,venueData, artisData, venueDetailData } = FakeData;

  

  return (
    <div className='w-full flex flex-col gap-2'>
      <MainSlider notext data={venueSliderData} />
      <FollowCard name="Fişekhane Grandpera" follower="1.590B Takipçi" isFollow image="/images/delete/flogo.webp" />
      <DetailInfo data={venueDetailData} />
      <PosterSlider data={populerData} title='Fişekhanedeki Konserler' subtitle='Bu mekandaki popüler konserler' />
      <FollowCard type="big" name="Fişekhane" follower="155.612 kişi Fişekhane'yi takip ediyor." isFollow image="/images/delete/flogo.webp" />
      <ArtistSlider data={artistData} title='İlginizi Çekebilecek Diğer Mekanlar' subtitle="Fişekhane'ye benzer mekanlar" />
    </div>
  )
}
