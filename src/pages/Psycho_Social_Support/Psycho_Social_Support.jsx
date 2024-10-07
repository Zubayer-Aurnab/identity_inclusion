import img11 from '../../assets/marquee/img11.jpg';
import img15 from '../../assets/marquee/img15.jpg';
import img30 from '../../assets/marquee/img30.png';
import Title from "../../component/Title/Title";
import first from '../../assets/brochures/first.png'
import Button from '../../component/Button/Button';
import firstPdf from '../../assets/brochures/first.pdf'

const Psycho_Social_Support = () => {

    return (
        <div className="my-20 lg:mb-40  px-2 lg:px-0 lg:w-4/5 mx-auto  ">
            <Title>
                Psycho-Social Support
            </Title>
            <div className="mt-10 text-justify font-text">
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider  ">
                    At Identity Inclusion, we work to break the stigma that isolates people with disabilities by providing psychosocial support and standing up for their equal rights. People with psychosocial disabilities are often treated unfairly and left out of everyday activities. We believe they deserve the same chances and access to opportunities as everyone else. To help with this, we train young people from different educational backgrounds, giving them the skills to support these marginalized groups. We aim to create a society where everyone, no matter their abilities, can live with respect and be included.

                </h1>
                <br />
                {/* <h1 className=" text-xl lg:text-xl font-medium tracking-wider text-[#666b73] ">
                    We organize support groups every month. These are safe confidential spaces for people to come and share their struggles in the presence of mental health professionals. During the Pandemic these support group meetings took place online.

                </h1> */}
            </div>
            {/* image section */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10  mt-10">
                <img loading="lazy" className="h-96 object-cover rounded-md" src={img11} alt="Psycho-Social-Support" />
                <img loading="lazy" className="h-96 object-cover rounded-md lg:w-full" src={img15} alt="Psycho-Social-Support" />
                <img loading="lazy" className="h-96 object-cover rounded-md" src={img30} alt="Psycho-Social-Support" />
            </div>
            <div>
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider mt-8 font-text ">
                    For more information  <a href={firstPdf} download={'first.pdf'} className='underline text-[#128289]'>Click here</a>
                </h1>
            </div>
        </div>
    );
};

export default Psycho_Social_Support;