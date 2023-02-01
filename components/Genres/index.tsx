import Link from 'next/link'
import React from 'react'

const Genres = ({ genres }: { genres: any }) => {
    return (
        <section className='flex flex-row justify-start gap-7'>
            {
                genres.genres.slice(0, 5).map((genres: any, key: string) => {
                    return (
                        <Link href='/' className='px-24 py-7  border border-gray-700 bg-black rounded-md  shadow-lg' key={key}>
                            {genres.name}
                        </Link>
                    )
                })
            }
        </section>
    )
}
export { loading as GenresSkeleton } from './loading'
export { Genres }