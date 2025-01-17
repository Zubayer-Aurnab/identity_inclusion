import Aos from 'aos';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import mission from '../../../public/mission.json';
import values from '../../../public/values.json';
import vision from '../../../public/vision.json';
import ceo from '../../assets/images/ceo.png';
import logo from '../../assets/images/identity inclusion logo.png';
import TeamMembers from '../../component/TeamMembers/TeamMembers';
import julian from '../../assets/images/TeamMembers/Julian Francis.jpg'
import wahid from '../../assets/images/TeamMembers/Dr. Syed Shabab Wahid.jpg'
import umme from '../../assets/images/TeamMembers/Umme Kawser (2).jpg'
import dip from '../../assets/images/TeamMembers/Dr M. Tasdik Hassan.jpg'
import Sudipa from '../../assets/images/TeamMembers/Sudipa Sarkar.jpg'
import kamrul from '../../assets/images/TeamMembers/Kamrul Hassan (1).jpg'
import './AboutUs.css';
import Title from '../../component/Title/Title';
import Team from '../../component/Team/Team';
const AboutUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>

            <div className="h-[45vh] bg-gradient-to-b from-[#c0e1bd] to-[#0d7f88]"></div>

            <div className="relative bottom-64 px-5 lg:px-0 lg:w-[60%] mx-auto ">
                <h1 className='text-3xl md:text-3xl lg:text-6xl  text-white font-medium mb-7 font-header'>About Identity Inclusion</h1>
                <div className='flex items-center gap-1 text-white mb-2 font-text' >
                    <a href='#mission_vision' className='hover-effect-about text-xs lg:text-base' >Mission & Vision</a>
                    <p><FaChevronRight /></p>
                    <a href='#word_from_ceo' className='hover-effect-about text-xs lg:text-base' >About The Founder</a>
                    <p><FaChevronRight /></p>
                    <a href='#our_team' className='hover-effect-about text-xs lg:text-base' >Our Team</a>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className="h-5 bg-[#118189] rounded-t-xl shadow-2xl" ></div>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className="bg-white shadow-2xl px-10">

                    {/* Identity Section section */}
                    <div>
                        <div className=' pt-20 flex items-center gap-4 '>
                            <img loading="lazy" src={logo} className='w-48 h-48 rounded-full object-cover' alt="" />
                        </div>
                        {/* divider */}
                        <div className=' py-5'>
                            <div className='h-[1px] bg-slate-300'></div>
                        </div>
                        <div className='pb-5'>
                            <p className='md:text-xl text-justify  font-text '>Identity Inclusion is a development consulting firm that aims to resolve and rectify the approach our institutions and society has towards the marginalized communities. Identity Inclusion started as a project with an aim to helping people with psychosocial disability. Due to mental health stigma stemming from a significant knowledge gap about people with disabilities, they suffer from societal and institutional exclusion. Identity Inclusion helps address and remove the exclusionary practices of institution towards marginalized communities through assessments, awareness raising, capacity building and advocating policy developments. </p>
                        </div>
                    </div>
                    {/*Mission & Vision section */}
                    <div id="mission_vision" className='mt-'>
                        <div className='py-5 '>
                            {/* mission */}
                            <div data-aos="fade-up"
                                data-aos-duration="1000" className='mt-10'>
                                <div className='flex flex-col p-2 border-4 border-[#118088] rounded-lg justify-center items-center text-center' >
                                    <div>
                                        <Lottie
                                            className="w-40 mb-2"
                                            animationData={mission} />
                                    </div>
                                    <h1 className='text-2xl font-bold font-header '>Mission</h1>
                                    <p className='text-xl   font-text'>

                                        Enable the full potential of excluded individuals by promoting best practices for inclusion through youth leadership and institutional change.

                                    </p>
                                </div>
                            </div>
                            {/* vision */}
                            <div
                                className='mt-10'
                                data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className='flex flex-col p-2 border-4 border-[#118088] rounded-lg justify-center items-center text-center'>
                                    <div>
                                        <Lottie
                                            className="w-64 mb-2"
                                            animationData={vision} />
                                    </div>
                                    <h1 className='text-2xl font-bold font-header'>Vision</h1>
                                    <p className='text-xl   font-text'>
                                        To create inclusive societies that realize the full potential of excluded individuals through institutional and systemic change.

                                    </p>
                                </div>
                            </div>
                            {/* values */}
                            <div
                                className='mt-10'
                                data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className='flex flex-col p-2 border-4 border-[#118088] rounded-lg justify-center items-center text-center'>
                                    <div>
                                        <Lottie
                                            className="w-40 mb-2"
                                            animationData={values} />
                                    </div>
                                    <h1 className='text-2xl font-bold mb-2 font-header'>Values</h1>
                                    <p className='text-xl font-bold   font-text'>
                                        Inclusion, Integrity, Dignity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ceo section */}
                    <div id="word_from_ceo">
                        <div className=' pt-10 flex items-center gap-4 '>
                            <img loading="lazy" src={ceo} className='w-32 h-32 md:w-48 md:h-48 rounded-full object-cover' alt="" />
                            <div>
                                <p className='font-bold md:text-xl font-header'>Shamsin Ahmed</p>
                                <p className='md:text-lg text-[#118088] font-text '>Founder of Identity Inclusion</p>
                            </div>
                        </div>
                        {/* divider */}
                        <div className=' py-5'>
                            <div className='h-[1px] bg-slate-300'></div>
                        </div>
                        <div className='pb-5'>
                            <p
                                style={{
                                    wordSpacing: "0.2rem"
                                }}
                                className='md:text-xl text-justify text-black font-text'>Shamsin Ahmed founded Identity Inclusion in 2015 to address the needs of people with psychosocial disabilities and break barriers limiting their community participation. Inspired by her elder sister’s exclusion from schools due to epilepsy and schizophrenia, Shamsin realized exclusion both causes and results from poor mental health.
                                In the early days, Shamsin spent all her savings on running the organization as there was no funds for mental health. In 2018, Shamsin started working as a disability inclusion consultant, which set the cornerstone for Identity Inclusion towards becoming a consultancy firm and also influencing institutional changes.
                                Under her leadership, Identity Inclusion combats stigma by supporting families, training youth, advocating for institutional change, and fostering inclusivity. Initially self-funded, the organization evolved into a consultancy in 2018, driven by Shamsin’s work as a disability inclusion consultant.
                                <br />
                                <br />
                                Shamsin holds a certification in Leadership in Mental Health System Development from BRAC University and an MSc in Global Mental Health and Society from the University of Edinburgh. A Chevening Scholar and Acumen Fellow, she has earned numerous accolades, including the bti and The Daily Star Stellar Woman Award for her contributions to mental health and disability inclusion.
                            </p>
                        </div>
                    </div>
                    {/* Our Team section */}
                    <div id='our_team' className=' my-10 md:my-20'>
                        <Title>Advisors</Title>
                    </div>
                    {/* Advisors */}
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <TeamMembers
                            name={"Julian Francis"}
                            photo={julian}
                            title={"Founder"}
                            description='Born in 1945 in London, gained early insight into disability through a brother with Down’s Syndrome. In 1971, coordinated aid for 600,000 refugees during the Bangladesh Liberation War with Oxfam.In 1985, moved to Bangladesh with CUSO and played a key role in disability advocacy, helping establish NFOWD, drafting the first Bangladesh Disability Policy, and pushing for disability-inclusive funding.Now an independent consultant, writes on development, disability, and Liberation War history. Received the “Friends of Liberation War Honour” in 2012.'
                        />
                        <TeamMembers
                            name={"Dr. Shabab Wahid"}
                            photo={wahid}
                            description='Dr. Shabab Wahid is an Assistant Professor of Global Health specializing in mental health research in low- and middle-income countries (LMICs). His work focuses on cultural influences on mental illness, community-based interventions, and the impact of climate factors on mental health.Dr. Wahid leads studies on cultural adaptation of mental health tools through the ALIVE project in Colombia, Nepal, and South Africa, and stigma reduction via the INDIGO Partnership in China, Ethiopia, India, Nepal, and Tunisia. He has also conducted research on adolescent depression in Bangladesh, Brazil, Nepal, Nigeria, and the UK.'
                        />
                        <TeamMembers
                            name={"Umme Kawser"}
                            photo={umme}
                            description='Umme Kawser is an Assistant Professor at the University of Dhaka, specializing in educational psychology. Currently pursuing a Ph.D. in Family and Couple Therapy at the University of Minnesota, her research focuses on relationships, including divorce, marriage, and couple interventions.Umme is passionate about fostering healthier connections, enriching lives, and strengthening communities. Actively involved in mental health advocacy through Identity Inclusion, she also enjoys exploring cultures and engaging in community service. Her journey reflects determination, compassion, and a commitment to advancing psychology.'
                        />
                        <TeamMembers
                            name={"Dr. Tasdik Dip"}
                            photo={dip}
                            description="Dr. Tasdik; a mental health researcher and a medical doctor, has received various awards and honors, including the Chancellor' s Award for academic excellence in his Master's in Public Health course. He has a postgraduate diploma in Disaster Management from the University of Dhaka. Dr. Tasdik developed a digital mental health intervention for adults in Bangladesh as his PhD project at Monash University, Australia. Tasdik was awarded the prestigious Commonwealth Scholarship to study Global Mental Health in London. He has been recognized globally, receiving awards such as the New Voices in Global Health Award and the Lancet Prize. Tasdik has published over 95 scientific papers and contributed to a UNHCR "
                        />
                        <TeamMembers
                            name={"Sudipa Sarker"}
                            photo={Sudipa}
                            description='Sudipa Sarker is an educator and researcher with 15+ years of experience in teaching, research, and consulting. Currently a lecturer at Edinburgh Napier University’s Business School, she earned the Prime Minister Gold Medal for her BSc in Industrial Production Engineering from BUET in 2006.Her academic and professional journey spans Bangladesh, Singapore, Sweden, Italy, Denmark, Finland, and Scotland. At Aarhus University, she secured 1.3 million DKK for her research on supply chain competitiveness and 70,000 DKK for developing a supply chain management MOOC.Sudipa has contributed to European Horizon 2020 projects and led the Health Emergency Response in Pandemics MOOC on Future Learn. In 2023, she received £7,500 from the Chartered Institute of Logistics and Transport for research on gender mainstreaming in logistics. Her work is published in peer-reviewed international journals.
                        '
                        />
                        <TeamMembers
                            name={"Kamrul Hassan"}
                            photo={kamrul}
                            description="Kamrul Hassan has been advising Identity Inclusion since August 2023, focusing on enhancing research and consulting capacities. With 17+ years of experience, Kamrul is a self-taught researcher, trainer, and mentor specializing in business models, behavior change strategies, development.His career began in 2007 at Bangladesh’s largest telecom, where he gained expertise in negotiation, project management, and financial analysis. After six years in corporate roles including leading deployment at Augere, he transitioned to the development sector as a Field Team Leader at IDE Bangladesh.In 2014, Kamrul co-founded Consiglieri Private Limited, where he oversees operations, finance, and knowledge management while leading facilitation projects, qualitative research, training development, and strategy formulation. Holding a Bachelor’s in Engineering and an MSc in Economics, Kamrul is driven by curiosity and a passion for learning." />
                    </div>
                    {/* Team members */}
                    <div id='team' className=' my-4 md:my-20'>
                        <Title>Team Members</Title>
                    </div>
                    <div className='pb-10'>
                        <Team />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;