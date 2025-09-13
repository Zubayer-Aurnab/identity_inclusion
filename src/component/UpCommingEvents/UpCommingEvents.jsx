import { FaArrowRight } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Title from "../Title/Title";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useUpcomingEventsQuery } from "../../Redux/Apis/upcomingEventsApi";
import dayjs from "dayjs";

const UpCommingEvents = () => {
    const imageClass = "h-64 w-full object-contain lg lg:h-64 mx-3"
    const { data, isLoading } = useUpcomingEventsQuery({})
    const UpcomingEvents = data?.data || []
    return (
        <>
            {
                (isLoading || UpcomingEvents.length > 0) ? "" :
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
                            {UpcomingEvents?.map((events, i) => (
                                <SwiperSlide key={i} className="h-full flex">
                                    <div className="bg-bg group transition-all duration-300 hover:bg-[#faf1dc] w-full flex flex-col justify-between min-h-[500px] shadow-md rounded p-0">
                                        <img
                                            className="h-52 w-full object-cover "
                                            src={events?.image}
                                            alt=""
                                        />
                                        <div className="flex flex-col flex-grow px-4 py-4 border-b-4 border-transparent group-hover:border-orange-500 transition-all duration-300">
                                            <h1 className="font-text font-semibold text-lg md:text-lg mb-4">
                                                {events?.image_text}
                                            </h1>
                                            <div className="flex items-center justify-between mt-auto pt-4">
                                                <p className="text-xs font-bold text-header">
                                                    {dayjs(events?.date).format("DD MMM YYYY")
                                                    }
                                                </p>
                                                {
                                                    events?.link && (
                                                        <a
                                                            target="_blank"
                                                            href={events?.link}
                                                            className="p-2 rounded-full cursor-pointer"
                                                            style={{
                                                                color: "#118097",
                                                                backgroundColor: "#D4F1F7",
                                                                border: "1px solid"
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
                        <div className="custom-swiper-pagination-2 mt-6 text-center "></div>
                    </div>
            }
        </>
    );
};

export default UpCommingEvents;