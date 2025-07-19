import { FaArrowRight } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from '../../assets/marquee/img2.jpg';
import img23 from '../../assets/marquee/img23.jpg';
import img24 from '../../assets/marquee/img24.jpg';
import img25 from '../../assets/marquee/img25.jpg';
import img26 from '../../assets/marquee/img26.jpg';
import Title from "../Title/Title";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UpCommingEvents = () => {
    const imageClass = "h-64 w-full object-contain lg lg:h-64 mx-3"
    return (
        <div className="mb-10 " >
            <div className="my-20 ">
                <Title>
                    Upcoming Events
                </Title>
            </div>

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
                        <div className="bg-bg group transition-all duration-300 hover:bg-[#faf1dc] w-full flex flex-col justify-between min-h-[500px] shadow-md rounded p-0">
                            <img
                                className="h-52 w-full object-cover "
                                src={[img23, img24, img25, img26, img2][i]}
                                alt=""
                            />
                            <div className="flex flex-col flex-grow px-4 py-4 border-b-4 border-transparent group-hover:border-orange-500 transition-all duration-300">
                                <h1 className="font-text font-semibold text-sm md:text-lg mb-4">
                                    {[
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elitaa.Lorem ipsum dolor sit amet, consectetur adipisicing elitaa.",
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nihil fugiat. Enim qui vel iusto assumenda similique, exercitationem excepturi porro?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nihil",
                                        "Lorem ipsum dolor sit amet, consectetur xercitationem excepturi porro?Lorem ipsum dolor sit amet, consectetur xercitationem excepturi porro?",
                                        "Lorem ipsum dolor sit amet, consectetur adip?",
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?"
                                    ][i]}
                                </h1>
                                <div className="flex items-center justify-between mt-auto pt-4">
                                    <p className="text-xs font-bold text-header">
                                        {
                                            [
                                                "12 Aug 2025",
                                                "12 Aug 2025",
                                                "22 Aug 2025",
                                                "26 Aug 2025",
                                                "1 Sep 2025"
                                            ][i]
                                        }
                                    </p>
                                    <a
                                        href="/"
                                        className="p-2 rounded-full cursor-pointer text-orange-500 bg-orange-200"

                                    >
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Custom Pagination Outside Cards */}
            <div className="custom-swiper-pagination-2 mt-6 text-center "></div>
        </div>
    );
};

export default UpCommingEvents;