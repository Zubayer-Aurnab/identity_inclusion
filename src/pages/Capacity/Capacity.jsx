import Title from "../../component/Title/Title";
import img18 from '../../assets/marquee/img18.jpg'
import img24 from '../../assets/marquee/img24.jpg'
import img27 from '../../assets/marquee/img27.jpg'
const Capacity = () => {
    return (
        <div className="my-20 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Capacity Building
            </Title>
            <div className="mt-10 text-justify">
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">We have certified trainers who conduct workshops for mainstream organizations and individuals. We have conducted workshops in different institutions and organizations. We have organized workshops and awareness sessions in 15 institutions so far, including schools, universities, INGOs, government and social organizations. We organized community mobilization (parents, doctors, advocates and employers) and generate dialogues on breaking mental health stigma and promoting social inclusion of persons with psycho-social disabilities with workshops on Psycho-social Disability and Mental Health Awareness on the occasion of World Mental Health Day and International Day of Persons with Disabilities. Our Capacity Building component is based on our specialized curriculum developed in partnership with the Department of Educational and Counseling Psychology, Dhaka University, which we use to provide workshops and training to various individuals and institutions on Psychosocial Support and Communication Skills, Rights of Persons with Mental illnesses and Disabilities, Bio power. We have helped 8 youth and social institutions in capacity building and have reached a total of 589 people from these institutions so far.
                </h1>
                {/* <br />
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">
                    Since 2019 we have worked with 4 major NGOs (BRAC, Practical Action and UCEP and WaterAid) in Bangladesh to ensure institutions are inclusive. We developed and implemented disability inclusion strategies for BRAC and UCEP Bangladesh. The strategies were developed in consultation with Disabled People’s Organizations, beneficiaries with disabilities and in the light of National Laws on disability, the SDGs and the Disability Inclusive Development approach. Recently we collaborated with Practical Action in developing a national Menstrual Hygiene Management (MHM) Strategy for Bangladesh, which was funded by UNICEF.
                </h1> */}
            </div>
            {/* image section */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10  mt-10">
                <img loading="lazy" className="h-96 object-cover rounded-md w-full" src={img18} alt="Psycho-Social-Support" />
                <img loading="lazy" className="h-96 object-cover rounded-md w-full" src={img24} alt="Psycho-Social-Support" />
                <img loading="lazy" className="h-96 object-cover rounded-md w-full" src={img27} alt="Psycho-Social-Support" />
            </div>
        </div>
    );
};

export default Capacity;