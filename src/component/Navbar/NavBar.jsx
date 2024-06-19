import {
    NavLink
} from "react-router-dom";
import logo from '../../assets/images/identity inclusion logo.png';
import './Nav.css';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'

const NavBar = () => {


    const activeClass = 'text-[#f97316] font-semibold border-b-2 border-[#f97316] lg:text-xl '
    const normalClass = "font-semibold hover-effect border-b-2 border-transparent lg:text-xl "


    return (
        <div>
            {/* for large devices */}
            <div className=' px-10  flex justify-evenly items-center'>
                <div className=" ">
                    <img className='w-20' src={logo} alt="" />
                </div>
                <div className="flex  gap-8   justify-center ">
                    <NavLink
                        to={`/`}
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        Home
                    </NavLink>

                    <Popover>
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
                                className="divide-y divide-white/5 rounded-xl bg-green-400 z-10 mt-5 paperScrollPaper w-52"
                            >
                                <div className="p-3">
                                    <a className="block rounded-lg py-2 px-3 transition  hover-effect text-white font-semibold text-xl" href="#" >
                                        What We Do
                                    </a>
                                    <a className="block rounded-lg py-2 px-3 transition  hover-effect text-white font-semibold text-xl" href="#" >
                                        Our Services
                                    </a>

                                </div>

                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    <NavLink
                        to={`/team`}
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        Our Team
                    </NavLink>
                    <NavLink
                        to={`/team`}
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        Become a volunteer
                    </NavLink>
                </div>
            </div>
            {/* for small devices*/}
        </div>
    );
};

export default NavBar;