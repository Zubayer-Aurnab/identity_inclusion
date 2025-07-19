import { useState } from "react";


// eslint-disable-next-line react/prop-types
const TeamMembers = ({ name, photo, description, }) => {
    // console.log(description?.length)
    const [seeMore, setSeeMore] = useState(true)
    return (
        <div className="bg-bg  rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4">
                <img
                    loading="lazy"
                    src={photo}
                    alt={`${name}'s photo`}
                    className="w-28 h-28 sm:w-36 sm:h-44 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                    <p className="text-lg sm:text-xl font-semibold  font-header mb-2">
                        {name}
                    </p>
                    <p
                        className="text-sm sm:text-base text-justify font-text font-semibolds leading-relaxed"
                        style={{ wordSpacing: "0.05rem" }}
                    >
                        {
                            description
                        }
                        {/* {seeMore ? description?.slice(0, 500) : description}
                        {description?.length > 500 && (
                            <button
                                type="button"
                                onClick={() => setSeeMore(!seeMore)}
                                className="ml-1  underline font-medium transition"
                            >
                                {seeMore ? "See more" : "See less"}
                            </button>
                        )} */}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default TeamMembers;