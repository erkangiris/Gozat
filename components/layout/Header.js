import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  const menu =[
    {name: 'Konserler', href: '/konserler'},
    {name: 'Festivaller', href: '/festivaller'},
    {name: 'Sanatçılar', href: '/sanatcilar'},
    {name: 'Mekanlar', href: '/mekanlar'},
    {name: 'İletişim', href: '/iletisim'}
  ]
  return (
    <header className='w-full px-6 flex items-center h-20 '>
      <nav className='flex items-center  text-lg font-medium text-white w-full justify-between '>
        {/* {
          menu.map((item) =><Link key={item.name} href={item.href} title={item.name}>{item.name}</Link>)
        } */}
        <button><Image src="/images/static/menu.svg" width={20} height={15} alt="Menü" /></button>
        <Link href="/" title="Ana Sayfa"><Image src="/images/static/logo_white.svg" width={128} height={29} alt="Gözat Logo" /></Link>
        <button><Image src="/images/static/search.svg" width={16} height={16} alt="Menü" /></button>
      </nav>
    </header>
  )
}
