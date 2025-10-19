import React from 'react'
import italy1 from './pics/Italy1.png'
import china2 from './pics/China2.png'
import australia3 from './pics/Australia3.png'
import finland4 from './pics/Finland4.png'
import sweden5 from './pics/Sweden5.png'
import uk6 from './pics/Uk6.jpeg'
import usa7 from './pics/Usa7.jpeg'
import georgia8 from './pics/GeorgianFlag3.png'  
import Kyrgyzstan9 from './pics/KyrgyzstanFlag1.png'  


import { useNavigate } from 'react-router-dom';
import {
    Routes,
    Route
  } from "react-router-dom";
  

import { Box1 } from './Box';
export default function Countries() {
    const navigate =useNavigate();
  return (
    <div className='pb-8 bg-[#1e1e27] min-h-screen'>
    <div className='text-center pt-[2rem]'>
    {/* <p className='text-[0.75rem] text-red-600 font-semibold'>CONTACT INFORMATION</p> */}
        <p className='text-[2.1rem] text-[#df0139] tracking-wide font-semibold uppercase'>Explore Boundless Academic Horizons Globally</p>
        {/* <p className='text-[2.1rem] mt-[-0.7rem] text-red-800 tracking-tight font-semibold'>Guide You</p> */}
    </div>
    {/* ---------------------------------Button------------------------------------ */}
    <div className='lg:flex min-[315px]:flex-row gap-8 justify-center mt-8 px-4'>
    <div onClick={()=>{navigate("italy")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>ITALY</p>
    </div>
    <div onClick={()=>{navigate("finland")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>FINLAND</p>
    </div>
    <div onClick={()=>{navigate("sweden")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>SWEDEN</p>
    </div>
    <div onClick={()=>{navigate("china")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>CHINA</p>
    </div>
    <div onClick={()=>{navigate("australia")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>AUSTRALIA</p>
    </div>
    <div onClick={()=>{navigate("uk")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>UK</p>
    </div>
    <div onClick={()=>{navigate("usa")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>USA</p>
    </div>
     <div onClick={()=>{navigate("georgia")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>Georgia</p>
    </div>
     <div onClick={()=>{navigate("Kyrgyzstan")}} className='text-center px-7 py-3 border border-[#df0139] rounded-2xl hover:bg-[#df0139] cursor-pointer transition-all duration-300 mb-4 lg:mb-0'>
        <p className='text-[1rem] font-semibold text-gray-200 hover:text-white'>Kyrgyzstan</p>
    </div>
    </div>
    {/* ------------------------------------BOX-------------------------------------- */}
    <div className='mt-8'>
    <Routes>
        <Route path='italy' element={<Box1 uni1="Polytechnic institute of Milan" uni2="Polytechnic institute of Turin" uni3="Polytechnic institute of Gregoriana" uni4="University of Bologna" uni5="University of Padua" uni6="University of Perugia" uni7="Many More..." unipic8={italy1}/>}/>
        <Route path='finland' element={<Box1 uni1="University in Lappeenranta" uni2="University of Helsinki" uni3="University of Turku" uni4="LUT University" uni5="Tallinn University of Technology" uni6="Tampere University" uni7="Many More..." unipic8={finland4}/>}/>
        <Route path='sweden' element={<Box1 uni1="Stockholm University " uni2="LUND University" uni3="Malardalen University" uni4="Jonkoping University" uni5="InnoEnergy MasterPLus" uni6="EIT Digital " uni7="Many More..." unipic8={sweden5}/>}/>

        <Route path='australia' element={<Box1 uni1="Kings Owns Institute " uni2="Northwest College " uni3="Milcom institute " uni4="Reach Community College" uni5="Salford College" uni6="AIBT" uni7="Many More..." unipic8={australia3}/>}/>
        <Route path='china' element={<Box1 uni1="China Pharamaceutical University" uni2="North China Electric Power University institute of Turin" uni3="Northwestren Polytechnic University" uni4="Donghua University" uni5="University of South China" uni6="Jiangsu University " uni7="Many More... " unipic8={china2}/>}/>
       
        <Route path='uk' element={<Box1 uni1="Abertay University" uni2="University of Bedfordshire" uni3="University of Bolton" uni4="University of Stirling" uni5="University of West Scotland" uni6="Durham University" uni7="Many More..." unipic8={uk6}/>}/>
        <Route path='usa' element={<Box1 uni1="University of North Texas" uni2="King Education" uni3="University of Kanas" uni4="KAPLAN" uni5="Pace University " uni6="Simmons University" uni7="Many More..." unipic8={usa7}/>}/>
        <Route path='georgia' element={<Box1 uni1="Alte University" uni2="Georgian National University SEU" uni3="New Vision University" uni4="Caucasus International Univeursity" uni5="" uni6="" uni7="Many More..." unipic8={georgia8}/>}/>
        <Route path='Kyrgyzstan' element={<Box1 uni1="International University of Kyrgyzstan" uni2="Avicenna International Medical University"  uni3="Asian Medical Institute" uni4="Royal Metropolitan University" uni5="" uni6="" uni7="Many More..." unipic8={Kyrgyzstan9}/>}/>

    </Routes>
    
    </div>
    
    </div>
  )
}