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
        <footer className="bg-[#128289] text-white font-header">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-white p-2 rounded-2xl inline-block w-fit shadow-lg">
                            <img className="h-20 w-20 object-contain" src={logo} alt="Logo" />
                        </div>
                        <p className="text-teal-50/80 text-sm leading-relaxed max-w-xs">
                            Empowering individuals through identity inclusion and professional psycho-social support.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => (
                                <Link
                                    key={idx}
                                    to={social.to}
                                    target="_blank"
                                    className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-[#128289] transition-all duration-300 shadow-sm"
                                >
                                    <div className="w-5 h-5 fill-current">
                                        {social.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links / Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/10 w-fit">
                            Our Services
                        </h3>
                        <ul className="space-y-4">
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
                                        className="text-teal-50/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/10 w-fit">
                            Get in Touch
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                            <div className="space-y-4">
                                <Link
                                    to={`tel:${companyData?.phone}`}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#f97316] transition-colors">
                                        <MobileSvg />
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-teal-200 text-[10px] uppercase font-bold tracking-widest">Call Us</p>
                                        <p className="group-hover:text-white text-teal-50/80 transition-colors">{companyData?.phone}</p>
                                    </div>
                                </Link>

                                <Link
                                    to={`mailto:${companyData?.email}`}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#f97316] transition-colors">
                                        <MailSvg />
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-teal-200 text-[10px] uppercase font-bold tracking-widest">Email Us</p>
                                        <p className="group-hover:text-white text-teal-50/80 transition-colors">{companyData?.email}</p>
                                    </div>
                                </Link>
                            </div>

                            <Link
                                to={companyData?.address_link}
                                target="_blank"
                                className="flex items-start gap-3 group"
                            >
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#f97316] transition-colors">
                                    <LocatoinSvg />
                                </div>
                                <div className="text-sm">
                                    <p className="text-teal-200 text-[10px] uppercase font-bold tracking-widest">Visit Us</p>
                                    <p className="group-hover:text-white text-teal-50/80 transition-colors leading-relaxed">
                                        {companyData?.address}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-teal-50/60 font-medium">
                    <p>© {new Date().getFullYear()} Identity Inclusion. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;