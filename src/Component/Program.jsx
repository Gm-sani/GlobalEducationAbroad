import React from 'react'
import Mbbspic from './pics/Mbbspic1.jpg'
import Phdpic from './pics/Phdpic2.jpg'
import Mspic from './pics/Mspic.jpeg'
import Bspic from './pics/Bspic.jpg'
import servicepic2 from './pics/servicespic2.jpg'
import servicepic3 from './pics/servicespic3.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import IntroPage2 from './IntroPage2'
import { useNavigate } from 'react-router-dom';


export default function Program(props) {
    const navigate =useNavigate();
    
   
  return (
    <>
    <IntroPage2 namm="Programs"/>
    <div className='bg-[#1e1e27] pb-[10.5rem] min-h-screen '>
     <p className='text-[0.85rem] text-white font-semibold text-center tracking-widest uppercase pt-[8rem] lg:pt-[4rem]'>
    COURSES WE OFFER
</p>
      <p className='text-[2rem] font-bold mt-[0.1rem] text-center text-3xl lg:text-3xl bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent mb-6 uppercase'>Get the Best Courses You Deserve</p>
      
      {/* -----------------------------------------Box row 1---------------------------- */}
      <div className='lg:flex lg:mx-0 px-8 gap-6 justify-center mt-[3rem]'>
        {/* ---------------------------Bs---------------------- */}
        <div  onClick={()=>{navigate("/bs")}}   className='group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <img src={Bspic} alt="Bspic" className='h-[16rem] w-[22rem] object-cover transition-transform duration-700 group-hover:scale-110'/>
            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/95 to-gray-800/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-all duration-500 rounded-t-2xl border-t border-gray-600/50'>
              <p className='text-2xl font-bold text-center text-[#df0139] mb-2'>BS</p>
              <p className='text-gray-300 text-[0.95rem] text-center leading-relaxed'>
                Bachelor degrees from Australia, Italy, and Georgia are considered best countries.{' '}
                <ArrowCircleRightIcon 
                  onClick={()=>{navigate("/bs")}} 
                  className='hover:text-[#df0139] cursor-pointer transition-all duration-300 transform hover:scale-110 hover:translate-x-1 inline-block ml-1' 
                /> 
              </p>
            </div>
            <div className='absolute top-4 right-4 w-12 h-12 bg-[#df0139] rounded-full flex items-center justify-center transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500 delay-200'>
              <span className='text-white font-bold text-sm'>BS</span>
            </div>
        </div>

        {/* ---------------------------Ms---------------------- */}
        <div   onClick={()=>{navigate("/ms")}}    className='lg:mt-0 mt-8 group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <img src={Mspic} alt="Mspic" className='h-[16rem] w-[22rem] object-cover transition-transform duration-700 group-hover:scale-110'/>
            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/95 to-gray-800/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-all duration-500 rounded-t-2xl border-t border-gray-600/50'>
              <p className='text-2xl font-bold text-center text-[#df0139] mb-2'>MS</p>
              <p className='text-gray-300 text-[0.95rem] text-center leading-relaxed'>
                Master's and MPhil degrees from USA, China, Uzbekistan and UK are best countries.{' '}
                <ArrowCircleRightIcon 
                  onClick={()=>{navigate("/ms")}} 
                  className='hover:text-[#df0139] cursor-pointer transition-all duration-300 transform hover:scale-110 hover:translate-x-1 inline-block ml-1' 
                /> 
              </p>
            </div>
            <div className='absolute top-4 right-4 w-12 h-12 bg-[#df0139] rounded-full flex items-center justify-center transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500 delay-200'>
              <span className='text-white font-bold text-sm'>MS</span>
            </div>
        </div>

        {/* ---------------------------Mbbs---------------------- */}
        <div     onClick={()=>{navigate("/mbbs")}}  className='lg:mt-0 mt-8 group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <img src={Mbbspic} alt="Mbbspic" className='h-[16rem] w-[22rem] object-cover transition-transform duration-700 group-hover:scale-110'/>
            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/95 to-gray-800/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-all duration-500 rounded-t-2xl border-t border-gray-600/50'>
              <p className='text-2xl font-bold text-center text-[#df0139] mb-2'>MBBS</p>
              <p className='text-gray-300 text-[0.95rem] text-center leading-relaxed'>
                Medical degrees from China, Kyrgyzstan, Georgia, Russia and the UK are best countries.{' '}
                <ArrowCircleRightIcon 
                  onClick={()=>{navigate("/mbbs")}} 
                  className='hover:text-[#df0139] cursor-pointer transition-all duration-300 transform hover:scale-110 hover:translate-x-1 inline-block ml-1' 
                />
              </p>
            </div>
            <div className='absolute top-4 right-4 w-12 h-12 bg-[#df0139] rounded-full flex items-center justify-center transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500 delay-200'>
              <span className='text-white font-bold text-sm'>MBBS</span>
            </div>
        </div>

        {/* ---------------------------Phd---------------------- */}
        <div   onClick={()=>{navigate("/phd")}}   className='lg:mt-0 mt-8 group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <img src={Phdpic} alt="Phdpic" className='h-[16rem] w-[22rem] object-cover transition-transform duration-700 group-hover:scale-110'/>
            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/95 to-gray-800/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-all duration-500 rounded-t-2xl border-t border-gray-600/50'>
              <p className='text-2xl font-bold text-center text-[#df0139] mb-2'>PHD</p>
              <p className='text-gray-300 text-[0.95rem] text-center leading-relaxed'>
                PHD degrees from USA, China, Germany and the UK are best countries.{' '}
                <ArrowCircleRightIcon 
                  onClick={()=>{navigate("/phd")}} 
                  className='hover:text-[#df0139] cursor-pointer transition-all duration-300 transform hover:scale-110 hover:translate-x-1 inline-block ml-1' 
                /> 
              </p>
            </div>
            <div className='absolute top-4 right-4 w-12 h-12 bg-[#df0139] rounded-full flex items-center justify-center transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500 delay-200'>
              <span className='text-white font-bold text-sm'>PHD</span>
            </div>
        </div>
      </div>
      
    </div>
    </>
  )
}