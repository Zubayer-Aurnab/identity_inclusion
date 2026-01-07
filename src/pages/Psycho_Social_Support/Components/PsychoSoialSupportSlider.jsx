import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetImageSliderQuery } from '../../../Redux/Apis/imageSliderApi';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PsychoSoialSupportSlider = () => {
    const { data, isLoading, isError } = useGetImageSliderQuery({ type: "psychosocial" });
    const images = data?.data || [];

    // --- SKELETON LOADER START ---
    if (isLoading) {
        return (
            <div className="relative px-4 md:px-10 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="animate-pulse bg-white border border-gray-100 shadow-sm flex flex-col h-80">
                            <div className="h-56 bg-gray-200 w-full"></div>
                            <div className="p-5 space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    // --- SKELETON LOADER END ---

    if (isError) return <div className="text-center py-10 text-red-500 font-text">Failed to load images.</div>;

    return (
        <div className="relative px-4 md:px-10">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                loop={images.length > 1} // Only loop if there are multiple images
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
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-56">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={img.image_url}
                                    alt={img?.image_text || "Support Image"}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow bg-white group-hover:bg-orange-50 transition-colors duration-300">
                                <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight mb-3 line-clamp-2">
                                    {img?.image_text}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button className="swiper-button-prev-custom absolute top-1/2 -left-2 md:-left-6 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border text-orange-500 bg-orange-200 border-gray-200 hover:bg-orange-500 hover:text-white transition-all">
                        <ChevronLeft size={34} />
                    </button>
                    <button className="swiper-button-next-custom absolute top-1/2 -right-2 md:-right-6 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border text-orange-500 bg-orange-200 border-gray-200 hover:bg-orange-500 hover:text-white transition-all">
                        <ChevronRight size={34} />
                    </button>
                </>
            )}

            {/* Custom Styled Pagination */}
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
    );
};

export default PsychoSoialSupportSlider;