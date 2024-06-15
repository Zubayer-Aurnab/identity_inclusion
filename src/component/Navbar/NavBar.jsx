import {
    NavLink
} from "react-router-dom";
import logo from '../../assets/images/identity inclusion logo.png';
import './Nav.css'

const NavBar = () => {

    const activeClass = 'text-[#f97316] font-bold border-b-2 border-[#f97316]'
    const normalClass = "font-bold hover-effect border-b-2 border-transparent"


    return (
        <div>
            {/* for large devices */}
            <div className=' px-10  flex justify-between items-center'>
                <div>
                    <img className='w-16' src={logo} alt="" />
                </div>
                <div className="flex flex-1 gap-8   justify-center">
                    <NavLink
                        to={`/`}
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={`/about`}
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        About us
                    </NavLink>
                    <NavLink
                        to={`/about`}
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        Our Team
                    </NavLink>
                </div>
            </div>
            {/* for small devices*/}
        </div>
    );
};

export default NavBar;