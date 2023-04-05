"use client"
import Link from 'next/link'
import React from 'react'

interface IGenres {
    id: number;
    name: string;
}
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Genres = ({ genres }: { genres: any }) => {

    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
            className="mySwiper py-8 "
        >
            {
                genres.genres.map((genres: IGenres, key: string) => {
                    return (
                        <SwiperSlide key={key}>
                            <Link href={`/${genres.id}`}>
                                <div className=' px-6 py-7  border border-gray-700 bg-black rounded-md shadow-lg text-center' >
                                    {genres.name}
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
export { loading as GenresSkeleton } from './loading'
export { Genres }