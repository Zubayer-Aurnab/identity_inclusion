
import { useCeoQuery } from '../../../../Redux/Apis/ceoApi';
const Ceo = () => {
    const { data } = useCeoQuery();
    const CeoData = data?.data
    return (
        <div id="word_from_ceo">
            <div className=' pt-10 flex items-center gap-4 '>
                <img loading="lazy" src={CeoData?.image} className='w-32 h-32 md:w-48 md:h-48 rounded-full object-cover' alt="" />
                <div>
                    <p className='font-bold md:text-xl font-header'>{CeoData?.name}</p>
                    <p className='md:text-lg text-[#118088] font-text '>{CeoData?.designation}</p>
                </div>
            </div>
            {/* divider */}
            <div className=' py-5'>
                <div className='h-[1px] bg-slate-300'></div>
            </div>
            <div className='pb-5'>
                <p
                    style={{
                        wordSpacing: "0.2rem"
                    }}
                    className='md:text-xl text-justify text-black font-text'>{CeoData?.description}
                </p>
            </div>
        </div>
    );
};

export default Ceo;