import { Link } from "react-router-dom";
import Button from "../Button/Button";


// eslint-disable-next-line react/prop-types
const Card = ({ title, image, description, path }) => {


    return (
        <div

            className=" rounded-xl duration-200 group overflow-hidden relative my-10  bg-gradient-to-t  from-black to-white text-neutral-50 p-4 flex flex-col justify-evenly hover:scale-105 border-4 border-[#0d7f88] "
        >
            <div
                className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
            ></div>
            <div
                className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
            ></div>
            <div
                className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
            ></div>
            <div
                className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
            ></div>
            <div className="z-10 flex flex-col justify-evenly items-center w-full h-full">
                <div className="">
                    <img className="h-80  object-cover rounded-xl" src={image ? image : ""} alt="" />
                </div>
                <span className="text-3xl font-bold my-5 text-">{title}</span>
                <p className="my-5 text-xl text-">
                    {description}
                </p>
                <Link to={path} className="w-full ">
                    <Button>
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>

    );
};

export default Card;