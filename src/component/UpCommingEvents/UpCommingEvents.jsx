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
import { useUpcomingEventsQuery } from "../../Redux/Apis/upcomingEventsApi";
import Title from "../Title/Title";

const UpCommingEvents = () => {
    const { data, isLoading } = useUpcomingEventsQuery({});
    const upcomingEvents = data?.data || [];

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    if (isLoading) return null;

    return (
        <section className="py-24 bg-[#fffcf5] overflow-hidden ">
            <div className="container mx-auto px-6">

                {/* Header with Side Action */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-aos="fade-up">
                    <div className="text-left">
                        <Title>Upcoming Events</Title>
                        <p className="text-gray-500 mt-2 font-text text-lg">Join us in our upcoming sessions and community gatherings</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="swiper-prev-event w-12 h-12 rounded-full border border-orange-100 flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white transition-all">
                            <FaArrowRight className="rotate-180" />
                        </div>
                        <div className="swiper-next-event w-12 h-12 rounded-full border border-orange-100 flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white transition-all">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={1}
                    loop={upcomingEvents.length > 3}
                    navigation={{
                        nextEl: '.swiper-next-event',
                        prevEl: '.swiper-prev-event',
                    }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {upcomingEvents.map((event, i) => (
                        <SwiperSlide key={i} className="py-10">
                            <div className="relative group">

                                {/* Background Decorative Card (Using Orange for Events) */}
                                <div className="absolute top-4 left-4 w-full h-full bg-orange-500/5 rounded-[2.5rem] -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>

                                <div className="bg-white rounded-[2.5rem] p-5 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-500 group-hover:-translate-y-3">

                                    {/* Image with Year Tag */}
                                    <div className="relative h-72 rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
                                        <img
                                            src={event?.image}
                                            alt={event?.image_text}
                                            className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-orange-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                                {dayjs(event?.date).format("YYYY")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="px-2 pb-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                            <p className="text-xs font-bold text-orange-600 uppercase">
                                                {dayjs(event?.date).format("MMMM DD")}
                                            </p>
                                        </div>

                                        <h1 className="font-header font-black text-xl text-gray-800 leading-snug mb-6 line-clamp-2 h-[3.5rem]">
                                            {event?.image_text}
                                        </h1>

                                        <div className="flex items-center justify-between group/btn">
                                            {event?.link ? (
                                                <a
                                                    href={event?.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-orange-600 font-bold text-sm flex items-center gap-2"
                                                >
                                                    View Details
                                                    <span className="w-8 h-[2px] bg-orange-500/20 group-hover/btn:w-12 group-hover/btn:bg-orange-500 transition-all"></span>
                                                </a>
                                            ) : (
                                                <span className="text-gray-400 font-bold text-sm italic">Details Coming Soon</span>
                                            )}

                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <FaArrowRight className="text-orange-500 -rotate-45" />
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

export default UpCommingEvents;