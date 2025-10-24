import React, { useState, useEffect } from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import quote from './pics/quote.png'
import reviewpic1 from './pics/Babu1Review.jpeg'
import reviewpic2 from './pics/Lemon2Review.jpg'
import reviewpic3 from './pics/Akash3Review.jpg'
import reviewpic4 from './pics/Mustafa4reviewpic.jpg'
import reviewpic5 from './pics/mustiFriend1.jpg'
import reviewpic6 from './pics/mustiFriend2.jpg'
import reviewpic7 from './pics/mustiFriend3.jpg'
import StarRateIcon from '@mui/icons-material/StarRate';
import pak from './pics/pak.png'
import Marquee from "react-fast-marquee";
import Uae from './pics/Uae.png'
import Canada from './pics/Canada.png'
import Saudia from './pics/saudia.jpeg'
import china from './pics/chiina.png'
import italy from './pics/Italy.jpeg'
import france from './pics/france.png'
import sweden from './pics/sweden.png'
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const reviews = [
    {
      id: 1,
      text: "Exceptional service! Global Education Abroad guided me through the entire process, making it seamless and stress-free. Highly recommend for study visas!",
      image: reviewpic1,
      name: "Syed Mustaneer",
      country: "UAE",
      flag: Uae,
      rating: 5
    },
    {
      id: 2,
      text: "Outstanding support! Global Education Abroad made my study visa process effortless with their expertise and professionalism. Highly recommend their services!",
      image: reviewpic2,
      name: "Syed Muhammad",
      country: "China",
      flag: china,
      rating: 5
    },
    {
      id: 3,
      text: "Excellent service! Global Education Abroad simplified my study visa application, providing expert guidance and support. Highly recommend their consultancy!",
      image: reviewpic3,
      name: "Akasha Hameed",
      country: "Saudia",
      flag: Saudia,
      rating: 5
    },
    {
      id: 4,
      text: "Superb service! Global Education Abroad provided clear guidance and support throughout my study visa application. Highly recommend their expertise and professionalism.",
      image: reviewpic4,
      name: "Mustafa",
      country: "Canada",
      flag: Canada,
      rating: 5
    },
    {
      id: 5,
      text: "Global Education Abroad offers exceptional guidance and support, making educational dreams a reality with their expertise and personalized approach. Highly recommended!",
      image: reviewpic5,
      name: "Arshad",
      country: "Italy",
      flag: italy,
      rating: 5
    },
    {
      id: 6,
      text: "Global Education Abroad transforms educational aspirations into reality with expert guidance and tailored support, making every student's journey exceptional. Truly outstanding!",
      image: reviewpic6,
      name: "Abdullah Shah",
      country: "France",
      flag: france,
      rating: 5
    },
    {
      id: 7,
      text: "Global Education Abroad excels in offering thoughtful, personalized guidance for students, ensuring a smooth and successful path to academic achievement.",
      image: reviewpic7,
      name: "Muneeb",
      country: "Sweden",
      flag: sweden,
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarRateIcon 
        key={index} 
        className={`p-1 transform hover:scale-125 transition-transform duration-200 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="relative min-h-screen bg-[#1e1e27] py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-red-500/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <Fade in={isVisible} timeout={800}>
          <div className="text-center mb-12">
            <p className="text-lg font-semibold text-[#df0139]  w-fit mx-auto mb-4  border-red-800/50">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-[#df0139] bg-clip-text text-transparent mb-4 tracking-tight uppercase">
              What Our Clients Say About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-[#df0139] rounded-full mx-auto mb-4"></div>
            <p className="text-[#e2e2e2] text-lg max-w-2xl mx-auto">
              Discover why thousands of students trust Global Education Abroad for their study abroad journey
            </p>
          </div>
        </Fade>

        {/* Reviews Marquee */}
        <Fade in={isVisible} timeout={800} style={{ transitionDelay: '200ms' }}>
          <div className="relative">
            <Marquee pauseOnHover gradient gradientColor="#1e1e27" speed={50}>
              <div className="flex gap-8 py-4">
                {reviews.map((review, index) => (
                  <Zoom key={review.id} in={isVisible} timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="group relative cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                      {/* Review Card */}
                      <div className="relative bg-[#e2e2e2] backdrop-blur-lg rounded-3xl shadow-xl border border-gray-300 p-6 w-80 h-96 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-300">
                        
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-orange-500/10 rounded-bl-3xl"></div>
                        
                        {/* Quote Icon */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-red-600 to-[#df0139] rounded-full flex items-center justify-center shadow-lg">
                          <FormatQuoteIcon className="text-white text-xl transform rotate-180" />
                        </div>

                        {/* Review Text */}
                        <div className="pt-12">
                          <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                            {review.text}
                          </p>
                        </div>

                        {/* Reviewer Info */}
                        <div className="mt-6">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img 
                                src={review.image} 
                                alt={review.name} 
                                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800">{review.name}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <img 
                                  src={review.flag} 
                                  alt={review.country} 
                                  className="w-5 h-5 rounded-full object-cover"
                                />
                                <span className="text-xs text-gray-600">{review.country}</span>
                              </div>
                            </div>
                          </div>

                          {/* Stars Rating */}
                          <div className="flex justify-center mt-4">
                            {renderStars(review.rating)}
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </div>

                      {/* Floating Element */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-600 to-[#df0139] rounded-full shadow-lg transform rotate-12 animate-float"></div>
                    </div>
                  </Zoom>
                ))}
              </div>
            </Marquee>
          </div>
        </Fade>

        {/* Stats Section */}
        <Fade in={isVisible} timeout={800} style={{ transitionDelay: '400ms' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-[#e2e2e2] rounded-2xl backdrop-blur-sm border border-gray-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-600 mt-1">Students Helped</div>
            </div>
            <div className="text-center p-6 bg-[#e2e2e2] rounded-2xl backdrop-blur-sm border border-gray-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-gray-600 mt-1">Countries</div>
            </div>
            <div className="text-center p-6 bg-[#e2e2e2] rounded-2xl backdrop-blur-sm border border-gray-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-gray-600 mt-1">Success Rate</div>
            </div>
            <div className="text-center p-6 bg-[#e2e2e2] rounded-2xl backdrop-blur-sm border border-gray-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
          </div>
        </Fade>

        {/* CTA Section */}
        {/* <Fade in={isVisible} timeout={800} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300 border border-red-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Start Your Journey?
              </h3>
              <p className="text-red-100 mb-4">
                Join thousands of successful students who achieved their study abroad dreams
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Get Free Consultation
              </button>
            </div>
          </div>
        </Fade> */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(12deg); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-10px) rotate(12deg); 
            opacity: 1; 
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}