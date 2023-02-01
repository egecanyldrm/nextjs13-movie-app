"use client"
import { Skeleton } from '@mui/material'
import React from 'react'

const loading = () => {
    return (
        <section className='mb-6'>
            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={600} height={300} />
        </section>
    )
}

export { loading }