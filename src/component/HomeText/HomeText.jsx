import { Link } from "react-router-dom";
import Button from "../Button/Button";


const HomeText = () => {
    return (
        <div className="">
            <div className="w-4/5 mx-auto text-justify bg-gradient-to-t my-10 from-[#c0e1bd] to-[#0d7f88]  text-white px-10 py-10 rounded-md ">
                <q
                    style={{
                        letterSpacing: "2px"
                    }}
                    className=" text-3xl  font-bold  p-1 "><span className="text-6xl">I</span>dentity Inclusion is a development consulting firm that aims to resolve and
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
                <div className="mt-10 flex gap-10 ">
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
    );
};

export default HomeText;