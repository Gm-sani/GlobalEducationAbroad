import React from 'react'
import gallery1 from './pics/Visa1.jpg'
import gallery2 from './pics/Visa2.jpg'
import gallery3 from './pics/Visa3.jpg'
import gallery4 from './pics/Visa4.jpg'
import gallery5 from './pics/Visa5.jpg'
// import gallery6 from './pics/Visa6.jpg'
import gallery7 from './pics/Visa7.jpg'
import gallery8 from './pics/Visa8.jpg'
import gallery9 from './pics/Visa9.jpg'
import gallery10 from './pics/Visa10.jpg'
import gallery11 from './pics/Visa11.jpg'
import gallery12 from './pics/Visa12.jpg'
import gallery13 from './pics/Visa13.jpg'
import gallery14 from './pics/Visa14.jpg'
import gallery15 from './pics/Visa15.jpg'
import gallery16 from './pics/Visa16.jpg'
import gallery17 from './pics/Visa17.jpg'
import gallery18 from './pics/Visa18.jpg'

import adm1 from './pics/adm1.jpg'
import adm2 from './pics/adm2.jpg'
import adm3 from './pics/adm3.jpg'
import adm4 from './pics/adm4.jpg'
import adm5 from './pics/adm5.jpg'
import adm6 from './pics/adm6.jpg'
import adm7 from './pics/adm7.jpg'
import adm8 from './pics/adm8.jpg'
import adm9 from './pics/adm9.jpg'
import adm10 from './pics/adm10.jpg'
import adm11 from './pics/adm11.jpg'
import adm12 from './pics/adm12.jpg'
import adm13 from './pics/adm13.jpg'
import adm14 from './pics/adm14.jpg'
import adm15 from './pics/adm15.jpg'



export default function Gallery() {
  return (
    <div>
        <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-5'>Explore Our Journey</p>
      <p className='text-[2.1rem] text-red-800 tracking-wide font-semibold text-center '> View the Study Abroad Success Stories </p>
      <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-5'>With the help of Allah Almighty we are the leading firm in industry </p>
      <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-5'>Some of the stories as follow </p>

      {/* <p className='text-[2.1rem] text-red-800 tracking-wide font-semibold ml-12 '> Visas </p> */}

      {/* ----------------------------1st row---------------------------- */}
    <div className='lg:flex md:flex-row  justify-center gap-10 mt-6 lg:mx-0 mx-[5rem]'>
        <div className=''>
            <img src={gallery1} alt="gallery1" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={gallery2} alt="gallery2" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={gallery3} alt="gallery3" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------2nd row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={gallery4} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={gallery5} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={gallery7} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------3rd row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={gallery8} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={gallery9} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={gallery10} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------4th row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={gallery11} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={gallery12} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={gallery13} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------5th row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={gallery14} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={gallery15} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={gallery16} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------6th row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={gallery17} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={gallery18} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={gallery13} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -------------------------Admission letter---------------------------- */}
    {/* -----------------------------------6th row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={adm1} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={adm2} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={adm3} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------7th row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={adm4} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={adm5} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={adm6} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------8th row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={adm7} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={adm8} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={adm9} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------9th row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={adm10} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={adm11} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={adm12} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    {/* -----------------------------------9th row------------------------- */}
    <div className='lg:flex md:flex-row justify-center gap-10 mt-8 lg:mx-0 mx-[5rem]'>
        <div >
            <img src={adm13} alt="gallery4" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div className='lg:my-0 my-6'>
            <img src={adm14} alt="gallery5" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
        <div>
            <img src={adm15} alt="gallery6" className='rounded-2xl h-[23rem] w-[23rem]'/>
        </div>
    </div>
    </div>
  )
}
