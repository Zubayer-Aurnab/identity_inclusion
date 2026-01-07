import Title from "../../component/Title/Title";
import { useGetPsychoSocialSupportQuery } from "../../Redux/Apis/psychoSocialApi";
import PsychoSoialSupportSlider from './Components/PsychoSoialSupportSlider';
import Supporters from './Components/Supporters';

const Psycho_Social_Support = () => {
    const { data, IsLoading } = useGetPsychoSocialSupportQuery({});
    const description = data?.data[0]?.description || '';

    // --- LOADER START ---
    if (IsLoading) {
        return (
            <div className="my-20 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto animate-pulse">
                <div className="h-10 w-64 bg-gray-200 rounded mb-10"></div>
                <div className="space-y-4 mb-10">
                    <div className="h-6 bg-gray-200 rounded w-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="h-[400px] bg-gray-100 rounded-xl mb-16"></div>
                <div className="h-10 w-80 bg-gray-200 rounded mb-10"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="h-40 bg-gray-100 rounded-lg"></div>
                    <div className="h-40 bg-gray-100 rounded-lg"></div>
                    <div className="h-40 bg-gray-100 rounded-lg"></div>
                    <div className="h-40 bg-gray-100 rounded-lg"></div>
                </div>
            </div>
        );
    }
    // --- LOADER END ---

    return (
        <div className="my-40 lg:mb-40 px-2 lg:px-0 lg:w-4/5 mx-auto">
            <Title>
                Psycho-Social Support
            </Title>
            <div className="mt-10 text-justify font-text">
                <h1 className=" text-xl lg:text-xl font-medium tracking-wider ">
                    {description}
                </h1>
                <br />
            </div>
            {/* image slider */}
            <PsychoSoialSupportSlider />
            <div>
                <div className='my-16'>
                    <Title>
                        Our Psycho-Social Supporters
                    </Title>
                </div>
                <Supporters />
            </div>
        </div>
    );
};

export default Psycho_Social_Support;