import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


const Swiping = () => {
    return (
        <div className="reviews">
                
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
                    <div className="content">
                        <h2>account name</h2>
                        <p>content content content content content content content content </p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="content">
                        <h2>account name</h2>
                        <p>content content content content content content content content </p>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="content">
                        <h2>account name</h2>
                        <p>content content content content content content content content </p>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
}

export default Swiping;
