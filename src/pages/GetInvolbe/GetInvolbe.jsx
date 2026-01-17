import React from 'react';
import { useGetGetInvolbeApiQuery } from "../../Redux/Apis/getInvolbeApi";
import {
    Briefcase,
    Target,
    ShieldCheck,
    Mail,
    MapPin,
    Phone,
    ArrowRight,
    Loader2,
    Compass,
    Plus
} from 'lucide-react';
import { useCompanyQuery } from '../../Redux/Apis/companyApi';

const GetInvolbe = () => {
    const { data: jobs, isLoading } = useGetGetInvolbeApiQuery({});
    const { data: companyData, isLoading: isCompanyLoading } = useCompanyQuery();
    if (isLoading || isCompanyLoading) return (
        <div className="h-screen flex items-center justify-center bg-bg">
            <Loader2 className="animate-spin text-theme" size={40} />
        </div>
    );

    return (
        <div className="min-h-screen bg-bg font-text text-slate-700 pt-20">
            {/* --- MINIMALIST HERO --- */}
            <header className="pt-24 pb-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 text-theme mb-4">
                                <Compass className="animate-spin-slow" size={24} />
                                <span className="font-header font-bold uppercase tracking-[0.3em] text-xs">Pathways to Impact</span>
                            </div>
                            <h1 className="font-header text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] uppercase">
                                Make your <br /> <span className="text-theme">Mark.</span>
                            </h1>
                        </div>
                        <p className="max-w-md text-slate-500 font-medium leading-relaxed border-l-2 border-theme-light pl-6">
                            You can get involved with Identity Inclusion in meaningful ways. Each role offers a unique opportunity to contribute to inclusive development.
                        </p>
                    </div>
                </div>
            </header>

            {/* --- BENTO LISTINGS --- */}
            <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
                {jobs?.map((job, i) => (
                    <section key={job.id} className="relative">
                        {/* Title & Floating Number */}
                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="font-header text-6xl font-black text-theme/10 select-none">0{i + 1}</span>
                            <h2 className="font-header text-3xl font-black text-slate-900 uppercase tracking-tighter">{job.title}</h2>
                        </div>

                        {/* Bento Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            {/* Purpose Box */}
                            <div className="md:col-span-4 bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm flex flex-col justify-center">
                                <h4 className="font-header text-[10px] font-black text-theme uppercase tracking-widest mb-4">Purpose</h4>
                                <p className="text-lg font-medium text-slate-700 leading-snug">
                                    {job.purpose}
                                </p>
                            </div>

                            {/* Responsibilities Box */}
                            <div className="md:col-span-5 bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl shadow-slate-200">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-header text-[10px] font-black text-theme-light uppercase tracking-widest">Key Responsibilities</h4>
                                    <Target size={18} className="text-theme-light opacity-50" />
                                </div>
                                <ul className="space-y-4">
                                    {job.responsibilities?.map((r, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-light text-slate-300 leading-relaxed group">
                                            <Plus size={14} className="text-theme shrink-0 mt-1 transition-transform group-hover:rotate-90" />
                                            {r.responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Eligibility Box */}
                            <div className="md:col-span-3 bg-theme p-8 rounded-[2rem] text-white">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-header text-[10px] font-black text-white/60 uppercase tracking-widest">Who Can Apply</h4>
                                    <ShieldCheck size={18} className="text-white/40" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    {job.eligibilities?.map((e, i) => (
                                        <div key={i} className="p-3 bg-white/10 rounded-xl border border-white/10 text-xs font-bold backdrop-blur-md">
                                            {e.eligibility}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            {/* --- MODERN CONTACT GRID --- */}
            <footer className="max-w-6xl mx-auto px-6 py-24 ">
                <div className="relative overflow-hidden bg-white rounded-[3.5rem] border border-slate-200 shadow-[0_32px_64px_-16px_rgba(17,128,136,0.08)]">

                    {/* Subtle Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-theme-light opacity-20 blur-[100px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme opacity-5 blur-[100px] -ml-32 -mb-32" />

                    <div className="relative p-8 md:p-16 lg:p-20">
                        <div className="grid lg:grid-cols-5 gap-16 items-start">

                            {/* Text Content Area */}
                            <div className="lg:col-span-3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme/5 text-theme text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-theme/10">
                                    Collaboration
                                </div>
                                <h2 className="font-header text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase leading-[1.1] tracking-tighter">
                                    Get in <span className="text-theme">touch.</span>
                                </h2>
                                <p className="font-text text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl">
                                    Interested in contributing as a Psychosocial Supporter, Consultant, Advisor, Trainer, or Intern?
                                    <span className="text-slate-900 font-medium italic block mt-4">
                                        Explore opportunities for collaboration with Identity Inclusion.
                                    </span>
                                </p>
                            </div>

                            {/* Contact Information Cards Area */}
                            <div className="lg:col-span-2 space-y-4">
                                <ContactCard
                                    icon={<MapPin size={22} />}
                                    label="Visit Our Office"
                                    value={companyData?.data[0]?.address}
                                />
                                <ContactCard
                                    icon={<Mail size={22} />}
                                    label="Email Inquiry"
                                    value={companyData?.data[0]?.email}
                                    isPrimary
                                />
                                <ContactCard
                                    icon={<Phone size={22} />}
                                    label="Voice Support"
                                    value={companyData?.data[0]?.phone}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const ContactCard = ({ icon, label, value, isPrimary = false }) => (
    <div className={`
        group p-5 rounded-3xl border transition-all duration-300 flex items-center gap-5
        ${isPrimary
            ? 'bg-theme text-white border-theme shadow-lg shadow-theme/20 scale-[1.02]'
            : 'bg-bg/50 border-slate-100 hover:border-theme/30 hover:bg-white'}
    `}>
        <div className={`
            p-3 rounded-2xl transition-colors duration-300
            ${isPrimary ? 'bg-white/20 text-white' : 'bg-white text-theme shadow-sm group-hover:bg-theme group-hover:text-white'}
        `}>
            {icon}
        </div>
        <div>
            <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isPrimary ? 'text-theme-light' : 'text-slate-400'}`}>
                {label}
            </p>
            <p className={`text-sm font-bold leading-tight ${isPrimary ? 'text-white' : 'text-slate-800'}`}>
                {value}
            </p>
        </div>
    </div>
);

export default GetInvolbe;