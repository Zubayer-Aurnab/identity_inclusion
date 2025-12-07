import Aos from 'aos';
import { useEffect } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import Team from '../../component/Team/Team';
import Title from '../../component/Title/Title';
import './AboutUs.css';
import Advisors from './Components/Advisors/Advisors';
import Ceo from './Components/Ceo/Ceo';
import Company from './Components/Company/Company';
import MissionVision from './Components/MissionVision/MissionVision';

const AboutUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div>
            <div className="h-[45vh] md:h-[35vh] bg-gradient-to-b from-[#c0e1bd] to-[#0d7f88]"></div>
            <div className="relative bottom-64  md:px-5 lg:px-0 lg:w-[80%] mx-auto  ">
                <h1 className='px-2 md:px-0 text-3xl md:text-3xl lg:text-6xl  text-white font-medium mb-7 font-header'>About Identity Inclusion</h1>
                <div className='flex items-center gap-1 text-white mb-2 font-text px-2  md:px-0' >
                    <a href='#mission_vision' className='hover-effect-about text-xs lg:text-base' >Mission & Vision</a>
                    <p><FaChevronRight /></p>
                    <a href='#word_from_ceo' className='hover-effect-about text-xs lg:text-base' >About The Founder</a>
                    <p><FaChevronRight /></p>
                    <a href='#our_team' className='hover-effect-about text-xs lg:text-base' >Our Team</a>
                    <p><FaChevronRight /></p>
                    <a href='#advisor' className='hover-effect-about text-xs lg:text-base' >Advisors</a>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className="h-5 bg-[#118189] rounded-t-xl shadow-2xl" ></div>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className="bg-white shadow-md px-10  rounded-lg">

                    {/* Identity Section section */}
                    <Company />
                    {/*Mission & Vision section */}
                    <MissionVision />
                    {/* ceo section */}
                    <Ceo />
                    {/* Team members */}
                    <div className=' my-4 md:my-20'>
                        <Title>Team Members</Title>
                    </div>
                    <div className='pb-10'>
                        <Team />
                    </div>
                    {/* Advisor section */}
                    <Advisors />

                </div>
            </div>
        </div>
    );
};

export default AboutUs;