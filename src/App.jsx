import React, { useState, useEffect } from 'react';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {
  Routes,
  Route
} from "react-router-dom";
import ContactUs2 from './Component/ContactUs2';
import Apply from './Component/Apply.jsx';
import Destination2 from './Component/Location.jsx';
import Program from './Component/Program.jsx';
import Destination from './Component/Destination.jsx';
import Events from './Component/Events.jsx';
import CompanyOverview from './Component/CompanyOverview';
import Box, { Box1, Box2, Box3 } from './Component/Box.jsx';
import office1 from './Component/pics/destinationoffice1.png';
import office2 from './Component/pics/destinationoffice2.png';
import office3 from './Component/pics/destinationoffice3.png';
import office4 from './Component/pics/destinationoffice4.png';
import Splash from './Component/Splash.jsx';
import Student from './Component/Student.jsx';
import Immagiration from './Component/Immagiration.jsx';
import RefundPolicy from './Component/RefundPolicy.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Splash screen will be visible for 3 seconds
  // }, []);

  // if (loading) {
  //   return <Splash />;
  // }

  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='overview' element={<CompanyOverview/>}>
          <Route path='ofc1' element={<Box phone="92-309-2480468" email="eduriteconsulting1@gmail.com" location="lhr" pic={office1}/>}/>
          <Route path='ofc2' element={<Box phone="92-341-2074305" email="eduriteconsulting2@gmail.com" location="isb" pic={office2}/>}/>
          <Route path='ofc3' element={<Box phone="92-300-1488666" email="eduriteconsulting3@gmail.com" location="Office # 10, 2nd Floor, Road, islambad" pic={office3}/>}/>
          <Route path='ofc4' element={<Box phone="92-300-2488996" email="eduriteconsulting4@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office4}/>}/>
          <Route path='italy' element={<Box1 phone="92-309-2480468" email="eduriteconsulting1@gmail.com"  pic={office1}/>}/>
          <Route path='china' element={<Box1 phone="92-341-2074305" email="eduriteconsulting2@gmail.com" location="isb" pic={office2}/>}/>
          <Route path='australia' element={<Box1 phone="92-300-1488995" email="eduriteconsulting3@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office3}/>}/>
          <Route path='finland' element={<Box1 phone="92-300-2488996" email="eduriteconsulting4@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office4}/>}/>
          <Route path='sweden' element={<Box1 phone="92-300-2488996" email="eduriteconsulting4@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office4}/>}/>
          <Route path='uk' element={<Box1 phone="92-300-2488996" email="eduriteconsulting4@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office4}/>}/>
          <Route path='usa' element={<Box1 phone="92-300-2488996" email="eduriteconsulting4@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office4}/>}/>
          <Route path='georgia' element={<Box1 phone="92-300-2488996" email="eduriteconsulting4@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office4}/>}/>
          <Route path='Kyrgyzstan' element={<Box1 phone="92-300-2488996" email="eduriteconsulting4@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office4}/>}/>

        </Route>
        <Route path='program' element={ <Program />}/>
        <Route path='mbbs' element={<Box2 title="MBBS" ctr1="Georgia" ctr2="Russia" ctr3="China" />}/>
        <Route path='phd' element={<Box2 title="PHD" ctr1="USA" ctr2="Australia" ctr3="Canada" />}/>
        <Route path='ms' element={<Box2 title="MS" ctr1="USA" ctr2="UK" ctr3="China" />}/>
        <Route path='bs' element={<Box2 title="BS" ctr1="Australia" ctr2="Italy" ctr3="Finland" />}/>
        <Route path='apply' element={ <Apply />}/>
        {/* <Route path='event' element={ <Events />}/> */}
        <Route path='refund' element={ <RefundPolicy />}/>
        <Route path='student' element={ <Student />}/>
        <Route path='destination' element={ <Destination />}/>
        <Route path='student' element={ <Student />}/>
        <Route path='destination' element={ <Destination />}>
          {/* <Route path='ofc1' element={<Box phone="92-309-2480468" email="eduriteconsulting1@gmail.com" location="lhr" pic={office1}/>}/>
          <Route path='ofc2' element={<Box phone="92-341-2074305" email="eduriteconsulting2@gmail.com" location="isb" pic={office2}/>}/>
          <Route path='ofc3' element={<Box phone="92-300-1488995" email="eduriteconsulting3@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office3}/>}/>
          <Route path='ofc4' element={<Box phone="92-300-2488996" email="eduriteconsulting4@gmail.com" location="Office # 10, 2nd Floor, Road, Lahore" pic={office4}/>}/> */}
        </Route>
        {/* -------------------------service of visas----------------- */}
        <Route path='immagration' element={ <Immagiration />}>
        <Route path='imgrntCanada' element={ <Box3 title="Canada" />}/>
        <Route path='imgrntAustralia' element={ <Box3 title="Australia" />}/>
        <Route path='imgrntSchengen' element={ <Box3 title="Schengen" />}/>
        </Route>
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
