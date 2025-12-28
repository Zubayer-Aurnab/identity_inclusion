
import Aos from 'aos';
import { useEffect } from 'react';
import psycho_social from '../../assets/service-Images/alzheimer_5979586.png';
import capacity from '../../assets/service-Images/behavior.png';
import consultancy from '../../assets/service-Images/empathy_17427262.png';
import advocacy from '../../assets/service-Images/self-awareness_12693111.png';
import Card from "../Card/Card";
import Title from "../Title/Title";
import { useImpactHighlightQuery } from '../../Redux/Apis/impactHighlightApi';
const Services = () => {
    const { data, isLoading } = useImpactHighlightQuery({});
    const HighLightData = data?.data;
    console.log(HighLightData)
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className=" mx-auto " >
            <div className="my-4" >
                <Title>
                    Our Services
                </Title>
            </div>
            <div
                data-aos="fade-up" data-aos-duration="2000"
                className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  md:gap-4 mt-20">
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


            <div class="bg-gradient-to-br from-[#e4eaff] to-[#d0f4ff] py-20 my-20">
                <div class="max-w-7xl mx-auto px-6 text-center">
                    <h2 class="text-2xl md:text-4xl font-bold  mb-12 font-header "> ✨Impact Highlights</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


                        <div
                            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                            class="bg-white backdrop-blur-md rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                            <div class="text-5xl font-bold text-blue-600 font-header">{HighLightData?.psychosocial_supporters_trained || 0}+</div>
                            <p class="mt-3 text-gray-700 font-medium">Psychosocial Supporters Trained</p>
                        </div>


                        <div
                            data-aos="fade-up" data-aos-duration="1000"
                            data-aos-delay="200"
                            class="bg-white backdrop-blur-md rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                            <div class="text-5xl font-bold font-header text-orange-500">{HighLightData?.advocacy_provided || 0}+</div>
                            <p class="mt-3 text-gray-700 font-medium">Advocacy Provided</p>
                        </div>


                        <div
                            data-aos="fade-up" data-aos-duration="1000"
                            data-aos-delay="300"
                            class="bg-white backdrop-blur-md rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                            <div class="text-5xl font-bold text-yellow-500 font-header">{HighLightData?.institutional_consultancies || 0}+</div>
                            <p class="mt-3 text-gray-700 font-medium">Institutional Consultancies</p>
                        </div>


                        <div
                            data-aos="fade-up" data-aos-duration="1000"
                            data-aos-delay="400"
                            class="bg-white backdrop-blur-md rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                            <div class="text-5xl font-bold text-green-600 font-header">{HighLightData?.organizations_empowered || 0}+</div>
                            <p class="mt-3 text-gray-700 font-medium">Organizations Empowered</p>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Services;