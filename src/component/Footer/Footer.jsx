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
                            Youth for a Diverse and Inclusive Society
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => (
                                <Link
                                    key={idx}
                                    to={social.to}
                                    target="_blank"
                                    className="w-12 h-12 flex items-center justify-center text-slate-300 transition-all duration-500 hover:-translate-y-1 shadow-lg"
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

                        <div className="space-y-4">
                            {/* Contact List */}
                            <div className="grid grid-cols-1 gap-3">
                                {/* Phone Item */}
                                <Link
                                    to={`tel:${companyData?.phone}`}
                                    className="group flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#118088]/40 transition-all duration-500 hover:bg-white/[0.05]"
                                >
                                    {/* Centered Icon - No Background */}
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#118088] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <MobileSvg />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Call Us</p>
                                        <p className="font-bold text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
                                           +88{companyData?.phone}
                                        </p>
                                    </div>
                                </Link>

                                {/* Email Item */}
                                <Link
                                    to={`mailto:${companyData?.email}`}
                                    className="group flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#118088]/40 transition-all duration-500 hover:bg-white/[0.05]"
                                >
                                    {/* Centered Icon - No Background */}
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#118088] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <MailSvg />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Email Us</p>
                                        <p className="font-bold text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
                                            {companyData?.email}
                                        </p>
                                    </div>
                                </Link>

                                {/* Location Item */}
                                <Link
                                    to={companyData?.address_link}
                                    target="_blank"
                                    className="group flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/5 hover:border-[#118088]/40 transition-all duration-500 hover:bg-white/[0.05]"
                                >
                                    {/* Centered Icon - No Background */}
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#118088] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <LocatoinSvg />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Our Location</p>
                                        <p className="font-bold text-slate-200 group-hover:text-white transition-colors text-sm whitespace-nowrap">
                                            {companyData?.address}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM STRIP --- */}
                <div className="mt-5 pt-4 border-t border-slate-100/50 flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand Section */}
                    <div className="flex items-center gap-4 font-header">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#118088]" />
                        <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-slate-400">
                            © {new Date().getFullYear()}
                            <span className=" font-bold ml-1">Identity Inclusion</span>
                            <span className="mx-2 opacity-30 font-header">|</span>
                            All rights reserved
                        </p>
                    </div>

                    {/* Personal Branding Section */}
                    <div className="group flex items-center gap-6">
                        <Link
                            to="https://wa.me/8801943233153"
                            target="_blank"
                            className="relative text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 transition-all duration-300 hover:text-[#118088]"
                        >
                            <span className="opacity-50 font-medium">Developed by</span>
                            <span className="ml-1 text-[#118088] group-hover:text-[#118088]">Zubayer Aurnab</span>

                            {/* Animated underline */}
                            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#118088] transition-all duration-500 group-hover:w-full" />
                        </Link>

                        {/* Floating WhatsApp Badge */}
                        <a
                            href="https://wa.me/8801943233153"
                            className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 border border-slate-100 hover:bg-white transition-colors"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#118088] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#118088]"></span>
                            </span>
                            <span className="text-[10px] font-bold text-slate-600">WHATSAPP</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;