import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Typed from 'typed.js';
import './Home.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import Typewriter from 'typewriter-effect';

function Home() {
  useEffect(() => {
    const options = {
      strings: ["Front-end Developer", "Software Engineer", "Coder"],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true
    };

    const typed = new Typed(".auto-type", options);

    // Cleanup function to destroy the Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  const icons = [
    { icon: <FaLinkedin />, key: 'linkedin', link: 'https://www.linkedin.com' },
    { icon: <SiLeetcode />, key: 'leetcode', link: 'https://www.leetcode.com' },
    { icon: <FaGithub />, key: 'github', link: 'https://www.github.com' }
  ];

  return (
    <div className='max-w-screen-lg mx-auto p-5'>
      {/* Desktop view */}
      <div className='hidden lg:grid lg:grid-cols-4 gap-6 items-center'>
        <div className='flex flex-col gap-y-6 text-2xl'>
          {icons.map((icn) => (
            <a key={icn.key} href={icn.link} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
              {icn.icon}
            </a>
          ))}
        </div>

        <div className='text-content flex flex-col items-start col-span-2'>
          <h1 className='text-5xl font-semibold'>Shakeen Appadura</h1>
          <p className="text-lg mt-2">
            I'm a <span className="auto-type"></span>
          </p>
          <p className='mt-2'>Building Software Which Makes Others Lives Easier</p>
          {/* <button className='flex items-center gap-2 text-lg border border-black p-3 rounded-2xl mt-5 bg-black text-white'>
            Download Resume <IoDocumentTextOutline />
          </button> */}

<a 
  href="/SHAKEEN-MY-RESUME.pdf" // Adjust the filename if necessary
  download="Shakeen_Appadurai_Resume.pdf" // Set the desired download name
  target="_blank" // Opens the file in a new tab (optional, not necessary for download)
  rel="noopener noreferrer" // Security feature when using target="_blank"
  // download // This ensures that the file is downloaded instead of opened
  className='flex items-center gap-2 text-lg border border-black p-3 rounded-2xl mt-5 bg-black text-white'
>
  Download Resume <IoDocumentTextOutline />
</a>
{/* 
<a 
  href="/SHAKEEN-MY-RESUME.pdf" // Update this path based on your file location in the 'public' folder
  target="_blank" // Opens the file in a new tab
  rel="noopener noreferrer" // Security feature to prevent access to the previous window object
  className='flex items-center gap-2 text-lg border border-black p-3 rounded-2xl mt-5 bg-black text-white'
>
  Download Resume <IoDocumentTextOutline />
</a> */}

        </div>

        <div className="blob">
          {/* Add your blob content here */}
        </div>
      </div>

      {/* Mobile view */}
      <div className='lg:hidden max-w-screen mx-auto p-5 '>
        <div className='grid grid-cols-2  items-center gap-4'>
          {/* Icons */}
         <div className='flex col-span-2 items-center'>
         <div className='flex flex-col insert-y-0 start-0 left-0 items-center gap-2 text-4xl '>
            {icons.map((icn) => (
              <a key={icn.key} href={icn.link} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
                {icn.icon}
              </a>
            ))}
          </div>

          {/* Blob */}
          <div className="blob flex justify-center items-center mt-5 mb-5">
            {/* Add your blob content here */}
          </div>
         </div>

          {/* Text content */}
          <div className='text-content flex flex-col items-center text-center col-span-2'>
            <h1 className='text-3xl font-semibold'>Shakeen Appadurai</h1>
            <p className="text-lg flex gap-2 mt-2">
              I'm a <Typewriter
                options={{
                  strings: ['Software Developer', 'Front-end Designer', 'Coder'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className='mt-2'>Building Software Which Makes Others' Lives Easier</p>
            <button className='flex items-center gap-2 text-lg border border-black p-3 rounded-2xl mt-5 bg-black text-white'>
              Download Resume <IoDocumentTextOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
