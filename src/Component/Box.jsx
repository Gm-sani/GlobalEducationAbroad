import React, { useState, useRef, useEffect } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IntroPage2 from './IntroPage2';
import emailjs from '@emailjs/browser'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

gsap.registerPlugin(ScrollTrigger);

export default function Box(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contactItems = [
    { icon: PhoneIcon, label: "Requesting A Call", value: props.phone, color: "from-red-500 to-pink-500" },
    { icon: MailIcon, label: "E-mail", value: props.email, color: "from-orange-500 to-red-500" },
    { icon: LocationOnIcon, label: "Location", value: props.location, color: "from-amber-500 to-orange-500" },
    { icon: AccessTimeFilledIcon, label: "Office Hours", value: "Monday-Saturday: 9 am - 6 pm", color: "from-green-500 to-teal-500" }
  ];

  return (
    <Fade in={isVisible} timeout={800}>
      <div className="relative">
        <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-white/20 overflow-hidden group hover:shadow-3xl transition-all duration-500 p-8">
          
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <Zoom key={index} in={isVisible} timeout={800} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 transform hover:scale-105 transition-all duration-300">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
                      <item.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">{item.label}</p>
                      <p className="text-lg font-medium text-gray-800">{item.value}</p>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>

            {/* Office Image */}
            <Zoom in={isVisible} timeout={800} style={{ transitionDelay: '600ms' }}>
              <div className="relative group/image">
                <img 
                  src={props.pic} 
                  alt="Office" 
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl transform group-hover/image:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export function Box1(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const universities = [
    props.uni1, props.uni2, props.uni3, props.uni4, 
    props.uni5, props.uni6, props.uni7
  ].filter(uni => uni);

  return (
    <Fade in={isVisible} timeout={800}>
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden group hover:shadow-3xl transition-all duration-500 p-6 mx-4 my-6
        w-[95vw] max-w-7xl
        sm:w-[90vw] sm:mx-auto
        lg:w-full lg:max-w-6xl
        xl:max-w-7xl">
        
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#df0139]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#df0139]/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Universities List */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 bg-gradient-to-r from-[#df0139] to-[#ff6b9d] rounded-xl shadow-lg">
                <SchoolIcon className="text-white text-xl md:text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent">
                List Of Universities
              </h3>
            </div>
            
            <ul className="space-y-2 md:space-y-3">
              {universities.map((uni, index) => (
                <li key={index} className="flex items-center gap-3 group/item cursor-pointer transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-[#df0139] rounded-full group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                  <span className="text-gray-300 group-hover/item:text-white font-medium text-sm md:text-base break-words">{uni}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* University Image */}
          <Zoom in={isVisible} timeout={800} style={{ transitionDelay: '400ms' }}>
            <div className="relative group/image">
              <img 
                src={props.unipic8} 
                alt="University" 
                className="w-full h-full sm:h-72 md:h-80 object-fit rounded-2xl shadow-2xl transform group-hover/image:scale-105 transition-transform duration-700 border border-gray-600/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl group-hover/image:opacity-0 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#df0139]/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/image:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
            </div>
          </Zoom>
        </div>
      </div>
    </Fade>
  );
}

export function Box2(props) {
  const [formData, setFormData] = useState({
    name: "", email: "", dob: "", phone: "", 
    country: "", degree: "", year: "", grade: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_1n2p32w', 'template_mjnd5wo', form.current, {
      publicKey: 'u-jLSXzFMB5_9c3-j',
    }).then(
      () => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", dob: "", phone: "", country: "", degree: "", year: "", grade: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      },
      (error) => {
        console.log('FAILED...', error.text);
        setIsSubmitting(false);
      },
    );
  };

  const contentSections = [
    {
      title: `Why Do You Wish to Study ${props.title} Abroad?`,
      content: `Many aspiring students have a dream to get their ${props.title} degree overseas. Each year, thousands of students choose to study degrees that are recognised around the world, advanced training, and exposure to other countries. EDURITE Consulting is here to help you along the way and make sure you receive the most education possible.`
    },
    {
      title: `Advantages of Studying ${props.title} Abroad`,
      points: [
        `World-Class Education: ${props.title} degrees are available in several countries and are popular around the world.`,
        `Normally cost tuition: Getting an ${props.title} abroad may prove to be more economical.`,
        `No Entrance Exam: To enroll in programmes, students are not required to pass entrance tests.`,
        `International Exposure: Studying abroad gives students the chance to interact with classmates from all backgrounds.`,
        `Advanced Infrastructure: Modern laboratories and state-of-the-art facilities are features of many international universities.`
      ]
    }
  ];

  return (
    <div className="relative bg-[#1e1e27] min-h-screen">
      <IntroPage2 namm={props.title} />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#df0139]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#df0139]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {contentSections.map((section, index) => (
              <Fade key={index} in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent mb-6 uppercase">
                    {section.title}
                  </h3>
                  
                  {section.content && (
                    <p className="text-[#e2e2e2] leading-relaxed text-lg">{section.content}</p>
                  )}
                  
                  {section.points && section.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-3 mb-4">
                      <div className="w-2 h-2 bg-[#df0139] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#e2e2e2] leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </Fade>
            ))}
          </div>

          {/* Eligibility Form */}
          <Fade in={true} timeout={800} style={{ transitionDelay: '400ms' }}>
            <div className="relative">
              <div className="sticky top-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700/50 p-8">
                {isSubmitted && (
                  <div className="bg-green-900/30 border border-green-800/50 rounded-2xl p-4 mb-6 flex items-center gap-3 animate-fade-in">
                    <CheckCircleIcon className="text-green-400" />
                    <span className="text-[#e2e2e2] font-semibold">Form Submitted Successfully!</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <p className="text-lg font-semibold text-[#df0139] bg-[#df0139]/10 px-4 py-1 rounded-full w-fit mx-auto border border-[#df0139]/20">
                    Eligibility Form
                  </p>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent mt-2 uppercase">
                    Check Your Eligibility
                  </h3>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  {[
                    { name: "user_name", label: "Your Name", value: formData.name },
                    { name: "user_dob", label: "Date of Birth", value: formData.dob },
                    { name: "user_email", label: "Your Email", value: formData.email },
                    { name: "user_phone", label: "Your Phone", value: formData.phone },
                    { name: "user_country", label: "Desired Country", value: formData.country },
                    { name: "user_degree", label: "Your Degree", value: formData.degree },
                    { name: "user_year", label: "Year", value: formData.year },
                    { name: "user_grade", label: "Grade/Marks", value: formData.grade }
                  ].map((field, index) => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-[#e2e2e2] mb-2">
                        {field.label}
                      </label>
                      <input
                        name={field.name}
                        value={field.value}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-[#e2e2e2] placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-[#df0139] focus:bg-gray-600"
                        required
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#df0139] to-[#ff6b9d] hover:from-[#c80132] hover:to-[#ff5a8f]'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <SendIcon className="text-lg" />
                        Check Eligibility
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export function Box3(props) {
  useEffect(() => {
    gsap.fromTo("#txt", 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: "#txt", start: "top 80%" } }
    );
    
    gsap.fromTo("#pic", 
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: "#pic", start: "top 80%" } }
    );
  }, []);

  const eligibilityPoints = [
    "Min 18 years of education",
    "IELTS Band required – 7.5 or higher",
    "Experience: 3 year required",
    "Processing time: 12-18 months"
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Eligibility Section */}
        <div id="txt" className="space-y-6">
          <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
            Eligibility for {props.title}
          </h3>
          
          <ul className="space-y-4">
            {eligibilityPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-3 group cursor-pointer transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-lg text-gray-700 font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Flag Image */}
        <div id="pic" className="flex justify-center">
          <div className="relative group">
            <img 
              src={props.pic} 
              alt={`${props.title} Flag`} 
              className="w-full max-w-md h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}