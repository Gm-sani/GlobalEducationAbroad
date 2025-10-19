import React from 'react'
import { useNavigate } from 'react-router-dom';
// import OverViewPic3 from './pics/'

export default function IntroPage2(props) {
    const navigate =useNavigate();
  return (
    <div className='lg:pb-[22rem] pb-[12rem]' style={{backgroundColor: "#1e1e27"}}>
      {/* <div className=' my-4 '>
        <img src={OverViewPic3} alt="OverViewPic" className=' lg:h-[22rem] md:h-[12rem] lg:w-[78rem] lg:mx-12 rounded-3xl absolute ' />
      </div> */}
      <div className='w-[90%] mx-10 py-16 rounded-3xl absolute lg:mt-16 mt-6 p-8 bg-[#1e1e27] backdrop-blur-lg border-t border-b border-gray-600/30 shadow-sm shadow-[#28242a] hover:shadow-2xl hover:shadow-[#df0139]/50 transition-all duration-500 group'>
        {/* Animated Glow Effect */}
        <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-[#df0139]/0 via-[#df0139]/10 to-[#df0139]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 scale-110 group-hover:scale-100'></div>
        
        {/* Pulsing Border Effect */}
        <div className='absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#df0139]/30 transition-all duration-500 group-hover:animate-pulse'></div>
        
        {/* Floating Particles Effect */}
        <div className='absolute inset-0 rounded-3xl overflow-hidden'>
          <div className='absolute -top-4 -left-4 w-8 h-8 bg-[#df0139] rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-bounce transition-all duration-1000 delay-100'></div>
          <div className='absolute -bottom-4 -right-4 w-6 h-6 bg-[#df0139] rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-bounce transition-all duration-1000 delay-300'></div>
          <div className='absolute top-1/2 -right-4 w-4 h-4 bg-[#df0139] rounded-full opacity-0 group-hover:opacity-25 group-hover:animate-ping transition-all duration-1000 delay-500'></div>
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          <p className='lg:text-[4rem] text-[2.5rem] font-bold tracking-wider mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-[#df0139] group-hover:bg-gradient-to-r group-hover:from-[#df0139] group-hover:to-[#ff6b9d] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 uppercase'>
            {props.namm}
          </p>
          <div className='flex gap-2 items-center'>
            <p
              onClick={()=>{navigate("/")}} 
              className='text-xl hover:text-red-300 cursor-pointer transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-[#df0139]/50 group-hover:shadow-lg group-hover:shadow-[#df0139]/20 relative overflow-hidden'
              style={{color: "#e2e2e2"}}
            >
              {/* Button Shine Effect */}
              <span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></span>
              Global Education Abroad /
            </p>
            <p className='text-xl px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border-l-4 border-red-400/80 group-hover:border-[#df0139] group-hover:bg-white/10 transition-all duration-500' style={{color: "#e2e2e2"}}>
              {props.namm}
            </p>
          </div>
        </div>

        {/* Additional Glow Layers */}
        <div className='absolute inset-0 rounded-3xl shadow-lg shadow-[#df0139]/0 group-hover:shadow-xl group-hover:shadow-[#df0139]/30 transition-all duration-700'></div>
        <div className='absolute inset-0 rounded-3xl shadow-2xl shadow-[#df0139]/0 group-hover:shadow-2xl group-hover:shadow-[#df0139]/10 transition-all duration-1000 delay-200'></div>
      </div>
    </div>
  )
}