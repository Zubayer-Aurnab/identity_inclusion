import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imge1 from '../../assets/images/award.png'
import imge2 from '../../assets/images/award_2.png'
import imge3 from '../../assets/images/brac.png'
import { Autoplay, EffectFade } from "swiper/modules";
import { useEffect } from "react";
import Aos from "aos";
import './Banner.css'



const Banner = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="relative">
            <div>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    fadeEffect={"fade"}
                    className="mySwiper border">
                    <SwiperSlide><img className='w-full h-[91vh] md:h-[93vh] object-cover' src={imge3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[91vh] md:h-[93vh] object-cover' src={imge1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[91vh] md:h-[93vh] object-cover' src={imge2} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="absolute flex items-center h-32 md:h-52 w-full left-0 bottom-0 bg-gradient-to-r from-[#2b292b] z-10">
                <div className="px-2 md:px-10 absolute bottom-0 md:bottom-3">
                    <h1 style={{ letterSpacing: "10px" }} className=" text-xl md:text-3xl lg:text-7xl text-white font-bold">IDENTITY INCLUSION</h1>
                    <p className=" text-white mt-2 lg:mt-7 text-lg md:text-2xl  lg:text-5xl ubuntu_font "> Youth for A <br /> Diverse and Inclusive Society</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;