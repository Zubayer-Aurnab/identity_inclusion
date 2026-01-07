import Title from "../../component/Title/Title";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useGetConsultancyQuery } from "../../Redux/Apis/consultancyApi";
import { useGetImageSliderQuery } from "../../Redux/Apis/imageSliderApi";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Consultancy = () => {
    const { data, isLoading: consultancyLoading } = useGetConsultancyQuery({});
    const { data: imageSliderData, isLoading: imageSliderLoading } = useGetImageSliderQuery({ type: "consultancy" });
    
    const description = data?.data[0]?.description || '';
    const images = imageSliderData?.data || [];

    if (consultancyLoading || imageSliderLoading) {
        return (
            <div className="my-20 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto animate-pulse">
                <div className="h-10 w-64 bg-gray-200 rounded mb-10"></div>
                <div className="space-y-4 mb-10">
                    <div className="h-6 bg-gray-200 rounded w-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="w-full h-[50vh] bg-gray-100 rounded-md"></div>
            </div>
        );
    }

    return (
        <div className="my-40 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto">
            <Title>Consultancy</Title>
            
            <div className="mt-10 text-justify font-text">
                <h1 className="text-xl lg:text-xl font-medium tracking-wider whitespace-pre-line">
                    {description}
                </h1>
            </div>

            {/* Slider Container with padding for buttons */}
            <div className="relative mt-10 px-0 md:px-14">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={images.length > 1}
                    navigation={{
                        nextEl: '.consultancy-next',
                        prevEl: '.consultancy-prev',
                    }}
                    pagination={{ 
                        clickable: true, 
                        el: '.custom-swiper-pagination-consultancy' 
                    }}
                    className="py-4"
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={img.id || i}>
                            <div className="w-full">
                                <img 
                                    loading="lazy" 
                                    className="w-full h-[50vh] object-cover rounded-md shadow-sm" 
                                    src={img.image_url} 
                                    alt={img.image_text || "Consultancy"} 
                                />
                                {img.image_text && (
                                    <div className="mt-4 px-2">
                                        <h1 className="font-text font-semibold text-sm md:text-base text-gray-700">
                                            {img.image_text}
                                        </h1>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Manual Navigation Buttons - Outside the image */}
                {images.length > 1 && (
                    <>
                        <button className="consultancy-prev absolute top-1/2 -left-2 md:left-0 z-10 -translate-y-1/2 bg-orange-100 p-2 rounded-full shadow-md border border-orange-200 text-orange-600 hover:bg-orange-500 hover:text-white transition-all">
                            <ChevronLeft size={28} />
                        </button>
                        <button className="consultancy-next absolute top-1/2 -right-2 md:right-0 z-10 -translate-y-1/2 bg-orange-100 p-2 rounded-full shadow-md border border-orange-200 text-orange-600 hover:bg-orange-500 hover:text-white transition-all">
                            <ChevronRight size={28} />
                        </button>
                    </>
                )}
            </div>

            {/* Pagination dots container */}
            <div className="custom-swiper-pagination-consultancy text-center flex justify-center items-center gap-2 mt-6"></div>

            <style jsx global>{`
                .custom-swiper-pagination-consultancy .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: #d1d5db;
                    opacity: 1;
                    transition: all 0.3s;
                }
                .custom-swiper-pagination-consultancy .swiper-pagination-bullet-active {
                    background: #f97316 !important;
                    width: 20px;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};

export default Consultancy;