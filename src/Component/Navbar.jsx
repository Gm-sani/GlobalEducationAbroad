import React, { useEffect, useState } from 'react'
import { IconButton } from '@mui/material';
import DialpadIcon from '@mui/icons-material/Dialpad';
import TimerIcon from '@mui/icons-material/Timer';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import logo from "./pics/logo-final.png"
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import { useNavigate } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import gsap from 'gsap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#lownav", {
      opacity: 1,
      duration: 1.3,
    })
    tl.to("#logo", {
      opacity: 1,
      duration: 1.5,
    })
  }, [])

  const topNavItems = [
    {
      icon: <DialpadIcon className="text-red-500" />,
      text: "HELP DESK :",
      value: "+92-300-1488995 : +92-300-2488996"
    },
    {
      icon: <TimerTwoToneIcon className="text-red-500" />,
      text: "Monday - Saturday 09:00 am - 06:00 Pm"
    },
    {
      icon: <FmdGoodIcon className="text-red-500" />,
      text: "Head Office: 23, 1st Floor, Gull plaza, Barkat Market, Lahore"
    }
  ];

  const navLinks = [
    { label: "Company Overview", path: "overview" },
    { label: "Program", path: "program" },
    { label: "Student Services", path: "student" },
  ];

  const socialLinks = [
    { 
      icon: <FacebookOutlinedIcon className="text-white hover:text-blue-500 transition-colors" />, 
      href: "https://web.facebook.com/profile.php?id=61562605449423" 
    },
    { 
      icon: <span className="text-black font-semibold text-xs px-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors">in</span>, 
      href: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A102531504&keywords=edurite%20consulting&origin=RICH_QUERY_SUGGESTION&position=3&searchId=3e27da5f-2406-4aac-9503-a07b27c5d8b8&sid=k%3Bs&spellCorrectionEnabled=false" 
    },
    { 
      icon: <InstagramIcon className="text-white hover:text-pink-500 transition-colors" />, 
      href: "https://www.instagram.com/edurite_consulting/" 
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Navigation Bar - Uncomment if needed */}
      {/* <div className='lg:flex justify-between lg:px-7 px-4 bg-black text-white p-3 hidden'>
        <div className='flex items-center gap-4 flex-wrap'>
          {topNavItems.map((item, index) => (
            <div key={index} className='flex items-center gap-2'>
              {item.icon}
              <span className='text-sm font-mono'>{item.text}</span>
              {item.value && <span className='text-sm font-semibold'>{item.value}</span>}
            </div>
          ))}
        </div>
        
        <div className='flex items-center gap-4'>
          <p className='text-sm mt-1 font-serif'>Follow us:</p>
          <div className='flex gap-2'>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Navigation Bar */}
      <div className='lg:px-8 px-4 py-2 bg-white shadow-lg shadow-red-100 border-b border-red-50'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex justify-start'>
            <img 
              onClick={() => navigate("/")} 
              src={logo} 
              alt="logo" 
              id='logo' 
              className='h-14 lg:h-20 cursor-pointer opacity-5 hover:opacity-100 transition-opacity duration-300' 
            />
          </div>

          {/* Desktop Navigation Links */}
          <div 
            id='lownav' 
            className='hidden lg:flex gap-8 lg:gap-12 text-base py-4 lg:py-0 opacity-0'
          >
            {navLinks.map((link, index) => (
              <div 
                key={index}
                onClick={() => navigate(link.path)} 
                className='cursor-pointer text-[0.95rem] text-gray-700 font-light hover:text-red-500 transition-colors duration-200  py-2 px-1 border-b-2 border-transparent hover:border-red-500'
              >
                {link.label}
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className='hidden lg:flex gap-6 items-center justify-end'>
            <div 
              id='lownav'
              onClick={() => navigate("apply")} 
              className='flex items-center gap-2 cursor-pointer opacity-0 text-red-600 hover:text-red-700 font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition-all duration-200'
            >
              <span>Appointment</span>
              <ArrowRightAltIcon className="text-red-500" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <IconButton onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='lg:hidden bg-white border-t border-gray-200 mt-2 py-4 px-4 shadow-lg'>
            {/* Mobile Navigation Links */}
            <div className='flex flex-col space-y-4 mb-6'>
              {navLinks.map((link, index) => (
                <div 
                  key={index}
                  onClick={() => handleNavigation(link.path)} 
                  className='cursor-pointer text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium py-3 px-2 border-l-4 border-transparent hover:border-red-500 hover:bg-red-50 rounded-r-lg'
                >
                  {link.label}
                </div>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className='flex flex-col space-y-3'>
              <div 
                onClick={() => handleNavigation("apply")} 
                className='flex items-center justify-between cursor-pointer text-red-600 hover:text-red-700 font-semibold py-3 px-4 rounded-lg hover:bg-red-50 transition-all duration-200 border border-red-200'
              >
                <span>Appointment</span>
                <ArrowRightAltIcon className="text-red-500" />
              </div>
              
              {/* Uncomment if needed */}
              {/* <div 
                onClick={() => handleNavigation("refund")} 
                className='flex items-center justify-center cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200'
              >
                <span>Refund Policy</span>
              </div> */}
            </div>

            {/* Mobile Social Links */}
            <div className='mt-6 pt-4 border-t border-gray-200'>
              <p className='text-sm text-gray-600 mb-3 text-center'>Follow us:</p>
              <div className='flex justify-center gap-4'>
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Contact Info Bar - Only show on mobile when menu is closed */}
      {!isMobileMenuOpen && (
        <div className='lg:hidden bg-gray-50 py-2 px-4 border-b border-gray-200'>
          {/* <div className='flex justify-between items-center text-xs text-gray-600'>
            <div className='flex items-center gap-1'>
              <DialpadIcon className="text-red-500 text-sm" />
              <span>Help Desk</span>
            </div>
            <div className='flex items-center gap-1'>
              <TimerTwoToneIcon className="text-red-500 text-sm" />
              <span>Mon-Sat</span>
            </div>
            <div className='flex items-center gap-1'>
              <FmdGoodIcon className="text-red-500 text-sm" />
              <span>Office</span>
            </div>
          </div> */}
        </div>
      )}
    </div>
  )
}