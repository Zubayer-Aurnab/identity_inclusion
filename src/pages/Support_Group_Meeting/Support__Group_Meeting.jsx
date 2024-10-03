import React from 'react';
import Title from '../../component/Title/Title';
import qr from '../../assets/brochures/qr.jpeg'
const Support__Group_Meeting = () => {
    return (
        <div>
            <div className="my-20 lg:mb-40  px-2 lg:px-0 lg:w-4/5 mx-auto  ">
                <Title>
                    Support Group Meeting
                </Title>
                <div className="mt-10 text-justify font-[Ubuntu]">
                    <h1 className=" text-xl lg:text-xl font-medium tracking-wider  ">
                        Support Group meeting is a safe space to express your inner feelings with peopel like you and a mental health professional

                    </h1>
                    <br />
                    <h1 className=" text-xl lg:text-xl font-medium tracking-wider  ">
                        You can join us every 2nd and last satuarday of the month

                    </h1>
                    <br />
                    <h1 className=" text-xl lg:text-xl font-medium tracking-wider  ">
                        Registration Fee : 300 BDT
                    </h1>
                    <br />
                    <h1 className=" text-xl lg:text-xl font-medium tracking-wider  ">
                        To join our next support meeting, scan the QR code below or <a target='_blank' className='text-blue-600 underline' href="https://docs.google.com/forms/d/e/1FAIpQLSeFa58U-vQ32iUo8Ho9aDySO9b5of3A_xfki4tMwBzT-6gCRQ/viewform">click here</a>.
                    </h1>
                </div>
                {/* image section */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10  mt-10">
                    <img loading="lazy" className="h-72 object-cover rounded-md" src={qr} alt="Psycho-Social-Support" />

                </div>
                {/* <div>
                    <img src={first} className=' mt-10' alt="" />
                    <div className=' flex justify-center mt-10'>
                        <a href={firstPdf} download={'first.pdf'} className='w-1/2 flex justify-center '>
                            <Button >
                                Download
                            </Button>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Support__Group_Meeting;