import { useTeamMembersQuery } from '../../Redux/Apis/teamMembersApi';

const Team = () => {
    const { data, isLoading } = useTeamMembersQuery({});
    const TeamMembersData = data?.data || [];

    const Skeleton = () => (
        <div className="bg-gray-50 rounded-xl p-6 h-80 animate-pulse border border-gray-100" />
    );

    return (
        <div id='our_team' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-12">
            {isLoading ? (
                [1, 2, 3].map((n) => <Skeleton key={n} />)
            ) : (
                TeamMembersData?.map((member, index) => (
                    <div 
                        key={index} 
                        className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#118088]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
                    >
                        {/* Image Header */}
                        <div className="relative h-64 overflow-hidden bg-gray-50">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                    {member.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-4 h-[2px] bg-[#118088]"></span>
                                    <p className="text-[#118088] font-semibold text-xs uppercase tracking-wider">
                                        {member.designation}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-500 text-[13px] font-medium leading-relaxed italic mb-3">
                                {member.title}
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                {member.description}
                            </p>
                        </div>

                        {/* Professional Footer Accent */}
                        <div className="h-1 w-0 bg-[#118088] group-hover:w-full transition-all duration-500" />
                    </div>
                ))
            )}
        </div>
    );
};

export default Team;