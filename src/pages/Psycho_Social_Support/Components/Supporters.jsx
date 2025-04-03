import { SupportersData } from "../../../assets/Data/Data";
import { Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
const Supporters = () => {
    const users = SupportersData;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6">
            {users.map((user, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 ease-in-out group relative"
                >
                    <div className=" overflow-hidden h-52">
                        <img
                            src={user.photo}
                            alt={user.fullName}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="p-5 space-y-3">
                        <div className="flex justify-between  items-center">
                            <h2 className="text-xl font-bold text-gray-900 line-clamp-1">{user.fullName}</h2>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                {user.bloodGroup}
                            </span>
                        </div>

                        <div className="flex item-c text-gray-500">
                            <svg className="w-4 h-4 mr-1 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm flex-1">{user.address}</span>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-2">
                            <div className="flex items-center text-sm text-gray-600 ">
                                <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="">{user.email}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>{user.phone}</span>
                            </div>

                            <div className="flex items-center text-sm text-gray-600 ">
                                <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <span className="">{user.qualification}</span>
                            </div>
                        </div>


                        <div className="  pb-10 ">
                            {user.trainings && user.trainings !== false && (
                                <div className=" bg-green-100 text-green-800 flex items-center px-2 rounded-md">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium flex-1 ">
                                        Training: {user.trainings}
                                    </span>
                                </div>
                            )}
                        </div>


                        <div className="pt-3  border-gray-100 absolute bottom-3">
                            {/* <p className="text-xs text-gray-500 italic">{user.consent.join(" ")}</p> */}
                            <Link to={'https://forms.gle/1ducFV1HnXvGExJj6'} target="blank">
                                <Button small>
                                    Book A Session
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Supporters;
