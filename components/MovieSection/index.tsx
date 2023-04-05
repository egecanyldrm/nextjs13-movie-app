"use client"
import { IMovie } from '@/services/movie'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
    title: string,
    movies: IMovie[]
}

const MovieSection = (props: Props) => {
    return (
        <section className='mt-8 max-w-full ' >
            <h1 className=' text-2xl font-bold uppercase mb-5 '>{props.title}</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper py-12 md:px-12 "
            >

                {
                    props.movies.map((movie: IMovie, key: number) => {
                        return (
                            <SwiperSlide key={key}>
                                <Link href={`/movie/${movie.id}`} >
                                    <div className='relative md:h-80 md:w-56 h-56 w-36 shadow-lg cursor-pointer movie ' >
                                        <Image
                                            className='rounded-xl'
                                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                            fill
                                            alt={movie.title}
                                        />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export { loading as MovieSectionSkeleton } from './loading'
export { MovieSection }