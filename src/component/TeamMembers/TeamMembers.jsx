

// eslint-disable-next-line react/prop-types
const TeamMembers = ({ name, photo, description, }) => {
    return (
        <div className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(17,128,136,0.15)] transition-all duration-500 border border-theme-light/50">
            <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Image with theme accent */}
                <div className="relative">
                    <div className="absolute inset-0 bg-theme-light rounded-xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                    <img
                        loading="lazy"
                        src={photo}
                        alt={`${name}'s photo`}
                        className="w-28 h-28 sm:w-36 sm:h-44 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 border-2 border-white"
                    />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-theme transition-colors duration-300">
                        {name}
                    </h3>

                    <div className="w-10 h-1 bg-gradient-to-r from-theme to-theme-light rounded-full mb-4 group-hover:w-16 transition-all duration-500"></div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium group-hover:text-gray-700 transition-colors duration-300">
                        {description}
                    </p>
                </div>
            </div>

            {/* Theme accent on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-theme-light/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>

    );
};

export default TeamMembers;