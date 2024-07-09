import MostExpected from "@/components/sections/MostExpected";
import ThisWeekCard from "@/components/sections/ThisWeekCard";
import ArtistSlider from "@/components/sliders/ArtistSlider";
import MainSlider from "@/components/sliders/MainSlider";
import PosterSlider from "@/components/sliders/PosterSlider";
import Filter from "@/components/ui/Filter";
import FakeData from '@/data'

export default function Home() {


  const { sliderData, populerData, MostExpectedData, artistData } = FakeData;



  return (
    <>
      <MainSlider data={sliderData} />
      <Filter />
      <PosterSlider data={populerData} title='Popüler Etkinlikler' description='Şehrindeki popüler konserler' />
      <MostExpected data={MostExpectedData} title='Yılın En Beklenen Konserleri' description='Bu yıl gerçekleşecek en büyük konserler!' />
      <ArtistSlider data={artistData} title='Popüler Sanatçılar' description='En beğenilen sanatçılar' />
      <PosterSlider data={populerData} title='Favori Sanatçılarınızın Konserleri' description='Favori sanatçılarınızın en yeni konserleri' />
      <ThisWeekCard data={populerData} title='Bu Haftanın Konser Takvimi' description='Haftanın öne çıkan konserlerini keşfet' />
    </>
  );
}
