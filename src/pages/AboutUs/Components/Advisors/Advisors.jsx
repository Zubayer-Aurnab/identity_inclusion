import TeamMembers from '../../../../component/TeamMembers/TeamMembers'
import Title from '../../../../component/Title/Title'
import { useAdvisorsQuery } from '../../../../Redux/Apis/advisorsApi'

const Advisors = () => {

    const { data } = useAdvisorsQuery();
    const AdvisorsData = data?.data
    return (
        <>
            <div id='advisor' className=' my-10 md:my-20'>
                <Title>Advisors</Title>
            </div>
            {/* Advisors */}
            <div className='grid lg:grid-cols-2 gap-5  pb-10'>

                {
                    AdvisorsData?.map((people, i) => (
                        <TeamMembers
                            name={people?.name}
                            photo={people?.image}
                            title={people?.title}
                            description={people.description}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Advisors;