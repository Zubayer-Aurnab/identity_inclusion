
import Aos from 'aos';
import { useEffect } from 'react';
import psycho_social from '../../assets/service-Images/alzheimer_5979586.png';
import capacity from '../../assets/service-Images/behavior.png';
import consultancy from '../../assets/service-Images/empathy_17427262.png';
import advocacy from '../../assets/service-Images/self-awareness_12693111.png';
import Card from "../Card/Card";
import Title from "../Title/Title";
const Services = () => {
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

        </div>
    );
};

export default Services;