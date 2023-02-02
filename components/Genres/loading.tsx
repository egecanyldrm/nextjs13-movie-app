"use client"
import { Skeleton } from '@mui/material'
import React from 'react'

const loading = () => {
    return (
        <div className='flex justify-center'>
            {
                [...Array(5)].map((item, key) => (<Skeleton key={key} className='mr-2' sx={{ bgcolor: 'grey.900' }} variant="rounded" width={300} height={60} />
                ))
            }
        </div>
    )
}

export { loading }