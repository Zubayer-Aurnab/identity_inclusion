import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import imge1 from '../../assets/images/award.jpeg';
import imge3 from '../../assets/images/brac.png';
import imge2 from '../../assets/images/p.jpg';

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    const tags = [
        { text: "Psycho-Social Support", pos: "top-[5%] -left-10", delay: 600, color: "text-[#f97316]" },
        { text: "Support Group Meeting", pos: "top-[30%] -right-10", delay: 800, color: "text-[#118088]" },
        { text: "Advocacy & Awareness", pos: "top-[40%] -left-16", delay: 1000, color: "text-[#118088]" },
        { text: "Consultancy", pos: "bottom-[15%] right-0", delay: 1200, color: "text-[#118088]" },
        { text: "Capacity Building", pos: "bottom-[10%] -left-10", delay: 1400, color: "text-[#f97316]" },
    ];

    return (
        <section className="relative w-full min-h-[90vh] bg-[#fdfdfd] flex flex-col items-center justify-center overflow-hidden py-20 lg:py-0 ">

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2  items-center relative z-10">

                {/* Text Content */}
                <div className="text-center lg:text-left ">
                    <div data-aos="fade-up">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-header font-black text-gray-900 tracking-tight leading-none">
                            IDENTITY <br />
                            <span className="text-[#118088]">INCLUSION</span>
                        </h1>

                        <div className="mt-8 flex flex-col items-center lg:items-start">
                            <p className="text-gray-600 text-xl md:text-3xl font-text max-w-lg leading-relaxed">
                                Youth for a <span className="text-[#f97316] font-semibold">Diverse and Inclusive</span> Society
                            </p>
                            <div className="w-24 h-1.5 bg-[#118088] mt-4 rounded-full"></div>
                        </div>

                        {/* <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                            <button className="px-10 py-4 bg-[#118088] text-white rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                Explore Our Mission
                            </button>
                            <button className="px-10 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
                                Get Support
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Image Section with Curved Tags */}
                <div className="flex justify-center lg:justify-left  " data-aos="zoom-in">
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">

                        {/* Animated Border Ring */}
                        <div className="absolute inset-0 border-2 border-dashed border-[#118088]/20 rounded-full animate-[spin_30s_linear_infinite]"></div>

                        {/* Main Swiper Window */}
                        <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl bg-white z-10">
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                loop={true}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                className="w-full h-full"
                            >
                                {[imge1, imge2, imge3].map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            className="w-full h-full object-cover"
                                            src={img}
                                            alt="Inclusive support"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Floating Curved Tags */}
                        {tags.map((tag, idx) => (
                            <div
                                key={idx}
                                className={`absolute ${tag.pos} z-20 hidden md:block animate-float`}
                                style={{ animationDelay: `${idx * 0.5}s` }}
                                data-aos="fade-in"
                                data-aos-delay={tag.delay}
                            >
                                <div className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 whitespace-nowrap">
                                    <p className={`${tag.color} font-bold text- tracking-wide`}>{tag.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Banner;