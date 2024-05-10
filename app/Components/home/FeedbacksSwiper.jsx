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
export default function FeedbacksSwiper() {
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
                <SwiperSlide>
                    <h3 className='font-semibold'>Ahmed Farahat</h3>
                    <h4 className='font-medium'>Project Manager</h4>
                    <p>Thank you so much Rockai Dev for your effort and high quality you are generating to us</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h3 className='font-semibold'>Mr. Shreif Riad</h3>
                    <h4 className='font-medium'>Owner of Ceres Restaurant</h4>
                    <p>Great Work, Rockai Dev will occupy its place in the market Soon and Thank you for your high Quality</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h3 className='font-semibold'>ESA</h3>
                    <h4 className='font-medium'>Egyptian Society for Astronomy</h4>
                    <p>Rockai Dev is a company with high skills, accuracy and high quality of service, thank you</p>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
