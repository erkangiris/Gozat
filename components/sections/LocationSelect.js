'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Typography from '../ui/Typography'
import StandartButton from '../ui/StandartButton'
import { setSessionStorage } from '../utils/setSessionStorage'
import { getSessionStorage } from '../utils/getSessionStorage'

export default function LocationSelect() {
    const [open, setOpen] = useState(false)
    const [location, setLocation] = useState();
    const [error, setError] = useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              fetchLocationDetails(latitude, longitude);
            },
            (error) => {
              setError(error.message);
            }
          );
        } else {
          setError('Geolocation is not supported by this browser.');
        }
      };

      const fetchLocationDetails = (latitude, longitude) => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const addressComponents = data.results[0]
            setLocation(addressComponents);
          })
          .catch(error => {
            setError('Failed to fetch location details');
          });
      };
      setSessionStorage('location', {location});
      // console.log(location)
    return (
        <>
            <button onClick={()=>setOpen(true)} className='flex gap-2 items-center px-4 py-2 bg-gozatgray-200 bg-opacity-70 dark:bg-gray-200 dark:bg-opacity-100 rounded-lg'>
                <Typography variant='textSm' className='font-semibold'>Şehir Seçin</Typography>
                <Image src="/images/static/down_arrow_white.svg" width={10} height={10} />
            </button>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed w-full inset-0 bg-gozatgray-200 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-10 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white p-10 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className='w-full flex flex-col max-w-96 justify-center items-center gap-10'>
                                <Image src="/images/static/location_i.svg" width={222} height={209} alt="Konum" />
                                <div className='flex flex-col gap-2 w-full'>
                                    <Typography variant='h4' className="text-black">Konuma İzin Ver</Typography>
                                    <Typography variant='text' className="text-black">Yakınınızdaki etkinlikler, mekanlar ve diğer herşey için lütfen konum erişimine izin verin</Typography>
                                </div>
                                <StandartButton title="İzin Ver" className="lg:w-full" onClick={()=>getLocation()}>izin ver</StandartButton>
                                <div className='flex flex-col w-full gap-2'>
                                    <div>
                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                            Ya da Şehir Seç
                                        </label>
                                        <select
                                            id="location"
                                            name="location"
                                            defaultValue="Canada"
                                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
