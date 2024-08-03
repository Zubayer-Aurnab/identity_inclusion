import Marquee from "react-fast-marquee";
import img1 from '../../assets/marquee/img1.jpg'
import img2 from '../../assets/marquee/img2.jpg'
import img3 from '../../assets/marquee/img3.jpg'
import img4 from '../../assets/marquee/img4.jpg'
import img5 from '../../assets/marquee/img5.jpg'
import img6 from '../../assets/marquee/img6.jpg'
import img7 from '../../assets/marquee/img7.jpg'
import img8 from '../../assets/marquee/img8.jpg'
import img9 from '../../assets/marquee/img9.jpg'
import img10 from '../../assets/marquee/img10.jpg'
import img11 from '../../assets/marquee/img11.jpg'
import img12 from '../../assets/marquee/img12.jpg'
import img13 from '../../assets/marquee/img13.jpg'
import img14 from '../../assets/marquee/img14.jpg'
import img15 from '../../assets/marquee/img15.jpg'
import img16 from '../../assets/marquee/img16.jpg'
import img17 from '../../assets/marquee/img17.jpg'
import img18 from '../../assets/marquee/img18.jpg'
import img19 from '../../assets/marquee/img19.jpg'
import img20 from '../../assets/marquee/img20.jpg'
import img21 from '../../assets/marquee/img21.jpg'
import img22 from '../../assets/marquee/img22.jpg'
import img23 from '../../assets/marquee/img23.jpg'
import img24 from '../../assets/marquee/img24.jpg'
import img25 from '../../assets/marquee/img25.jpg'
import img26 from '../../assets/marquee/img26.jpg'
import img27 from '../../assets/marquee/img27.jpg'
import img28 from '../../assets/marquee/img28.jpg'
import img29 from '../../assets/marquee/img29.jpg'
import Title from "../Title/Title";
import { useEffect } from "react";
import Aos from "aos";

const PictureSlider = () => {
    const imageClass = "h-64 w-full object-contain lg lg:h-64 mx-3"
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="2000">
                <div className="my-20  after: px-2 lg:px-0 lg:w-4/5 mx-auto ">
                    <Title>
                        Activities
                    </Title>
                </div>
                <div className="mt-10 mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto space-y-5">
                    <Marquee pauseOnHover direction="right" >
                        <img loading="lazy" className={imageClass} src={img1} alt="" />
                        <img loading="lazy" className={imageClass} src={img2} alt="" />
                        <img loading="lazy" className={imageClass} src={img3} alt="" />
                        <img loading="lazy" className={imageClass} src={img4} alt="" />
                        <img loading="lazy" className={imageClass} src={img5} alt="" />
                        <img loading="lazy" className={imageClass} src={img6} alt="" />
                        <img loading="lazy" className={imageClass} src={img7} alt="" />
                        <img loading="lazy" className={imageClass} src={img8} alt="" />
                        <img loading="lazy" className={imageClass} src={img9} alt="" />
                        <img loading="lazy" className={imageClass} src={img10} alt="" />
                        <img loading="lazy" className={imageClass} src={img11} alt="" />
                        <img loading="lazy" className={imageClass} src={img12} alt="" />
                        <img loading="lazy" className={imageClass} src={img13} alt="" />
                        <img loading="lazy" className={imageClass} src={img14} alt="" />
                        <img loading="lazy" className={imageClass} src={img15} alt="" />
                    </Marquee>
                    <Marquee pauseOnHover direction="left" >
                        <img loading="lazy" className={imageClass} src={img16} alt="" />
                        <img loading="lazy" className={imageClass} src={img17} alt="" />
                        <img loading="lazy" className={imageClass} src={img18} alt="" />
                        <img loading="lazy" className={imageClass} src={img19} alt="" />
                        <img loading="lazy" className={imageClass} src={img20} alt="" />
                        <img loading="lazy" className={imageClass} src={img21} alt="" />
                        <img loading="lazy" className={imageClass} src={img22} alt="" />
                        <img loading="lazy" className={imageClass} src={img23} alt="" />
                        <img loading="lazy" className={imageClass} src={img24} alt="" />
                        <img loading="lazy" className={imageClass} src={img25} alt="" />
                        <img loading="lazy" className={imageClass} src={img26} alt="" />
                        <img loading="lazy" className={imageClass} src={img27} alt="" />
                        <img loading="lazy" className={imageClass} src={img28} alt="" />
                        <img loading="lazy" className={imageClass} src={img29} alt="" />
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default PictureSlider;