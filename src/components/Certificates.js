import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

function Certificates() {
    const [select, setSelect] = useState('All');

    const cards = [
        {
          id: 1,
          category: 'group',
          image: "Blockchain.jpeg",
          title: 'Fake Product Detection using BlockChain',
          content: 'Fake Product Detection using Blockchain is a full-stack application leveraging Ethereum smart contracts and proof of work to authenticate product authenticity. Built with React and Node.js, it ensures secure, decentralized verification, preventing counterfeit products in the supply chain.',
          technologies: 'HTML, Javascript, Node.js, Blockchain, Solidity, Truffle, Meta Mask',
          links: [
            {
              icon: <FaGithub />,
              name: 'Github',
              link: 'https://www.youtube.com/'
            },
            // {
            //   icon: <CiShare1 />,
            //   name: 'Visit',
            //   link: 'https://hilarious-llama-37551a.netlify.app'
            // }
          ]
        },
        {
          id: 2,
          category: 'individual',
          image: "food-project.jpg",
          title: 'Online Food Ordering Website',
          content: 'This project is a full-stack application for managing online food orders. It utilizes React to provide a scalable and efficient platform for browsing menus, placing orders, and generating bill in real-time.',
          technologies: 'React, Bootstrap, Firebase',
          links: [
            {
              icon: <FaGithub />,
              name: 'Github',
              link: 'https://github.com/shakeen17/Paradise-Restaurant'
            },
            {
              icon: <CiShare1 />,
              name: 'Visit',
              link: 'https://paradise-restaurant.vercel.app/'
            }
          ]
        }
      ];

      const filteredCards = select === 'All'
    ? cards
    : cards.filter(card => card.category === select.toLowerCase());

  return (
    <div className="max-w-screen-lg mx-auto p-5">
    {/* Section title */}
    <div className="text-center mb-5">
      <div className="text-3xl font-bold">My Portfolio</div>
      <div className="text-gray-500 text-md">Recent Works</div>
    </div>

    {/* Filter buttons */}
    <div className="flex w-full gap-4 items-center justify-center text-center">
      <button
        onClick={() => setSelect('All')}
        className={`p-2 size-md rounded-full w-24 ${select === 'All' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
      >
        All
      </button>
      <button
        onClick={() => setSelect('Individual')}
        className={`p-2 size-md rounded-full w-24 ${select === 'Individual' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
      >
        Individual
      </button>
      <button
        onClick={() => setSelect('Group')}
        className={`p-2 size-md rounded-full w-24 ${select === 'Group' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
      >
        Group
      </button>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {filteredCards.map((card) => (
        <div key={card.id} className="border border-white p-2 rounded-3xl shadow-md">
          <div className="p-5 rounded-lg flex flex-col items-start">
            {/* Card image */}
            <img
              src={card.image}
              className="w-full h-48 rounded-2xl mb-2"
              alt={card.title}
            />
            {/* Card header */}
            <h2 className="text-black text-xl font-semibold mb-1">
              {card.title}
            </h2>
            {/* Card content */}
            <p className="text-justify text-gray-600 h-36 mb-3">
              {card.content}
            </p>
            {/* Card technologies */}
            <p className="text-gray-500 text-sm mt-4 h-7 mb-2">
              Technologies: {card.technologies}
            </p>
            {/* Card links */}
            <div className="flex gap-6 mt-4">
              {card.links.map((link, index) => (
                <a key={index} href={link.link} className="flex items-center gap-2 text-md">
                  {link.icon} {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Certificates
