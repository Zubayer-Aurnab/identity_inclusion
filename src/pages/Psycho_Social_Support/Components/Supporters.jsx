import { SupportersData } from "../../../assets/Data/Data";

const Supporters = () => {
    const users = SupportersData;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6">
            {users.map((user, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img
                        src={user.photo}
                        alt={user.fullName}
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 truncate">{user.fullName}</h2>
                        <p className="text-gray-500 mt-2">{user.address}</p>
                        <p className="text-sm text-gray-600 mt-2"><strong>Email:</strong> {user.email}</p>
                        <p className="text-sm text-gray-600 mt-1"><strong>Phone:</strong> {user.phone}</p>
                        <p className="text-sm text-gray-600 mt-1"><strong>Blood Group:</strong> {user.bloodGroup}</p>
                        <p className="text-sm text-gray-600 mt-1"><strong>Gender:</strong> {user.gender}</p>
                        <p className="text-sm text-gray-600 mt-1"><strong>Qualification:</strong> {user.qualification}</p>

                        {/* Conditionally render Trainings if they exist */}
                        {user.trainings && user.trainings !== "No" && (
                            <p className="text-sm text-green-500 mt-2"><strong>Trainings:</strong> {user.trainings}</p>
                        )}

                        <p className="text-xs text-gray-500 mt-3">{user.consent.join(" ")}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Supporters;
