import LocationAccess from "@/components/sections/LocationAccess";
import MostExpected from "@/components/sections/MostExpected";
import TagCloud from "@/components/sections/TagCloud";
import ThisWeekCard from "@/components/sections/ThisWeekCard";
import ArtistSlider from "@/components/sliders/ArtistSlider";
import MainSlider from "@/components/sliders/MainSlider";
import PosterSlider from "@/components/sliders/PosterSlider";
import Filter from "@/components/ui/Filter";
import FakeData from '@/data'

export default function Home() {


  const { sliderData, populerData, MostExpectedData, artistData, tagsData } = FakeData;



  return (
    <>
      <MainSlider data={sliderData} />
      <Filter />
      <PosterSlider data={populerData} title='Popüler Etkinlikler' subtitle='Şehrindeki popüler konserler' />
      <MostExpected data={MostExpectedData} title='Yılın En Beklenen Konserleri' subtitle='Bu yıl gerçekleşecek en büyük konserler!' />
      <LocationAccess title='Etrafındaki Konserleri & Mekanları Keşfet' subtitle='Etrafındaki etkinlikler ve mekanları harita üzerinde keşfet!' />
      <ArtistSlider data={artistData} title='Popüler Sanatçılar' subtitle='En beğenilen sanatçılar' />
      <PosterSlider data={populerData} title='Favori Sanatçılarınızın Konserleri' subtitle='Favori sanatçılarınızın en yeni konserleri' />
      <TagCloud data={tagsData} title='Türleri Keşfet' subtitle='Deneyimi özelleştirebilmek için sevdiğin türleri seç!' />
      <ThisWeekCard data={populerData} title='Bu Haftanın Konser Takvimi' subtitle='Haftanın öne çıkan konserlerini keşfet' />
    </>
  );
}
