import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/identity inclusion logo.png";
import "./Nav.css";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
    const activeClass = "text-[#118088] font-semibold border-b-2 border-[#118088]   text-xl ";
    const mobileClass = "text-[#118088] font-semibold bg-white px-2 py-2 rounded-lg  text-xl  ";
    const normalClass = "font-semibold hover-effect border-b-2 border-transparent text-xl ";
    const dropDown = " hover-effect border-b-2 border-transparent text-lg ";
    const [slider, setSlider] = useState(false)
    // console.log(slider)
    useEffect(() => {
        if (slider) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [slider]);
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

                        className={'font-semibold  border-b-2 border-transparent text-xl relative drop '}
                    >
                        Services
                        <div className="absolute  w-72   bg-[#ffffe0] shadow-2xl flex flex-col gap-2 z-30 p-4 menu">
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
                    </NavLink>

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



                <div className={`absolute float-end top-0   ${slider ? "left-0" : "-left-[700px]"}  w-[80%] md:w-[40%]  h-screen  pt-5 duration-500 bg-gradient-to-b from-[#c0e1bd] to-[#0d7f88] shadow-2xl z-[999] flex flex-col p-4 py-3    space-y-5`}>
                    <NavLink
                        to={`/`}
                        className={mobileClass}
                        onClick={handleCheckboxChange}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={`/about`}
                        className={mobileClass}
                        onClick={handleCheckboxChange}
                    >
                        About us
                    </NavLink>

                    <NavLink

                        className={mobileClass}

                    >
                        Services
                        <div className="absolute  w-72  bg-[#ffffe0] shadow-2xl flex flex-col gap-2 z-30 p-4 menu">
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
                    </NavLink>

                    <NavLink
                        to={`/acknowledgment-impact`}
                        className={mobileClass}
                        onClick={handleCheckboxChange}
                    >
                        Acknowledgment & Impact
                    </NavLink>

                    <NavLink
                        to={`/contact`}
                        className={mobileClass}
                        onClick={handleCheckboxChange}
                    >
                        Contact Us
                    </NavLink>
                </div>


            </div >
        </div >
    );
};

export default NavBar;
