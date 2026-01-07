import qr from '../../assets/brochures/qr.jpeg';
import Title from '../../component/Title/Title';
import image_support_group from '../../../public/supporters/support_group_meeting.png';
import { useGetSupportGroupMeetingQuery } from '../../Redux/Apis/supportGroupMeetingApi';
import { Calendar, CreditCard, ExternalLink, QrCode } from 'lucide-react'; // Suggested icons
import { useGetImageSliderQuery } from '../../Redux/Apis/imageSliderApi';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

const Support__Group_Meeting = () => {
    const { data, isLoading: infoLoading } = useGetSupportGroupMeetingQuery();
    const meetingInfo = data?.data;

    const {
        data: imageData,
        isLoading: imageLoading,
    } = useGetImageSliderQuery({ type: "support_group" });

    // --- LOADER START ---
    if (infoLoading || imageLoading) {
        return (
            <section className="bg-gray-50/50 py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:w-4/5 animate-pulse">
                    <div className="h-12 w-64 bg-gray-200 rounded-lg mb-12"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-7 space-y-8">
                            <div className="h-[400px] lg:h-[550px] bg-gray-200 rounded-2xl"></div>
                            <div className="space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="h-[500px] bg-gray-200 rounded-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    // --- LOADER END ---

    const images = imageData?.data ?? [];

    return (
        <section className="bg-gray-50/50 py-16 lg:py-24 mt-20">
            <div className="container mx-auto px-4 lg:w-4/5">
                <div className="mb-12">
                    <Title>Support Group Meeting</Title>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Hero Image & Description */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="relative group">
                            {images.length > 0 ? (
                                <>
                                    <Swiper
                                        modules={[Navigation, Pagination, EffectFade]}
                                        effect="fade" // Smooth transition for single image view
                                        navigation={{
                                            nextEl: '.hero-next',
                                            prevEl: '.hero-prev',
                                        }}
                                        pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet !bg-white' }}
                                        className="rounded-2xl  overflow-hidden h-[400px] lg:h-[550px] bg-gray-200"
                                    >
                                        {images?.map((img, index) => (
                                            <SwiperSlide key={img.id || index}>
                                                <div className="relative w-full h-full">
                                                    <img
                                                        loading="lazy"
                                                        className="w-full h-full object-contain"
                                                        src={img.image_url}
                                                        alt="Support Group"
                                                    />
                                                    {/* Overlay for depth */}
                                                    <div className="absolute inset-0 " />

                                                    {img.image_text && (
                                                        <div className="absolute bottom-10 left-8 right-8">
                                                            <p className="text-white text-lg font-medium drop-shadow-lg">
                                                                {img.image_text}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Manual Navigation Buttons - Only show if multiple images */}
                                    {images.length > 1 && (
                                        <>
                                            <button className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/90 backdrop-blur-md text-white hover:text-orange-600 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/30">
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/90 backdrop-blur-md text-white hover:text-orange-600 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/30">
                                                <ChevronRight size={24} />
                                            </button>
                                        </>
                                    )}
                                </>
                            ) : (
                                /* Empty State */
                                <div className="w-full h-[400px] lg:h-[550px] rounded-2xl bg-gray-100 flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
                                    <ImageOff size={48} className="text-gray-300 mb-4" />
                                    <p className="text-gray-400 font-medium font-text">No images shared yet</p>
                                </div>
                            )}
                        </div>

                        {/* Description Section */}
                        <div className="bg-white/50 p-6 rounded-2xl border border-gray-100">
                            <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>
                            <p className="text-gray-700 leading-relaxed text-lg lg:text-xl font-semibold whitespace-pre-line">
                                {meetingInfo?.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Registration Card */}
                    <div className="lg:col-span-5 sticky top-24">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span className="p-2 bg-orange-100 rounded-lg"><Calendar className="text-orange-500" /></span> Event Details
                            </h2>

                            <div className="space-y-6">
                                {/* Fee Row */}
                                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <div className="flex items-center gap-3">
                                        <CreditCard className="text-orange-600" />
                                        <span className="font-semibold text-gray-700">Registration Fee</span>
                                    </div>
                                    <span className="text-xl font-bold text-orange-600">{meetingInfo?.reg_fee}</span>
                                </div>

                                {/* QR Section */}
                                <div className="text-center p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                                    <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-widest">Scan to Register</p>
                                    <img
                                        loading="lazy"
                                        className="w-48 h-48 mx-auto rounded-lg shadow-sm bg-white p-2"
                                        src={meetingInfo?.qr_image_link}
                                        alt="QR Code"
                                    />
                                </div>

                                {/* Action Button */}
                                <a
                                    href={meetingInfo?.qr_form_link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-200 active:scale-95"
                                >
                                    Register Online <ExternalLink size={20} />
                                </a>

                                <p className="text-center text-sm text-gray-400 font-text">
                                    Secure your spot for the next session.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support__Group_Meeting;