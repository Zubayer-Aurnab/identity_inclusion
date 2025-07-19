
import ceo from '../../../../assets/images/ceo.png';
const Ceo = () => {
    return (
        <div id="word_from_ceo">
            <div className=' pt-10 flex items-center gap-4 '>
                <img loading="lazy" src={ceo} className='w-32 h-32 md:w-48 md:h-48 rounded-full object-cover' alt="" />
                <div>
                    <p className='font-bold md:text-xl font-header'>Shamsin Ahmed</p>
                    <p className='md:text-lg text-[#118088] font-text '>Founder of Identity Inclusion</p>
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
                    className='md:text-xl text-justify text-black font-text'>Shamsin Ahmed founded Identity Inclusion in 2015 to address the needs of people with psychosocial disabilities and break barriers limiting their community participation. Inspired by her elder sister’s exclusion from schools due to epilepsy and schizophrenia, Shamsin realized exclusion both causes and results from poor mental health.
                    In the early days, Shamsin spent all her savings on running the organization as there was no funds for mental health. In 2018, Shamsin started working as a disability inclusion consultant, which set the cornerstone for Identity Inclusion towards becoming a consultancy firm and also influencing institutional changes.
                    Under her leadership, Identity Inclusion combats stigma by supporting families, training youth, advocating for institutional change, and fostering inclusivity. Initially self-funded, the organization evolved into a consultancy in 2018, driven by Shamsin’s work as a disability inclusion consultant.
                    <br />
                    <br />
                    Shamsin holds a certification in Leadership in Mental Health System Development from BRAC University and an MSc in Global Mental Health and Society from the University of Edinburgh. A Chevening Scholar and Acumen Fellow, she has earned numerous accolades, including the bti and The Daily Star Stellar Woman Award for her contributions to mental health and disability inclusion.
                </p>
            </div>
        </div>
    );
};

export default Ceo;