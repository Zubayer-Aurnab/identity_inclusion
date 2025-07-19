

import logo from '../../../../assets/images/identity inclusion logo.png';
const Company = () => {
    return (
        <div>
            <div className=' pt-20 flex items-center gap-4 '>
                <img loading="lazy" src={logo} className='w-48 h-48 rounded-full object-cover' alt="" />
            </div>
            {/* divider */}
            <div className=' py-5'>
                <div className='h-[1px] bg-slate-300'></div>
            </div>
            <div className='pb-5'>
                <p className='md:text-xl text-justify  font-text '>Identity Inclusion is a development consulting firm that aims to resolve and rectify the approach our institutions and society has towards the marginalized communities. Identity Inclusion started as a project with an aim to helping people with psychosocial disability. Due to mental health stigma stemming from a significant knowledge gap about people with disabilities, they suffer from societal and institutional exclusion. Identity Inclusion helps address and remove the exclusionary practices of institution towards marginalized communities through assessments, awareness raising, capacity building and advocating policy developments. </p>
            </div>
        </div>
    );
};

export default Company;