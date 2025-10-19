import React, { useState, useEffect } from 'react'
import certificate1 from './pics/Cer_1.jpeg'
import certificate2 from './pics/Cer_2.jpeg'
import certificate3 from './pics/Cer_3.jpeg'
import certificate4 from './pics/Cer_4.jpeg'
import certificate5 from './pics/Cer_5.jpeg'
import certificate6 from './pics/Cer_6.jpeg'
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

export default function Certification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const certificates = [
    { src: certificate1, alt: "Certificate 1" },
    { src: certificate2, alt: "Certificate 2" },
    { src: certificate3, alt: "Certificate 3" },
    { src: certificate4, alt: "Certificate 4" },
    { src: certificate5, alt: "Certificate 5" },
    { src: certificate6, alt: "Certificate 6" }
  ];

  return (
    <div className="relative min-h-screen bg-[#1e1e27] py-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#df0139]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#df0139]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#df0139]/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
          }}
        ></div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <Fade in={isVisible} timeout={1000}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent mb-4 tracking-wide uppercase">
              Certificate of Achievement Award
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#df0139] to-[#ff6b9d] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Recognized excellence and dedication in educational consulting services since 2009
            </p>
          </div>
        </Fade>

        {/* Certificate Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {certificates.map((certificate, index) => (
            <Zoom in={isVisible} timeout={800} style={{ transitionDelay: `${index * 200}ms` }} key={index}>
              <div className="group relative cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                {/* Certificate Card */}
                <div className="relative bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 border-gray-700 hover:border-[#df0139]/50 transition-all duration-300">
                  <img 
                    src={certificate.src} 
                    alt={certificate.alt} 
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="bg-[#df0139] text-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#c80132]">
                      View Certificate
                    </button>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#df0139]/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
                
                {/* Certificate Number */}
                {/* <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#df0139] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div> */}
              </div>
            </Zoom>
          ))}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
            opacity: 1; 
          }
        }
        
        .shadow-lg {
          box-shadow: 0 10px 30px rgba(223, 1, 57, 0.15);
        }
      `}</style>
    </div>
  )
}