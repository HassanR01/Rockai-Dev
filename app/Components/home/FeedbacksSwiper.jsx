'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
export default function FeedbacksSwiper({ Asks }) {

    const JustReviews = Asks.filter(ask => {
        const Reviews = ask.reason === 'Review'
        return Reviews
    })

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {JustReviews.map(review => (
                    <>
                        <SwiperSlide>
                            <h3 className='font-semibold'>Mr. {review.name}</h3>
                            <Link href={'/projects'} className='font-bold mb-2'>{review.pProject} Project</Link>
                            <p className='text-sm'>{review.message}</p>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </>
    )
}
