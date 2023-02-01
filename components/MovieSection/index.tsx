import { IMovie } from '@/services/movie'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    title: string,
    movies: IMovie[]
}

const MovieSection = (props: Props) => {
    return (
        <section className='mt-8 max-w-full ' >
            <h1 className=' text-2xl font-bold uppercase mb-5 '>{props.title}</h1>
            <div className='flex flex-row gap-5   '>
                {
                    props.movies.slice(0, 6).map((movie: IMovie, key: number) => {
                        return (
                            <Link href={`/movie/${movie.id}`} key={key}>
                                <div className='relative h-80 w-56 shadow-lg cursor-pointer movie ' >
                                    <Image
                                        className='rounded-xl'
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                        fill
                                        alt={movie.title}
                                    />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export { loading as MovieSectionSkeleton } from './loading'
export { MovieSection }