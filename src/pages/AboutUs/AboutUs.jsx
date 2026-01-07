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
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const navLinks = [
        { name: "Mission & Vision", href: "#mission_vision" },
        { name: "About The Founder", href: "#word_from_ceo" },
        { name: "Our Team", href: "#our_team" },
        { name: "Advisors", href: "#advisor" },
    ];

    return (
        <div className="bg-gray-50/50">
            {/* Header Hero Section */}
            <div className="relative h-[50vh] lg:h-[45vh] bg-[#118189] flex flex-col justify-center items-center overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center px-4" data-aos="zoom-out">
                    <h1 className='text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6 font-header tracking-tight'>
                        About Identity Inclusion
                    </h1>
                    
                    {/* Modern Pill Navigation */}
                    <div className='flex flex-wrap justify-center items-center gap-2 md:gap-4'>
                        {navLinks.map((link, index) => (
                            <div key={link.href} className="flex items-center">
                                <a 
                                    href={link.href} 
                                    className='text-white/90 bg-white/10 hover:bg-white hover:text-[#118189] px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-sm'
                                >
                                    {link.name}
                                </a>
                                {index !== navLinks.length - 1 && (
                                    <FaChevronRight className="text-white/40 ml-2 md:ml-4 hidden md:block" size={10} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative -mt-20 px-4 md:px-5 lg:px-0 lg:w-[85%] xl:w-[80%] mx-auto pb-20">
                {/* The "Sheet" Look */}
                <div 
                    data-aos="fade-up"
                    className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden border border-gray-100"
                >
                    {/* Top Accent Bar */}
                    <div className="h-2 bg-gradient-to-r from-[#118189] to-[#c0e1bd]" />

                    <div className="px-6 md:px-12 lg:px-20 py-10 md:py-16">
                        {/* Identity Section */}
                        <div id="company" className="mb-20">
                            <Company />
                        </div>

                        {/* Mission & Vision Section */}
                        <div id="mission_vision" className="scroll-mt-20 mb-24">
                            <MissionVision />
                        </div>

                        {/* Founder Section */}
                        <div id="word_from_ceo" className="scroll-mt-20 mb-24">
                            <Ceo />
                        </div>

                        {/* Team Section */}
                        <div id="our_team" className="scroll-mt-20 mb-24">
                            <div className='mb-12'>
                                <Title>Our Professional Team</Title>
                               
                            </div>
                            <Team />
                        </div>

                        {/* Advisor Section */}
                        <div id="advisor" className="scroll-mt-20">
                            <Advisors />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;