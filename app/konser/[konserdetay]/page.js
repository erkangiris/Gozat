import React from 'react'
import FakeData from '@/data'
import MainSlider from '@/components/sliders/MainSlider';
import FollowCard from '@/components/ui/FollowCard';
import Typography from '@/components/ui/Typography';
import TicketPrices from '@/components/sections/TicketPrices';
import CalendarList from '@/components/sections/CalendarList';
import VenueInfo from '@/components/sections/VenueInfo';
import ArtistVenueSlider from '@/components/sliders/ArtistVenueSlider';
import Data from '@/eventDetailData'
import DetailInfo from '@/components/sections/DetailInfo';

export default function page(params) {
  const { eventDetailData } = Data;


  return (
    <div className='w-full flex flex-col gap-2'>
      <MainSlider notext data={eventDetailData.media} />
      <DetailInfo data={eventDetailData} />
      <FollowCard name={eventDetailData.artist.name} follower={eventDetailData.artist.followerCount} isFollow={eventDetailData.artist.isFollow} image={eventDetailData.artist.image} />
      <TicketPrices data={eventDetailData.ticketPrices} />
      <VenueInfo data={eventDetailData.venue} />
      <CalendarList data={eventDetailData.artistPopularEvents} />
      <FollowCard type="big" name={eventDetailData.artist.name} follower={eventDetailData.artist.followerCount} isFollow={eventDetailData.artist.isFollow} image={eventDetailData.artist.image} />
      <ArtistVenueSlider data={eventDetailData.relatedArtist} title='İlginizi Çekebilecek Diğer Sanatçılar' subtitle="Burne Boy'a benzer sanatçılar" />
    </div>
  )
}
