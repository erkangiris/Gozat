import React from 'react'
import FakeData from '@/data'
import MainSlider from '@/components/sliders/MainSlider';
import FollowCard from '@/components/ui/FollowCard';
import Typography from '@/components/ui/Typography';
import DetailInfo from '@/components/sections/DetailInfo';
import VenueInfo from '@/components/sections/VenueInfo';
import TicketPrices from '@/components/sections/TicketPrices';
import CalendarList from '@/components/sections/CalendarList';
import ArtistVenueSlider from '@/components/sliders/ArtistVenueSlider';
import PosterSlider from '@/components/sliders/PosterSlider';
import Data from '@/venueDetailData'

export default function page(params) {
  const { venueDetailData } = Data;
  

  return (
    <div className='w-full flex flex-col gap-2'>
      <MainSlider notext data={venueDetailData.media} />
      <FollowCard name={venueDetailData.venue.name} follower={venueDetailData.venue.followerCount} isFollow={venueDetailData.venue.isFollow} image={venueDetailData.venue.logo} />
      <VenueInfo data={venueDetailData.venue} />
      <PosterSlider data={venueDetailData.venueEvents} title={`${venueDetailData.venue.name} Konserleri`} subtitle='Bu mekandaki popüler konserler' />
      <FollowCard type="big" name={venueDetailData.venue.name} follower={venueDetailData.venue.followerCount} isFollow={venueDetailData.venue.isFollow} image={venueDetailData.venue.logo} />
      <ArtistVenueSlider data={venueDetailData.relatedVenues} title='İlginizi Çekebilecek Diğer Mekanlar' subtitle={`${venueDetailData.venue.name} benzer mekanlar`} />
    </div>
  )
}
