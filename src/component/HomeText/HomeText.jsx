import { Link } from "react-router-dom";
import Button from "../Button/Button";
import img14 from '../../assets/marquee/img14.jpg'
import './text.css'
const HomeText = () => {
    return (
        <div className="px-2 lg:px-0">
            <div className=" lg:w-4/5  mx-auto text-justify mt-10 text-white  py-10 rounded-md  ">
                <div
                    className="hero min-h-[90vh] "
                    style={{
                        backgroundImage: `url(${img14})`,
                        backgroundAttachment: 'fixed',
                    }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-neutral-content ">
                        <div className="">
                            <q style={{ textShadow: "2px 2px black", letterSpacing: "2px" }} className=" md:text-3xl  font-bold  text-justify text-[#FFFFE0]  ">
                                <span className="text-6xl">I</span>
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
                            </q>
                            <div className="mt-10 flex gap-5 lg:gap-10 ">
                                <Link target="_blank" to={"https://drive.google.com/file/d/15KOwwRroT5jSrIjrbL16oLwH0IVTsEzJ/view?usp=sharing"}>
                                    <Button >
                                        Portfolio
                                    </Button>
                                </Link>
                                <Link to={"/about"}>
                                    <Button >
                                        Learn More
                                    </Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>







                {/* <div className="bg-[#0d808880] mt-10   z-10 py-20  px-10">
                    <q style={{ textShadow: "2px 2px black", letterSpacing: "2px" }} className=" md:text-3xl  font-bold  text-justify  p-1 text-[#FFFFE0]  ">
                        <span className="text-6xl">I</span>
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
                    </q>
                    <div className="mt-10 flex gap-5 lg:gap-10 ">
                        <Link target="_blank" to={"https://drive.google.com/file/d/15KOwwRroT5jSrIjrbL16oLwH0IVTsEzJ/view?usp=sharing"}>
                            <Button >
                                Portfolio
                            </Button>
                        </Link>
                        <Link to={"/about"}>
                            <Button >
                                Learn More
                            </Button>
                        </Link>

                    </div>
                </div> */}
            </div>
        </div >
    );
};

export default HomeText;