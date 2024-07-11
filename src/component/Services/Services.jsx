
import psycho_social from '../../assets/images/servicesPhoto/psycho_soicial_2.jpg.webp'
import advocacy from '../../assets/images/servicesPhoto/advocacy_2.jpg'
import consultancy from '../../assets/images/servicesPhoto/consultancy_2.jpg'
import capacity from '../../assets/images/servicesPhoto/capacity_2.jpg'
import Card from "../Card/Card";
import Title from "../Title/Title";

const Services = () => {
    return (
        <div className="px-2 lg:px-0 lg:w-4/5 mx-auto my-24" >
            <div className="my-10" >
                <Title>
                    Our Services
                </Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
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