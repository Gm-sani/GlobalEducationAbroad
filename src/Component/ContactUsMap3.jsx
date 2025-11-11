import React, { useState } from 'react';
import { 
  Phone, 
  Email, 
  LocationOn,
  AccessTime,
  SupportAgent 
} from '@mui/icons-material';

export default function ContactUsMap3() {
  const [selectedOffice, setSelectedOffice] = useState('lahore');

  const officeData = {
    lahore: {
      name: "Lahore Office",
      address: "Office : 7, 4th Floor Shan Arcade, Barkat Market, Lahore",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.893316198007!2d74.263874415141!3d31.467881281385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904710d872c6d%3A0x7df0d5155ac33bb4!2sBarkat%20Market%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1647852345679!5m2!1sen!2s",
      phone: "+92-339-4211280",
      email: "info@globaleducationabroad.com"
    },
    islamabad: {
      name: "Islamabad Office",
      address: "Office : 15 , 2nd Floor Huzaifa Center,I-8 Markaz , Islamabad", 
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.597408839286!2d73.07248747604859!3d33.66868747333674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df950403913b31%3A0xa779bad78cd362ba!2sHuzaifa%20center%20I-8!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
      phone: "+92-339-4211280",
      email: "info@globaleducationabroad.com"
    }
  };

  const currentOffice = officeData[selectedOffice];

  return (
    <div className="min-h-screen bg-[#1e1e27] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Contact Cards */}
          <div className="space-y-6">
            {/* Company Number Card */}
            <div className="bg-red-950 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-red-950/80 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-white/20 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Company Number</h3>
                  <p className="text-white/80 text-sm mb-3 font-light">Call us for immediate assistance</p>
                  <a 
                    href={`tel:${currentOffice.phone}`}
                    className="text-2xl font-black text-white hover:text-white/90 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {currentOffice.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-red-950 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-red-950 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-white/20 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Email className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Email Address</h3>
                  <p className="text-white/80 text-sm mb-3 font-light">Send us an email anytime</p>
                  <a 
                    href={`mailto:${currentOffice.email}`}
                    className="text-lg font-semibold text-white hover:text-white/90 transition-all duration-300 hover:translate-x-1 inline-block break-all"
                  >
                    {currentOffice.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Office Selection Card */}
            <div className="bg-red-950 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-red-950 relative overflow-hidden group">
              <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-white/20 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <LocationOn className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">Our Offices</h3>
                    <p className="text-white/80 text-sm font-light">Select an office to view location</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Lahore Office Button */}
                  <button
                    onClick={() => setSelectedOffice('lahore')}
                    className={`p-5 rounded-2xl border-2 transition-all duration-500 relative overflow-hidden group ${
                      selectedOffice === 'lahore'
                        ? 'border-white/60 bg-white/20 shadow-xl scale-105'
                        : 'border-white/30 bg-white/10 hover:border-white/50 hover:scale-105'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="relative text-center">
                      <div className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        selectedOffice === 'lahore' ? 'text-white' : 'text-white/90 group-hover:text-white'
                      }`}>
                        Lahore Office
                      </div>
                      <div className={`text-sm transition-colors duration-300 ${
                        selectedOffice === 'lahore' ? 'text-white/80' : 'text-white/70 group-hover:text-white/80'
                      }`}>
                        {officeData.lahore.address}
                      </div>
                    </div>
                  </button>

                  {/* Islamabad Office Button */}
                  <button
                    onClick={() => setSelectedOffice('islamabad')}
                    className={`p-5 rounded-2xl border-2 transition-all duration-500 relative overflow-hidden group ${
                      selectedOffice === 'islamabad'
                        ? 'border-white/60 bg-white/20 shadow-xl scale-105'
                        : 'border-white/30 bg-white/10 hover:border-white/50 hover:scale-105'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="relative text-center">
                      <div className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        selectedOffice === 'islamabad' ? 'text-white' : 'text-white/90 group-hover:text-white'
                      }`}>
                        Islamabad Office
                      </div>
                      <div className={`text-sm transition-colors duration-300 ${
                        selectedOffice === 'islamabad' ? 'text-white/80' : 'text-white/70 group-hover:text-white/80'
                      }`}>
                        {officeData.islamabad.address}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Google Map */}
          <div className="bg-red-950 rounded-3xl shadow-2xl overflow-hidden border border-red-950 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 group-hover:opacity-0 transition-opacity duration-500"></div>
            <div className="p-8 border-b border-white/20 relative z-10">
              <h2 className="text-3xl font-black text-white mb-3 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                {currentOffice.name}
              </h2>
              <p className="text-white/90 flex items-center text-lg">
                <LocationOn className="w-5 h-5 text-white/80 mr-3" />
                {currentOffice.address}
              </p>
            </div>
            
            <div className="h-96 lg:h-[500px] relative z-10">
              <iframe
                src={currentOffice.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Google Map - ${currentOffice.name}`}
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Office Info Footer */}
            <div className="p-6 bg-[#c00132] border-t border-white/20 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div className="flex items-center">
                  <strong className="text-white font-semibold">Phone:</strong>
                  <a 
                    href={`tel:${currentOffice.phone}`}
                    className="text-white/90 hover:text-white ml-3 transition-all duration-300 hover:translate-x-1"
                  >
                    {currentOffice.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <strong className="text-white font-semibold">Email:</strong>
                  <a 
                    href={`mailto:${currentOffice.email}`}
                    className="text-white/90 hover:text-white ml-3 transition-all duration-300 hover:translate-x-1 break-all"
                  >
                    {currentOffice.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 bg-red-950 rounded-3xl shadow-2xl p-10 border border-red-950 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:translate-x-[100%] transition-transform duration-2000"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div className="group/item">
                <div className="p-4 bg-white/20 rounded-3xl w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <SupportAgent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">Emergency Support</h3>
                <p className="text-white/80 text-sm font-light">24/7 helpline available</p>
              </div>
              <div className="group/item">
                <div className="p-4 bg-white/20 rounded-3xl w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <Email className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">Email Response</h3>
                <p className="text-white/80 text-sm font-light">Within 2 business hours</p>
              </div>
              <div className="group/item">
                <div className="p-4 bg-white/20 rounded-3xl w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <AccessTime className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">Office Visit</h3>
                <p className="text-white/80 text-sm font-light">Mon-Sat, 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}