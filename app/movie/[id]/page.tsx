import { fetchSingleMovie, IMovie } from '@/services/movie'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

interface IParams {
    id: string
}


const page = async ({ params }: { params: IParams }) => {
    const movie = await fetchSingleMovie(params.id);
    return (
        <section >
            <div className='poster-overlay'></div>
            <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                fill
                alt={movie.title}
                className='image-overlay'
            />
            <div className='mt-12 flex flex-col gap-10 md:px-10'  >
                <h1 className='uppercase font-bold title'>{movie.title}</h1>
                <h3 className=' max-w-2xl  lg:text-2xl'>{movie.overview} </h3>
                <div className='flex flex-row gap-12 '>
                    <Link href="#" className='py-5 md:px-32  px-5 font-bold text-xl bg-white  text-black  rounded-full'> Return Home</Link>
                    <button className='border-solid border-white h-16 w-16 flex justify-center items-center rounded-full'><FaPlus /></button>
                </div>
            </div>
        </section>
    )
}

export default page