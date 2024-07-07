import Image from 'next/image'
import React from 'react'

export default function Icons({ icon, width, height, alt }) {
    return (
        <div className='w-11 h-11 rounded flex items-center justify-center bg-cardupper-bg'>
            <Image src={icon} width={width ? width : 20} height={height ? height : 20} alt={alt} />
        </div>
    )
}
