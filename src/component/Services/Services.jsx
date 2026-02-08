import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Building2, HeartHandshake, Megaphone, Users, ArrowUpRight, Loader2, LucideHandHelping } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useImpactHighlightQuery } from '../../Redux/Apis/impactHighlightApi';

// Images
import psycho_social from '../../assets/service-Images/alzheimer_5979586.png';
import capacity from '../../assets/service-Images/behavior.png';
import consultancy from '../../assets/service-Images/empathy_17427262.png';
import advocacy from '../../assets/service-Images/self-awareness_12693111.png';
import Title from "../Title/Title";

const Services = () => {
    const { data, isLoading } = useImpactHighlightQuery({});
    const HighLightData = data?.data;

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const services = [
        { path: "/psycho-social-support", image: psycho_social, title: "Psycho-Social Support", description: "Direct moral, physical and psychological support to individuals with severe disabilities and their families.", color: "bg-blue-50" },
        { path: "/advocacy", image: advocacy, title: "Advocacy & Awareness", description: "Promoting policy development to ensure social inclusion through dialogues and media campaigns.", color: "bg-orange-50" },
        { path: "/consultancy", image: consultancy, title: "Institutional Consultancy", description: "Technical support for inclusive leadership and infrastructure in corporate and development sectors.", color: "bg-teal-50" },
        { path: "/capacity", image: capacity, title: "Capacity Building", description: "Specialized training on mental health concepts and disability inclusion skills.", color: "bg-purple-50" }
    ];

    const stats = [
        { label: "Supporters Trained", value: HighLightData?.psychosocial_supporters_trained, icon: <Users />, color: "text-blue-600" },
        { label: "Advocacy Sessions", value: HighLightData?.advocacy_provided, icon: <Megaphone />, color: "text-[#f97316]" },
        { label: "Consultancies", value: HighLightData?.institutional_consultancies, icon: <Building2 />, color: "text-teal-600" },
        { label: "Orgs Empowered", value: HighLightData?.organizations_empowered, icon: <HeartHandshake />, color: "text-purple-600" },
        { label: "Beneficiaries", value: HighLightData?.beneficiaries + " M", icon: <LucideHandHelping />, color: "text-purple-600" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {/* --- Services Section --- */}
            <div className="mb-12">
                <Title>Our Specialized Services</Title>
                <p className="text-gray-500 max-w-xl mt-4 font-text">
                    We bridge the gap between institutional policy and individual empowerment.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                {services.map((service, index) => (
                    <Link to={service.path} key={index} className={`group p-8 rounded-[2.5rem] ${service.color} hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-transparent hover:border-gray-100`}>
                        <div className="w-16 h-16 mb-6 transform group-hover:scale-110 transition-transform">
                            <img src={service.image} alt="" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-3 font-header">{service.title}</h3>
                        <p className="text-gray-600 text-md leading-relaxed mb-8 flex-grow font-text font-bold">{service.description}</p>
                        <div className="flex items-center gap-2 text-gray-900 font-bold text-xs uppercase tracking-widest font-header">
                            Learn More <ArrowUpRight size={16} />
                        </div>
                    </Link>
                ))}
            </div>

            {/* --- Impact Section --- */}
            <section className="relative rounded-[4rem] bg-[#0f172a] p-12 lg:p-20 overflow-hidden min-h-[500px] flex items-center">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#118088] opacity-10 blur-[100px]"></div>

                <div className="relative z-10 w-full">
                    {isLoading ? (
                        /* --- LOADER STATE --- */
                        <div className="flex flex-col items-center justify-center py-20 text-white">
                            <Loader2 className="w-12 h-12 text-[#118088] animate-spin mb-4" />
                            <p className="text-gray-400 font-bold animate-pulse uppercase tracking-widest text-xs">
                                Loading Impact Data...
                            </p>
                        </div>
                    ) : (
                        /* --- DATA STATE --- */
                        <>
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                                <div className="max-w-2xl">
                                    <h2 className="text-4xl md:text-6xl font-black text-white font-header leading-[1.1]">
                                        Measured steps toward <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#118088] to-teal-400">universal inclusion.</span>
                                    </h2>
                                </div>

                                {/* --- PROMINENT BENEFICIARIES SECTION --- */}
                                {/* We target the specific beneficiary stat here */}
                                <div
                                    data-aos="fade-left"
                                    className="relative group p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#118088]/10"
                                >
                                    {/* 1. Background Styling: Subtle gradient and glassmorphism */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/10" />

                                    {/* 2. Visual Accent: A glowing teal "pulse" or vertical bar on the left */}
                                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#118088] rounded-full shadow-[0_0_15px_rgba(17,128,136,0.8)]" />

                                    <div className="relative z-10">
                                        {/* Label with improved letter spacing */}
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="h-[1px] w-8 bg-[#118088]" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#118088] group-hover:text-teal-400 transition-colors">
                                                Total Impact
                                            </span>
                                        </div>

                                        <div className="space-y-0">
                                            {/* Main Value: Massive and Bold */}
                                            <h4 className="flex items-baseline text-7xl md:text-8xl font-black text-white font-header tracking-tighter leading-none">
                                                {HighLightData?.beneficiaries || 0}
                                                <span className="text-[#118088] text-5xl ml-3"> M</span>
                                                <span className="text-[#f97316] text-4xl ml-2 animate-pulse">+</span>
                                            </h4>

                                            {/* Subtext: Better contrast and alignment */}
                                            <p className="mt-2 text-gray-400 font-bold text-sm md:text-base uppercase tracking-widest flex items-center gap-2">
                                                Beneficiaries
                                                <span className="block h-2 w-2 rounded-full bg-teal-500/50" />
                                            </p>
                                        </div>
                                    </div>

                                    {/* 3. Decorative element: A faint radial glow in the corner */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#118088]/20 blur-[50px] rounded-full group-hover:bg-[#118088]/40 transition-all duration-700" />
                                </div>
                            </div>

                            {/* --- LOWER GRID (Remaining 4 items) --- */}
                            {/* Filter out beneficiaries from the map or slice the array */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.slice(0, 4).map((stat, idx) => (
                                    <div
                                        key={idx}
                                        data-aos="zoom-in-up"
                                        className="relative p-6 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors"
                                    >
                                        <div className="mb-4 text-white/50 group-hover:text-white transition-all transform group-hover:scale-110 duration-300">
                                            {stat.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-4xl font-black text-white font-header tracking-widest">
                                                {stat.value || 0}
                                                <span className="text-[#f97316] text-2xl ml-2">+</span>
                                            </h4>
                                            <p className="text-gray-400 font-bold text-[10px] xl:text-xs uppercase tracking-wider leading-tight">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Services;