import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '/images/profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-32"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-secondary font-mono">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="space-y-4 text-textSecondary">
              <p>
                Hello! My name is Vinay Naik V and I'm a passionate Computer Science student at Siddaganga Institute of Technology, Tumkur.
                My journey in technology began in 2023 when I started exploring web development and various programming concepts.
              </p>

              <p>
                Currently in my 3rd year of B.E. in Computer Science and Engineering, I've been actively working on projects
                involving AI, Blockchain, and Web Development. I'm particularly proud of my work on the AI-Integrated Ambulance
                Booking System and the Evidence Chaining project using Blockchain.
              </p>

              <p>
                I've participated in various hackathons and competitions, notably securing 3rd place at Hackkshetra 2024
                for my Evidence Chaining project. I'm constantly learning and expanding my skillset through practical projects
                and academic coursework.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
            </div>

            <ul className="grid grid-cols-2 gap-2 mt-6 text-textSecondary">
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> React.js
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Node.js
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Python
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> MongoDB
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> TensorFlow
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Blockchain
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Java
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> HTML/CSS
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -inset-0.5 bg-secondary rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <img
                  src={profileImage}
                  alt="Vinay Naik V"
                  className="relative rounded-lg w-full filter grayscale hover:grayscale-0 transition duration-300 shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
