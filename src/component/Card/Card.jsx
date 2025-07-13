import { Link } from "react-router-dom";
import Button from "../Button/Button";
import LearnMoreButton from "../LearnMoreButton/LearnMoreButton";

// eslint-disable-next-line react/prop-types
const Card = ({ title, image, description, path }) => {
    return (
        <div className="border  rounded-lg border-[#118097]  p-4">
            <div className="flex flex-col justify-around  items-start h-full">
                <img
                    loading="lazy"
                    className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 duration-200"
                    src={image ? image : ""}
                    alt=""
                />
                <p className="text-xl font-semibold mt-4  font-header ">{title}</p>
                <p className="mt-4 text-base  text-left font-text ">{description}</p>
                <Link to={path} className=" mt-4  ">
                    <LearnMoreButton />
                </Link>
            </div>
        </div>
    );
};

export default Card; 
