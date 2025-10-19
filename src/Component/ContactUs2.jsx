import React, { useRef, useState } from 'react'
import contactpic from './pics/Contactpic_1bgrmv.png'
import emailjs from '@emailjs/browser'
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ContactUs2(props) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);

        emailjs
            .sendForm('service_1n2p32w', 'template_if37pld', form.current, {
                publicKey: 'u-jLSXzFMB5_9c3-j',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitting(false);
                    setIsSubmitted(true);
                    setFormData({ name: "", phone: "", address: "", message: "" });
                    
                    // Reset success message after 5 seconds
                    setTimeout(() => setIsSubmitted(false), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSubmitting(false);
                },
            );
    };

    return (
        <div className="relative min-h-screen bg-[#1e1e27] py-12 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#df0139]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#df0139]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#df0139]/5 rounded-full blur-2xl"></div>
            </div>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#df0139]/30 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
                    }}
                ></div>
            ))}

            <div className="relative z-10 max-w-4xl mx-auto px-4 flex items-center justify-center min-h-screen">
                <div className="w-full">
                    {/* Header - Centered */}
                    <div className="text-center space-y-4 mb-8">
                        <p className="text-lg font-semibold text-[#df0139] bg-[#df0139]/10 px-4 py-2 rounded-full w-fit border border-[#df0139]/20 mx-auto">
                            {props.namm}
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent leading-tight uppercase">
                            Let Your Study Abroad<br />
                            <span className="bg-gradient-to-r from-[#ff6b9d] to-[#df0139] bg-clip-text text-transparent">
                                Aspirations Guide You
                            </span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#df0139] to-[#ff6b9d] rounded-full mx-auto"></div>
                    </div>

                    {/* Success Message */}
                    {isSubmitted && (
                        <div className="bg-green-900/30 border border-green-800/50 rounded-2xl p-6 flex items-center gap-3 animate-fade-in mb-6 max-w-2xl mx-auto">
                            <CheckCircleIcon className="text-green-400 text-2xl" />
                            <div>
                                <p className="text-green-300 font-semibold">Message Sent Successfully!</p>
                                <p className="text-green-400 text-sm">We'll get back to you within 24 hours.</p>
                            </div>
                        </div>
                    )}

                    {/* Form - Centered */}
                    <div className="flex justify-center">
                        <form ref={form} onSubmit={sendEmail} className="w-full max-w-2xl">
                            <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/50 p-8 transform hover:shadow-2xl transition-all duration-500">
                                {/* Name and Phone Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-white">
                                            <PersonIcon className="text-lg" />
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <input 
                                                name="user_name"
                                                type="text" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full p-4 bg-gray-700/50 border-2 rounded-2xl text-gray-100 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-[#df0139] focus:bg-gray-600 focus:scale-105 ${
                                                    errors.name ? 'border-[#df0139]' : 'border-gray-600'
                                                }`}
                                                placeholder="Enter your full name"
                                            />
                                            {errors.name && (
                                                <span className="text-[#df0139] text-xs absolute -bottom-5 left-0">{errors.name}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-white">
                                            <PhoneIcon className="text-lg" />
                                            Your Phone
                                        </label>
                                        <div className="relative">
                                            <input 
                                                name="user_phone"
                                                type="text" 
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full p-4 bg-gray-700/50 border-2 rounded-2xl text-gray-100 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-[#df0139] focus:bg-gray-600 focus:scale-105 ${
                                                    errors.phone ? 'border-[#df0139]' : 'border-gray-600'
                                                }`}
                                                placeholder="+92 300 123 4567"
                                            />
                                            {errors.phone && (
                                                <span className="text-[#df0139] text-xs absolute -bottom-5 left-0">{errors.phone}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="space-y-2 mt-6">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-white">
                                        <LocationOnIcon className="text-lg" />
                                        Your Address
                                    </label>
                                    <div className="relative">
                                        <input 
                                            name="user_address"
                                            type="text" 
                                            value={formData.address}
                                            onChange={handleChange}
                                            className={`w-full p-4 bg-gray-700/50 border-2 rounded-2xl text-gray-100 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-[#df0139] focus:bg-gray-600 focus:scale-105 ${
                                                errors.address ? 'border-[#df0139]' : 'border-gray-600'
                                            }`}
                                            placeholder="Enter your complete address"
                                        />
                                        {errors.address && (
                                            <span className="text-[#df0139] text-xs absolute -bottom-5 left-0">{errors.address}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2 mt-6">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-white">
                                        <MessageIcon className="text-lg" />
                                        Your Message
                                    </label>
                                    <div className="relative">
                                        <textarea 
                                            name="user_message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className={`w-full p-4 bg-gray-700/50 border-2 rounded-2xl text-gray-100 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-[#df0139] focus:bg-gray-600 focus:scale-105 resize-none ${
                                                errors.message ? 'border-[#df0139]' : 'border-gray-600'
                                            }`}
                                            placeholder="Tell us about your study abroad aspirations..."
                                        />
                                        {errors.message && (
                                            <span className="text-[#df0139] text-xs absolute -bottom-5 left-0">{errors.message}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full mt-8 py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                                        isSubmitting 
                                            ? 'bg-gray-600 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-[#df0139] to-[#ff6b9d] hover:from-[#c80132] hover:to-[#ff5a8f] shadow-lg'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2">
                                            <SendIcon className="text-lg" />
                                            Send Message
                                        </div>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </div>
    )
}