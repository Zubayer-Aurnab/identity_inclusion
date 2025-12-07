import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img11 from '../../../assets/marquee/img11.jpg';
import img15 from '../../../assets/marquee/img15.jpg';
import img30 from '../../../assets/marquee/img30.png';
import imgdd from '../../../assets/marquee/img17.jpg'
import imgds from '../../../assets/marquee/img19.jpg'
const PsychoSoialSupportSlider = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true, el: '.custom-swiper-pagination-2' }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="py-6"
            >
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <SwiperSlide key={i} className="h-full flex">
                        <div className=" group transition-all duration-300 hover:bg-[#faf1dc] w-full flex flex-col justify-between min-h-00px]  rounded p-0">
                            <img
                                className="h-52 w-full object-cover "
                                src={[img11, img15, img30, imgdd, imgds,][i]}
                                alt=""
                            />
                            <div className="flex flex-col flex-grow px-4 py-4 border-b-4 border-transparent group-hover:border-orange-500 transition-all duration-300">
                                <h1 className="font-text font-semibold text-xs md:text-sm mb-4">
                                    {[

                                    ][i]}
                                </h1>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-pagination-2 mt-6 text-center "></div>
        </>
    );
};

export default PsychoSoialSupportSlider;