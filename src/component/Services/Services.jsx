import Card from "../Card/Card";
import Title from "../Title/Title";
import psycho_social_s from '../../assets/images/Psycho-socail-support.png'

const Services = () => {
    return (
        <div className="px-2 lg:px-0 lg:w-4/5 mx-auto my-24" >
            <div className="my-10" >
                <Title>
                    Our Services
                </Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card image={psycho_social_s} title={"Psycho-Social Support"} description={"Providing direct at-home support services to individuals and families"} />
                <Card image={psycho_social_s} title={"Advocacy & Awareness"} description={"Addressing and pushing for policy development and implement to ensure social inclusion"} />
                <Card image={psycho_social_s} title={'Consultancy Building'} description={" conducting training and workshops for organizations and individuals on psycho-social disability and support facilitation"} />
                <Card image={psycho_social_s} title={'Capacity Building Building'} description={"Collaborating with institutions to develop accessible communication devices"} />

            </div>
        </div>
    );
};

export default Services;