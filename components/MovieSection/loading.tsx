"use client"
import { Skeleton } from '@mui/material'
import React from 'react'

const loading = () => {
    return (
        <div className='flex justify-center mt-6'>
            {
                [...Array(5)].map((item, key) => (<Skeleton className='mr-5' sx={{ bgcolor: 'grey.900' }} variant="rounded" width={300} height={380} />
                ))
            }
        </div>
    )
}

export { loading }