import React from 'react'
import FakeData from '@/data'
import MainSlider from '@/components/sliders/MainSlider';
import FollowCard from '@/components/ui/FollowCard';
import Typography from '@/components/ui/Typography';
import DetailInfo from '@/components/sections/DetailInfo';
import TicketPrices from '@/components/sections/TicketPrices';
import CalendarList from '@/components/sections/CalendarList';
import ArtistSlider from '@/components/sliders/ArtistSlider';

export default function page(params) {
  const { sliderData, populerData, MostExpectedData, artistData, tagsData, eventData,venueData, artisData } = FakeData;

  

  return (
    <div className='w-full flex flex-col gap-2'>
      <MainSlider notext data={sliderData} />
      <DetailInfo data={eventData} />
      <FollowCard name="Burna Boy" follower="1.590B Takipçi" isFollow image="/images/delete/blogo.webp" />
      <TicketPrices data={eventData.tickets}  />
      <DetailInfo data={venueData} />
      <CalendarList data={artisData} />
      <FollowCard type="big" name="Burna Boy" follower="155.612 kişi Burne Boy’u takip ediyor." isFollow image="/images/delete/blogo.webp" />
      <ArtistSlider data={artistData} title='İlginizi Çekebilecek Diğer Sanatçılar' subtitle="Burne Boy'a benzer sanatçılar" />
    </div>
  )
}
