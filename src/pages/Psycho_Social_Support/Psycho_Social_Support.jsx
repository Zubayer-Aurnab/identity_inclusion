import img11 from '../../assets/marquee/img11.jpg';
import img15 from '../../assets/marquee/img15.jpg';
import img30 from '../../assets/marquee/img30.png';
import Title from "../../component/Title/Title";

const Psycho_Social_Support = () => {
  
    return (
        <div className="my-20 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Psycho-Social-Support
            </Title>
            <div className="mt-10 text-justify">
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">
                    We recruit youth volunteers and train them to provide psychosocial support every year. We build their capacity in counseling skills and taking a right based approach to achieving inclusion. In 2016 we received the award of a small grant from the Edward M. Kennedy Center in Dhaka. With that, Identity Inclusion trained 100 youth psychosocial supporters in 4 major universities in Dhaka, Sylhet, Chittagong, and Khulna. Moreover, we have reached out to over 2000 youths through workshops, training and awareness programs on mental health and emotional hygiene. The trained volunteers are then engaged to provide support to individuals with psychosocial disability. This is done by helping to enhance their capacity to adapt, social interactions and productive lifestyle. This improves not just the lives of the individuals but also their families and community.

                </h1>
                <br />
                <h1 className=" text-xl lg:text-2xl font-semibold tracking-wider text-[#666b73] ">
                    We organize support groups every month. These are safe confidential spaces for people to come and share their struggles in the presence of mental health professionals. During the Pandemic these support group meetings took place online.

                </h1>
            </div>
            {/* image section */}
            <div className="flex flex-col lg:flex-row  gap-5 lg:gap-0 justify-between  mt-10">
                <img className="h-96 object-cover rounded-md" src={img11} alt="Psycho-Social-Support" />
                <img className="h-96 object-cover rounded-md" src={img15} alt="Psycho-Social-Support" />
                <img className="h-96 object-cover rounded-md" src={img30} alt="Psycho-Social-Support" />
            </div>
        </div>
    );
};

export default Psycho_Social_Support;