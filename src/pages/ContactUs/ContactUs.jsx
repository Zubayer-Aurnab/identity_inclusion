import Aos from "aos";
import { useEffect } from "react";
import fb from '../../assets/logos/fb.png'
import lin from '../../assets/logos/lin.webp'
import yt from '../../assets/logos/yt.webp'
import insta from '../../assets/logos/in.png'

const ContactUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className="h-[45vh] bg-gradient-to-b from-[#c0e1bd] to-[#0d7f88]"></div>
            <div className="relative bottom-64 px-5 lg:px-0 lg:w-[60%] mx-auto ">
                <h1 className='text-3xl md:text-3xl lg:text-6xl  text-white font-medium mb-7 font-header'>Contact Us</h1>
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="h-5 bg-[#118189] rounded-t-xl shadow-2xl" ></div>
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-white shadow-2xl rounded-b-2xl" >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3650.118077350762!2d90.4127013!3d23.8143999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7004413864f%3A0x13c2fdec34e43db1!2sIdentity%20inclusion!5e0!3m2!1sen!2sbd!4v1727100698592!5m2!1sen!2sbd"
                        className="w-full h-96 rounded-b-2xl "
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="flex justify-center items-center py-4">
                        <a href="https://www.facebook.com/identityinclusion" target="_blank">
                            <img src={fb} className="h-12  w-20 object-contain hover:scale-125 transition-all ease-in-out duration-500 " alt="" />
                        </a>
                        <a href="https://www.linkedin.com/company/identity-inclusion/posts/?feedView=all" target="_blank">
                            <img src={lin} className="h-14  w-24 object-contain hover:scale-125 transition-all ease-in-out duration-500" alt="" />
                        </a>
                        <a href="https://www.instagram.com/identity_inclusion/" target="_blank">
                            <img src={insta} className="h-12  w-20 object-contain hover:scale-125 transition-all ease-in-out duration-500" alt="" />
                        </a>
                        <a href="https://www.youtube.com/@identityinclusion773" target="_blank">
                            <img src={yt} className="h-12  w-20 object-contain hover:scale-125 transition-all ease-in-out duration-500" alt="" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;