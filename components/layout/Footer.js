import React from 'react'
import Box from '../ui/Box'
import Typography from '../ui/Typography'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const menu = [
    { name: 'Konserler', href: '/konserler'},
    { name: 'Festivaller', href: '/festivaller' },
    { name: 'Sanatçılar', href: '/sanatcilar' },
    { name: 'Mekanlar', href: '/mekanlar' },
    { name: 'İletişim', href: '/iletisim' }
  ]
  return (
    <footer className='w-full px-10 my-5 flex flex-col gap-10'>

      <Box>
      <div className='sm:hidden w-full flex justify-between items-center'>
          <Link href="/" title="Ana Sayfa">
            <Image src="/images/static/logo_white.svg" width={128} height={29} alt="Gözat Logo" />
          </Link>
          <div className='flex gap-10 items-center'>
            {menu.map((item) => (
              <Link key={item.name} href={item.href} title={item.name}>
                <span className='text-lg font-semibold'>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </Box>
    </footer>
  )
}
