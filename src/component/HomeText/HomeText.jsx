import { Link } from "react-router-dom";
import Button from "../Button/Button";
import img14 from '../../assets/marquee/img14.jpg'
import img2 from '../../assets/images/award.jpeg'
import img3 from '../../assets/marquee/img29.jpg'
import './text.css'
const HomeText = () => {
    return (
        <div className="px-2 lg:px-0 md:my-32">
            <div className=" lg:w-4/5  mx-auto text-justify mt-4  py-10 rounded-md  flex  flex-col-reverse md:flex-row  gap-4 ">

                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mb-10 flex-1" >
                    <img src={img14} alt="" className="rounded-lg " />
                    <img src={img3} alt="" className="rounded-lg" />
                    <img src={img2} alt="" className="rounded-lg col-span-2 h-[20vh] md:h-[30vh] object-cover w-full " />
                </div>

                <div className=" flex-1   flex-row  md:flex-col justify-center items-start md:p-4 bg-white ">

                    <p className="text-lg md:text-2xl text-black leading-relaxed mb-8 font-header ">
                        <span className="text-4xl">I</span>
                        dentity Inclusion is a development consulting firm that aims to resolve and
                        rectify the approach our institutions and society has towards marginalized
                        communities. Identity Inclusion started as a project with an aim to helping
                        people with psychosocial disability. Due to mental health stigma stemming
                        from a significant knowledge gap about people with disabilities, they suffer
                        from societal and institutional exclusion.
                        <br />
                        <br />
                        Identity Inclusion helps address and remove the exclusionary practices of
                        institution towards marginalized communities through assessments,
                        awareness raising, capacity building and advocating policy developments in
                        order to bring institutional and systemic change in our society.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <div className=" flex gap-5 lg:gap-4   w-full  justify-center  md:justify-start">
                            <Link target="_blank" to={"https://drive.google.com/file/d/15KOwwRroT5jSrIjrbL16oLwH0IVTsEzJ/view?usp=sharing"}>
                                <Button small >
                                    Portfolio
                                </Button>
                            </Link>
                            <Link to={"/about"}>
                                <Button small >
                                    Learn More
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default HomeText;