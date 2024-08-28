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
                <h1 className='text-2xl md:text-3xl lg:text-6xl  text-white font-medium mb-7 font-[Roboto]'>About Identity Inclusion</h1>
                <div className='flex items-center gap-1 text-white mb-2 font-[Ubuntu]' >
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
                            <p className='md:text-xl text-justify text-[#636870] font-[Ubuntu] '>Identity Inclusion is a development consulting firm that aims to resolve and rectify the approach our institutions and society has towards the marginalized communities. Identity Inclusion started as a project with an aim to helping people with psychosocial disability. Due to mental health stigma stemming from a significant knowledge gap about people with disabilities, they suffer from societal and institutional exclusion. Identity Inclusion helps address and remove the exclusionary practices of institution towards marginalized communities through assessments, awareness raising, capacity building and advocating policy developments. </p>
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
                                    <h1 className='text-2xl font-bold font-[Roboto] '>Mission</h1>
                                    <p className='text-xl  text-[#636870] font-[Ubuntu]'>

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
                                    <h1 className='text-2xl font-bold font-[Roboto]'>vision</h1>
                                    <p className='text-xl  text-[#636870] font-[Ubuntu]'>
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
                                    <h1 className='text-2xl font-bold mb-2 font-[Roboto]'>Values</h1>
                                    <p className='text-xl font-bold  text-[#636870] font-[Ubuntu]'>
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
                                <p className='font-bold md:text-xl font-[Roboto]'>Shamsin Ahmed</p>
                                <p className='md:text-lg text-[#118088] font-[Ubuntu] '>Founder of Identity Inclusion</p>
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
                                className='md:text-xl text-justify text-[#636870]   font-[Ubuntu]'>Shamsin Ahmed founded Identity Inclusion to identify the needs of people with psychosocial disabilities and break the barriers that affect their capacity to participate in the community, in 2015. Over the years, the organization has evolved under her vision to facilitate diverse support systems that address the social determinants of mental health.
                                Having watched her elder sister being excluded from schools due to her epilepsy and schizophrenia, Shamsin realized that exclusion is both a cause and a consequence of poor mental health. To that end, Identity Inclusion employs a novel strategy to combat stigma by engaging and supporting families, training individuals, particularly the youth with the necessary skills, lobbying for institutional changes, and focusing on developing a more inclusive society.
                                In the early days, Shamsin spent all her savings on running the organization as there was no funds for mental health. In 2018, Shamsin started working as a disability inclusion consultant, which set the cornerstone for Identity Inclusion towards becoming a consultancy firm and also influencing institutional changes.
                                Shamsin trained in Leadership in Mental Health System development under the James P. Grant School of Public health under BRAC University and also completed her MSc. in Global Mental Health and Society from the University of Edinburgh in Scotland, UK. She has received many accolades as a development practitioner and for her work in promoting community mental health she is also an Acumen Fellow and Chevening Scholar.She received ‘bti and The Daily Star;  ‘Stellar Woman’ award in the Development category for her work in addressing disability and mental health through the development sector.
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
                            description='Born in 1945, in post-war London had an elder brother had Down’s Syndrome, so learnt about disability from early age. In 1971 was involved with Oxfam’s refugee relief programme in Eastern India when 10 million Bangladeshis fled the genocide in Bangladesh (then East Pakistan). Coordinated relief programme for 600,000 women, men and children in camps all around the border area of India and Bangladesh. In 1985 came to Bangladesh with Canadian NGO, CUSO, and became involved with coordination of different groups of persons with different disabilities. Involved with setting up NFOWD Bangladesh, encouraging other disability NGOs, and writing the first Bangladesh Disability Policy and Legislation. Have tirelessly pressurized donors and NGOs alike to put at least 10% of their funds into disability. Has lived in Bangladesh for 25 years and now works as an independent consultant. Writes regularly in the media on development and disability issues and the history related to the Liberation War. Honored in 2012 by the Government of Bangladesh with the “Friends of Liberation War Honour” award.'
                        />
                        <TeamMembers
                            name={"Dr. Shabab Wahid"}
                            photo={wahid}
                            description='Dr. Shabab Wahid is an Assistant Professor at the Department of Global Health, School of Health. He is a global mental health expert and a mixed-methods specialist, focusing on psychiatric and behavioral research, applying ethnographic methods to understand cultural influences on mental illness, and developing and evaluating community-based interventions targeting mental illness in low- and middle-income countries (LMIC). Dr. Wahid’s recent work has examined the association between adverse mental health outcomes and climate-related factors such as elevated temperatures, humidity and air pollutants. In addition, he conducts mixed-methods research on cultural adaption of mental health measurement instruments and neuropsychological tasks through the ALIVE project in Colombia, Nepal and South Africa; and reducing mental illness stigma and discrimination through the INDIGO Partnership project in China, Ethiopia, India, Nepal and Tunisia. He previously led research efforts in Bangladesh, Brazil, Nepal, Nigeria, and the UK examining the culturally salient explanatory models and idioms of distress connected to depression in adolescence and young adulthood. '
                        />
                        <TeamMembers
                            name={"Umme Kawser"}
                            photo={umme}
                            description='Umme Kawser is a dedicated therapist and academic, she has made significant strides in the field of psychology, with a specialization in educational psychology. Currently, Umme serves as an Assistant Professor at the prestigious University of Dhaka, where she imparts her knowledge and expertise to aspiring minds. Umme is pursuing her Ph.D. in Family and Couple Therapy at the renowned University of Minnesota. Her research primarily focuses on vital aspects of human relationships, such as divorce, marriage, and couple interventions. Through her work, she aims to foster healthier and happier connections between individuals, enriching lives and creating stronger bonds within families and communities. Always open to collaboration and new perspectives, Umme strives to expand her understanding and contribute positively to the world of psychology. Beyond her professional accomplishments, Umme finds joy in exploring diverse cultures, engaging in community service, and advocating for mental health awareness. Hence her involvement with Identity Inclusion. Her journey as an Assistant Professor and Ph.D. candidate at the University of Minnesota stands as a testament to her determination, perseverance, and compassionate spirit. '
                        />
                        <TeamMembers
                            name={"Dr. Tasdik Dip"}
                            photo={dip}
                            description="Dr. Tasdik; a mental health researcher and a medical doctor, has received various awards and honors, including the Chancellor' s Award for academic excellence in his Master's in Public Health course. He has a postgraduate diploma in Disaster Management from the University of Dhaka. Dr. Tasdik developed a digital mental health intervention for adults in Bangladesh as his PhD project at Monash University, Australia. Tasdik was awarded the prestigious Commonwealth Scholarship to study Global Mental Health in London. He has been recognized globally, receiving awards such as the New Voices in Global Health Award and the Lancet Prize. Tasdik has published over 95 scientific papers and contributed to a UNHCR "
                        />
                        <TeamMembers
                            name={"Sudipa Sarker"}
                            photo={Sudipa}
                            description='Sudipa Sarker is an educator, researcher, and advisor with over 15 years of experience in teaching, conducting research, and consulting across various industries. She currently serves as a lecturer at the business school of Edinburgh Napier University. In 2006, she was awarded the Prime Minister Gold Medal for her Bachelor of Science in Industrial Production Engineering from the Bangladesh University of Engineering and Technology. Besides Bangladesh, she has pursued studies and professional opportunities in Singapore, Sweden, Italy, Denmark, Finland, and Scotland. At Aarhus University, she received 1.3 million Danish Kronor from Aarhus Universitets Forskningsfond (AUFF) for her research project entitled “Defining and Measuring Supply Chain Competitiveness in Danish Multinational Corporations”. She has also been awarded 70,000 DKK for developing digital materials for a massive open online course (MOOC) on supply chain management. She has worked on multiple European Horizon 2020 projects and led the development of the MOOC titled " Health Emergency Response in Pandemics," which is now live on the Future Learn Platform. In 2023, she received 7500 GBP for her research on Gender Mainstreaming in Logistics and Supply Chain Management from the Chartered Institute of Logistics and Transport, United Kingdom. She has published in multiple peer-reviewed international journals.
                        '
                        />
                        <TeamMembers
                            name={"Kamrul Hassan"}
                            photo={kamrul}
                            description="Kamrul Hassan has been providing advisory supports to Identity Inclusion since August 2023 mainly around research and consulting capacity enhancement. Having 17+ years of learning experience, Kamrul is a self-taught researcher, training facilitator, and mentor in designing viable business models and behavior change strategies. He has a unique blend of project design and management experiences both in corporate environment and in the development sector. He has led numerous projects and research ranging from market system development to gender inclusion. Kamrul has developed a few business models, sustainability roadmap, marketing strategies, behavior change modules, curriculum and training modules for social enterprises, CBA, NGOs and development partners. Having a Bachelor’s in Engineering, Kamrul started his career at the largest telecom in Bangladesh, in 2007 and served the company for more than four years in various capacities. During his tenure there, he has learned mostly negotiation, project design & management, Business Process Reengineering, and financial feasibility analysis. Later, Kamrul joined another technology company (Augere) and led the Deployment team. He learned people management, operations management, vendor management and strategic procurement. After serving the corporate sectors for more than 6 years in different capacities, he shifted his career in the development sector by joining IDE Bangladesh as a Field Team Leader. Kamrul started off as an entrepreneur by co-founding Consiglieri Private Limited in 2014. Since the inception of Consiglieri, Kamrul has been overseeing the Operations, Finance and Knowledge Management. Apart from the day-to-day supervision at Consiglieri, he led facilitation projects, qualitative research, developing modules and facilitating trainings, HCD research, WASH interventions, and strategy formulation assignments. Kamrul is obsessed about knowing new things and asking basic questions that are usually taken for granted. Kamrul also has an MSc in Economics. "
                        />
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