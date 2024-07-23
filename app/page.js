import LocationAccess from "@/components/sections/LocationAccess";
import MostExpected from "@/components/sections/MostExpected";
import TagCloud from "@/components/sections/TagCloud";
import ThisWeekCard from "@/components/sections/ThisWeekCard";
import ArtistVenueSlider from "@/components/sliders/ArtistVenueSlider";
import MainSlider from "@/components/sliders/MainSlider";
import PosterSlider from "@/components/sliders/PosterSlider";
import Filter from "@/components/ui/Filter";
import { headers } from "next/headers";
import { isMobile } from '../components/utils/isMobile'
import Data from '@/homeData'

export default function Home() {

  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);
  const {homeData} = Data


  return (
    <>
      <MainSlider data={homeData.sliderData} />
      {/* {mobileCheck &&  <Filter />} */}
      <PosterSlider data={homeData.popularEvents} title='Popüler Etkinlikler' subtitle='Şehrindeki popüler konserler' />
      <MostExpected data={homeData.mostExpectedEvents} title='Yılın En Beklenen Konserleri' subtitle='Bu yıl gerçekleşecek en büyük konserler!' />
      <LocationAccess title='Etrafındaki Konserleri & Mekanları Keşfet' subtitle='Etrafındaki etkinlikler ve mekanları harita üzerinde keşfet!' />
      <ArtistVenueSlider data={homeData.popularArtist} title='Popüler Sanatçılar' subtitle='En beğenilen sanatçılar' />
      <PosterSlider data={homeData.favoriteEvents} title='Favori Sanatçılarınızın Konserleri' subtitle='Favori sanatçılarınızın en yeni konserleri' />
      <TagCloud data={homeData.tagCloud} title='Türleri Keşfet' subtitle='Deneyimi özelleştirebilmek için sevdiğin türleri seç!' />
      <ThisWeekCard data={homeData.favoriteEvents} title='Bu Haftanın Konser Takvimi' subtitle='Haftanın öne çıkan konserlerini keşfet' />
    </>
  );
}
