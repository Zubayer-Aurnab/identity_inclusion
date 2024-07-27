import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/identity inclusion logo.png";
import "./Nav.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
    const activeClass = "text-[#118088] font-semibold border-b-2 border-[#118088]   text-xl ";
    const normalClass = "font-semibold hover-effect border-b-2 border-transparent text-xl ";
    const dropDown = " hover-effect border-b-2 border-transparent text-lg ";
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
                    <Link
                        // to={`/services`}
                        className={'font-semibold hover-effect border-b-2 border-transparent text-xl relative group transition-all '}
                    >
                        <p className="flex items-center">
                            Services <MdOutlineKeyboardArrowDown className="text-2xl mt-1  group-hover:rotate-180 transition-all" />
                        </p>
                        {/* dropdown */}
                        <div className="absolute   w-72 hidden  bg-[#ffffe0] shadow-2xl transition-transform group-hover:flex flex-col gap-2 z-30 p-4">
                            <Link to={"/psycho-social-support"} className={dropDown}>
                                Psycho-Social Support
                            </Link>
                            <Link to={"/psycho-social-support"} className={dropDown}>
                                Support Group Meeting
                            </Link>
                            <Link to={"/advocacy"} className={dropDown}>
                                Advocacy & Awareness
                            </Link>
                            <Link to={"/consultancy"} className={dropDown}>
                                Consultancy
                            </Link>
                            <Link to={"/capacity"} className={dropDown}>
                                Capacity Building
                            </Link>

                        </div>


                    </Link>
                    <NavLink
                        to={`/acknowledgment-impact`}
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Acknowledgment & Impact
                    </NavLink>

                    <NavLink
                        to={`/contact`}
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div >
            {/* for small devices*/}
            <div className="bg-white relative px-5 flex lg:hidden justify-between items-center py-1" >
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

                {
                    slider && (

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
                    )
                }

            </div >
        </div >
    );
};

export default NavBar;
