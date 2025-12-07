
import Aos from 'aos';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from '../../assets/images/award.jpeg';
import img3 from '../../assets/marquee/img29.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import imp1 from '../../assets/impact/brac.jpg';
import imp2 from '../../assets/impact/Practical-Action.jpg';
import imp3 from '../../assets/impact/UCEP.png';
import Title from '../../component/Title/Title';
import { useImpactQuery } from '../../Redux/Apis/impactApi';
const Impact = () => {
    const { data } = useImpactQuery({})
    const ImpactData = data?.data?.slice().reverse() || [];

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='px-4 lg:px-0 lg:w-4/5 mx-auto'>

            {
                ImpactData?.map((impact, i) => (
                    <>
                        <div className={`flex-col ${i % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"}  flex items-center my-10 lg:my-0 `}>
                            <div className='flex-1'>
                                <div data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="2000" className='pr-0 lg:pr-4 mb-10 lg:mb-0'>
                                    <h1 className='text-xl lg:text-2xl xl:text-3xl font-header text-[#118088] px-4'>{impact?.title}
                                    </h1>
                                    <p className='font-text  xl:text-xl text-black mt-5 lg:mt-0 xl:mt-5 text-justify px-4'>
                                        {impact?.description}
                                    </p>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    {/* <img src={img1} className='h-[70%]' alt="" /> */}
                                    <img src={impact?.image} className='h-[70%]' alt="" />
                                </div>
                            </div>
                        </div >
                    </>
                ))
            }
            <div className='mt-32 mb-20 '>
                <Title >Our Work, In Their Words</Title>
            </div>
            <div className='mb-24 lg:mb-40' >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true, el: '.custom-swiper-pagination-2' }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 2 },
                    }}
                    className="py-6"
                >
                    {[1, 2, 3,].map((_, i) => (
                        <SwiperSlide key={i} className="h-full flex">
                            <img loading="lazy" className='w-full   lg:h-[91vh] md:h-[50vh]  object-contain  md:object-contain  border' src={[imp1, imp2, imp3][i]} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-swiper-pagination-2 pt-6 text-center  space-x-2 "></div>
            </div>
        </div >
    );
};

export default Impact;