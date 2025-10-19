import React from 'react'
import IntroPage2 from './IntroPage2'
import { Box3 } from './Box'
import { useNavigate } from 'react-router-dom';
import {
  Routes,
  Route
} from "react-router-dom";
import ImgrantCanada from './pics/ImagrationCanada.jpeg'
import ImgrantAus from './pics/ImagrantAus.jpg'
import ImgrantSchengen from './pics/ImmigrantSchengen.jpeg'
export default function Immagiration() {
    const navigate =useNavigate();
  
  return (
    <div>
      <IntroPage2 namm="Immagration"/>
      {/* -------------------immmagration container------------------ */}
      {/* ---------------------------------Button------------------------------------ */}
    <div className='flex gap-8 justify-center my-5'>
    <div onClick={()=>{navigate("imgrntCanada")}} className='px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>Canada</p>
    </div>
    <div onClick={()=>{navigate("imgrntAustralia")}} className='px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>Australia</p>
    </div>
    <div onClick={()=>{navigate("imgrntSchengen")}} className='px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>Schengen</p>
    </div>
    </div>
    {/* ------------------------------------BOX-------------------------------------- */}
        <div>
        <Routes>
            <Route path='imgrntCanada' element={ <Box3 title="Canada" pic={ImgrantCanada}/>}/>
            <Route path='imgrntAustralia' element={ <Box3 title="Australia" pic={ImgrantAus}/>}/>
            <Route path='imgrntSchengen' element={ <Box3 title="Schengen" pic={ImgrantSchengen}/>}/>
        </Routes>
        
        </div>
      {/* <Box3 /> */}
    </div>
  )
}
