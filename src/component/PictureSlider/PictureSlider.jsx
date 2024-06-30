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

const PictureSlider = () => {
    const imageClass = "h-64 mx-5"
    return (
        <div className="my-10 w-4/5 mx-auto">
            <Marquee pauseOnHover direction="right" >
                <img className={imageClass} src={img1} alt="" />
                <img className={imageClass} src={img2} alt="" />
                <img className={imageClass} src={img3} alt="" />
                <img className={imageClass} src={img4} alt="" />
                <img className={imageClass} src={img5} alt="" />
                <img className={imageClass} src={img6} alt="" />
                <img className={imageClass} src={img7} alt="" />
                <img className={imageClass} src={img8} alt="" />
                <img className={imageClass} src={img9} alt="" />
                <img className={imageClass} src={img10} alt="" />
                <img className={imageClass} src={img11} alt="" />
                <img className={imageClass} src={img12} alt="" />
                <img className={imageClass} src={img13} alt="" />
                <img className={imageClass} src={img14} alt="" />
                <img className={imageClass} src={img15} alt="" />
            </Marquee>
        </div>
    );
};

export default PictureSlider;