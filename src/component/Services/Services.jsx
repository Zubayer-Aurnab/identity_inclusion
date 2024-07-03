import advocacy from '../../assets/images/servicesPhoto/advocacy_awareness.png';
import capacity from '../../assets/images/servicesPhoto/psycho_social.png';
import consultancy from '../../assets/images/servicesPhoto/consultancy.png';
import psycho_social from '../../assets/images/servicesPhoto/psycho_social.png';
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
                    description={"Providing direct at-home support services to individuals and families"}
                />
                <Card
                    image={advocacy}
                    title={"Advocacy & Awareness"}
                    description={"Addressing and pushing for policy development and implement to ensure social inclusion"}
                />
                <Card
                    image={consultancy}
                    title={'Consultancy Building'}
                    description={" conducting training and workshops for organizations and individuals on psycho-social disability and support facilitation"}
                />
                <Card
                    image={capacity}
                    title={'Capacity Building '}
                    description={"Collaborating with institutions to develop accessible communication devices"}
                />

            </div>
        </div>
    );
};

export default Services;