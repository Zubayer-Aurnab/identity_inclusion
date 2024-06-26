import Banner from "../../component/Banner/Banner";
import Services from "../../component/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="my-10  w-4/5 mx-auto">
                <Services />
            </div>
        </div>
    );
};

export default Home;