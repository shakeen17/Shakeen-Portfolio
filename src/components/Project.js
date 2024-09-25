import React from 'react'
import { GoLinkExternal } from "react-icons/go";
function Project() {
    const cardData = [
        {
          imgSrc: "hackerRankIcon.png",
          imgAlt: "Internshala Logo",
          title: "Problem Solving",
          badge: "HackerRank",
          content: ` It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).`,
          link: "https://www.hackerrank.com/certificates/e85ae571048f",
          linkText: "Certificate Link",
        },
        {
          imgSrc: "internshalaIcon.png",
          imgAlt: "internshala Logo",
          title: "Core Java",
          badge: "Internshala",
          content: `The training consisted of Getting Started with Java, Leveraging Basic Concepts, Object Oriented 
Programming, and Java App Development modules. `,
          link: "",
          linkText: "View Certificate",
        },
        {
          imgSrc: "abilityFusionIcon.jpeg",
          imgAlt: "Ability Fusion Logo",
          title: "Freelancer",
          badge: "Ability Fusion",
          content: `I worked as a freelancer, where I learned how to use React, Material-UI, and npm in real-world projects. I also gained experience in time management and meeting deadlines.`,
          link: "#",
          linkText: "Certificate Link",
        },
      ];
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      {/* Section title */}
      <div className="text-center mb-5">
        <div className="text-5xl font-bold">Certifications</div>
        <div className="text-gray-500 mt-4">Credentials & Achievements</div>
      </div>

      {/* Card list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="border border-white p-5 rounded-3xl shadow-md">
            <div className=" p-5 rounded-lg  flex flex-col items-start">
              {/* Card Image */}
              <img
                src={card.imgSrc}
                className="bg-black w-24 h-24 mb-4 rounded-2xl"
                alt={card.imgAlt}
              />

              {/* Certificate Header */}
              <h2 className="text-xl font-semibold mb-1">
                {card.title}
              </h2>

              {/* Badge */}
              <span className="text-lg text-gray-500  mb-1 text-left">
                {card.badge}
              </span>

              {/* Content */}
              <p className="course-content text-justify text-gray-600 h-36 mb-4">
                {card.content}
              </p>

              {/* Certificate Link */}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="course-link flex items-center text-black sm:text-sm lg:text-md hover:text-gray-600"

              >
               <GoLinkExternal className='mr-2 size-5' /> {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
