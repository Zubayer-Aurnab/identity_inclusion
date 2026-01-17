import { useTeamMembersQuery } from '../../Redux/Apis/teamMembersApi';

const Team = () => {
    const { data, isLoading } = useTeamMembersQuery({});
    const TeamMembersData = data?.data || [];

    const Skeleton = () => (
        <div className="bg-gray-100 rounded-2xl h-[450px] animate-pulse" />
    );

    return (
        <div id='our_team' className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {isLoading ? (
                    [1, 2, 3].map((n) => <Skeleton key={n} />)
                ) : (
                    TeamMembersData?.map((member, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 "
                        >
                            {/* Image Container */}
                            <div className="relative h-[400px] overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Modern Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                
                                {/* Overlay Content (Always visible on bottom) */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <p className="text-[#2DD4BF] font-bold text-xs font-text uppercase tracking-[0.2em] mb-1">
                                        {member.designation}
                                    </p>
                                    <h3 className="text-2xl font-semibold tracking-tight font-header">
                                        {member.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Hover Details Panel */}
                            <div className="absolute inset-0 bg-[#118088]/95 p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <div className="mb-4">
                                    <h3 className="text-white text-2xl font-bold font-text">{member.name}</h3>
                                    <p className="text-teal-200 text-sm font-medium">{member.title}</p>
                                </div>
                                <div className="w-12 h-[2px] bg-white/30 mb-4" />
                                <p className="text-white/90 text-lg leading-relaxed line-clamp-6 mb-6 font-text">
                                    {member.description}
                                </p>
                                
                                
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Team;