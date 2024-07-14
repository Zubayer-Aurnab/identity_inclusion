
import psycho_social from '../../assets/images/servicesPhoto/psycho_soicial_2.jpg.webp'
import advocacy from '../../assets/images/servicesPhoto/advocacy_2.jpg'
import consultancy from '../../assets/images/servicesPhoto/consultancy_2.jpg'
import capacity from '../../assets/images/servicesPhoto/capacity_2.jpg'
import Card from "../Card/Card";
import Title from "../Title/Title";
// import img26 from '../../assets/marquee/img26.jpg'
import img3 from '../../assets/marquee/img3.jpg'
import CountUp from 'react-countup';
import { useEffect } from 'react';
import Aos from 'aos';
const Services = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="px-2 lg:px-0 lg:w-4/5 mx-auto my-24" >
            <div className="my-10" >
                <Title>
                    Our Services
                </Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  md:gap-4">
                <Card
                    path={"/psycho-social-support"}
                    image={psycho_social}
                    title={"Psycho-Social Support"}
                    description={"Providing direct at-home moral, physical and psychological support to individuals with severe disabilities or mental health conditions and their families."}
                />
                <Card
                    path={'/advocacy'}
                    image={advocacy}
                    title={"Advocacy & Awareness"}
                    description={" Addressing and promoting policy development and implementation to ensure social inclusion through dialogues, media campaigns, webinars etc"}
                />
                <Card
                    path={"/consultancy"}
                    image={consultancy}
                    title={'Consultancy '}
                    description={"Provide advice and technical support to promote and develop inclusive policies, leadership, infrastructure and programs for corporate, private and development organizations"}
                />
                <Card
                    path={'/capacity'}
                    image={capacity}
                    title={'Capacity Building '}
                    description={" Conducting training, workshops for organizations and individuals on concepts of mental health, disability inclusion and psychosocial support skills"}
                />

            </div>
            <div className='mt-10'>
                <div
                    className="hero lg:min-h-[55vh]"
                    style={{
                        backgroundImage: `url(${img3})`,
                        backgroundAttachment: 'fixed',
                    }}>
                    <div className="hero-overlay bg-opacity-65"></div>
                    <div style={{ textShadow: "2px 2px black" }} className="hero-content  text-[white] ">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className=" grid lg:grid-cols-2 xl:grid-cols-4 gap-20 lg:gap-10 py-10 lg:py-0 text-center">
                            <div className='flex flex-col items-center '>
                                <h1 className='text-2xl lg:text-3xl xl:font-semibold '> Trained Psychosocial Supporters</h1>
                                <div className='text-4xl font-semibold mt-10'>
                                    <span className='bg-[#5b9ad58f] p-2 rounded-lg'> <CountUp enableScrollSpy={true} end={100} />+</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-2xl lg:text-3xl xl:font-semibold'> Provide Advocacy to Institutions</h1>
                                <div className='text-4xl font-semibold mt-10'>
                                    <span className='bg-[#ed7c319a] p-2 rounded-lg'> <CountUp enableScrollSpy={true} end={15} />+</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-2xl lg:text-3xl xl:font-semibold'> Provide Consultancy to Institutions</h1>
                                <div className='text-4xl font-semibold mt-10'>
                                    <span className='bg-[#ffbf009f] p-2  rounded-lg'> <CountUp enableScrollSpy={true} end={10} />+</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-2xl lg:text-3xl xl:last:font-semibold'> Capacity Building to institutions</h1>
                                <div className='text-4xl font-semibold mt-10'>
                                    <span className='bg-[#44c46f9a] p-2 rounded-lg'> <CountUp enableScrollSpy={true} end={8} />+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;