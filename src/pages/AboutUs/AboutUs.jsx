import { useEffect } from 'react';
import ceo from '../../assets/images/ceo.png'
import logo from '../../assets/images/identity inclusion logo.png'
import { FaChevronRight } from "react-icons/fa6";
import './AboutUs.css'
import Aos from 'aos';

const AboutUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>

            <div className="h-[45vh] bg-gradient-to-b from-orange-300 to-orange-500"></div>

            <div className="relative bottom-64 w-[60%] mx-auto ">
                <h1 className='text-6xl  text-white font-semibold mb-7'>ABOUT IDENTITY INCLUSION</h1>
                <div className='flex items-center gap-1 text-white mb-2' >

                    <a href='#word_from_ceo' className='hover-effect-about' >Words From CEO</a>
                    <p><FaChevronRight /></p>
                    <a href='' className='hover-effect-about' >Mission & Vision</a>
                    <p><FaChevronRight /></p>
                    <a href='' className='hover-effect-about' >Our Team</a>
                    <p><FaChevronRight /></p>
                    <a href='' className='hover-effect-about' >Values</a>


                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className="h-5 bg-[#138857] rounded-t-xl shadow-2xl" ></div>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className="bg-white shadow-2xl px-10">

                    {/* Identity Section section */}
                    <div>
                        <div className=' pt-20 flex items-center gap-4 '>
                            <img src={logo} className='w-48 h-48 rounded-full object-cover' alt="" />
                            <div>
                                {/* <p className='font-bold text-3xl'>Identity Inclusion</p> */}
                                {/* <p className='text-lg text-orange-500'>Founder of Identity Inclusion</p> */}
                            </div>
                        </div>
                        {/* divider */}
                        <div className=' py-5'>
                            <div className='h-[1px] bg-slate-300'></div>
                        </div>
                        <div className='pb-5'>
                            <p className='text-xl text-justify text-[#636870]'>Identity Inclusion is a development consulting firm that aims to resolve and rectify the approach our institutions and society has towards the marginalized communities. Identity Inclusion started as a project with an aim to helping people with psychosocial disability. Due to mental health stigma stemming from a significant knowledge gap about people with disabilities, they suffer from societal and institutional exclusion. Identity Inclusion helps address and remove the exclusionary practices of institution towards marginalized communities through assessments, awareness raising, capacity building and advocating policy developments. </p>
                        </div>
                    </div>
                    {/* ceo section */}
                    <div id="word_from_ceo">
                        <div className=' pt-10 flex items-center gap-4 '>
                            <img src={ceo} className='w-48 h-48 rounded-full object-cover' alt="" />
                            <div>
                                <p className='font-bold text-xl'>Shamsin Ahmed</p>
                                <p className='text-lg text-orange-500'>Founder of Identity Inclusion</p>
                            </div>
                        </div>
                        {/* divider */}
                        <div className=' py-5'>
                            <div className='h-[1px] bg-slate-300'></div>
                        </div>
                        <div className='pb-5'>
                            <p className='text-xl text-justify text-[#636870]'>Shamsin Ahmed founded Identity Inclusion to identify the needs of people with psychosocial disabilities and break the barriers that affect their capacity to participate in the community, in 2015. Over the years, the organization has evolved under her vision to facilitate diverse support systems that address the social determinants of mental health.
                                Having watched her elder sister being excluded from schools due to her epilepsy and schizophrenia, Shamsin realized that exclusion is both a cause and a consequence of poor mental health. To that end, Identity Inclusion employs a novel strategy to combat stigma by engaging and supporting families, training individuals, particularly the youth with the necessary skills, lobbying for institutional changes, and focusing on developing a more inclusive society.
                                In the early days, Shamsin spent all her savings on running the organization as there was no funds for mental health. In 2018, Shamsin started working as a disability inclusion consultant, which set the cornerstone for Identity Inclusion towards becoming a consultancy firm and also influencing institutional changes.
                                Shamsin trained in Leadership in Mental Health System development under the James P. Grant School of Public health under BRAC University and also completed her MSc. in Global Mental Health and Society from the University of Edinburgh in Scotland, UK. She has received many accolades as a development practitioner and for her work in promoting community mental health she is also an Acumen Fellow and Chevening Scholar.
                            </p>
                        </div>
                    </div>
                    {/*Mission & Vision section */}
                    <div id="mission_vision">
                        <div className='py-5'>
                           <div></div>
                           <div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;