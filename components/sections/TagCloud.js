import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import FollowButton from '../ui/FollowButton'
import Tag from '../ui/Tag'

export default function TagCloud({ data, title, subtitle }) {
    return (
        <Box>
            <Title title={title} subtitle={subtitle} />
            <div className='w-full flex flex-wrap gap-2'>
                {
                    data.map((item) => (
                        <Tag key={item.id} data={item} />
                    ))
                }
            </div>
        </Box>
    )
}
