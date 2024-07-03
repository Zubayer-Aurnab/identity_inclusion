import Title from "../../component/Title/Title";
import img11 from '../../assets/marquee/img11.jpg'
import img15 from '../../assets/marquee/img15.jpg'
import img30 from '../../assets/marquee/img30.png'
import table from '../../assets/marquee/table.png'
import Aos from "aos";
import { useEffect } from "react";

const Psycho_Social_Support = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="my-20 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Psycho-Social-Support
            </Title>
            <div className="mt-10 text-justify">
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">
                    Identity Inclusion provides direct Psycho-social Support - that is - we address the ongoing psychological and social needs of individuals. It includes all the services a person needs in order to lead a fulfilling and productive lifestyle. Our trained Psycho-social Supporters assist individuals and their families to facilitate their participation in society.
                </h1>
                <br />
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">
                    We have been providing intensive psychosocial support for 5 years to 6 persons, with schizophrenia, cerebral palsy, epilepsy and autism respectively, and their family members have been provided with referrals, advocacy and soft skills development. Our first clients has also been admitted in a school that will address their education and therapy needs.
                </h1>
            </div>
            {/* image section */}
            <div className="flex flex-col lg:flex-row  gap-5 lg:gap-0 justify-between  mt-10">
                <img className="h-96 object-cover rounded-md" src={img11} alt="Psycho-Social-Support" />
                <img className="h-96 object-cover rounded-md" src={img15} alt="Psycho-Social-Support" />
                <img className="h-96 object-cover rounded-md" src={img30} alt="Psycho-Social-Support" />
            </div>

            <div data-aos="fade-right" data-aos-duration="1000"  className="mt-10">
                <Title>
                    1.
                </Title>
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] mt-10 text-justify">
                    We organize Support Group Meetings every month since 2015. The  Support group meetings are safe confidential spaces conducted by a  Mental Health professional, where the participants are persons with  psychosocial disabilities, their families and persons seeking referrals.

                </h1>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className="mt-10">
                <Title>
                    2.
                </Title>
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] mt-10 text-justify">
                    We have been providing intensive psycho-social support for 5 years to 6  persons, with schizophrenia, cerebral palsy, epilepsy and autism  respectively, and their family members have been provided with  referrals, advocacy and soft skills development. Our first clients has also  been admitted in a school that will address their education and therapy  needs.
                </h1>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className="mt-10">
                <Title>
                    3.
                </Title>
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] mt-10 text-justify">
                    We worked with schools on psycho-social skills and institutions that  work with vulnerable children. We carried out a needs assessment of  the LEEDO Peace home- a home for 50 rescued street children to  understand their psychosocial situation. We then developed a training  for their care takers to provide psychosocial support.
                </h1>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className="mt-10 ">
                <Title>
                    4.
                </Title>
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] mt-10 text-justify ">
                    During the Corona virus pandemic we have joined the Bangladesh  Mental Health Network to provide free online counseling services to  people.
                </h1>
                <div>
                    <img className="" src={table} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Psycho_Social_Support;