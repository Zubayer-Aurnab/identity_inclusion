import julian from '../../../../assets/images/TeamMembers/Julian Francis.jpg'
import wahid from '../../../../assets/images/TeamMembers/Dr. Syed Shabab Wahid.jpg'
import umme from '../../../../assets/images/TeamMembers/Umme Kawser (2).jpg'
import dip from '../../../../assets/images/TeamMembers/Dr M. Tasdik Hassan.jpg'
import Sudipa from '../../../../assets/images/TeamMembers/Sudipa Sarkar.jpg'
import kamrul from '../../../../assets/images/TeamMembers/Kamrul Hassan (1).jpg'
import Title from '../../../../component/Title/Title'
import TeamMembers from '../../../../component/TeamMembers/TeamMembers'

const Advisors = () => {
    const teamData = [
        {
            name: "Julian Francis",
            photo: julian,
            title: "Founder",
            description:
                "Born in 1945 in London, gained early insight into disability through a brother with Down’s Syndrome. In 1971, coordinated aid for 600,000 refugees during the Bangladesh Liberation War with Oxfam. In 1985, moved to Bangladesh with CUSO and played a key role in disability advocacy, helping establish NFOWD, drafting the first Bangladesh Disability Policy, and pushing for disability-inclusive funding. Now an independent consultant, writes on development, disability, and Liberation War history. Received the “Friends of Liberation War Honour” in 2012.",
        },
        {
            name: "Dr. Shabab Wahid",
            photo: wahid,
            description:
                "Dr. Shabab Wahid is an Assistant Professor of Global Health specializing in mental health research in LMICs. His work focuses on cultural influences on mental illness, community-based interventions, and the impact of climate factors on mental health. He leads studies through the ALIVE project and the INDIGO Partnership, and has researched adolescent depression in Bangladesh, Brazil, Nepal, Nigeria, and the UK.",
        },
        {
            name: "Umme Kawser",
            photo: umme,
            description:
                "Umme Kawser is an Assistant Professor at the University of Dhaka, specializing in educational psychology. Currently pursuing a Ph.D. in Family and Couple Therapy at the University of Minnesota, her research focuses on relationships and couple interventions. Actively involved in mental health advocacy through Identity Inclusion.",
        },
        {
            name: "Dr. Tasdik Dip",
            photo: dip,
            description:
                "Dr. Tasdik is a mental health researcher and medical doctor. He received the Chancellor’s Award for academic excellence in MPH and holds a diploma in Disaster Management. As a PhD scholar at Monash University, he developed a digital mental health intervention. He received the Commonwealth Scholarship, New Voices in Global Health Award, and the Lancet Prize, and published over 95 papers.",
        },
        {
            name: "Sudipa Sarker",
            photo: Sudipa,
            description:
                "Sudipa Sarker, lecturer at Edinburgh Napier University, has 15+ years’ experience. She won the PM Gold Medal from BUET and worked in countries like Singapore, Sweden, and the UK. She secured research funding in Denmark and led MOOCs on supply chain and pandemic response. Her work is published internationally.",
        },
        {
            name: "Kamrul Hassan",
            photo: kamrul,
            description:
                "Kamrul Hassan, advisor at Identity Inclusion, has 17+ years of experience in research, training, and consulting. From telecom to founding Consiglieri Ltd., he leads projects on strategy, research, and facilitation. With engineering and economics degrees, he’s passionate about learning and development.",
        },
    ];

    return (
        <>
            <div id='our_team' className=' my-10 md:my-20'>
                <Title>Advisors</Title>
            </div>
            {/* Advisors */}
            <div className='grid lg:grid-cols-2 gap-5'>

                {
                    teamData.map((people, i) => (
                        <TeamMembers
                            name={people.name}
                            photo={people.photo}
                            title={people.title}
                            description={people.description}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Advisors;