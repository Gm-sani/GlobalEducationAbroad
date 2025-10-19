import React from 'react'
import ContactUs2 from './ContactUs2'
import Home from './Home'
import IntroPage2 from './IntroPage2'
import AppontmentForm from './AppointmentForm'
import RefundPic from './pics/RefundFormPic.png'

export default function Apply() {
  return (
    <div>
      <IntroPage2 namm="Refund Policy"/>
      {/* ------------------------Outer Div------------------------ */}
      <div className='flex '>
        {/* ------------------------------------Description----------------------------------- */}
        <div>
        <div className='flex justify-between'>
            <div className='lg:flex-[0.7]  md:flex-1 bg-white shadow-black shadow-2xl lg:p-[6rem] p-[2rem]'>
                <p className='lg:text-[1.6rem] text-[1rem] font-semibold '>At Edurite Consulting, we value the trust of our clients and aim to maintain transparency in all our services. In case you are eligible for a refund, we have a clear and structured process in place.</p>             
                <p className='lg:text-[1.3rem] text-[1.3rem]  mt-12 '> • To initiate a refund request, clients must submit the official Refund Form.</p>                  
                <p className='lg:text-[1.3rem] text-[0.9rem] mt-5'> • The Refund Form can be downloaded from our website or collected directly from our office.</p> 
                <p className='lg:text-[1.3rem] text-[0.9rem] mt-5'> • After completing the Refund Form, clients should scan the filled form and send it via WhatsApp to +92-300-1488995 or email it to info@eduriteconsulting.com.</p>       
                <p className='lg:text-[1.3rem] text-[1.3rem] mt-5'> • Once the completed Refund Form is submitted, our team will verify the details and process your request.</p>                                
                <p className='lg:text-[1.3rem] text-[0.9rem] mt-5  text-slate-900'> • The approved refund amount will be transferred only to the bank account provided by the client in the Refund Form.</p>                    
                <p className='lg:text-[1.3rem] text-[0.9rem] mt-5  text-slate-900'> • Please note that the refund process may take up to 60 working days from the date of submission of the Refund Form.</p>                                     
                <p className='lg:text-[1.3rem] text-[0.9rem] mt-5  text-slate-900'> • We are committed to handling all refund requests fairly and within the stated timeline. For any assistance, please feel free to contact our support team.</p>      
            </div>
        </div>
        </div>
       {/* ------------------------------Right-form-Download----------------------------- */}
        <div className="flex items-center ">        
        <a 
            href="./pics/Refund Form Edurite.pdf" 
            download="Edurite_RefundForm.pdf"
            className="cursor-pointer"
        >
            <img 
            src={RefundPic}
            alt="Download Refund Form"
            className="p-3 py-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
            />
        </a>
        </div>

      </div>

    </div>
  )
}
