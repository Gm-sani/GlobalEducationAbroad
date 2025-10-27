import React from "react";
import slider2 from "./pics/WorldMap01.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

export default function Slider() {
    const navigate = useNavigate();
  
    return (
        <div className="relative mt-4">
            {/* Background Image */}
            <img
                src={slider2}
                alt="Slider background"
                className="w-full max-w-[95vw] mx-auto object-cover 
                         lg:h-[90vh] 
                         md:h-[70vh] 
                         h-[50vh] 
                         min-h-[300px] 
                         opacity-40"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start 
                          lg:px-12 lg:mt-0
                          md:px-8 md:mt-0
                          px-4 mt-8">
                
                {/* Main Heading */}
                <div className="text-center lg:text-left w-full lg:w-auto mt-[25rem]">
                    <h1 className="lg:text-[2.5rem] md:text-[2.2rem] text-[1.8rem] 
                                 text-black font-semibold font-sans 
                                 leading-tight">
                        Your Trusted Student Visa
                    </h1>
                    <h2 className="lg:text-[2.6rem] md:text-[2.1rem] text-[1.7rem] 
                                 text-black font-sans 
                                 lg:mt-[-1rem] mt-2
                                 leading-tight">
                        Consultant in Pakistan
                    </h2>
                </div>

                {/* Content Container */}
                <div className="flex flex-col lg:flex-row 
                              lg:gap-[30rem] md:gap-16 gap-8 
                              lg:mt-4 md:mt-8 mt-8 
                              w-full">
                    
                    {/* Left Section */}
                    <div className="lg:max-w-[28rem] md:max-w-[32rem] w-full">
                        <p className="text-base md:text-[0.8rem] lg:text-[1rem] 
                                    font-sans 
                                    text-slate-500 
                                    lg:mt-[1rem] mt-4
                                    leading-relaxed">
                            At Global Education Abroad , we simplify studying abroad guiding you from admissions to visas with trusted expertise in Pakistan.
                        </p>
                        
                        {/* Primary Button */}
                        <div className="mt-5 cursor-pointer 
                                      shadow-md shadow-slate-600 hover:shadow-lg hover:shadow-slate-700 
                                      bg-black text-slate-100 
                                      lg:px-6 px-4 lg:py-3 py-2 
                                      lg:w-fit w-full 
                                      rounded-3xl 
                                      font-mono 
                                      transition-all duration-300
                                      hover:scale-105">
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <span className="lg:text-xl text-lg">Lets Talk</span>
                                <ArrowForwardIosIcon className="text-yellow-600" fontSize="small"/>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden lg:block lg:max-w-[28rem] w-full">
                        <h3 className="lg:text-[1.3rem] md:text-[1.2rem] text-[1.1rem] 
                                     font-sans 
                                     text-black font-semibold 
                                    mt-[-2.5rem]
                                     leading-tight">
                            Expert Support for Abroad Studies
                        </h3>
                        <p className="text-base md:text-lg lg:text-[1rem] 
                                    font-sans 
                                    text-slate-500 
                                    lg:w-[24rem] w-full
                                    mt-8
                                    leading-relaxed">
                            Studying abroad isn't just paperwork it's your future. We guide you to the right course, right costs, and top universities worldwide.
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row 
                                      lg:gap-5 gap-3 
                                      mt-5">
                            <div className="cursor-pointer 
                                          border border-black 
                                          hover:bg-red-600 hover:text-white 
                                          hover:shadow-md hover:shadow-red-800  
                                          text-sm text-black 
                                          lg:px-4 px-3 py-2 
                                          w-full sm:w-fit 
                                          rounded-3xl 
                                          font-mono 
                                          text-center
                                          transition-all duration-300
                                          hover:scale-105"
                                 onClick={() => navigate("program")}>
                                Program
                            </div>
                            <div className="cursor-pointer 
                                          border border-black 
                                          hover:bg-red-600 hover:text-white 
                                          hover:shadow-md hover:shadow-red-800  
                                          text-sm text-black 
                                          lg:px-4 px-3 py-2 
                                          w-full sm:w-fit 
                                          rounded-3xl 
                                          font-mono 
                                          text-center
                                          transition-all duration-300
                                          hover:scale-105"
                                 onClick={() => navigate("student")}>
                                Student Services
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}