import React from 'react'
import Marquee from "react-fast-marquee";
import achievements1 from './pics/Achievements1_1.png'
import achievements2 from './pics/Achievements1_2.png'
import achievements3 from './pics/Achievements3.png'
import achievements4 from './pics/Achievements4.png'

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      number: "100+ ",
      title: "Achievements",
      icon: achievements1,
      gradient: "from-blue-500/20 to-purple-500/20",
      hoverGradient: "from-blue-500/30 to-purple-500/30",
      color: "text-blue-100"
    },
    {
      id: 2,
      number: "18k+",
      title: "Visa Process",
      icon: achievements2,
      gradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "from-green-500/30 to-emerald-500/30",
      color: "text-green-100"
    },
    {
      id: 3,
      number: "99%",
      title: "Success Rate",
      icon: achievements3,
      gradient: "from-orange-500/20 to-red-500/20",
      hoverGradient: "from-orange-500/30 to-red-500/30",
      color: "text-orange-100"
    },
    {
      id: 4,
      number: "23+",
      title: "Pro Consultants",
      icon: achievements4,
      gradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "from-purple-500/30 to-pink-500/30",
      color: "text-purple-100"
    }
  ];

  return (
    <div className="relative py-8 lg:py-16 bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-2xl lg:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-l from-purple-500/10 to-blue-500/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 lg:h-48 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Floating Particles - Reduced on mobile */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full hidden lg:block"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
          }}
        ></div>
      ))}

      {/* Section Title */}
      <div className="relative z-10 text-center mb-8 lg:mb-12 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 lg:mb-4">
          OUR ACHIEVEMENTS
        </h2>
        <p className="text-gray-300 text-sm lg:text-lg max-w-2xl mx-auto">
          Years of excellence in visa processing and immigration services
        </p>
      </div>

      {/* Mobile Static Grid */}
      <div className="lg:hidden grid grid-cols-2 gap-4 px-4 mb-8">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`relative rounded-xl backdrop-blur-lg border border-white/10 
              bg-gradient-to-br from-white/5 to-white/10 overflow-hidden 
              ${achievement.gradient}`}
          >
            <div className="flex flex-col items-center p-4 text-center">
              {/* Icon */}
              <div className="relative mb-2">
                <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                  <img 
                    src={achievement.icon} 
                    alt={achievement.title}
                    className="h-10 w-10 lg:h-16 lg:w-16 object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div>
                <p className={`text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-1`}>
                  {achievement.number}
                </p>
                <p className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                  {achievement.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Marquee */}
      <div className="hidden lg:block">
        <Marquee 
          pauseOnHover 
          speed={50}
          gradient={true}
          gradientColor={[15, 23, 42]}
          gradientWidth={100}
        >
          <div className='flex py-8'>
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`group relative mx-4 min-w-[300px] rounded-2xl backdrop-blur-xl border border-white/10 
                  bg-gradient-to-br from-white/5 to-white/10 overflow-hidden 
                  hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-out
                  ${achievement.gradient} hover:${achievement.hoverGradient}`}
              >
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 p-[1px]`}>
                  <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex items-center gap-6 p-6">
                  {/* Icon Container with Gradient Border */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                    <div className="relative bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                      <img 
                        src={achievement.icon} 
                        alt={achievement.title}
                        className="h-16 w-16 object-contain filter brightness-0 invert"
                      />
                    </div>
                    
                    {/* Floating Dots */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <p className={`text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-1 
                      group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.number}
                    </p>
                    <p className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                      {achievement.title}
                    </p>
                  </div>

                  {/* Hover Effect Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-white/10 to-white/5 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-20 lg:h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </div>
  )
}