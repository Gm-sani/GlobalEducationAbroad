import React from 'react'
import since from './pics/Since.png'
import hndshk from './pics/handShake.png'
import intropic from './pics/IntroPic01.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import introPic from "./pics/IntroPic123.jpeg"

export default function Intro() {
    const navigate = useNavigate();

    return (
        <div className="relative my-0 bg-slate-900 h-full overflow-hidden mt-[20rem] lg:mt-[10rem]">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
                style={{ backgroundImage: `url(${introPic})` }}
            >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 lg:ml-12 md:ml-8 ml-4 lg:m-12 md:m-8 m-4">
                <div className="flex flex-col justify-center items-center lg:py-[12rem] md:py-[8rem] py-[4rem]">
                    {/* Decorative Line */}
                    <div className="mt-8 lg:mt-32 w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4 animate-pulse"></div>
                    
                    {/* Introduction Text */}
                    <p className="text-white font-semibold tracking-widest text-xs lg:text-sm uppercase animate-bounce-in mt-2">
                        INTRODUCTION
                    </p>
                    
                    {/* Main Heading */}
                    <h1 className="lg:text-[5rem] md:text-[3.5rem] text-[2rem] font-semibold font-sans text-center m-auto text-[#df0139] lg:mt-4 mt-2 leading-tight">
                        GLOBAL EDUCATION ABROAD
                    </h1>
                    
                    {/* Description */}
                    <p className="text-center text-gray-200 tracking-wider mt-4 lg:text-[1.2rem] md:text-[1.1rem] text-base lg:mx-[8rem] md:mx-[4rem] mx-[1rem] leading-relaxed lg:leading-loose">
                        Your Trusted Student Visa Consultant in Pakistan

                        Dreaming of studying abroad? At Global Education Abroad, we turn that dream into reality.

                        With a passion for helping students reach their international goals, we are proud to be among Pakistan's most trusted study abroad consultants. From choosing the right university and course to securing your student visa and scholarships, our expert team supports you every step of the way.

                        We understand that studying overseas isn't just about education it's about building a brighter future. That's why we offer personalized guidance, up-to-date visa expertise, and complete admission support to make your journey smooth and stress-free.

                        Let Global Education Abroad be your guide to success because your global future starts here. 
                    </p>

                    {/* Mission & Established Section - Uncomment if needed */}
                    {/* <div className="flex justify-center lg:gap-36 md:gap-16 gap-8 lg:mt-20 md:mt-16 mt-12 flex-wrap">
                        <div className="flex gap-5 lg:mt-12 mt-8">
                            <img src={hndshk} alt="hand shake" className="h-[2.5rem] lg:h-[2.5rem] md:h-[2rem] h-[1.8rem]" />
                            <div>
                                <p className="lg:text-xl md:text-lg text-base font-semibold lg:mt-[-0.7rem] mt-0 text-white">Our Mission</p>
                                <p className="lg:w-[21rem] md:w-[18rem] w-full text-gray-200 tracking-tight mt-2 lg:text-[0.92rem] md:text-[0.9rem] text-sm">
                                    Our mission is to empower students to pursue their global education dreams with expert guidance, personalized support, and unwavering commitment to their success.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 lg:mt-12 mt-8">
                            <img src={since} alt="since" className="h-[2.7rem] lg:h-[2.7rem] md:h-[2.2rem] h-[2rem]" />
                            <div>
                                <p className="lg:text-xl md:text-lg text-base font-semibold lg:mt-[-0.7rem] mt-0 text-white">Established</p>
                                <p className="lg:w-[21rem] md:w-[18rem] w-full text-gray-200 tracking-tight mt-2 lg:text-[0.92rem] md:text-[0.9rem] text-sm">
                                    Since 2012, we've been empowering students to reach their dream destinations with expert guidance and personalized support every step of the way.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    
                    {/* Button */}
                    <div className="lg:mt-12 md:mt-10 mt-8 cursor-pointer shadow-md shadow-slate-600 hover:shadow-lg hover:shadow-red-900 bg-[#df0139] lg:text-xl md:text-lg text-base text-white lg:px-6 px-4 lg:py-3 py-2 w-fit rounded-3xl font-serif hover:bg-red-900 transition-all duration-300 hover:scale-105">
                        <p onClick={() => { navigate("overview") }} className="flex items-center gap-2">
                            Company Overview <ArrowForwardIosIcon className="text-white" fontSize="small" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}