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
    <footer className='w-full px-10 my-5 flex flex-col gap-10 sm:px-2'>

      <Box>
      <div className='w-full flex sm:flex-col sm:justify-center justify-between items-center'>
          <Link href="/" title="Ana Sayfa">
          <Image src="/images/static/logo_white.svg" width={128} height={29} alt="Gözat Logo" className='dark:hidden' />
          <Image src="/images/static/logo_black.svg" width={128} height={29} alt="Gözat Logo" className='dark:block' hidden />
          </Link>
          <div className='flex gap-10 items-center sm:flex-col sm:mt-5 sm:pt-5 sm:w-full sm:border-t sm:border-white sm:border-opacity-10 sm:gap-5'>
            {menu.map((item) => (
              <Link key={item.name} href={item.href} title={item.name}>
                <span className='text-lg font-semibold sm:text-sm'>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </Box>
    </footer>
  )
}
