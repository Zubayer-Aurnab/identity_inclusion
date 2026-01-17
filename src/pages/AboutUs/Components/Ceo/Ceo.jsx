import { useCeoQuery } from '../../../../Redux/Apis/ceoApi';
import { Quote } from 'lucide-react'; // Optional: for a professional icon

const Ceo = () => {
    const { data, isLoading } = useCeoQuery();
    const CeoData = data?.data;

    return (
        <div id="word_from_ceo" className="py-16 scroll-mt-24">
            <div className="flex flex-col lg:flex-row gap-12 items-start">

                {/* Left Side: Profile Aesthetic */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-center text-center lg:text-left ">
                    <div className="relative ">
                        {/* Decorative background shape */}
                        <div className="absolute -inset-4 bg-teal-50 rounded-full -z-10 scale-95"></div>

                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                loading="lazy"
                                src={CeoData?.image}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                                alt={CeoData?.name}
                            />
                        </div>

                        {/* Floating Quote Icon */}
                        <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 bg-[#118088] text-white p-3 rounded-full shadow-lg">
                            <Quote size={24} fill="currentColor" />
                        </div>
                    </div>

                    <div className="mt-8 ">
                        <h3 className="text-2xl md:text-3xl font-bold font-header text-gray-900 leading-tight">
                            {CeoData?.name}
                        </h3>
                        <p className="text-[#118088] font-semibold text-lg font-text mt-1">
                            {CeoData?.designation}
                        </p>
                        <div className="w-12 h-1 bg-[#f97316] mt-4 mx-auto lg:mx-0 rounded-full"></div>
                    </div>
                </div>

                {/* Right Side: Message Content */}
                <div className="w-full lg:w-2/3 relative ">
                    {/* Large Background Quote Symbol for Texture */}
                    <span className="absolute -top-10 -left-6 text-[12rem] leading-none font-serif text-gray-100 -z-10 opacity-50 select-none">
                        “
                    </span>

                    <div className="relative">
                        <p className="text-lg md:text-xl lg:text-xl leading-relaxed text-gray-700 text-justify font-text italic">
                            {CeoData?.description}
                        </p>

                        {/* Professional Closing */}
                        {/* <div className="mt-10 pt-6 border-t border-gray-100">
                            <p className="font-header text-gray-400 text-sm uppercase tracking-[0.3em]">
                                A Message from our Founder
                            </p>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ceo;