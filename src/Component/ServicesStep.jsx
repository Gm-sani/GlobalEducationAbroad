import React from 'react'
import form1pic from './pics/form_1.png'
import docPayment2pic from './pics/doc_payment_2.png'
import approval3pic from './pics/approval_3.png'
export default function ServicesStep() {
  return (
    <div className='pb-4 bg-[#1e1e27] min-h-screen py-12'>
      <p className='text-[0.85rem] text-white font-semibold text-center mt-5 '>PROCESS OVERVIEW</p>
      <p className='text-[2rem] font-bold mt-[0.1rem] text-center text-3xl lg:text-3xl bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent mb-6 uppercase'>Unforgettable Getaways Escaping Routine</p>
    
    <div className='mt-10 lg:flex md:flex-row gap-12 justify-center px-4'>
       {/* ----------------------------first------------------------------------ */}
        <div className='group'>
            <div className='border-2 cursor-pointer border-dotted p-3 border-[#df0139]/50 hover:border-[#df0139] rounded-full m-auto w-fit transition-all duration-300 group-hover:scale-110'>
            <img src={form1pic} alt="form1pic" className='h-[5rem] bg-white p-2 rounded-full'/>
            </div>
            <p className='text-[1.2rem] font-semibold text-center mt-4 text-[#e2e2e2] group-hover:text-[#df0139] transition-colors duration-300 uppercase'>Apply Online</p>
            <p className='text-[0.85rem] mt-2 text-gray-400 w-[17rem] lg:mx-[0rem] mx-auto text-center group-hover:text-gray-300 transition-colors duration-300'>Submit Your Visa Application with Our Online Form</p>
        </div>
        {/* ----------------------------second------------------------------------ */}
        <div className='lg:mt-[0rem] mt-[2.5rem] group'>
            <div className='border-2 cursor-pointer border-dotted p-3 border-[#df0139]/50 hover:border-[#df0139] rounded-full m-auto w-fit transition-all duration-300 group-hover:scale-110'>
            <img src={docPayment2pic} alt="docPayment2pic" className='h-[5.2rem] bg-white p-1 rounded-full'/>
            </div>
            <p className='text-[1.2rem] font-semibold text-center mt-4 text-[#e2e2e2] group-hover:text-[#df0139] transition-colors duration-300 uppercase'>Submit Document</p>
            <p className='text-[0.85rem] mt-2 text-gray-400 w-[17rem] lg:mx-[0rem] mx-auto text-center group-hover:text-gray-300 transition-colors duration-300'>Submit Required Documents and Payments for Visa</p>
        </div>
             {/* ----------------------------third------------------------------------ */}
        <div className='lg:mt-[0rem] mt-[2.5rem] group'>
            <div className='border-2 cursor-pointer border-dotted p-3 border-[#df0139]/50 hover:border-[#df0139] rounded-full m-auto w-fit transition-all duration-300 group-hover:scale-110'>
            <img src={approval3pic} alt="approval3pic" className='h-[5.2rem] bg-white p-1 rounded-full'/>
            </div>
            <p className='text-[1.2rem] font-semibold text-center mt-4 text-[#e2e2e2] group-hover:text-[#df0139] transition-colors duration-300 uppercase'>Receive Visa</p>
            <p className='text-[0.85rem] mt-2 text-gray-400 w-[17rem] lg:mx-[0rem] mx-auto text-center group-hover:text-gray-300 transition-colors duration-300'>Receive Your Approved Visa Quickly and Easily</p>
        </div>
    </div>
    </div>
  )
}