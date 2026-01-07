import logo from '../../../../assets/images/identity inclusion logo.png';
import { useCompanyQuery } from '../../../../Redux/Apis/companyApi';

const Company = () => {
    const { data, isLoading } = useCompanyQuery({});
    const CompanyDescription = data?.data[0]?.description;

    return (
        <div id="company" className="py-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
                
                {/* Logo Section with Soft Glow */}
                <div className="relative shrink-0" data-aos="fade-right">
                    <div className="absolute inset-0 bg-[#118088]/5 rounded-full blur-2xl transform scale-110"></div>
                    <div className="relative bg-white p-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-50">
                        <img 
                            loading="lazy" 
                            src={logo} 
                            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-contain" 
                            alt="Identity Inclusion Logo" 
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1" data-aos="fade-left">
                    <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                        <span className="h-[2px] w-8 bg-[#f97316]"></span>
                        <h2 className="text-[#118088] font-bold uppercase tracking-[0.2em] text-sm">
                            Our Identity
                        </h2>
                    </div>
                    
                    <div className="relative">
                        {/* Modern Decorative Accent */}
                        <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#118088] to-transparent opacity-20"></div>
                        
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify font-text first-letter:text-5xl first-letter:font-bold first-letter:text-[#118088] first-letter:mr-3 first-letter:float-left">
                            {isLoading ? (
                                <span className="flex flex-col gap-2">
                                    <span className="h-4 bg-gray-100 rounded w-full animate-pulse inline-block"></span>
                                    <span className="h-4 bg-gray-100 rounded w-5/6 animate-pulse inline-block"></span>
                                </span>
                            ) : (
                                CompanyDescription
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;