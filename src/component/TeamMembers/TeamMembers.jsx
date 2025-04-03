import { useState } from "react";


// eslint-disable-next-line react/prop-types
const TeamMembers = ({ name, photo, description, }) => {
    // console.log(description?.length)
    const [seeMore, setSeeMore] = useState(true)
    return (
        <div className=''>
            <div className=' pt-0 flex items-center gap-2 '>
                <img loading="lazy" src={photo} className='w-32 h-32 md:w-48 md:h-60 object-contain lg:object-cover  rounded-xl ' alt="" />
                <div className="" >
                    <p className='font-bold md:text-xl font-[Roboto] '>{name}</p>
                </div>
            </div>

            <div style={{
                transition: "hight 3s ease-in",
                height: "auto"
            }} className='pb-5'>
                {/* eslint-disable-next-line react/prop-types */}
                <p
                    style={{
                        wordSpacing: "0.2rem"
                    }}
                    // eslint-disable-next-line react/prop-types
                    className='md:text-xl text-justify  font-[Ubuntu]'>{seeMore ? description?.slice(0, 500) : description}
                    <span onClick={() => setSeeMore(!seeMore)} className="text-[#2d8f96] underline"> {seeMore ? "see more" : "see less"}</span>
                </p>
            </div>
        </div>
    );
};

export default TeamMembers;