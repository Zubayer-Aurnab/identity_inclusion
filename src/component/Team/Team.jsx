import { useTeamMembersQuery } from '../../Redux/Apis/teamMembersApi';

const Team = () => {
    const { data } = useTeamMembersQuery({});
    const TeamMembersData = data?.data || [];

    return (
        <div id='our_team' className="grid lg:grid-cols-3  justify-center gap-10 ">
            {TeamMembersData?.map((member, index) => (
                <div key={index} className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-t-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all duration-500 p-5">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="size-44 object-contain  "
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-semibold text-gray-900 group-hover:text-[#118088] transition-colors duration-300">
                            {member.name}
                        </h1>

                        <p className="text-sm font-medium text-gray-500 tracking-wide mt-1">
                            {member.title}
                        </p>

                        <p className="text-gray-600 text-[15px] leading-relaxed mt-3">
                            {member.description}
                        </p>
                    </div>

                    {/* Accent Gradient Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[3px] 
                    bg-gradient-to-r from-[#118088] via-[#34d3c5] to-[#118088]
                    opacity-0 translate-y-2 
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500 ease-out rounded-b-3xl">
                    </div>

                </div>


            ))}
        </div>
    );
};

export default Team;
