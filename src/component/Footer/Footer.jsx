import { ImLocation } from "react-icons/im";
import { MdAddCall, MdAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white_bg.png";
import FacebookSvg from "./Components/SVGs/FacebookSvg";
import InstagramSvg from "./Components/SVGs/InstagramSvg";
import LinkedinSvg from "./Components/SVGs/LinkedinSvg";
import YoutubeSvg from "./Components/SVGs/YoutubeSvg";
import MobileSvg from "./Components/SVGs/MobileSvg";
import MailSvg from "./Components/SVGs/MailSvg";
import LocatoinSvg from "./Components/SVGs/LocatoinSvg";

const Footer = () => {
    return (
        <div className="">
            <div className=" bg-[#128289] md:pt-10">
                <div className="px-2 lg:px-0 lg:w-4/5 flex flex-col lg:flex-row justify-around md:items-center  mx-auto space-y-10 lg:space-y-0 ">
                    {/* logo */}
                    <div className="" >
                        <div className="flex flex-col items-center pt-20 lg:pt-0  lg:px-10 mb-4">
                            <img className="h-40 w-40 rounded-full" src={logo} alt="" />
                        </div>
                        <div className="flex gap-4  justify-center items-center">
                            {/* facebook */}
                            <Link className="" target="_blank" to={"https://www.facebook.com/identityinclusion"}>
                                <FacebookSvg />
                            </Link>
                            {/* linked in */}
                            <Link className="relative" target="_blank" to={"https://www.linkedin.com/company/identity-inclusion/"}>
                                <LinkedinSvg />
                            </Link>
                            {/* instagram */}
                            <Link className="flex  items-center gap-1 text-xl text-white hover:underline " target="_blank" to={"https://www.instagram.com/identity_inclusion/"}>
                                <InstagramSvg />
                            </Link>
                            <Link className="flex  items-center gap-1 text-xl text-white hover:underline " target="_blank" to={"https://www.youtube.com/@identityinclusion773"}>
                                <YoutubeSvg />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-evenly flex-1 space-y-10 lg:space-y-0   ">
                        {/* socials */}
                        <div>
                            <h1 className="text-xl font-header font-semibold text-white mb-4 tracking-wider ">Services</h1>
                            <div className="space-y-4">
                                <Link
                                    to={'/psycho-social-support'}
                                    className="flex  items-center gap-1 font-text text-white "  >
                                    Psycho-Social Support
                                </Link>
                                <Link
                                    to={'/advocacy'}
                                    className="flex  items-center gap-1 font-text  text-white">
                                    Advocacy & Awarenessz
                                </Link>
                                <Link
                                    to={'/consultancy'}
                                    className="flex  items-center gap-1 font-text text-white "  >
                                    Consultancy
                                </Link>
                                <Link
                                    to={'/capacity'}
                                    className="flex  items-center gap-1 font-text text-white "  >
                                    Capacity Building
                                </Link>
                            </div>

                        </div>
                        {/* contact us */}
                        <div>
                            <h1 className="text-xl font-semibold font-header text-white mb-4 tracking-wider ">Contact us</h1>
                            <div className="space-y-4">
                                <Link className="flex  items-center gap-1 font-text text-white " target="_blank" to={"tel:+8801746-632402"}>
                                    <MobileSvg />
                                    01746-632402</Link>
                                <Link className="flex  items-center gap-1 font-text text-white " >
                                    <MailSvg />
                                    identityinclusion@gmail.com
                                </Link>
                                <Link className="flex  items-center gap-1 font-text text-white hover:underline " target="_blank" to={"https://maps.app.goo.gl/1uhkB3gAB89x3UGE6"} >
                                    <LocatoinSvg />
                                    House-260, Road- 3 Baridhara , Dhaka
                                </Link>


                            </div>

                        </div>
                    </div>
                </div>
                <div className="text-white font-text  py-10 md:py-4 px-4 text-end text-sm">
                    All rights reserved by <span className="text-whit font-header">Identity Inclusion</span> &copy;
                    {(new Date().getFullYear())}
                </div>
            </div>

        </div>
    );
};

export default Footer;