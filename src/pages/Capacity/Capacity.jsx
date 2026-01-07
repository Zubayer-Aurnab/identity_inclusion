import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import secondPdf from '../../assets/brochures/second.pdf';
import Title from "../../component/Title/Title";
import { useGetCapacityQuery } from "../../Redux/Apis/capacityApi";
import { useGetImageSliderQuery } from "../../Redux/Apis/imageSliderApi";

const Capacity = () => {
    const { data, isLoading } = useGetCapacityQuery();
    const { data: imageSliderData, isLoading: imageSliderLoading } = useGetImageSliderQuery({ type: "capacity" });
    const images = imageSliderData?.data || [];

    // Skeleton Component for the Slider Cards
    const SkeletonCard = () => (
        <div className="bg-gray-100 animate-pulse border border-gray-200 overflow-hidden flex flex-col h-full ">
            <div className="h-56 bg-gray-200" />
            <div className="p-5 flex-grow">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
        </div>
    );

    return (
        <div className="my-40 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>Capacity Building</Title>

            {/* Description Skeleton/Content */}
            <div className="mt-10 text-justify font-text">
                {isLoading ? (
                    <div className="space-y-2 animate-pulse">
                        <div className="h-5 bg-gray-200 rounded w-full" />
                        <div className="h-5 bg-gray-200 rounded w-5/6" />
                    </div>
                ) : (
                    <h1 className="text-xl lg:text-xl font-medium tracking-wider">{data?.data[0]?.description}</h1>
                )}
            </div>

            {/* Image Section */}
            <div className="mt-6">
                <div className="relative px-4 md:px-10">
                    {imageSliderLoading ? (
                        // Skeleton Grid matching Swiper breakpoints
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
                            {[1, 2, 3, 4].map((n) => <SkeletonCard key={n} />)}
                        </div>
                    ) : (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={images.length > 1}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.custom-swiper-pagination-2'
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            className="py-10"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i} className="h-full">
                                    <div className="group bg-white border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                        <div className="relative overflow-hidden h-56">
                                            <img
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                src={img.image_url}
                                                alt={img?.image_text || "Support Image"}
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                        </div>
                                        <div className="p-5 flex flex-col flex-grow bg-white group-hover:bg-orange-50 transition-colors duration-300">
                                            <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight mb-3 line-clamp-2">
                                                {img?.image_text}
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}

                    {/* Navigation Buttons (Only show if not loading and has images) */}
                    {!imageSliderLoading && images.length > 0 && (
                        <>
                            <button className="swiper-button-prev-custom absolute top-1/2 -left-2 md:-left-6 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border text-orange-500 bg-orange-200 border-gray-200 hover:bg-orange-500 hover:text-white transition-all">
                                <ChevronLeft size={34} />
                            </button>
                            <button className="swiper-button-next-custom absolute top-1/2 -right-2 md:-right-6 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border text-orange-500 bg-orange-200 border-gray-200 hover:bg-orange-500 hover:text-white transition-all">
                                <ChevronRight size={34} />
                            </button>
                        </>
                    )}

                    <div className="custom-swiper-pagination-2 mt-8 flex justify-center gap-2"></div>

                    <style jsx global>{`
                        .custom-swiper-pagination-2 .swiper-pagination-bullet {
                            width: 10px;
                            height: 10px;
                            background: #d1d5db;
                            opacity: 1;
                            transition: all 0.3s;
                        }
                        .custom-swiper-pagination-2 .swiper-pagination-bullet-active {
                            background: #f97316 !important;
                            width: 25px;
                            border-radius: 5px;
                        }
                    `}</style>
                </div>
            </div>

            <div>
                <h1 className=" text-sm lg:text-sm font-medium tracking-wider mt-8 font-text ">
                    For more information <a href={secondPdf} download={'first.pdf'} className=' text-theme bg-theme-light  px-2 rounded-lg text-sm  font-semibold'>click here</a>
                </h1>
            </div>
        </div>
    );
};

export default Capacity;