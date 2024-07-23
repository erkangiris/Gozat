"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { XMarkIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Typography from '../ui/Typography'
import Icons from '../ui/Icons'
import LocationSelect from '../sections/LocationSelect'

export default function Header() {
  const menu = [
    { name: 'Konserler', href: '/konser' },
    { name: 'Festivaller', href: '/festival' },
    { name: 'Sanatçılar', href: '/sanatci' },
    { name: 'Mekanlar', href: '/mekan' },
    { name: 'İletişim', href: '/iletisim' }
  ]

  const openMenu = () => {
    alert(1)
  }



  return (
    <>
      <header className='w-full px-6 flex items-center h-20 lg:px-0 lg:pt-4 mb-4'>
        <nav className='flex items-center  text-lg font-medium text-white dark:text-black w-full justify-between lg:hidden'>
          <button onClick={openMenu}>
            <Bars3Icon className='w-6 h-6 text-white' />
          </button>
          <Link href="/" title="Ana Sayfa">
            <Image src="/images/static/logo_white.svg" width={128} height={29} alt="Gözat Logo" className='dark:hidden' />
            <Image src="/images/static/logo_black.svg" width={128} height={29} alt="Gözat Logo" className='dark:block hidden'  />
          </Link>
          <button>
            <MagnifyingGlassIcon className='w-6 h-6 text-white' />
          </button>
        </nav>
        <nav className='w-full h-16 flex justify-between items-center bg-card-bg bg-opacity-50 dark:bg-white dark:bg-opacity-100 px-10 max-w-1440 mx-auto rounded-lg'>
          <div className='flex gap-8 items-center'>
            <Link href="/" title="Ana Sayfa">
            <Image src="/images/static/logo_white.svg" width={128} height={29} alt="Gözat Logo" className='dark:hidden' />
            <Image src="/images/static/logo_black.svg" width={128} height={29} alt="Gözat Logo" className='dark:block hidden'  />
            </Link>
            <LocationSelect />

          </div>
          <div className='flex gap-10 h-20 items-center'>
            {menu.map((item) => (
              <Link key={item.name} href={item.href} title={item.name}>
                <span className='text-base font-semibold'>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className='flex gap-2'>
            <button className='w-8 h-8 flex items-center justify-center'><Image src="/images/static/search.svg" width={20} height={20} /></button>
            <button className='w-8 h-8 flex items-center justify-center'><Image src="/images/static/user.svg" width={24} height={24} /></button>
          </div>

        </nav>
          
      </header>
      <div className='w-full fixed top-0 -left-full bottom-0 right-0 gap-6 z-10 h-screen bg-primary-bg backdrop-blur-xl bg-opacity-45 p-8 flex flex-col'>
        <button className='w-11 h-11 flex items-center justify-center bg-black bg-opacity-5 rounded-lg absolute right-8 top-8' onClick={openMenu}>
          <XMarkIcon className='w-6 h-6 text-white' />
        </button>
        {menu.map((item) => (
          <Link key={item.name} href={item.href} title={item.name}>
            <span className='text-2xl font-semibold'>{item.name}</span>
          </Link>
        ))}
        <div className='w-full flex flex-col gap-6 pt-4 mt-4 border-t border-white border-opacity-10'>
          <Link href="#" title="Kullanıcı Girişi">
            <span className='text-2xl font-semibold'>Kullanıcı Girişi</span>
          </Link>
          <Link href="#" title="Kayıt Ol">
            <span className='text-2xl font-semibold'>Kayıt Ol</span>
          </Link>
        </div>
      </div>
    </>
  )
}
