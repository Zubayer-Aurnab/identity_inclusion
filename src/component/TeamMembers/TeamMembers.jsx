import React from 'react';

// eslint-disable-next-line react/prop-types
const TeamMembers = ({ name, photo, description, }) => {
    return (
        <div className="relative flex flex-col p-5 bg-white border border-slate-100 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">

            {/* Top Section: Avatar & Identity */}
            <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                    {/* Subtle Ring Decor */}
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-theme/20 to-transparent blur-[2px]" />
                    <img
                        src={photo}
                        alt={name}
                        className="relative h-36 w-36 rounded-full object-contain border-2 border-white shadow-sm"
                    />
                </div>

                <div className="flex flex-col">
                    <h3 className="text-4xl font-header font-bold text-slate-900 leading-tight">
                        {name}
                    </h3>
                </div>
            </div>

            {/* Description Section with a soft tint background */}
            <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100/50">
                <p className="text-lg font-text  leading-relaxed text-slate-600 font-semibold">
                    {description}
                </p>
            </div>

            {/* Bottom Action/Status Bar */}

        </div>
    );
};

export default TeamMembers;