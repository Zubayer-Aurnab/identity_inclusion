import Aos from "aos";
import "aos/dist/aos.css";
import dayjs from "dayjs";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRecentActivitiesQuery } from "../../Redux/Apis/recentActivitiesApi";
import Title from "../Title/Title";

const RecentActivities = () => {
    const { data, isLoading } = useRecentActivitiesQuery({});
    const activities = data?.data || [];

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    if (isLoading) return null;

    return (
        <section className="py-6 bg-[#fafcfe] overflow-hidden ">
            <div className="container mx-auto px-6">

                {/* Header with Side Action */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-aos="fade-up">
                    <div className="text-left">
                        <Title>Latest Journey</Title>
                        <p className="text-gray-500 mt-2 font-text text-lg">Our Recent Activities & Impact</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="swiper-prev-btn w-12 h-12 rounded-full border border-teal-100 flex items-center justify-center cursor-pointer hover:bg-[#118097] hover:text-white transition-all">
                            <FaArrowRight className="rotate-180" />
                        </div>
                        <div className="swiper-next-btn w-12 h-12 rounded-full border border-teal-100 flex items-center justify-center cursor-pointer hover:bg-[#118097] hover:text-white transition-all">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    loop={activities.length > 3}
                    navigation={{
                        nextEl: '.swiper-next-btn',
                        prevEl: '.swiper-prev-btn',
                    }}
                    autoplay={{ delay: 6000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {activities.map((activity, i) => (
                        <SwiperSlide key={i} className="py-10">
                            <div className="relative group">

                                {/* Background Decorative Card */}
                                <div className="absolute top-4 left-4 w-full h-full bg-[#118097]/5 rounded-[2.5rem] -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>

                                <div className="bg-white rounded-[2.5rem] p-5 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-500 group-hover:-translate-y-3">

                                    {/* Image with Tag */}
                                    <div className="relative h-72 rounded-[2rem] overflow-hidden mb-6">
                                        <img
                                            src={activity?.image}
                                            alt=""
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-[#f97316] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                                {dayjs(activity?.date).format("YYYY")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="px-2 pb-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 rounded-full bg-[#118097]"></div>
                                            <p className="text-xs font-bold text-[#118097] uppercase">
                                                {dayjs(activity?.date).format("MMMM DD")}
                                            </p>
                                        </div>

                                        <h1 className="font-header font-black text-xl text-gray-800 leading-snug mb-6 line-clamp-2 h-[3.5rem]">
                                            {activity?.image_text}
                                        </h1>

                                        <div className="flex items-center justify-between group/btn">
                                            <a
                                                href={activity?.link}
                                                target="_blank"
                                                className="text-[#118097] font-bold text-sm flex items-center gap-2"
                                            >
                                                Read Story
                                                <span className="w-8 h-[2px] bg-[#118097]/20 group-hover/btn:w-12 group-hover/btn:bg-[#f97316] transition-all"></span>
                                            </a>

                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <FaArrowRight className="text-[#f97316] -rotate-45" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RecentActivities;