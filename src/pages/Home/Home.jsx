import { useEffect } from "react";
import Banner from "../../component/Banner/Banner";
import HomeText from "../../component/HomeText/HomeText";
import Services from "../../component/Services/Services";
import Aos from "aos";
import PictureSlider from "../../component/PictureSlider/PictureSlider";



const Home = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <Banner />
            <HomeText />
            <div data-aos="fade-up" data-aos-duration="2000">
                <Services />
            </div>
            <PictureSlider />

        </div>
    );
};

export default Home;