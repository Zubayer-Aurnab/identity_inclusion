import Title from "../../component/Title/Title";
import img3 from '../../assets/marquee/img3.jpg'
import img10 from '../../assets/marquee/img10.jpg'
import img25 from '../../assets/marquee/img25.jpg'

const Advocacy = () => {
    return (
        <div className="my-20 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Advocacy & Awareness
            </Title>
            <div className="mt-10 text-justify">
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">
                    Besides providing curated mental health support to different segments of the countrys population, Identity Inclusion continuously facilitates support and catalyzes conversations across various institutions in the country. The young population of our country being the most vulnerable to mental health conditions; understanding the complexity of this issue, Identity Inclusion has undertaken several initiatives to create awareness about mental health in educational institutions across the country. We have facilitated online campaigns by and for the youth on Suicide prevention. We have organized workshops and awareness sessions in various institutions, including schools, universities, INGOs, and government and social organizations. We organized community mobilization ❲parents, doctors, advocates and employers❳. We generated dialogues on breaking mental health stigma and promoting social inclusion of persons with psychosocial disabilities with workshops on Psychosocial Disability and Mental Health Awareness on World Mental Health Day and International Day of Persons with Disabilities.

                </h1>
                <br />
                {/* <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] "> */}
                {/* We organize support groups every month. These are safe confidential spaces for people to come and share their struggles in the presence of mental health professionals. During the Pandemic these support group meetings took place online.
                </h1> */}
            </div>
            {/* image section */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10  mt-10">
                <img className="h-96 object-cover rounded-md" src={img3} alt="Psycho-Social-Support" />
                <img className="h-96 object-cover rounded-md" src={img10} alt="Psycho-Social-Support" />
                <img className="h-96 object-cover rounded-md" src={img25} alt="Psycho-Social-Support" />
            </div>
        </div>
    );
};

export default Advocacy;