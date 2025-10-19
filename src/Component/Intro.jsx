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
        <div className="relative my-0 bg-slate-900 h-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
                style={{ backgroundImage: `url(${introPic})` }}
            >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Additional Gradient Overlay */}
             {/* <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80rem] h-[50rem] border bg-gradient-to-tr from-red-900/70 via-red-500/50 to-red-900/30 rounded-full blur-[70px]"></div>
      </div> */}

            {/* Content */}
            <div className="relative z-10 min-[310px]:ml-[10rem] min-[310px]:m-12 lg:m-12">
                <div className="flex flex-col justify-center items-center py-[12rem]">
                    <div className="mt-32 w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4 animate-pulse"></div>
                    <p className="text-white font-semibold tracking-widest text-sm uppercase animate-bounce-in  ">
                        INTRODUCTION
                    </p>
                    <p className="text-[5rem] font-semibold font-sans text-center m-auto text-[#df0139] ">
                        GLOBAL EDUCATION ABROAD
                    </p>
                    <p className="text-center text-gray-200 tracking-wider mt-4 text-[1.2rem] mx-[8rem] leading-relaxed">
                        Your Trusted Student Visa Consultant in Pakistan

                        Dreaming of studying abroad? At Global Education Abroad, we turn that dream into reality.

                        With a passion for helping students reach their international goals, we are proud to be among Pakistan's most trusted study abroad consultants. From choosing the right university and course to securing your student visa and scholarships, our expert team supports you every step of the way.

                        We understand that studying overseas isn't just about education it's about building a brighter future. That's why we offer personalized guidance, up-to-date visa expertise, and complete admission support to make your journey smooth and stress-free.

                        Let Global Education Abroad be your guide to success because your global future starts here. 
                    </p>

                    {/* Mission & Established */}
                    {/* <div className="flex justify-center gap-36 mt-20 flex-wrap">
                        <div className="flex gap-5 mt-12">
                            <img src={hndshk} alt="hand shake" className="h-[2.5rem]" />
                            <div>
                                <p className="text-xl font-semibold mt-[-0.7rem] text-white">Our Mission</p>
                                <p className="w-[21rem] text-gray-200 tracking-tight mt-2 text-[0.92rem]">
                                    Our mission is to empower students to pursue their global education dreams with expert guidance, personalized support, and unwavering commitment to their success.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-12">
                            <img src={since} alt="since" className="h-[2.7rem]" />
                            <div>
                                <p className="text-xl font-semibold mt-[-0.7rem] text-white">Established</p>
                                <p className="w-[21rem] text-gray-200 tracking-tight mt-2 text-[0.92rem]">
                                    Since 2012, we've been empowering students to reach their dream destinations with expert guidance and personalized support every step of the way.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    
                    {/* Button */}
                    <div className="mt-12 cursor-pointer shadow-md shadow-slate-600 hover:shadow-lg hover:shadow-red-900 bg-[#df0139] text-xl text-white px-6 py-3 w-fit rounded-3xl font-serif hover:bg-red-900 transition-all duration-300">
                        <p onClick={() => { navigate("overview") }} className="flex items-center gap-2">
                            Company Overview <ArrowForwardIosIcon className="text-white" fontSize="small" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}