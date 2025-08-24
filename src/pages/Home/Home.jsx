import { useEffect } from "react";
import Banner from "../../component/Banner/Banner";
import HomeText from "../../component/HomeText/HomeText";

import Aos from "aos";
import Services from "../../component/Services/Services";
import RecentActivities from "../../component/RecentActivities/RecentActivities";
import Loader from "../../component/Loader/Loader";
import UpCommingEvents from "../../component/UpCommingEvents/UpCommingEvents";

// import Loader from "../../component/Loader/Loader";




const Home = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div >
            {/* <Loader /> */}
            <Banner />
            <div className="w-full px-4 lg:w-4/5 mx-auto">
                <HomeText />
                <Services />
                {/* <RecentActivities />
                <UpCommingEvents /> */}
            </div>

        </div>
    );
};

export default Home;