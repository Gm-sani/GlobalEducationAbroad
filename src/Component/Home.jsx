import React from 'react'
import Slider from './Slider'
import Intro from './Intro'

import Services from './Services'
import WhyChooseus from './WhyChooseus'
import Reviews from './Reviews'

import Achievements from './Achievements'
import Countries from './Countries'
import ServicesStep from './ServicesStep'
import Whatsapp from './Whatsapp'


export default function Home() {
  return (
    <div className=''>
      <Slider/>
      <Intro/>
      <Services/>
      <Achievements/>
      <WhyChooseus/>
      <Whatsapp/>
      
    </div>
  )
}
