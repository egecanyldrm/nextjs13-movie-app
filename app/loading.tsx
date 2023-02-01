import { FeaturedMovieSkeleton } from '@/components/FeaturedMovie'
import { GenresSkeleton } from '@/components/Genres'
import { MovieSectionSkeleton } from '@/components/MovieSection'
import React from 'react'


const loading = () => {
    return (
        <>
            <FeaturedMovieSkeleton />
            <GenresSkeleton />
            <MovieSectionSkeleton />
        </>
    )
}

export default loading