import Aos from "aos";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from "../Title/Title";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRecentActivitiesQuery } from "../../Redux/Apis/recentActivitiesApi";
import dayjs from "dayjs";
const RecentActivities = () => {
    const { data, isLoading } = useRecentActivitiesQuery({})
    const RecentActivities = data?.data || []
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            {
                isLoading ? "" :
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
                            autoplay={{ delay: 5000 }}
                            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            className="py-6"
                        >
                            {RecentActivities?.map((activiti, i) => (
                                <SwiperSlide key={i} className="h-full flex">
                                    <div className="bg-bg group transition-all duration-300 hover:bg-[#edfcff] w-full flex flex-col justify-between min-h-[500px] shadow-md rounded p-0">
                                        <div className="w-full h-64 bg-gray-200  flex items-center justify-center overflow-hidden">
                                            <img
                                                src={activiti?.image}
                                                alt=""
                                                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-grow px-4 py-4 border-b-4 border-transparent group-hover:border-[#118097] transition-all duration-300">
                                            <h1 className="font-text font-semibold text-lg md:text-lg mb-4">
                                                {activiti?.image_text}
                                            </h1>
                                            <div className="flex items-center justify-between mt-auto pt-4">
                                                <p className="text-xs font-bold text-header">
                                                    {
                                                        dayjs(activiti?.date).format("DD MMM YYYY")
                                                    }
                                                </p>

                                                {
                                                    activiti?.link && (
                                                        <a
                                                            target="_blank"
                                                            href={activiti?.link}
                                                            className="p-2 rounded-full transition-all duration-300 hover:-rotate-45"
                                                            style={{
                                                                color: "#118097",
                                                                backgroundColor: "#D4F1F7",
                                                                border: "1px solid #118097"
                                                            }}
                                                        >
                                                            <FaArrowRight />
                                                        </a>
                                                    )
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Custom Pagination Outside Cards */}
                        <div className="custom-swiper-pagination mt-6 text-center"></div>
                    </div>
            }

        </>
    );
};

export default RecentActivities;