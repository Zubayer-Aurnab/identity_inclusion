

import logo from '../../../../assets/images/identity inclusion logo.png';
import { useCompanyQuery } from '../../../../Redux/Apis/companyApi';
const Company = () => {
    const { data } = useCompanyQuery({})
    const CompanyDescription = data?.data[0]?.description
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
                <p className='md:text-xl text-justify  font-text '>{CompanyDescription || "loading"}</p>
            </div>
        </div>
    );
};

export default Company;