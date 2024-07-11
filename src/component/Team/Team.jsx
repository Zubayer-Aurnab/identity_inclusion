import sazzadul from '../../assets/images/Team/Sazzadur Rahman Rafi.jpg'
import shamma from '../../assets/images/Team/Psychosocial Skill TrainerShamma.jpg'
import koly from '../../assets/images/Team/Psychosocial Skill Trainer - Kaniz Koly .jpg'
import kohinoor from '../../assets/images/Team/Kohinoor Akter Habiba, Management Trainee.jpg'
import arefeen from '../../assets/images/Team/Disability Inclusion Consultant Arefeen Ahmed .jpg'
import bikash from '../../assets/images/Team/Amar Bikash Chakma, Management Trainee.jpg'
import ceo from '../../assets/images/ceo.png'

const Team = () => {
    return (
        <div className='grid lg:grid-cols-4 justify-center gap-10 '>
            <div className=''>
                <img className='w-44 h-44 object-cover  rounded-full  ' src={ceo} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'> Shamsin Ahmed</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[12px]'>CEO & Lead Consultant </p>
                </div>
            </div>
            <div >
                <img className='w-44 h-44 object-cover  rounded-full  ' src={sazzadul} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'> Sazzadur Rahman Rafi</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[12px]'>title</p>
                </div>
            </div>
            <div >
                <img className='w-44 h-44 object-cover  rounded-full  ' src={shamma} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'> Shamma</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[12px] '>Psychosocial Skill Trainer</p>
                </div>
            </div>
            <div >
                <img className='w-44 h-44 object-cover  rounded-full ' src={koly} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'> Kaniz Koly</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[12px] '>Psychosocial Skill Trainer</p>
                </div>
            </div>
            <div >
                <img className='w-44 h-44 rounded-full ' src={kohinoor} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'> Kohinoor Akter Habiba</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[12px] '>Management Trainee</p>
                </div>
            </div>
            <div >
                <img className='w-44 h-44 object-cover  rounded-full ' src={bikash} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'> Amar Bikash Chakma</h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[12px]'>Management Trainee</p>
                </div>
            </div>
            <div className='' >
                <img className='w-44 h-44 rounded-full ' src={arefeen} alt="" />
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'>Arefeen Ahmed </h1>
                    <p className='text-[#118088] font-semibold tracking-widest text-[12px] '> Disability Inclusion Consultant</p>
                </div>
            </div>

        </div>
    );
};

export default Team;