import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import footer from "./pics/footer_4.jpg"
import logo from "./pics/logo-final.png"
// import logo from "./pics/logo_3_rb.png" 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ServicesBox1234 from './pics/ServicesBox1234.jpeg'

export default function Footer() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        "Study Abroad Consulting",
        "University & Scholarship Guidance",
        "Student Visa Facilitation",
        "Personal Statement Assistance",
        "Personal Training",
        "Pre & Post Departure Guide"
    ];

    const exploreLinks = [
        { path: "overview", label: "Company Overview" },
        { path: "program", label: "Program" },
        // { path: "event", label: "Event & Media" },
        { path: "apply", label: "Appointment" }
    ];

    const countries = [
        "ITALY", "FINLAND", "SWEDEN", "CHINA", 
        "AUSTRALIA", "UK", "USA" , "Kyrgyzstan" , "Georgia", "Cyprus"
    ];

    const socialLinks = [
        { 
            icon: FacebookOutlinedIcon, 
            href: "https://web.facebook.com/profile.php?id=61562605449423",
            color: "hover:bg-blue-600"
        },
        { 
            icon: () => <span className="font-bold text-sm">in</span>, 
            href: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A102531504&keywords=edurite%20consulting",
            color: "hover:bg-blue-500"
        },
        { 
            icon: InstagramIcon, 
            href: "https://www.instagram.com/edurite_consulting/",
            color: "hover:bg-pink-600"
        }
    ];

    return (
        <div className="relative py-16 bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            </div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
                    }}
                ></div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Top Section */}
                <div className={`grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <img 
                            src={logo} 
                            alt="EduRite Consulting" 
                            onClick={() => navigate("/")}
                            className="h-20 cursor-pointer transform hover:scale-105 transition-transform duration-300 filter brightness-0 invert"
                        />
                        
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Working since 2013, serving the nation with dedication and sincerity. We put our best efforts to make your dreams come true.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 transform hover:scale-110 hover:text-white hover:border-transparent ${social.color}`}
                                >
                                    <social.icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index} className="group flex items-center gap-3 cursor-pointer transform hover:translate-x-1 transition-transform duration-300">
                                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                    <span className="text-gray-300 group-hover:text-white">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore Links */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                            Explore Links
                        </h3>
                        <ul className="space-y-3">
                            {exploreLinks.map((link, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => navigate(link.path)}
                                    className="group flex items-center gap-3 cursor-pointer transform hover:translate-x-1 transition-transform duration-300"
                                >
                                    <ArrowForwardIcon className="text-red-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="text-gray-300 group-hover:text-white">
                                        {link.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Countries */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-6">
                            Countries
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                            {countries.map((country, index) => (
                                <span 
                                    key={index}
                                    className="text-gray-300 hover:text-white cursor-pointer transform hover:scale-105 transition-all duration-300 text-sm bg-gray-800/30 rounded-full px-3 py-1 text-center border border-gray-700/50"
                                >
                                    {country}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className={`border-t border-gray-700/50 pt-8 mb-8 transform transition-all duration-1000 delay-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Head Office */}
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 bg-red-600/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <LocationOnIcon className="text-red-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Head Office</h4>
                                <p className="text-gray-300 text-sm">23, 1st Floor, Gull plaza,<br/>Barkat market, Lahore</p>
                            </div>
                        </div>

                        {/* Islamabad Office */}
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 bg-red-600/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <LocationOnIcon className="text-red-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Islamabad Office</h4>   
                                <p className="text-gray-300 text-sm">Office : 15 , 2nd Floor Huzaifa Center,<br/>I-8 Markaz , Islamabad</p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <EmailIcon className="text-red-400 group-hover:scale-110 transition-transform duration-300" />
                                <div>
                                    <p className="text-white text-sm">info@globaleducationabroad.com</p>
                                    {/* <p className="text-gray-300 text-sm">eduriteconsulting@gmail.com</p> */}
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <PhoneIcon className="text-red-400 group-hover:scale-110 transition-transform duration-300" />
                                <div className="text-gray-300 text-sm space-y-1">
                                    <p>+92-339-4211280</p>
                                    {/* <p>+92-300-1488995</p>
                                    <p>+92-309-2480468</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`border-t border-gray-700/50 pt-6 transform transition-all duration-1000 delay-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            Copyright © 2024 globaleducationabroad. All rights reserved.
                        </p>
                        
                        <a 
                            href="https://gmsportfolio.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm bg-gray-800/30 px-4 py-1 rounded-full border border-gray-700/50"
                        >
                            Developed by Gms
                        </a>
                    </div> */}
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </div>
    )
}