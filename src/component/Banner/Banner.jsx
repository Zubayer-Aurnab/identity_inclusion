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
                    <SwiperSlide><img className='w-full h-[93vh] object-cover' src={imge1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[93vh] object-cover' src={imge2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[93vh] object-cover' src={imge3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="absolute flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#2b292b] z-10">
                <div data-aos="fade-up"
                    data-aos-duration="2000" className="px-10">
                    <h1 style={{ letterSpacing: "10px" }} className="text-7xl text-white font-bold  ">IDENTITY INCLUSION</h1>
                    <p className=" text-white mt-7 text-5xl ubuntu_font "> Youth for  <br />A  Diverse and Inclusive Society</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;