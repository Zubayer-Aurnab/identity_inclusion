import Title from "../../component/Title/Title";
import img6 from '../../assets/marquee/img6.jpg'
import img14 from '../../assets/marquee/img14.jpg'
import img23 from '../../assets/marquee/img23.jpg'
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Consultancy = () => {
    return (
        <div className="my-20 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Consultancy
            </Title>
            <div className="mt-10 text-justify font-text">
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider  ">
                    Systemic and social injustices greatly influence rising mental health conditions and exacerbate disability in countries like Bangladesh. Exclusion is both a cause and consequence of bad mental health hence Identity Inclusion helps address and remove the exclusionary practices of institutions towards marginalized communities through assessments, awareness raising, capacity building and advocating policy developments in order to bring institutional and systemic change in our society. We provide technical support and guidance to development organizations, NGOs, Government and Corporate organizations and Educational and youth-based organizations to become disability and mental health inclusive.  As there is a dearth of funds for mental health interventions the revenues from the consultation services are used to run operational costs for mental health services.
                </h1>
                <br />
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider  ">
                    Since 2019 we have worked with 4 major NGOs (BRAC, Practical Action and UCEP and WaterAid) in Bangladesh to ensure institutions are inclusive. We developed and implemented disability inclusion strategies for BRAC and UCEP Bangladesh. The strategies were developed in consultation with Disabled People’s Organizations, beneficiaries with disabilities and in the light of National Laws on disability, the SDGs and the Disability Inclusive Development approach. Recently we collaborated with Practical Action in developing a national Menstrual Hygiene Management (MHM) Strategy for Bangladesh, which was funded by UNICEF.
                </h1>
            </div>
            {/* image section */}
            <div className="gap-10 mt-10">
                {/* <img loading="lazy" className=" w-full h-[60vh] object-cover rounded-md" src={img14} alt="Psycho-Social-Support" /> */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true, el: '.custom-swiper-pagination-2' }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                        1280: { slidesPerView: 1 },
                    }}
                    className="py-6"
                >
                    {[1, 2, 3,].map((_, i) => (
                        <SwiperSlide key={i} className="h-full flex">
                            <div className=" group transition-all duration-300  w-full flex flex-col justify-between min-h-00px]  rounded p-0">
                                <img loading="lazy" className=" w-full h-[60vh] object-cover rounded-md" src={[img6, img14, img23][i]} alt="Psycho-Social-Support" />
                                <div className="flex flex-col flex-grow px-4 py-4 border-b-4 border-transparent ">
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
            </div>
            <div className="custom-swiper-pagination-2  text-center  space-x-2 "></div>
        </div>
    );
};

export default Consultancy;