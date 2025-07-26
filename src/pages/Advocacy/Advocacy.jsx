import Title from "../../component/Title/Title";
import img3 from '../../assets/marquee/img3.jpg'
import img10 from '../../assets/marquee/img10.jpg'
import img25 from '../../assets/marquee/img25.jpg'
import second from '../../assets/brochures/second.png'
import secondPdf from '../../assets/brochures/second.pdf'
import Button from "../../component/Button/Button";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const Advocacy = () => {
    return (
        <div className="my-20 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Advocacy & Awareness
            </Title>
            <div className="mt-10 text-justify font-text">
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider ">
                    Besides providing curated mental health support to different segments of the countrys population, Identity Inclusion continuously facilitates support and catalyzes conversations across various institutions in the country. The young population of our country being the most vulnerable to mental health conditions; understanding the complexity of this issue, Identity Inclusion has undertaken several initiatives to create awareness about mental health in educational institutions across the country. We have facilitated online campaigns by and for the youth on Suicide prevention. We have organized workshops and awareness sessions in various institutions, including schools, universities, INGOs, and government and social organizations. We organized community mobilization ❲parents, doctors, advocates and employers❳. We generated dialogues on breaking mental health stigma and promoting social inclusion of persons with psychosocial disabilities with workshops on Psychosocial Disability and Mental Health Awareness on World Mental Health Day and International Day of Persons with Disabilities.

                </h1>
                <br />
            </div>
            {/* image section */}
            {/* <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10  mt-10">
                <img loading="lazy" className="h-96 object-cover rounded-md" src={img3} alt="Psycho-Social-Support" />
                <img loading="lazy" className="h-96 object-cover rounded-md" src={img10} alt="Psycho-Social-Support" />
                <img loading="lazy" className="h-96 object-cover rounded-md" src={img25} alt="Psycho-Social-Support" />
            </div> */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true, el: '.custom-swiper-pagination-2' }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="py-6"
            >
                {[1, 2, 3,].map((_, i) => (
                    <SwiperSlide key={i} className="h-full flex">
                        <div className=" group transition-all duration-300 hover:bg-[#faf1dc] w-full flex flex-col justify-between min-h-00px]  rounded p-0">
                            <img
                                className="h-52 w-full object-cover "
                                src={[img3, img10, img25][i]}
                                alt=""
                            />
                            <div className="flex flex-col flex-grow px-4 py-4 border-b-4 border-transparent group-hover:border-orange-500 transition-all duration-300">
                                <h1 className="font-text font-semibold text-xs md:text-sm mb-4">
                                    {[
                                        "Lorem ipsum dolor sit amet, consectetu  adsfasf  asdfasf  adfadf  ",
                                        "Lorem ipsum dolor sit amet, consectetur tur adipisicing elit. Minus, nihil",
                                        "Lorem ipsum do?",
                                        "lor sit amet, consectetur adip?",
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
                                        "asdasds"
                                    ][i]}
                                </h1>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-pagination-2 mt-6 text-center "></div>

        </div>
    );
};

export default Advocacy;