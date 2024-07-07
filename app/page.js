import MostExpected from "@/components/sections/MostExpected";
import MainSlider from "@/components/sliders/MainSlider";
import PosterSlider from "@/components/sliders/PosterSlider";
import Filter from "@/components/ui/Filter";
import FakeData from '@/data'

export default function Home() {


  const { sliderData, populerData, MostExpectedData } = FakeData;



  return (
    <>
      <MainSlider data={sliderData} />
      <Filter />
      <PosterSlider data={populerData}/>
      <MostExpected data={MostExpectedData} />
    </>
  );
}
