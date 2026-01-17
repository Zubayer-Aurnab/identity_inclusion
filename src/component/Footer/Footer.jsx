import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white_bg.png";
import FacebookSvg from "./Components/SVGs/FacebookSvg";
import InstagramSvg from "./Components/SVGs/InstagramSvg";
import LinkedinSvg from "./Components/SVGs/LinkedinSvg";
import YoutubeSvg from "./Components/SVGs/YoutubeSvg";
import MobileSvg from "./Components/SVGs/MobileSvg";
import MailSvg from "./Components/SVGs/MailSvg";
import LocatoinSvg from "./Components/SVGs/LocatoinSvg";
import { useCompanyQuery } from "../../Redux/Apis/companyApi";

const Footer = () => {
    const { data, isLoading } = useCompanyQuery();
    const companyData = data?.data[0];

    const socialLinks = [
        { to: companyData?.facebook_link, icon: <FacebookSvg /> },
        { to: companyData?.linkedin_link, icon: <LinkedinSvg /> },
        { to: companyData?.instagram_link, icon: <InstagramSvg /> },
        { to: companyData?.youtube_link, icon: <YoutubeSvg /> },
    ];

    return (
        <footer className="bg-[#0f172a] text-white">
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-12">

                    {/* --- BRAND SECTION --- */}
                    <div className="md:col-span-4 space-y-8">
                        <div className="flex items-center gap-5">
                            <div className="bg-white p-3 rounded-[1.5rem] shadow-2xl">
                                <img className="h-14 w-14 object-contain" src={logo} alt="Logo" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black tracking-tighter leading-none text-white uppercase">
                                    Identity
                                </h2>
                                <h2 className="text-2xl font-light tracking-tighter leading-none text-[#d4f1f7] uppercase">
                                    Inclusion
                                </h2>
                            </div>
                        </div>

                        <p className="text-slate-400 text-lg leading-relaxed font-medium">
                            Breaking barriers and fostering belonging through professional support and advocacy.
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => (
                                <Link
                                    key={idx}
                                    to={social.to}
                                    target="_blank"
                                    className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-slate-300 hover:bg-[#118088] hover:text-white hover:border-[#118088] transition-all duration-500 hover:-translate-y-1 shadow-lg"
                                >
                                    <div className="w-5 h-5 fill-current">
                                        {social.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* --- SERVICES LINK --- */}
                    <div className="md:col-span-3">
                        <h3 className="text-[#118088] font-black text-xs uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-[#118088]"></span>
                            Services
                        </h3>
                        <ul className="space-y-5">
                            {[
                                { name: "Psycho-Social Support", path: "/psycho-social-support" },
                                { name: "Support Group Meeting", path: "/support-group-metting" },
                                { name: "Advocacy & Awareness", path: "/advocacy" },
                                { name: "Consultancy", path: "/consultancy" },
                                { name: "Capacity Building", path: "/capacity" },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-300 hover:text-white flex items-center gap-3 transition-all duration-300 group text-base font-bold"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#118088] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- CONTACT INFO --- */}
                    <div className="md:col-span-5">
                        <h3 className="text-[#118088] font-black text-xs uppercase tracking-[0.3em] mb-10 flex items-center justify-center lg:justify-start gap-3">
                            <span className="w-8 h-[2px] bg-[#118088]"></span>
                            Connect
                        </h3>

                        <div className="space-y-6">
                            {/* Contact Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Link
                                    to={`tel:${companyData?.phone}`}
                                    className="group flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#118088]/50 transition-all duration-500 hover:bg-white/[0.02]"
                                >
                                    <div className="">
                                        <MobileSvg />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Call Us</p>
                                        <p className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors">
                                            {companyData?.phone}
                                        </p>
                                    </div>
                                </Link>

                                <Link
                                    to={`mailto:${companyData?.email}`}
                                    className="group flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#118088]/50 transition-all duration-500 hover:bg-white/[0.02]"
                                >
                                    <div className="">
                                        <MailSvg />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Email Us</p>
                                        <p className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors break-all">
                                            {companyData?.email}
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            {/* Location Card - Updated to Centered Style */}
                            <Link
                                to={companyData?.address_link}
                                target="_blank"
                                className="group flex flex-col items-center text-center gap-4 p-4 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#118088]/40 transition-all duration-500 hover:bg-white/[0.02]"
                            >
                                <div className="">
                                    <LocatoinSvg />
                                </div>
                                <div className="max-w-xs">
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-2">Our Location</p>
                                    <p className="text-slate-300 font-bold text-sm leading-relaxed group-hover:text-white transition-colors">
                                        {companyData?.address}
                                    </p>
                                </div>


                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM STRIP --- */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm font-bold">
                        © {new Date().getFullYear()} <span className="text-[#118088]">Identity Inclusion</span>. All rights reserved.
                    </p>
                    <div className="flex gap-10 hidden">
                        <Link to="/privacy" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-[#d4f1f7] transition-colors">Develop by Zubayer Aurnab</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;