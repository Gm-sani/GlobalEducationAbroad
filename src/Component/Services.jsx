import React, { useState, useEffect } from 'react';
import servicepic1 from './pics/ServicesPic12.jpeg';
// import servicepic2 from './pics/ServicesPic03.jpg';
// import servicepic3 from './pics/servicespic3.jpg';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from 'react-router-dom';
import ServicesPic1234 from './pics/Services1234.jpeg'
import ServicesBox1234 from './pics/ServicesBox1234.jpeg'
import ServicesIcon1 from './pics/ServiceIcon1.png'
import ServicesIcon2 from './pics/ServiceIcon2.png'
import ServicesIcon3 from './pics/ServiceIcon3.png'
import ServicesIcon4 from './pics/ServiceIcon4.png'




export default function Services() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      title: "Education Visa",
      desc: "An education visa allows individuals to study abroad legally, enabling access to quality education, cultural experiences, and career opportunities.",
      img: servicepic1,
      link: null,
      gradient: "from-blue-400/10 to-purple-400/10",
      hoverGradient: "from-blue-400/20 to-purple-400/20",
      iconColor: "text-blue-400",
      delay: 0
    },
    
  ];

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-900/90 via-[#1e1e27]/90 to-gray-800/90 py-20 pb-28 overflow-hidden"
      style={{
        backgroundImage: `url(${ServicesPic1234})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-red-900/10 to-pink-900/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-blue-900/10 to-cyan-900/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Heading with Animation */}
      <div className="relative z-10 text-center mb-16">
        <div className={`inline-flex items-center justify-center mb-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4 animate-pulse"></div>
          <p className="text-black font-semibold tracking-widest text-sm uppercase animate-bounce-in">
            Our Services
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent ml-4 animate-pulse"></div>
        </div>
        
        <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-red-800 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          YOUR GLOBAL FUTURE STARTS HERE
        </h2>
        
        <p className={`text-black mt-4 max-w-2xl mx-auto text-lg transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Discover our comprehensive visa and immigration services tailored to your needs
        </p>
      </div>

      {/* Main Content Section - Left and Right Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Section - Services Card */}
          <div className="lg:w-1/2 w-full">
            <div className="relative z-10 h-full">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative rounded-3xl overflow-hidden transform transition-all duration-1000 ease-out h-full ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  } hover:-translate-y-3 hover:scale-105`}
                  style={{ transitionDelay: `${service.delay}ms` }}
                >
                  {/* Animated Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 p-[2px] animate-glow`}>
                    <div className="w-full h-full bg-red-900 rounded-3xl"></div>
                  </div>

                  {/* Main Card Content */}
                  <div className="relative bg-red-950 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden h-full flex flex-col">
                    {/* Image Container with Parallax Effect */}
                    <div className="relative overflow-hidden flex-1 min-h-[300px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                      
                      {/* Animated Image */}
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      
                      {/* Animated Floating Icon */}
                      {/* <div className={`absolute top-4 right-4 w-12 h-12 bg-gray-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ${service.iconColor}`}>
                        <div className="w-3 h-3 bg-current rounded-full animate-ping-slow"></div>
                      </div> */}

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 relative flex-shrink-0">
                      {/* Animated Title */}
                      <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-white transition-colors duration-500 transform group-hover:translate-x-2 uppercase">
                        {service.title}
                      </h3>
                      
                      {/* Animated Description */}
                      <p className="text-white leading-relaxed mb-6 text-[0.95rem] transform group-hover:translate-x-1 transition-transform duration-500">
                        {service.desc}
                      </p>

                      {/* Animated Button */}
                      {service.link && (
                        <button
                          onClick={() => navigate(service.link)}
                          className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} border border-gray-600/50 text-gray-200 font-semibold hover:shadow-2xl hover:gap-4 transform hover:scale-105 transition-all duration-500 group/btn relative overflow-hidden`}
                        >
                          {/* Button Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/40 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                          
                          <span className="relative z-10">Learn More</span>
                          <ArrowCircleRightIcon className={`relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300 ${service.iconColor}`} />
                        </button>
                      )}
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700 -z-10`}></div>
                  </div>

                  {/* Floating Animated Elements */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-700/30 to-gray-600/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000 animate-float-slow"></div>
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-current/20 to-transparent rounded-full blur-sm group-hover:scale-125 transition-transform duration-700"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="lg:w-1/2 w-full">
            <div className={`h-full transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div 
                className="relative backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 lg:p-12 h-full overflow-hidden"
                style={{
                  backgroundImage: `url(${ServicesBox1234})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-6 uppercase">
                    Expert Guidance for Students
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Turn your study abroad dream into reality with Global Education Abroad Pakistan's trusted student visa and study abroad consultancy.
                    </p>
                    
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Our expert team provides complete, end-to-end guidance from selecting the right university and course to managing visa applications, scholarships, and pre-departure preparation. Whether you plan to study MBBS, Engineering, Business, or any other program, we ensure your journey is smooth, secure, and successful.
                    </p>
                    
                    <p className="text-gray-200 text-lg leading-relaxed">
                      At Global Education Abroad, we don't just advise  we deliver results. Choose a partner that's committed to your global future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
       {/* -------------------------------External start---------------------------- */}
          
          <div className='hidden lg:flex justify-center mt-16 mx-4 gap-4'>
                 {/* ------------------------------------1_1 service box--------------------------- */}
                  <div className="relative z-10  bg-red-950 p-3 px-4 rounded-lg hover:bg-red-800 cursor-pointer hover:scale-105 transition-all duration-300">
                    {/* ------------------------------------Upper part-------------------------- */}
                    <div className='flex items-start gap-6'>
                    {/* Icon Container */}
                    <div className="relative">
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div> */}
                      <div className="relative bg-gray-100 p-3 rounded-xl border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={ServicesIcon1} 
                          className='h-8'/>
                      </div>                   
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 mb-2">
                        Comprehensive Profile Evaluation
                      </h3>
                      
                    </div>  
                    </div>
                    {/* -------------------------------------Description part------------------------ */}
                    <p className="text-gray-300 text-[0.95rem] mt-4 ">
                        We carefully assess your academic background, interests, and career goals to design the best study pathway for you.
                      </p>
                  </div>
                  {/* -------------------------------------------1_2 Service box---------------------------------------------------- */}
                  <div className="relative z-10  bg-red-950 p-3 px-4 rounded-lg hover:bg-red-800 cursor-pointer hover:scale-105 transition-all duration-300">
                    {/* ------------------------------------Upper part-------------------------- */}
                    <div className='flex items-start gap-6'>
                    {/* Icon Container */}
                    <div className="relative">
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div> */}
                      <div className="relative bg-gray-100 p-3 rounded-xl border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={ServicesIcon2} 
                          className='h-8'/>
                      </div>                   
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 mb-2">
                        Personalized University Selection
                      </h3>
                      
                    </div>  
                    </div>
                    {/* -------------------------------------Description part------------------------ */}
                    <p className="text-gray-300 text-[0.95rem] mt-4 ">
                        Our experts shortlist top universities that perfectly match your profile, preferences, and global ambitions.
                      </p>
                  </div>
                {/* -------------------------------------------1_3 Service box---------------------------------------------------- */}
                <div className="relative z-10  bg-red-950 p-3 px-4 rounded-lg hover:bg-red-800 cursor-pointer hover:scale-105 transition-all duration-300">
                    {/* ------------------------------------Upper part-------------------------- */}
                    <div className='flex items-start gap-6'>
                    {/* Icon Container */}
                    <div className="relative">
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div> */}
                      <div className="relative bg-gray-100 p-3 rounded-xl border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={ServicesIcon3} 
                          className='h-8'/>
                      </div>                   
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 mb-2">
                        Scholarship & Financial Guidance
                      </h3>
                      
                    </div>  
                    </div>
                    {/* -------------------------------------Description part------------------------ */}
                    <p className="text-gray-300 text-[0.95rem] mt-4 ">
                       We help you explore scholarships and create a solid financial plan to make your dream affordable.
                      </p>
                  </div>
                {/* -------------------------------------------1_4 Service box---------------------------------------------------- */}
                <div className="relative z-10  bg-red-950 p-3 px-4 rounded-lg hover:bg-red-800 cursor-pointer hover:scale-105 transition-all duration-300">
                    {/* ------------------------------------Upper part-------------------------- */}
                    <div className='flex items-start gap-6'>
                    {/* Icon Container */}
                    <div className="relative">
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div> */}
                      <div className="relative bg-gray-100 p-3 rounded-xl border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={ServicesIcon4} 
                          className='h-8'/>
                      </div>                   
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 mb-2">
                        End-to-End Application & Visa Support
                      </h3>
                      
                    </div>  
                    </div>
                    {/* -------------------------------------Description part------------------------ */}
                    <p className="text-gray-300 text-[0.95rem] mt-4 ">
                        From application documents to visa guidance, we ensure your study abroad process is smooth and successful.
                      </p>
                  </div>
                </div>
         
          {/* -----------------------------External Done---------------------------- */}

      {/* Animated Bottom CTA */}
      <div className={`relative z-10 text-center mt-16 transform transition-all duration-1000 delay-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Additional CTA can go here */}
      </div>

      {/* Add custom animations to CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-bounce-in { animation: bounce-in 1s ease-out; }
        .animate-ping-slow { animation: ping 3s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}