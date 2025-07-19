import Lottie from 'lottie-react';
import mission from '.././../../../../public/mission.json';
import values from '.././../../../../public/values.json';
import vision from '.././../../../../public/vision.json';

const MissionVision = () => {
    return (
        <div id="mission_vision" className='mt-'>
            <div className="py-10 ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mission */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="p-6 border border-[#118088] bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                    >
                        <Lottie className="w-32 mb-4 " animationData={mission} />
                        <h2 className="text-2xl font-bold font-header text-[#118088] mb-2 ">Mission</h2>
                        <p className="text-gray-700 text-base font-text">
                            Enable the full potential of excluded individuals by promoting best practices for inclusion through youth leadership and institutional change.
                        </p>
                    </div>

                    {/* Vision */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="p-6 border border-[#118088] bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                    >
                        <Lottie className="w-44 mb-4 " animationData={vision} />
                        <h2 className="text-2xl font-bold font-header text-[#118088] mb-2">Vision</h2>
                        <p className="text-gray-700 text-base font-text">
                            To create inclusive societies that realize the full potential of excluded individuals through institutional and systemic change.
                        </p>
                    </div>

                    {/* Values */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="p-6 border border-[#118088] bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                    >
                        <Lottie className="w-32 mb-4  mt-10" animationData={values} />
                        <h2 className="text-2xl font-bold font-header text-[#118088] mb-2">Values</h2>
                        <p className="text-gray-700 text-base font-semibold font-text">Inclusion, Integrity, Dignity</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MissionVision;