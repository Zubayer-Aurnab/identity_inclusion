import Title from "../../component/Title/Title";
import { useGetAdvocacyQuery } from "../../Redux/Apis/advocacyApi";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGetImageSliderQuery } from "../../Redux/Apis/imageSliderApi";

const Advocacy = () => {
    const { data, isLoading: advocacyLoading } = useGetAdvocacyQuery({});
    const advocacyContent = data?.data[0]?.description || "";
    const { data: imageSliderData, isLoading: imageSliderLoading } = useGetImageSliderQuery({ type: "advocacy" });
    const images = imageSliderData?.data || [];

    // --- LOADER SECTION ---
    if (advocacyLoading || imageSliderLoading) {
        return (
            <div className="my-20 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto animate-pulse">
                {/* Title Skeleton */}
                <div className="h-10 w-64 bg-gray-200 rounded mb-10"></div>

                {/* Description Skeleton */}
                <div className="space-y-4 mb-12">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>

                {/* Slider Skeleton Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-80 bg-gray-100 rounded-none border border-gray-100 shadow-sm">
                            <div className="h-56 bg-gray-200 w-full"></div>
                            <div className="p-5 space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="my-20 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Advocacy & Awareness
            </Title>
            <div className="mt-10 text-justify font-text">
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider whitespace-pre-line">
                    {advocacyContent}
                </h1>
                <br />
            </div>

            <div className="relative px-4 md:px-10">
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
    );
};

export default Advocacy;