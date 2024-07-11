import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/identity inclusion logo.png";
import "./Nav.css";

const NavBar = () => {
    const activeClass = "text-[#118088] font-semibold border-b-2 border-[#118088]   text-xl ";
    const normalClass = "font-semibold hover-effect border-b-2 border-transparent text-xl ";
    const [slider, setSlider] = useState(false)
    // console.log(slider)
    const handleCheckboxChange = () => {
        setSlider(prev => !prev);
    };
    return (
        <div>
            {/* for large devices */}
            <div className=" hidden lg:flex px-10 justify-evenly items-center ">
                <div className=" ">
                    <img className="w-20" src={logo} alt="" />
                </div>
                <div className="flex  gap-8   justify-center ">
                    <NavLink
                        to={`/`}
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={`/about`}
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        About us
                    </NavLink>
                    <NavLink
                        to={`/services`}
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to={`/a`}
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Acknowledgment & Impact
                    </NavLink>
                    {/* <Popover>
                        <PopoverButton className=" text-black z-50 focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black hover-effect font-semibold text-xl">
                            About Us
                        </PopoverButton>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel
                                anchor="bottom"
                                className="divide-y divide-white/5  bg-orange-50  shadow-2xl z-10 mt-5 w-60 "
                            >
                                <div className="p-3">
                                    <a
                                        className="block rounded-lg py-2 px-3 transition  hover-effect text-black font-semibold text-xl "
                                        href="/about"
                                    >
                                        Identity Inclusion
                                    </a>
                                    <a
                                        className="block rounded-lg py-2 px-3 transition  hover-effect text-black font-semibold text-xl "
                                        href="/about#word_from_ceo"
                                    >
                                        Words from CEO
                                    </a>
                                    <a
                                        className="block rounded-lg py-2 px-3 transition  hover-effect text-black font-semibold text-xl"
                                        href="#"
                                    >
                                         Mission & Vision
                                     
                                    </a>
                                    <a
                                        className="block rounded-lg py-2 px-3 transition  hover-effect text-black font-semibold text-xl"
                                        href="#"
                                    >
                                        Our Team
                                    </a>
                                    <a
                                        className="block rounded-lg py-2 px-3 transition  hover-effect text-black font-semibold text-xl"
                                        href="#"
                                    >
                                         Values
                                    </a>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover> */}


                    <NavLink
                        to={`/team`}
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div>
            {/* for small devices*/}
            <div className="bg-white relative px-5 flex lg:hidden justify-between items-center py-1">
                <div >
                    <img className="w-14" src={logo} alt="" />
                </div>
                <div onClick={handleCheckboxChange} className="">
                    <label className="btn btn-circle bg-[#b5dbba] swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" checked={slider} onChange={handleCheckboxChange} />

                        {/* hamburger icon */}
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        {/* close icon */}
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>
                </div>

                {slider && (

                    <div className="absolute top-0 w-[60%] left-0 h-screen  pt-5 duration-500 bg-[#c0e1bd] shadow-2xl z-[999] flex flex-col p-4 py-3   space-y-3">
                        <NavLink
                            to={`/`}
                            className={({ isActive }) => (isActive ? activeClass : normalClass)}
                            onClick={handleCheckboxChange}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={`/about`}
                            className={({ isActive }) => (isActive ? activeClass : normalClass)}
                            onClick={handleCheckboxChange}
                        >
                            About us
                        </NavLink>
                        <NavLink
                            to={`/a`}
                            className={({ isActive }) => (isActive ? activeClass : normalClass)}
                            onClick={handleCheckboxChange}
                        >
                            Activities
                        </NavLink>

                        <NavLink
                            to={`https://docs.google.com/forms/d/e/1FAIpQLSfOjFK7-_wj3Kd76JOHuHGri2DvIUR5OYT1kKRuVcFF8pEbYA/viewform`}
                            target="_blank"
                            className={({ isActive }) => (isActive ? activeClass : normalClass)}
                            onClick={handleCheckboxChange}
                        >
                            Become a volunteer
                        </NavLink>
                        <NavLink
                            to={`/team`}
                            className={({ isActive }) => (isActive ? activeClass : normalClass)}
                            onClick={handleCheckboxChange}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                )}

            </div>
        </div>
    );
};

export default NavBar;
