import Lottie from 'lottie-react';
import mission from '.././../../../../public/mission.json';
import values from '.././../../../../public/values.json';
import vision from '.././../../../../public/vision.json';
import { useEffect } from 'react';
import Aos from 'aos';

const MissionVision = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div id="mission_vision" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* 01. Mission & Vision - Overlapping Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative mb-32">

                    {/* Mission Card */}
                    <div
                        data-aos="fade-right"
                        className="w-full lg:w-1/2 bg-[#118088] rounded-[3rem] p-10 lg:p-16 text-white relative z-20 shadow-2xl lg:-mr-12"
                    >
                        <div className="flex items-center gap-6 mb-8">
                            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                                <Lottie className="w-16 h-16" animationData={mission} />
                            </div>
                            <h2 className="text-4xl font-bold font-header tracking-tight">Our Mission</h2>
                        </div>
                        <p className="text-teal-50 text-xl leading-relaxed font-text italic">
                            "Enable the full potential of excluded individuals by promoting best practices for inclusion through youth leadership and institutional change."
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="w-full lg:w-[60%] bg-gray-50 border-2 border-dashed border-teal-100 rounded-[3rem] p-10 lg:p-16 lg:pl-24"
                    >
                        <div className="flex items-center gap-6 mb-8">
                            <div className="bg-[#118088]/10 p-3 rounded-2xl">
                                <Lottie className="w-20 h-20" animationData={vision} />
                            </div>
                            <h2 className="text-3xl font-bold font-header text-gray-800">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed font-text">
                            To create inclusive societies that realize the full potential of excluded individuals through institutional and systemic change.
                        </p>
                    </div>
                </div>

                {/* 02. Values - Horizontal Ribbon Section */}
                <div
                    data-aos="zoom-in"
                    className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 overflow-hidden shadow-2xl"
                >
                    {/* Decorative Background Icon */}
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10">
                        <Lottie className="w-64" animationData={values} />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2">Core Foundations</h2>
                            <h3 className="text-white text-4xl font-header font-bold">Our Values</h3>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 lg:gap-12">
                            {['Inclusion', 'Integrity', 'Dignity'].map((value, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <span className="text-teal-500 text-5xl font-black opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                                    <span className="text-white text-2xl lg:text-3xl font-bold tracking-tight">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MissionVision;