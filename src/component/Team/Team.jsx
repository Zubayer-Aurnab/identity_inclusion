// import sazzadul from '../../assets/images/Team/Sazzadur Rahman Rafi.jpg'
import shamma from '../../assets/images/Team/Psychosocial Skill TrainerShamma.jpg'
import koly from '../../assets/images/Team/Psychosocial Skill Trainer - Kaniz Koly .jpg'
import kohinoor from '../../assets/images/Team/Kohinoor Akter Habiba, Management Trainee.jpg'
import arefeen from '../../assets/images/Team/Disability Inclusion Consultant Arefeen Ahmed .jpg'
import bikash from '../../assets/images/Team/Amar Bikash Chakma, Management Trainee.jpg'
import ceo from '../../assets/images/ceo.png'

const Team = () => {
    return (
        <div className='grid lg:grid-cols-3 justify-center gap-10  '>
            <div className='flex flex-col items-center'>
                <img loading="lazy" className='w-44 h-44 object-cover  rounded-full  ' src={ceo} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold font-[Roboto]'> Shamsin Ahmed</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[13px] font-[Ubuntu]'>CEO & Lead Consultant </p>
                </div>
            </div>
            <div className='flex flex-col items-center'  >
                <img loading="lazy" className='w-44 h-44 rounded-full ' src={arefeen} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold font-[Roboto]'>Arefeen Ahmed </h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[13px] font-[Ubuntu] '> Disability Inclusion Consultant</p>
                </div>
            </div>

            <div className='flex flex-col items-center' >
                <img loading="lazy" className='w-44 h-44 object-cover  rounded-full  ' src={shamma} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold font-[Roboto]'> Shamma</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[13px] font-[Ubuntu] '>Psychosocial Skill Trainer</p>
                </div>
            </div>
            <div className='flex flex-col items-center' >
                <img loading="lazy" className='w-44 h-44 object-cover  rounded-full ' src={koly} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold font-[Roboto]'> Kaniz Koly</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[13px] font-[Ubuntu] '>Psychosocial Skill Trainer</p>
                </div>
            </div>
            <div className='flex flex-col items-center' >
                <img loading="lazy" className='w-44 h-44 object-cover  rounded-full ' src={bikash} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold font-[Roboto]'> Amar Bikash Chakma</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[13px] font-[Ubuntu]'>Management Trainee</p>
                </div>
            </div>
            <div className='flex flex-col items-center' >
                <img loading="lazy" className='w-44 h-44 rounded-full ' src={kohinoor} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold font-[Roboto]'> Kohinoor Akter </h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[13px] font-[Ubuntu] '>Management Trainee</p>
                </div>
            </div>



        </div>
    );
};

export default Team;