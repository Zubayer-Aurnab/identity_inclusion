import React, { useEffect } from 'react';
import img1 from '../../assets/images/daily-star-acknowledgement-of-founder.png'
import img2 from '../../assets/images/award.jpeg'
import img3 from '../../assets/marquee/img29.jpg'
import Aos from 'aos';
const Impact = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='px-4 lg:px-0 lg:w-4/5 mx-auto'>
            <div className=' flex-col lg:flex-row flex  items-center my-10 lg:my-0 '>
                <div className='flex-1'>
                    <div data-aos="fade-right" data-aos-duration="2000" className='pr-0 lg:pr-4 mb-10 lg:mb-0'>
                        <h1 className='text-3xl font-[Roboto] text-[#118088]'>First woman to receive the Stellar Women 2023 award
                        </h1>
                        <p className='font-[Ubuntu] text-xl text-[#666b73] mt-5 text-justify'>
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
                        <h1 className='text-3xl font-[Roboto] text-[#118088]'>BRAC Urban Innovation Challenge in 2016
                        </h1>
                        <p className='font-[Ubuntu] text-xl text-[#666b73] mt-5 text-justify'>
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
        </div>
    );
};

export default Impact;