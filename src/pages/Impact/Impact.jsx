import React, { useEffect } from 'react';
import img2 from '../../assets/images/award.jpeg'
import img3 from '../../assets/marquee/img29.jpg'
import Aos from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import imp1 from '../../assets/impact/brac.jpg'
import imp2 from '../../assets/impact/Practical-Action.jpg'
import imp3 from '../../assets/impact/UCEP.png'
import "swiper/css";
import Title from '../../component/Title/Title';
const Impact = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='px-4 lg:px-0 lg:w-4/5 mx-auto'>
            <div className=' flex-col lg:flex-row flex  items-center my-10 lg:my-0 '>
                <div className='flex-1'>
                    <div data-aos="fade-right" data-aos-duration="2000" className='pr-0 lg:pr-4 mb-10 lg:mb-0'>
                        <h1 className='text-xl lg:text-2xl xl:text-3xl font-header text-[#118088]'>First woman to receive the Stellar Women 2023 award
                        </h1>
                        <p className='font-text  xl:text-xl text-[#666b73] mt-5 lg:mt-0 xl:mt-5 text-justify'>
                            Our CEO, Shamsin Ahmed, became the first woman to receive the Stellar Women 2023 award in Bangladesh in recognition of her contributions to the development sector, specifically for her work in advocating for institutional policies and practices to make them disability inclusive. She received this prestigious award from BTI-The Daily Star, which honors women who have impacted society and contributed to nation-building.
                        </p>
                    </div>
                </div>
                <div className='flex-1'>
                    <div>
                        {/* <img src={img1} className='h-[70%]' alt="" /> */}
                        <img src={img2} className='h-[70%]' alt="" />
                    </div>
                </div>
            </div>
            <div className=' flex-col lg:flex-row-reverse flex  items-center  mb-10'>
                <div className='flex-1  '>
                    <div data-aos="fade-left" data-aos-duration="2000" className='mb-10 lg:mb-0 lg:pl-4'>
                        <h1 className=' text-xl lg:text-2xl xl:text-3xl font-header text-[#118088]'>BRAC Urban Innovation Challenge in 2016
                        </h1>
                        <p className='font-text xl:text-xl text-[#666b73] mt-5 lg:mt-0 xl:mt-5 text-justify'>
                            Identity Inclusion was specially recognized for its Psychosocial Support (PSS) project at the BRAC Urban Innovation Challenge. This acknowledgment came from the late city mayor Annisul Haque, who appreciated the organization's efforts in addressing urban challenges, particularly in promoting mental health support and inclusivity for marginalized groups. -
                        </p>
                    </div>
                </div>
                <div className='flex-1'>
                    <div>
                        {/* <img src={img1} className='h-[70%]' alt="" /> */}
                        <img src={img3} className='h-[70%]' alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-32 mb-20 '>
                <Title >Our Work, In Their Words</Title>
            </div>
            <div className='mb-24 lg:mb-40' >
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><img loading="lazy" className='w-full   lg:h-[91vh] md:h-[93vh]  object-contain  md:object-contain' src={imp1} alt="" /></SwiperSlide>
                    <SwiperSlide><img loading="lazy" className='w-full  lg:h-[91vh] md:h-[93vh] object-cover md:object-contain' src={imp2} alt="" /></SwiperSlide>
                    <SwiperSlide><img loading="lazy" className='w-full  lg:h-[91vh] md:h-[93vh] object-cover md:object-contain' src={imp3} alt="" /></SwiperSlide>

                </Swiper>

            </div>
        </div>
    );
};

export default Impact;