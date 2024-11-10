"use client";

import Image from "next/image";

import project1 from "../../../project1.jpg";
import project2 from "../../../project2.jpg";
import project3 from "../../../project3.jpg";
import project4 from "../../../project4.jpg";
import Link from "next/link";

const projects = [
 
  {
    src: "/Images/project2.jpg",
    alt: "OOP Project",
    title: "OOP Project",
    description: "This OOP (Object-Oriented Programming) project emphasizes coding best practices while providing an enjoyable user experience! 🎮🌟.",
    link: "https://github.com/Aliowais8514?tab=repositories"
  },
  {
    src: "/Images/project3.jpg",
    alt: "Trading Website",
    title: "Trading Website",
    description: "Our trading website is powered by React, offering a lightning-fast ⚡ and interactive platform for all your trading needs! Built with a focus on real-time data 📈.",
    link: "https://github.com/Aliowais8514?tab=repositories"
  },
  {
    src: "/Images/project4.jpg",
    alt: "Shadcn ui Table Component",
    title: "Shadcn ui Table Component",
    description: "The ShadCN UI Table component is a beautifully styled, customizable table designed for modern web apps 📊.",
    link: "https://github.com/Aliowais8514?tab=repositories"
  },
 
 
  {
    src:"/Images/project1.jpg",
    alt: "Animal Website",
    title: "Animal Website",
    description: "The Animals Website is an interactive platform designed to celebrate the beauty and diversity of wildlife! 🐾🌿 Built with HTML, CSS, and JavaScript. 🦁🐘",
    link: "https://github.com/Aliowais8514?tab=repositories"
  },

];

const Project = () => {
  return (
    <section className="text-gray-900 body-font bg-white"> {/* Set solid background color */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-gray-900 hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-gray-900 text-5xl">Projects</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl text-zinc-900 font-serif">
            Explore some of the amazing projects built with passion and creativity!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right" data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="object-cover w-full h-full"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-slate-500 h-[220px]">
                  <Link href={project.link}>
                    <h1 className="text-2xl font-serif text-bold text-black hover:uppercase hover:text-gray-900 transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;