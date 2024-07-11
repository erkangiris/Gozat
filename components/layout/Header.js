"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { XMarkIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Header() {
  const menu = [
    { name: 'Konserler', href: '/konserler' },
    { name: 'Festivaller', href: '/festivaller' },
    { name: 'Sanatçılar', href: '/sanatcilar' },
    { name: 'Mekanlar', href: '/mekanlar' },
    { name: 'İletişim', href: '/iletisim' }
  ]

  const openMenu = () => {
    alert(1)
  }



  return (
    <>
      <header className='w-full px-6 flex items-center h-20 '>
        <nav className='flex items-center  text-lg font-medium text-white w-full justify-between '>

          <button onClick={openMenu}>
            <Bars3Icon className='w-6 h-6 text-white' />
          </button>
          <Link href="/" title="Ana Sayfa">
            <Image src="/images/static/logo_white.svg" width={128} height={29} alt="Gözat Logo" />
          </Link>
          <button>
            <MagnifyingGlassIcon className='w-6 h-6 text-white' />
          </button>
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
