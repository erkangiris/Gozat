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
import Data from '@/artistDetailData'

export default function page(params) {
  const { artistDetailData } = Data;
  

  return (
    <div className='w-full flex flex-col gap-2'>
      <MainSlider notext data={artistDetailData.media} />
      <FollowCard name={artistDetailData.artist.name} follower={artistDetailData.artist.followerCount} isFollow={artistDetailData.artist.isFollow} image={artistDetailData.artist.logo} />
      <VenueInfo artist data={artistDetailData.artist} />
      <PosterSlider data={artistDetailData.venueEvents} title={`${artistDetailData.artist.name} Şehrindeki Konserleri`} subtitle='Bu mekandaki popüler konserler' />
      <CalendarList data={artistDetailData.artistPopularEvents} />
      <FollowCard type="big" name={artistDetailData.artist.name} follower={artistDetailData.artist.followerCount} isFollow={artistDetailData.artist.isFollow} image={artistDetailData.artist.logo} />

    </div>
  )
}
