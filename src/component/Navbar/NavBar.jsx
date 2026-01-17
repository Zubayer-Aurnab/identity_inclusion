import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight, HeartPulse, Users2, Megaphone, Landmark, GraduationCap, ArrowRight } from "lucide-react";
import logo from "../../assets/images/identity inclusion logo.png";

const NavBar = () => {
    const [slider, setSlider] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = slider ? "hidden" : "unset";
    }, [slider]);

    const serviceList = [
        { title: "Psycho-Social Support", path: "/psycho-social-support", icon: <HeartPulse size={20} />, color: "bg-rose-50 text-rose-600" },
        { title: "Support Group Meeting", path: "/support-group-metting", icon: <Users2 size={20} />, color: "bg-blue-50 text-blue-600" },
        { title: "Advocacy & Awareness", path: "/advocacy", icon: <Megaphone size={20} />, color: "bg-amber-50 text-amber-600" },
        { title: "Consultancy", path: "/consultancy", icon: <Landmark size={20} />, color: "bg-purple-50 text-purple-600" },
        { title: "Capacity Building", path: "/capacity", icon: <GraduationCap size={20} />, color: "bg-emerald-50 text-emerald-600" },
    ];

    const navLinkClass = ({ isActive }) => 
        `relative px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 flex items-center gap-1 ${
            isActive ? "text-[#118088]" : "text-slate-600 hover:text-slate-900"
        }`;

    return (
        <header className="fixed top-0 w-full z-[1000] transition-all duration-500 px-4 py-4 pointer-events-none">
            <div className={`
                mx-auto max-w-7xl transition-all duration-500 ease-in-out pointer-events-auto
                flex items-center justify-between px-4 py-2
                ${scrolled 
                    ? "bg-white/80 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem]" 
                    : "bg-transparent"}
            `}>

                {/* Branding */}
                <Link to="/" className="flex items-center group">
                    <img
                        className={`transition-all duration-500 object-contain ${scrolled ? "h-10 sm:h-12" : "h-12 sm:h-16"}`}
                        src={logo}
                        alt="Logo"
                    />
                </Link>

                {/* Desktop Central Nav */}
                <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${scrolled ? "bg-slate-50/50" : "bg-white/50 backdrop-blur-sm border border-slate-200/50"}`}>
                    <NavLink to="/" className={navLinkClass}>
                        Home
                        {pathname === "/" && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#118088] rounded-full" />}
                    </NavLink>

                    <div className="group relative">
                        <button className="px-6 py-2.5 rounded-full text-[15px] font-semibold text-slate-600 group-hover:text-[#118088] flex items-center gap-1.5 transition-colors">
                            Services <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                        </button>
                        
                        {/* Mega Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <div className="w-[450px] bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-4 grid grid-cols-1 gap-2">
                                <p className="px-4 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Our Expertise</p>
                                {serviceList.map((item, i) => (
                                    <Link key={i} to={item.path} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all group/item">
                                        <div className="flex items-center gap-4">
                                            <span className={`p-2.5 rounded-xl transition-all ${item.color}`}>{item.icon}</span>
                                            <span className="text-[14px] font-bold text-slate-700 group-hover/item:text-[#118088]">{item.title}</span>
                                        </div>
                                        <ArrowRight size={16} className="text-slate-300 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <NavLink to="/about" className={navLinkClass}>
                        About
                        {pathname === "/about" && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#118088] rounded-full" />}
                    </NavLink>
                    
                    <NavLink to="/acknowledgment-impact" className={navLinkClass}>
                        Impact
                        {pathname === "/acknowledgment-impact" && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#118088] rounded-full" />}
                    </NavLink>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    <Link to="/get-involbe" className="hidden md:flex items-center gap-2.5 bg-[#118088] text-white px-7 py-3 rounded-full text-[14px] font-bold hover:shadow-[0_10px_20px_rgba(17,128,136,0.3)] hover:-translate-y-0.5 transition-all active:scale-95">
                        Get Involved <ArrowUpRight size={18} />
                    </Link>

                    <button
                        onClick={() => setSlider(true)}
                        className="lg:hidden flex items-center justify-center h-11 w-11 text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-all active:scale-90"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </div>

            {/* --- MOBILE DRAWER --- */}
            <div
                className={`fixed inset-0 bg-slate-900/60 lg:hidden transition-all duration-500 pointer-events-auto backdrop-blur-sm ${slider ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setSlider(false)}
            />

            <div className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white z-[1001] lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl pointer-events-auto flex flex-col ${slider ? "translate-x-0" : "translate-x-full"}`}>
                {/* Drawer Header */}
                <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                    <img className="h-10" src={logo} alt="Logo" />
                    <button onClick={() => setSlider(false)} className="h-10 w-10 flex items-center justify-center bg-slate-50 text-slate-500 rounded-full hover:bg-slate-100"><X size={20} /></button>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
                            <NavLink to="/" onClick={() => setSlider(false)} className={({isActive}) => `text-2xl font-bold ${isActive ? 'text-[#118088]' : 'text-slate-800'}`}>Home</NavLink>
                            <NavLink to="/about" onClick={() => setSlider(false)} className={({isActive}) => `text-2xl font-bold ${isActive ? 'text-[#118088]' : 'text-slate-800'}`}>About</NavLink>
                            <NavLink to="/acknowledgment-impact" onClick={() => setSlider(false)} className={({isActive}) => `text-2xl font-bold ${isActive ? 'text-[#118088]' : 'text-slate-800'}`}>Impact</NavLink>
                        </div>

                        <div className="mt-4 pt-6 border-t border-slate-100">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Our Services</p>
                            <div className="grid gap-2">
                                {serviceList.map((s, i) => (
                                    <Link key={i} to={s.path} onClick={() => setSlider(false)} className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                                        <span className={`p-2 rounded-xl ${s.color}`}>{s.icon}</span>
                                        <span className="text-[15px] font-bold text-slate-700">{s.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-6 bg-slate-50/50 border-t border-slate-100">
                    <Link to="/get-involbe" onClick={() => setSlider(false)}>
                        <button className="w-full bg-slate-900 text-white py-4 rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-[#118088] transition-all">
                            Get Involved <ArrowUpRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;