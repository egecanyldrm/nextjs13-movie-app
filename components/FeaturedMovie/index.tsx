import { IMovie } from '@/services/movie'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaPlus } from "react-icons/fa";


const FeaturedMovie = ({ movie }: { movie: IMovie }) => {
    return (
        <section className='my-12  flex flex-col gap-14'>
            <h1 className='uppercase font-bold title'>{movie.title}</h1>
            <h3 className=' max-w-2xl overview text-2xl'>{movie.overview} </h3>
            <div className='flex flex-row gap-12'>
                <Link href={`/movie/${movie.id}`} className='py-5 px-32 font-bold text-xl bg-white  text-black  rounded-full animate-bounce '> Play</Link>
                <button className='border-solid  border-white h-16 w-16 flex justify-center items-center rounded-full'><FaPlus className='hover:animate-spin' /></button>
            </div>
            <div>
                <div className='poster-overlay'></div>
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    fill
                    className='image-overlay'
                    unoptimized
                    alt={movie.title}
                />
            </div>
        </section>
    )
}
export { loading as FeaturedMovieSkeleton } from './loading'
export { FeaturedMovie }