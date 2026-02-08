import { useTeamMembersQuery } from '../../Redux/Apis/teamMembersApi';

const Team = () => {
    const { data, isLoading } = useTeamMembersQuery({});
    const TeamMembersData = data?.data || [];

    const Skeleton = () => (
        <div className="bg-gray-100 rounded-[2.5rem] h-[550px] animate-pulse" />
    );

    return (
        <section id='our_team' className="">
            <div className="max-w-7xl mx-auto px-6">

                {/* Minimalist Header */}
                {/* <div className="max-w-3xl mb-16">
                    <h2 className="text-[#118088] font-bold text-sm uppercase tracking-[0.25em] mb-4">
                        Leadership
                    </h2>
                    <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
                        Built by the best in the industry.
                    </h1>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        [1, 2, 3].map((n) => <Skeleton key={n} />)
                    ) : (
                        TeamMembersData?.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(17,128,136,0.15)] hover:-translate-y-2"
                            >
                                {/* Photo Section */}
                                <div className="relative h-[320px] rounded-[2rem] overflow-hidden mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    {/* Subtle internal shadow for depth */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
                                </div>

                                {/* Content Section (Fully Visible) */}
                                <div className="px-4 pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-header text-2xl font-bold text-slate-900 leading-tight">
                                                {member.name}
                                            </h3>
                                            <p className="text-[#118088] font-semibold text-xs uppercase tracking-wider mt-1 font-header">
                                                {member.designation}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full h-[1px] bg-slate-100 mb-4" />

                                    <p className="text-slate-500 text-md leading-relaxed font-header font-semibold">
                                        {member.description}
                                    </p>

                                    {/* Static "Contact/Profile" indicator */}

                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Team;