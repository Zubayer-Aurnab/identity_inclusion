import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white_bg.png"
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { MdAddCall } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Footer = () => {
    return (
        <div className="font-header">
            <svg xmlns="http://www.w3.org/2000/svg" className="lg:mt-[-200px]" viewBox="0 0 1440 220">
                <path fill="#128289" fillOpacity="1" d="M0,192L80,181.3C160,171,320,149,480,154.7C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div className=" bg-[#128289] pb-10">
                <div className="px-2 lg:px-0 lg:w-4/5 flex flex-col lg:flex-row justify-around items-center  mx-auto space-y-10 lg:space-y-0">
                    {/* logo */}
                    <div className="flex flex-col items-center pt-20 lg:pt-0  lg:px-10">
                        <img className="h-48 w-48 rounded-full" src={logo} alt="" />
                        <h1 className=" text-3xl font-semibold tracking-wider text-white py-2">IDENTITY INCLUSION</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-evenly flex-1 space-y-10 lg:space-y-0">
                        {/* socials */}
                        <div>
                            <h1 className="text-2xl font-semibold text-white mb-4 tracking-wider  underline">Socials</h1>
                            <div className="space-y-2">
                                <Link className="flex  items-center gap-1 text-xl text-white hover:underline " target="_blank" to={"https://www.facebook.com/identityinclusion"}><TiSocialFacebook color="white" size={30} />Facebook</Link>
                                <Link className="flex  items-center gap-1 text-xl text-white hover:underline " target="_blank" to={"https://www.linkedin.com/company/identity-inclusion/"}><TiSocialLinkedin color="white" size={30} />LinkedIn</Link>
                                <Link className="flex  items-center gap-1 text-xl text-white hover:underline " target="_blank" to={"https://www.instagram.com/identity_inclusion/"}><TiSocialInstagram color="white" size={30} />Instagram </Link>
                                <Link className="flex  items-center gap-1 text-xl text-white hover:underline " target="_blank" to={"https://www.youtube.com/@identityinclusion773"}><TiSocialYoutube color="white" size={30} />Youtube </Link>
                            </div>

                        </div>
                        {/* address */}
                        <div>
                            <h1 className="text-2xl font-semibold text-white mb-4 tracking-wider underline">Contact us</h1>
                            <div className="space-y-4">
                                <Link className="flex  items-center gap-1 text-xl text-white hover:underline " target="_blank" to={"tel:+8801746-632402"}><MdAddCall color="white" size={30} />01746-632402</Link>
                                <Link className="flex  items-center gap-1 text-xl text-white hover:underline " >
                                    <MdAttachEmail color="white" size={30} />identityinclusion@gmail.com
                                </Link>

                                <Link className="flex  items-center gap-1 text-xl text-white hover:underline " target="_blank" to={"https://maps.app.goo.gl/1uhkB3gAB89x3UGE6"} >
                                    <ImLocation color="white" size={30} />House- 260 Road- 3 Baridhara , Dhaka
                                </Link>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;