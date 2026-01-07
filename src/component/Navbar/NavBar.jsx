import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight, HeartPulse, Users2, Megaphone, Landmark, GraduationCap } from "lucide-react";
import logo from "../../assets/images/identity inclusion logo.png";
import Button from "../Button/Button";
import "./Nav.css";

const NavBar = () => {
    const [slider, setSlider] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const activeClass = "text-[#118088] font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#118088] transition-all";
    const normalClass = "text-gray-600 font-semibold hover:text-[#118088] transition-all";
    const serviceLinkClass = "group flex items-start gap-3 p-3 rounded-xl hover:bg-teal-50 transition-all";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        if (slider) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';

        return () => window.removeEventListener("scroll", handleScroll);
    }, [slider]);

    const serviceList = [
        { title: "Psycho-Social Support", path: "/psycho-social-support", icon: <HeartPulse className="w-5 h-5" />, desc: "Moral & psychological care" },
        { title: "Support Group Meeting", path: "/support-group-metting", icon: <Users2 className="w-5 h-5" />, desc: "Community-led healing" },
        { title: "Advocacy & Awareness", path: "/advocacy", icon: <Megaphone className="w-5 h-5" />, desc: "Policy & social change" },
        { title: "Consultancy", path: "/consultancy", icon: <Landmark className="w-5 h-5" />, desc: "Technical institutional support" },
        { title: "Capacity Building", path: "/capacity", icon: <GraduationCap className="w-5 h-5" />, desc: "Workshops & training" },
    ];

    return (
        <div className={`fixed top-0 w-full  z-[1000] transition-all duration-300 ${scrolled ? "bg-white/80 md:backdrop-blur-md shadow-sm py-2" : "bg-white py-2"}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img className={`transition-all duration-300 ${scrolled ? "w-14" : "w-16"}`} src={logo} alt="Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : normalClass)}>About us</NavLink>

                    {/* Desktop Services Dropdown */}
                    <div className="relative group py-2">
                        <button className="flex items-center gap-1 font-semibold text-gray-600 group-hover:text-[#118088] transition-all">
                            Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                        </button>

                        {/* Mega Dropdown Box */}
                        <div className="absolute top-full -left-20 w-[450px] bg-white shadow-2xl rounded-2xl p-4 grid grid-cols-2 gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 border border-gray-100">
                            {serviceList.map((service, idx) => (
                                <Link key={idx} to={service.path} className={serviceLinkClass}>
                                    <div className="mt-1 p-2 bg-teal-50 text-[#118088] rounded-lg group-hover:bg-[#118088] group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-gray-900 leading-none">{service.title}</p>
                                        <p className="text-[11px] text-gray-500 mt-1">{service.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <NavLink to="/acknowledgment-impact" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Impact</NavLink>

                    <a href="https://forms.office.com/pages/responsepage.aspx?id=RGs3-wwf4UKnCAN5mvvhc9AkJPqCdx5Gvivm3nc38KpURjQyN1VEUFpVMzFXQjJFSzlGQkNKUlEwRS4u&route=shorturl" target="_blank" rel="noreferrer">
                        <Button small>Get Involved</Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setSlider(!slider)} className="lg:hidden p-2 text-gray-700 bg-gray-100 rounded-full">
                    {slider ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Panel */}
            <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300   ${slider ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setSlider(false)} />

            <div className={`fixed  top-0 right-0 w-[80%] h-full bg-white z-[1001] lg:hidden transition-transform duration-500 flex flex-col p-8 ${slider ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center mb-10 ">
                    <img className="w-14" src={logo} alt="Logo" />
                    <button onClick={() => setSlider(false)}><X size={28} /></button>
                </div>

                <div className="flex flex-col gap-5 ">
                    <NavLink to="/" onClick={() => setSlider(false)} className="text-xl font-bold text-gray-800">Home</NavLink>
                    <NavLink to="/about" onClick={() => setSlider(false)} className="text-xl font-bold text-gray-800">About us</NavLink>

                    <div className="space-y-4 pt-2">
                        <p className="text-xs uppercase tracking-widest text-[#118088] font-black">Our Services</p>
                        <div className="grid gap-3 pl-2">
                            {serviceList.map((s, i) => (
                                <Link key={i} to={s.path} onClick={() => setSlider(false)} className="flex items-center gap-3 text-gray-600 font-semibold text-sm hover:text-[#118088]">
                                    <span className="p-1 bg-teal-50 rounded-md">{s.icon}</span> {s.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <NavLink to="/acknowledgment-impact" onClick={() => setSlider(false)} className="text-xl font-bold text-gray-800">Impact</NavLink>

                    <div className="mt-10 pt-10 border-t">
                        <a href="https://forms.office.com/..." target="_blank" rel="noreferrer">
                            <button className="w-full bg-[#118088] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-teal-700/20">
                                Get Involved <ArrowRight size={18} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;