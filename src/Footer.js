import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-scroll';

function Footer() {
    const sections = [
        { name: "About", to: "about" },
        { name: "Project", to: "project" },
        { name: "Testimonials", to: "testimonials" }
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shakeen-a-054498220/" },
        { icon: <SiLeetcode />, link: "https://leetcode.com/u/shakeen017/" },
        { icon: <FaGithub />, link: "https://github.com/shakeen17" }
    ];

    return (
        <div className='bg-gray-50 text-center p-6 border-t-2'>
            <p className='text-4xl font-semibold text-slate-900 mb-4'>Shakeen Appadurai</p>
            <div>
                <ul className='flex flex-wrap justify-center gap-5 mb-4'>
                    {sections.map((section, index) => (
                        <li key={index} className='text-center'>
                            <Link
                                to={section.to}
                                smooth={true}
                                duration={500}
                                offset={-70} // Adjust this value if you have a fixed navbar
                                className='block font-normal p-2 cursor-pointer'
                            >
                                {section.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='flex justify-center gap-5 mb-4'>
                    {socialLinks.map((social, index) => (
                        <li key={index} className='text-center'>
                            <a href={social.link} className='block p-2 text-xl'>
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='text-xs mt-9'>
                    <p className='mb-2'>Built with React JS & Tailwind CSS</p>
                    <p className='mb-4'>Hosted on Vercel</p>
                    <p>All Rights Reserved. ©</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
