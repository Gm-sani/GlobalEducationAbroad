import React, { useState, useEffect } from 'react'
import hndshk from './pics/handShake.png'
import growingGraph from './pics/growingGraph.png'
import chat from './pics/chat.png'
import plane from './pics/plane.png'
import choosepic from './pics/WhyChooseUsPic.jpg'
import ServicesPic1234 from './pics/Services1234.jpeg'

export default function WhyChooseus() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      id: 1,
      title: "Real Time Status",
      description: "Real-time updates on applications, visa processes, and admissions for seamless student support",
      icon: growingGraph,
      gradient: "from-blue-400/10 to-purple-400/10",
      color: "#e2e2e2",
      delay: 0,
      bgColor: "#e2e2e2",
      textColor: "text-gray-800",
      descriptionColor: "text-gray-600",
      borderColor: "border-gray-300"
    },
    {
      id: 2,
      title: "Experience Expert Team",
      description: "Experienced team of experts dedicated to guiding you through every step of studying abroad",
      icon: hndshk,
      gradient: "from-blue-400/10 to-purple-400/10",
      color: "#e2e2e2",
      delay: 100,
      bgColor: "#e2e2e2",
      textColor: "text-gray-800",
      descriptionColor: "text-gray-600",
      borderColor: "border-gray-300"
    },
    {
      id: 3,
      title: "Live Chat With Our Team",
      description: "Connect instantly with our team via live chat for expert guidance and support",
      icon: chat,
      gradient: "from-orange-400/10 to-red-400/10",
      color: "#e2e2e2",
      delay: 200,
      bgColor: "#e2e2e2",
      textColor: "text-gray-800",
      descriptionColor: "text-gray-600",
      borderColor: "border-gray-300"
    },
    {
      id: 4,
      title: "Fast Processing Guaranty",
      description: "Guaranteed fast processing for applications and visas, ensuring a smooth study abroad experience",
      icon: plane,
      gradient: "from-purple-400/10 to-pink-400/10",
      color: "#e2e2e2",
      delay: 300,
      bgColor: "#e2e2e2",
      textColor: "text-gray-800",
      descriptionColor: "text-gray-600",
      borderColor: "border-gray-300"
    }
  ];

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-900/90 via-[#28242a]/90 to-gray-800/90 py-20 overflow-hidden"
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

      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-900/10 to-pink-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-900/10 to-cyan-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Image */}
              <img 
                src={choosepic} 
                alt="Why Choose Us" 
                className="rounded-3xl shadow-2xl w-full h-[45rem] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl animate-float-slow"></div>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 via-transparent to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Header */}
            <div className="mb-12">
              <div className={`inline-flex items-center justify-center mb-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mr-4 animate-pulse"></div>
          <p className="text-black font-semibold tracking-widest text-sm uppercase animate-bounce-in">
            Why Choose Us
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent ml-4 animate-pulse"></div>
        </div>
              <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-red-800 mb-4 uppercase">
                We Provide Experts To Create Great Value For Your Visa
              </h2>
              <p className="text-black text-lg">
                Experience excellence in visa processing with our dedicated team of professionals
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`group relative backdrop-blur-sm rounded-2xl p-6 border border-gray-300 transform transition-all duration-500 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  } hover:-translate-y-1 hover:scale-105 bg-red-900`}
                  style={{ 
                    transitionDelay: `${feature.delay}ms`
                  }}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                    <div className="w-full h-full rounded-2xl bg-red-700"></div>
                  </div>

                  <div className="relative z-10 flex items-start gap-6">
                    {/* Icon Container */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                      <div className="relative bg-gray-100 p-3 rounded-xl border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={feature.icon} 
                          alt={feature.title}
                          className="h-8 w-8 object-contain filter brightness-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      
                      {/* Animated Dot */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-[0.95rem] group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/40 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div> */}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className={`mt-8 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {/* <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative">Get Started Today</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>
    </div>
  )
}