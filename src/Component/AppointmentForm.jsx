import React, { useEffect, useState, useRef } from 'react'
import contactpic from './pics/Contactpic_1bgrmv.png'
import appointPic from './pics/AppointPic.png'
import gsap from 'gsap';
import emailjs from '@emailjs/browser'
import ServicesBox1234 from './pics/ServicesBox1234.jpeg'

export default function AppontmentForm(props) {
    const [namm, setNamm] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [lvledu, setLvledu] = useState("")
    const [fldStd, setFldStd] = useState("")
    const [destination, setDestinaion] = useState("")
    const [date, setDate] = useState(" ")
    const [time, setTime] = useState("")
    const [mode, setMode] = useState("")
    const [question, setQuestion] = useState("Any Question")
    
    const submit = () => {
        console.log(namm)
        console.log(dob)
        console.log(email)
        console.log(phone)
        console.log(lvledu)
        console.log(fldStd)
        console.log(destination)
        console.log(date)
        console.log(time)
        console.log(mode)
        console.log(question)
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hc8yqhv', 'template_zezzykv', form.current, {
                publicKey: 'PfxHdvvIvk-3DyeoR',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        // const tl =gsap.timeline();
        // tl.to("#bag",{
        //     x:-220,
        //     opacity:1,
        //     duration:3,
        //     yoyo:true,
        //     repeat:-1,
        // })
    }, [])

    return (
        <div className='flex justify-center items-center py-5 bg-[#1e1e27] min-h-screen px-4'>
            {/* --------------------------------form-------------------------------- */}
            <div className='w-full max-w-4xl mx-auto text-center'>
                {/* Header */}
                <div className='text-center mb-8'>
                    <p className='text-[0.85rem] text-white font-semibold'>{props.namm}</p>
                    <p className='text-[2rem] font-bold mt-[0.7rem] text-center text-3xl lg:text-3xl bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent mb-6 uppercase'>Let Your Study Abroad Aspirations</p>
                    <p className='text-[2rem] font-bold mt-[-1.5rem] text-center text-3xl lg:text-3xl bg-gradient-to-r from-[#df0139] to-[#ff6b9d] bg-clip-text text-transparent mb-6 uppercase'>Guide You</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className='flex justify-center'>
                    <div className='p-7 rounded-2xl shadow-md w-full max-w-2xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden'>
                        {/* Background Image for Form Box */}
                        <div 
                            className="absolute inset-0 z-0 rounded-2xl"
                            style={{
                                backgroundImage: `url(${ServicesBox1234})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* Dark overlay for better readability */}
                            <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
                        </div>
                        
                        {/* Content */}
                        <div className='relative z-10'>
                            {/* -------------------------------------first-------------------------------------- */}
                            <div className='flex gap-4 md:gap-16 mt-2 flex-col md:flex-row'>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Your Name</p>
                                    <input name="user_name" onChange={(e) => { setNamm(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={namm} placeholder='Enter your name' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Date of Birth</p>
                                    <input name="user_dob" onChange={(e) => { setDob(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={dob} placeholder='DD/MM/YYYY' />
                                </div>
                            </div>
                            {/* -------------------------------------second-------------------------------------- */}
                            <div className='flex gap-4 md:gap-16 mt-3 flex-col md:flex-row'>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Your Email</p>
                                    <input name="user_email" onChange={(e) => { setEmail(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={email} placeholder='your@email.com' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Your Phone</p>
                                    <input name="user_phone" onChange={(e) => { setPhone(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={phone} placeholder='+92 300 123 4567' />
                                </div>
                            </div>
                            {/* -------------------------------------third-------------------------------------- */}
                            <div className='flex gap-4 md:gap-16 mt-3 flex-col md:flex-row'>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Current Level of Education</p>
                                    <input name="user_lvledu" onChange={(e) => { setLvledu(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={lvledu} placeholder='e.g., High School, Bachelor' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Intended Field</p>
                                    <input name="user_field" onChange={(e) => { setFldStd(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={fldStd} placeholder='e.g., Computer Science, Medicine' />
                                </div>
                            </div>
                            {/* -------------------------------------fourth-------------------------------------- */}
                            <div className='flex gap-4 md:gap-16 mt-3 flex-col md:flex-row'>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Preferred Destination:</p>
                                    <input name="user_dest" onChange={(e) => { setDestinaion(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={destination} placeholder='e.g., USA, UK, Australia' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Preferred Date:</p>
                                    <input name="user_date" onChange={(e) => { setDate(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={date} placeholder='DD/MM/YYYY' />
                                </div>
                            </div>
                            {/* -------------------------------------fivth-------------------------------------- */}
                            <div className='flex gap-4 md:gap-16 mt-3 flex-col md:flex-row'>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Preferred Time</p>
                                    <input name="user_time" onChange={(e) => { setTime(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={time} placeholder='e.g., 10:00 AM' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Mode of Consultation (In-person/Online)</p>
                                    <input name="user_mode" onChange={(e) => { setMode(e.target.value) }} type='text' className='hover:shadow-md p-3 mt-2 bg-gray-700/80 text-[#e2e2e2] text-xs rounded-2xl w-full border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300' value={mode} placeholder='In-person or Online' />
                                </div>
                            </div>

                            {/* -------------------------------------sixth-------------------------------------- */}
                            <div className='mt-6'>
                                <p className='text-sm text-[#e2e2e2] font-semibold text-left'>Questions or Concerns:</p>
                                <textarea name="user_quest" onChange={(e) => { setQuestion(e.target.value) }} value={question} className='hover:shadow-md text-[#e2e2e2] w-full p-3 mt-2 bg-gray-700/80 text-xs rounded-2xl border border-gray-600 focus:border-[#df0139] focus:outline-none transition-colors duration-300 resize-none h-20' placeholder='Any questions or concerns...'></textarea>
                            </div>
                            <div className='w-full p-3 mt-3 bg-gradient-to-r from-[#df0139] to-[#ff6b9d] cursor-pointer hover:from-[#c80132] hover:to-[#ff5a8f] text-sm rounded-2xl text-center transition-all duration-300 transform hover:scale-105 relative z-10'>
                                <input value="Send" type='submit' onClick={submit} className='text-xs text-white cursor-pointer bg-transparent border-none w-full' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}