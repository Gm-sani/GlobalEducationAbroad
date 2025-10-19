import React from "react";
import slider2 from "./pics/WorldMap01.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';


export default function Slider() {
    const navigate =useNavigate();
  
  return (
    <div className="relative mt-4">
      {/* Background Image */}
      <img
        src={slider2}
        alt="Slider background"
        className="lg:h-[90vh] lg:w-[95vw] m-auto object-cover min-[310px]:h-[30vh] min-[310px]:w-[95vw] opacity-40"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col mt-[20rem] px-12">
        <p className="text-[2.7rem] text-black font-semibold font-sans">
          Your Trusted Student Visa
        </p>
        {/* ---------------------Outer Div----------------- */}
        <div className="flex  gap-[30rem]">
          {/* ---------------------------------Left Div-------------------- */}
       <div>
        <p className="text-[2.6rem] text-black font-sans mt-[-1rem]">
          Consultant in Pakistan
        </p>
        <p className="text-[1rem] font-sans mt-[1rem] w-[28rem] text-slate-500 ">
          At HM Consultant, we simplify studying abroad guiding you from admissions to visas with trusted expertise in Pakistan.
        </p>
        {/* ---------------------------------BUttons------------------- */}
        <div className="mt-5 cursor-pointer shadow-md shadow-slate-600 hover:shadow-lg hover:shadow-slate-700 bg-black text-xl text-slate-100 px-6 py-3 w-fit rounded-3xl font-mono ">
          <p className="">Lets Talk <ArrowForwardIosIcon className="text-yellow-600" fontSize="small"/></p>
        </div>
        </div>
        {/* -------------------------Right Div------------------------ */}
        <div>
        <p className="text-[1.3rem] font-sans mt-[1rem] w-[28rem] text-black font-semibold ">
           Expert Support for Abroad Studies
        </p>
        <p className="text-[1rem] font-sans  w-[24rem] text-slate-500 ">
        Studying abroad isn’t just paperwork it’s your future. We guide you to the right course, right costs, and top universities worldwide.
        </p>
        <div className="flex gap-5">
          <div className="mt-5 cursor-pointer border border-black hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-800  text-sm text-black px-4 py-1 w-fit rounded-3xl font-mono ">
                  <div onClick={()=>{navigate("program")}} className='cursor-pointer '>Program</div>
         </div>
         <div className="mt-5 cursor-pointer border border-black hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-800  text-sm text-black px-4 py-1 w-fit rounded-3xl font-mono ">
             <div onClick={()=>{navigate("student")}} className='cursor-pointer h-1'>Student Services</div>

         </div>
          
        </div>
        
        </div>
        </div>
        
        

      </div>
    </div>
  );
}
