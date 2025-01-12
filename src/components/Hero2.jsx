import React from 'react';
import { selfpro } from '../constants';
import '../index.css';

const Hero2 = () => {
  const handleClick = () => {
    const link = document.createElement('a');

    link.href = pdf;

    

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="bg-custom text-white pt-32  px-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between pl-1 lg:pl-28">
        <div className="lg:w-1/2 mb-6 lg:mb-0 p-0 md:p-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-[#ffffff]">
            Hey !{' '}
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            I'm{' '}
            <span
              className="text-4xl lg:text-6xl font-bold mb-4 text-[#8A2BE2]"
              text
            >
              Prince Kumar
            </span>
          </h1>
          <p className="text-lg lg:text-xl mb-4">
            👋 Hi, I'm Prince Kumar, a passionate Full Stack Web Developer with 2+ years of experience and backend expertise, contributing to PaediPrime and I have built various projects integrating AI/ML and web technologies..
          </p>
         
        </div>
        <div className="lg:w-1/2 pr-5">
          <img
            src={selfpro.image1}
            alt="Portfolio Image"
            className="w-full md:w-96 lg:w-96 xl:w-128  shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
