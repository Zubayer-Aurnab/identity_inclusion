import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Added icons

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; // Removed Autoplay

import Title from '../../component/Title/Title';
import { useImpactQuery } from '../../Redux/Apis/impactApi';
import { useGetImageSliderQuery } from '../../Redux/Apis/imageSliderApi';

const Impact = () => {
    const { data } = useImpactQuery({});
    const ImpactData = data?.data?.slice().reverse() || [];
    const { data: testimonialData, isLoading: testimonialLoading } = useGetImageSliderQuery({ type: "testimonial" });
    const testimonialImages = testimonialData?.data || [];

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className='overflow-hidden bg-white mt-20'>
            <div className='px-4 lg:px-0 lg:w-4/5 mx-auto py-12'>
                {/* Impact Stories Section */}
                <div className='space-y-24 lg:space-y-32'>
                    {ImpactData?.map((impact, i) => (
                        <div
                            key={impact.id || i}
                            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
                        >
                            <div className='flex-1 w-full' data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}>
                                <div className='relative'>
                                    <span className='hidden lg:block absolute -top-10 -left-6 text-8xl font-serif text-gray-100 -z-10 select-none'>
                                        0{i + 1}
                                    </span>
                                    <h2 className='text-3xl lg:text-4xl font-bold text-[#118088] mb-6 leading-tight'>
                                        {impact?.title}
                                    </h2>
                                    <div className='w-20 h-1 bg-[#f97316] mb-8 rounded-full'></div>
                                    <p className='text-gray-600 text-lg lg:text-xl leading-relaxed text-justify font-text'>
                                        {impact?.description}
                                    </p>
                                </div>
                            </div>

                            <div className='flex-1 w-full' data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}>
                                <div className='relative group'>
                                    <div className='absolute -inset-4 bg-gray-50 rounded-2xl -z-10 group-hover:bg-teal-50/50 transition-colors duration-500'></div>
                                    <div className='overflow-hidden rounded-2xl shadow-2xl border border-gray-100'>
                                        <img
                                            src={impact?.image}
                                            className='w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105'
                                            alt={impact?.title}
                                        />
                                    </div>
                                    <div className='absolute -bottom-6 -right-6 hidden lg:block w-32 h-32 bg-[#118088]/10 rounded-full blur-3xl'></div>
                                </div>
                            </div>
                        </div >
                    ))}
                </div>

                {/* Testimonials Section */}
                {(testimonialLoading || testimonialImages.length > 0) && (
                    <div className='mt-32 lg:mt-48'>
                        <div className='mb-16' data-aos="fade-up">
                            <Title>Our Work, In Their Words</Title>
                        </div>

                        <div className='relative pb-20 px-4 md:px-10' data-aos="fade-up" data-aos-delay="200">
                            {testimonialLoading ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
                                    {[1, 2].map((n) => (
                                        <div key={n} className="bg-gray-100 animate-pulse rounded-3xl h-[300px] md:h-[450px] lg:h-[500px]" />
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={testimonialImages.length > 1}
                                        navigation={{
                                            nextEl: '.impact-swiper-next',
                                            prevEl: '.impact-swiper-prev',
                                        }}
                                        pagination={{
                                            clickable: true,
                                            el: '.impact-custom-pagination'
                                        }}
                                        breakpoints={{
                                            768: { slidesPerView: 1 },
                                            1024: { slidesPerView: 2 },
                                        }}
                                        className="pb-16"
                                    >
                                        {testimonialImages.map((img) => (
                                            <SwiperSlide key={img.id} className="h-full">
                                                <div className='p-4 h-full'>
                                                    <div className='bg-white border border-gray-100 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex items-center justify-center group'>
                                                        <div className='relative w-full overflow-hidden rounded-2xl'>
                                                            <img
                                                                loading="lazy"
                                                                className='w-full h-[300px] md:h-[450px] lg:h-[500px] object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-[1.02]'
                                                                src={img.image_url}
                                                                alt={img?.image_text || 'Testimonial'}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {testimonialImages.length > 0 && (
                                        <>
                                            <button className="impact-swiper-prev absolute top-1/2 left-0 md:-left-4 z-20 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-[#118088] hover:bg-[#118088] hover:text-white transition-all duration-300">
                                                <ChevronLeft size={28} />
                                            </button>
                                            <button className="impact-swiper-next absolute top-1/2 right-0 md:-right-4 z-20 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-[#118088] hover:bg-[#118088] hover:text-white transition-all duration-300">
                                                <ChevronRight size={28} />
                                            </button>
                                        </>
                                    )}

                                    <div className="impact-custom-pagination flex justify-center gap-3 mt-8"></div>

                                    <style jsx global>{`
                                        .impact-custom-pagination .swiper-pagination-bullet {
                                            width: 12px;
                                            height: 12px;
                                            background: #cbd5e1;
                                            opacity: 1;
                                            transition: all 0.3s ease;
                                            border-radius: 4px;
                                        }
                                        .impact-custom-pagination .swiper-pagination-bullet-active {
                                            background: #118088 !important;
                                            width: 30px;
                                        }
                                    `}</style>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Impact;