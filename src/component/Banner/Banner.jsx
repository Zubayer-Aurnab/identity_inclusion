import Aos from "aos";
import { useEffect } from "react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imge1 from '../../assets/images/award.jpeg';
import banner from '../../assets/images/banner.png';
import imge3 from '../../assets/images/brac.png';
import './Banner.css';



const Banner = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="relative ">
            <div>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    fadeEffect={"fade"}
                    className="mySwiper ">
                    <SwiperSlide><img loading="lazy" className='w-full h-[40vh]  lg:h-[91vh] md:h-[93vh]  object-contain  md:object-contain' src={banner} alt="" /></SwiperSlide>
                    <SwiperSlide><img loading="lazy" className='w-full h-[40vh] lg:h-[91vh] md:h-[93vh] object-cover md:object-cover' src={imge3} alt="" /></SwiperSlide>
                    <SwiperSlide><img loading="lazy" className='w-full h-[40vh] lg:h-[91vh] md:h-[93vh] object-cover md:object-cover ' src={imge1} alt="" /></SwiperSlide>
                    {/* <SwiperSlide><img className='w-full h-[91vh] md:h-[93vh] object-cover' src={imge2} alt="" /></SwiperSlide> */}
                </Swiper>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="absolute flex items-center h-20 md:h-44 w-full left-0 bottom-[1px] lg:bottom-0 bg-gradient-to-r from-[#2b292b] z-10">
                <div className="px-2 md:px-10 absolute bottom-0 md:bottom-6">
                    <h1 style={{ letterSpacing: "10px" }} className=" text-base md:text-3xl lg:text-5xl text-white font-bold font-header">IDENTITY INCLUSION</h1>
                    <p className=" text-white mt-2 lg:mt-5 text-base  md:text-2xl  lg:text-3xl font-text"> Youth for A  Diverse and Inclusive Society</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;