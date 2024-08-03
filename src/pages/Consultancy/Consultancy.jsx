import Title from "../../component/Title/Title";
import img6 from '../../assets/marquee/img6.jpg'
import img14 from '../../assets/marquee/img14.jpg'
import img23 from '../../assets/marquee/img23.jpg'

const Consultancy = () => {
    return (
        <div className="my-20 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Consultancy
            </Title>
            <div className="mt-10 text-justify">
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">
                    Systemic and social injustices greatly influence rising mental health conditions and exacerbate disability in countries like Bangladesh. Exclusion is both a cause and consequence of bad mental health hence Identity Inclusion helps address and remove the exclusionary practices of institutions towards marginalized communities through assessments, awareness raising, capacity building and advocating policy developments in order to bring institutional and systemic change in our society. We provide technical support and guidance to development organizations, NGOs, Government and Corporate organizations and Educational and youth-based organizations to become disability and mental health inclusive.  As there is a dearth of funds for mental health interventions the revenues from the consultation services are used to run operational costs for mental health services.
                </h1>
                <br />
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">
                    Since 2019 we have worked with 4 major NGOs (BRAC, Practical Action and UCEP and WaterAid) in Bangladesh to ensure institutions are inclusive. We developed and implemented disability inclusion strategies for BRAC and UCEP Bangladesh. The strategies were developed in consultation with Disabled People’s Organizations, beneficiaries with disabilities and in the light of National Laws on disability, the SDGs and the Disability Inclusive Development approach. Recently we collaborated with Practical Action in developing a national Menstrual Hygiene Management (MHM) Strategy for Bangladesh, which was funded by UNICEF.
                </h1>
            </div>
            {/* image section */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10  mt-10">
                <img loading="lazy" className="h-96 object-cover rounded-md" src={img6} alt="Psycho-Social-Support" />
                <img loading="lazy" className="h-96 object-cover rounded-md" src={img14} alt="Psycho-Social-Support" />
                <img loading="lazy" className="h-96 object-cover rounded-md" src={img23} alt="Psycho-Social-Support" />
            </div>
        </div>
    );
};

export default Consultancy;