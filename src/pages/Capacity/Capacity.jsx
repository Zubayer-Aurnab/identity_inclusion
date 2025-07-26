import Title from "../../component/Title/Title";
import img18 from '../../assets/marquee/img18.jpg'
import img24 from '../../assets/marquee/img24.jpg'
import img27 from '../../assets/marquee/img27.jpg'
import secondPdf from '../../assets/brochures/second.pdf'
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Capacity = () => {
    return (
        <div className="my-20 px-2 lg:px-0 lg:w-4/5 mx-auto ">
            <Title>
                Capacity Building
            </Title>
            <div className="mt-10 text-justify font-text">
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider  ">We have certified trainers who conduct workshops for mainstream organizations and individuals. We have conducted workshops in different institutions and organizations. We have organized workshops and awareness sessions in 15 institutions so far, including schools, universities, INGOs, government and social organizations. We organized community mobilization (parents, doctors, advocates and employers) and generate dialogues on breaking mental health stigma and promoting social inclusion of persons with psycho-social disabilities with workshops on Psycho-social Disability and Mental Health Awareness on the occasion of World Mental Health Day and International Day of Persons with Disabilities. Our Capacity Building component is based on our specialized curriculum developed in partnership with the Department of Educational and Counseling Psychology, Dhaka University, which we use to provide workshops and training to various individuals and institutions on Psychosocial Support and Communication Skills, Rights of Persons with Mental illnesses and Disabilities, Bio power. We have helped 8 youth and social institutions in capacity building and have reached a total of 589 people from these institutions so far.
                </h1>
            </div>
            {/* image section */}

            <div className="mt-6">
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
                                    src={[img18, img24, img27][i]}
                                    alt=""
                                />
                                <div className="flex flex-col flex-grow px-4 py-4 border-b-4 border-transparent group-hover:border-orange-500 transition-all duration-300">
                                    <h1 className="font-text font-semibold text-xs md:text-sm mb-4">
                                        {[
                                            "Lorem ipsum dolor sit amet,   asdfasf  adfadf  ",
                                            "Lorem ipsum dolor sit amet,r tur adipisicing ehil",
                                            "Lorem ipsum do?",
                                            "lor sit amet, consectetur adip?",
                                            "Lorem ipsum dolor sit amet, co adipisicing elit. ?",
                                            "asdasds"
                                        ][i]}
                                    </h1>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-swiper-pagination-2  text-center  space-x-2 "></div>
            </div>


            <div>
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider mt-8 font-text ">
                    For more information  <a href={secondPdf} download={'first.pdf'} className='underline text-[#128289]'>Click here</a>
                </h1>
            </div>
        </div>
    );
};

export default Capacity;