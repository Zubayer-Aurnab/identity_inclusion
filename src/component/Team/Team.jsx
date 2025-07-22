import { useState } from 'react';
import shamma from '../../assets/images/Team/Psychosocial Skill TrainerShamma.jpg';
import koly from '../../assets/images/Team/Psychosocial Skill Trainer - Kaniz Koly .jpg';
import kohinoor from '../../assets/images/Team/Kohinoor Akter Habiba, Management Trainee.jpg';
import arefeen from '../../assets/images/Team/Disability Inclusion Consultant Arefeen Ahmed .jpg';
import bikash from '../../assets/images/Team/Amar Bikash Chakma, Management Trainee.jpg';
import ceo from '../../assets/images/ceo.png';

const Team = () => {
    const teamMembers = [
        {
            name: 'Shamsin Ahmed',
            title: 'CEO & Lead Consultant',
            image: ceo,
            description: `Shamsin Ahmed leads Identity Inclusion, focusing on inclusive psychosocial support and societal development.`,
        },
        {
            name: 'Arefeen Ahmed',
            title: 'Disability Inclusion Consultant',
            image: arefeen,
            description: `Arefeen has extensive experience in disability inclusion and marketing. She has worked with organizations like RTI International, BRAC, and WaterAid Bangladesh.`,
        },
        {
            name: 'Farah Tabassum Shamma',
            title: 'Psychosocial Skill Trainer',
            image: shamma,
            description: `Shamma has been a Psychosocial Supporter and Trainer at Identity Inclusion since 2016. She holds a MS in Clinical Psychology and works as an M.Phil Researcher at the University of Dhaka.`,
        },
        {
            name: 'Kaniz Koly',
            title: 'Psychosocial Skill Trainer',
            image: koly,
            description: `Kaniz Fatema is an Industrial and Organizational Psychologist with 8 years of experience in psychosocial skills training and counseling.`,
        },
        {
            name: 'Amar Bikash Chakma',
            title: 'Management Trainee',
            image: bikash,
            description: `Amar Bikash Chakma holds a Master’s degree in Social Work and manages operational and financial aspects of psychosocial support programs at Identity Inclusion.`,
        },
        {
            name: 'Kohinoor Akter',
            title: 'Management Trainee',
            image: kohinoor,
            description: `Kohinoor Akter is a skilled mental health professional with a Master's in Psychology and trains volunteers and stakeholders in psychosocial support skills.`,
        },
    ];



    return (
        <div id='our_team' className="grid lg:grid-cols-3  justify-center gap-10 ">
            {teamMembers.map((member, index) => (
                <div className='rounded-lg'>
                    <div
                        key={index}
                        className=" transition-all duration-300  rounded-xl p-2  items-end gap-4 "
                    >
                        {/* Image */}
                        <img
                            loading="lazy"
                            src={member.image}
                            alt={member.name}
                            className="h-36 w-32 md:h-60 md:w-36 object-cover rounded-md"
                        />

                        {/* Content */}
                        <div className="text-left ">
                            <h1 className="text-xl font-bold font-headers text-gray-800">{member.name}</h1>
                            <p className="text-[#118088] font-semibold text-[13px] font-text">
                                {member.title}
                            </p>

                        </div>
                    </div>
                    <p className="text-[16px] font-semibold  font-text p-2">
                        {member.description}
                    </p>
                </div>

            ))}
        </div>
    );
};

export default Team;
