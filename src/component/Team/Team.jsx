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
            description: `Shamsin Ahmed leads Identity Inclusion with a passion for fostering inclusive practices in psychosocial support and societal development.`,
        },
        {
            name: 'Arefeen Ahmed',
            title: 'Disability Inclusion Consultant',
            image: arefeen,
            description: `Arefeen brings extensive experience in disability inclusion, inclusive communications, knowledge management, disaster management, and marketing. With over a decade in marketing and social research, she has held key roles such as Communications and Public Private Partnership Manager, Deputy Manager Response, and Senior Researcher at organizations like RTI International, BRAC, WaterAid Bangladesh, and ADEC Australia. Currently, she is a disability inclusion consultant at Identity Inclusion.`,
        },
        {
            name: 'Farah Tabassum Shamma',
            title: 'Psychosocial Skill Trainer',
            image: shamma,
            description: `Shamma has been involved with Identity Inclusion as a Psychosocial Supporter and Skills Trainer since 2016. She received Training of Trainers on Psychosocial Support and Communication Skills, training university students, community volunteers, and various private organizations. She supported children with psychosocial disabilities and facilitated support group meetings. After earning her MS in Clinical Psychology, she worked as an MHPSS Officer at Handicap International, continuing her involvement with Identity Inclusion as a Mental Health Professional. She is currently a Psychologist and an M.Phil Researcher at the Department of Clinical Psychology, University of Dhaka`,
        },
        {
            name: 'Kaniz Koly',
            title: 'Psychosocial Skill Trainer',
            image: koly,
            description: `Kaniz Fatema is an Industrial and Organizational Psychologist and Counselor. She has been working as a Trainer of Psycho-social Skills and self-care for the last 8 years with Identity Inclusion. She has facilitated many trainings Including Psychosocial Skills training to Bangladesh Police, Barguna, graduate students of Shahjalal University of Science and Technology. Kaniz is also trained in Psycho-traumatology, HR Counselling, Mindfulness, Mental Health First Aid and Transactional Analysis. She completed her bachelor’s degree in psychology and master’s in industrial and organizational psychology from the University of Dhaka. She is a certified NLP Master Practitioner and EMDR Level 1 therapist.`,
        },
        {
            name: 'Amar Bikash Chakma',
            title: 'Management Trainee',
            image: bikash,
            description: `Amar Bikash Chakma has a Master’s degree in Social Work and is dedicated to societal development and mental health, and extensive experience in research, societal development, and operational management. Amar oversees Identity Inclusion’s psychosocial support programs, which provide vital mental health assistance to marginalized communities. With a strong commitment to fostering inclusivity, he manages the organization's operational and financial aspects, ensuring seamless program execution and sustainable growth.`,
        },
        {
            name: 'Kohinoor Akter',
            title: 'Management Trainee',
            image: kohinoor,
            description: `Kohinoor Akter is a skilled mental health professional with a Master's in Psychology and extensive experience in psychosocial support. Trained in suicide prevention practices and Cognitive Behavior Therapy, Kohinoor began her journey as a volunteer, providing psychosocial support to individuals with mental health challenges. Now, as a Psychosocial Support Skills Trainer, she trains current volunteers and stakeholders, including school teachers, to equip them with essential skills for supporting mental well-being in their communities. `,
        },
    ];

    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleDescription = (index) => {
        setOpenIndexes((prev) => {
            if (prev.includes(index)) {
                return prev.filter((i) => i !== index); // Hide description
            } else {
                return [...prev, index]; // Show description
            }
        });
    };

    return (
        <div className="grid lg:grid-cols-3 justify-center gap-10">
            {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img
                        loading="lazy"
                        className="w-44 h-44 object-cover rounded-full"
                        src={member.image}
                        alt={member.name}
                    />
                    <div className="mt-4 text-center">
                        <h1 className="text-xl font-semibold font-[Roboto]">{member.name}</h1>
                        <p className="text-[#118088] font-semibold tracking-widest text-[13px] font-[Ubuntu]">
                            {member.title}
                        </p>
                        <button
                            onClick={() => toggleDescription(index)}
                            className="mt-2 text-sm text-white bg-[#118088] px-4 py-1 rounded-md hover:bg-[#0e706e] transition"
                        >
                            {openIndexes.includes(index) ? 'Hide Details' : 'Show Details'}
                        </button>
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndexes.includes(index) ? 'max-h-[400px]' : 'max-h-0'
                                }`}
                        >
                            <p className="mt-4 text-justify font-medium tracking-widest text-[13px] font-[Ubuntu]">
                                {member.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
