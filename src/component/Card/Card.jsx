import { Link } from "react-router-dom";
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const Card = ({ title, image, description, path }) => {
    return (
        <div className=" rounded-xl duration-200 group overflow-hidden relative my-10  bg-gradient-to-t  from-black to-white text-neutral-50 p-4 flex flex-col justify-evenly hover:scale-105 border-4 border-[#0d7f88] ">
            <div className="z-10 flex flex-col justify-evenly items-center w-full h-full">
                <div className=" ">
                    <img
                        loading="lazy"
                        className="h-80 w-full object-cover rounded-xl"
                        src={image ? image : ""}
                        alt=""
                    />
                </div>
                <span className="text-2xl font-bold my-5 font-header">{title}</span>
                <p className="my-5 text-lg text-justify font-text">{description}</p>
                <Link to={path} className="w-full ">
                    <Button>Learn More</Button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
