import Marquee from "react-fast-marquee";
import img1 from '../../assets/marquee/img1.jpg'
import img2 from '../../assets/marquee/img2.jpg'
import img3 from '../../assets/marquee/img3.jpg'
import img4 from '../../assets/marquee/img4.jpg'
import img5 from '../../assets/marquee/img5.jpg'
import img6 from '../../assets/marquee/img6.jpg'
import img7 from '../../assets/marquee/img7.jpg'
import img8 from '../../assets/marquee/img8.jpg'
import img9 from '../../assets/marquee/img9.jpg'
import img10 from '../../assets/marquee/img10.jpg'
import img11 from '../../assets/marquee/img11.jpg'
import img12 from '../../assets/marquee/img12.jpg'
import img13 from '../../assets/marquee/img13.jpg'
import img14 from '../../assets/marquee/img14.jpg'
import img15 from '../../assets/marquee/img15.jpg'
import img16 from '../../assets/marquee/img16.jpg'
import img17 from '../../assets/marquee/img17.jpg'
import img18 from '../../assets/marquee/img18.jpg'
import img19 from '../../assets/marquee/img19.jpg'
import img20 from '../../assets/marquee/img20.jpg'
import img21 from '../../assets/marquee/img21.jpg'
import img22 from '../../assets/marquee/img22.jpg'
import img23 from '../../assets/marquee/img23.jpg'
import img24 from '../../assets/marquee/img24.jpg'
import img25 from '../../assets/marquee/img25.jpg'
import img26 from '../../assets/marquee/img26.jpg'
import img27 from '../../assets/marquee/img27.jpg'
import img28 from '../../assets/marquee/img28.jpg'
import img29 from '../../assets/marquee/img29.jpg'
import Title from "../Title/Title";
import { useEffect } from "react";
import Aos from "aos";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@headlessui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const RecentActivities = () => {
    const imageClass = "h-64 w-full object-contain lg lg:h-64 mx-3"
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <div className="mb-10 " >
                <div className="my-20 ">
                    <Title>
                        Recents Activities
                    </Title>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
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
                            <div className="bg-bg group transition-all duration-300 hover:bg-[#edfcff] w-full flex flex-col justify-between min-h-[500px] shadow-md rounded p-0">
                                <img
                                    className="h-52 w-full object-cover "
                                    src={[img23, img24, img25, img26, img2][i]}
                                    alt=""
                                />
                                <div className="flex flex-col flex-grow px-4 py-4 border-b-4 border-transparent group-hover:border-[#118097] transition-all duration-300">
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
                                                    "22 Aug 2025",
                                                    "26 Aug 2025",
                                                    "1 Sep 2025"
                                                ][i]
                                            }
                                        </p>
                                        <a
                                            href="/"
                                            className="p-2 rounded-full cursor-pointer"
                                            style={{
                                                color: "#118097",
                                                backgroundColor: "#D4F1F7",
                                                border: "1px solid"
                                            }}
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
                <div className="custom-swiper-pagination mt-6 text-center"></div>
            </div>
        </>
    );
};

export default RecentActivities;