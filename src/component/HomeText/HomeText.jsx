import { Link } from "react-router-dom";
import Button from "../Button/Button";
import img14 from '../../assets/marquee/img14.jpg';
import img2 from '../../assets/images/award.jpeg';
import img3 from '../../assets/marquee/img29.jpg';

const HomeText = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left Side: Creative Image Collage */}
                    <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none" data-aos="zoom-in-right">
                        {/* Main Large Image (Circle) */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl z-10">
                            <img src={img2} alt="Award" className="w-full h-full object-cover" />
                        </div>

                        {/* Secondary Overlap Image */}
                        <div className="absolute top-[-20px] right-[-10px] md:top-[-40px] md:right-[20px] w-40 h-40 md:w-56 md:h-56 rounded-[3rem] overflow-hidden border-8 border-white shadow-xl z-20">
                            <img src={img14} alt="Impact" className="w-full h-full object-cover" />
                        </div>

                        {/* Third Support Image */}
                        <div className="absolute bottom-[20px] right-[-20px] md:bottom-[-20px] md:right-[-10px] w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
                            <img src={img3} alt="Community" className="w-full h-full object-cover" />
                        </div>

                        {/* Decorative Background Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-teal-50 rounded-full -z-10 opacity-60"></div>
                    </div>

                    {/* Right Side: Narrative Content */}
                    <div className="flex-1 space-y-8" data-aos="fade-left">
                        <div className="space-y-4 text-center lg:text-left">
                            <h3 className="text-[#f97316] font-bold uppercase tracking-[0.3em] text-xs">
                                Transformative Consulting
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-header font-black text-gray-900 leading-[1.2]">
                                Rectifying Social <br />
                                <span className="text-[#118088]">Approaches to Inclusion</span>
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Stylish Quote Mark Background */}
                            <span className="absolute -top-6 -left-4 text-6xl text-teal-100 font-serif opacity-50">“</span>
                            
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-text text-justify relative z-10">
                                <span className="text-gray-900 font-bold">Identity Inclusion</span> is a development consulting firm that aims to resolve and rectify the approach our institutions and society has towards marginalized communities. What started as a project to help those with psychosocial disabilities has grown into a movement to bridge the knowledge gap and end societal exclusion.
                            </p>
                        </div>

                        <p className="text-gray-500 text-base md:text-lg border-l-4 border-[#118088] pl-6 py-2">
                            Through assessments, awareness raising, and policy development, we bring institutional and systemic change to our society.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                            <Link 
                                target="_blank" 
                                to="https://drive.google.com/file/d/15KOwwRroT5jSrIjrbL16oLwH0IVTsEzJ/view?usp=sharing"
                            >
                                <Button small className="hover:shadow-lg transition-all">Portfolio</Button>
                            </Link>
                            <Link to="/about">
                                <Button small outline className="hover:bg-gray-50 transition-all">Learn More</Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeText;