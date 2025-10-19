import React from 'react'
import ContactUs2 from './ContactUs2'
import Destination2 from './Location'
import Reviews from './Reviews'
import Countries from './Countries'
import IntroPage2 from './IntroPage2'
import Whatsapp from './Whatsapp'
import Certification from './Certification'


export default function CompanyOverview(props) {
  return (
    <div>
      <IntroPage2 namm="Company Overview"/>
      <Certification/>
      <ContactUs2 namm="CONTACT INFORMATION"/>
      {/* <Destination2/> */}
      <Reviews/>
      <Countries/>
      <Whatsapp />
      
      
    </div>
  )
}
