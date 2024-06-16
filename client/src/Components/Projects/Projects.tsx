import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "../../assets/React.svg";
import Redux from "../../assets/Redux.svg";
import Nodejs from "../../assets/Nodejs.svg";
import Tailwind from "../../assets/Tailwind.svg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="flex flex-col items-center gap-y-12 mt-[100px]"
      id="projects"
    >
      <h1 className="mt-28 text-5xl">My projects</h1>
      <div className="flex justify-evenly w-full" ref={ref}>
        <div
          id="project-1"
          className={`flex flex-col hover:card-shadow items-center text-start bg-opacity-40 border-2 border-emerald-300 bg-emerald-400 hover:bg-opacity-50 rounded-md opacity-75 hover:opacity-100 scale-95 hover:scale-100 transition duration-300 max-w-[400px] max-h-[600px] ${
            isInView ? "" : "translate-y-[200px]"
          }`}
        >
          <a href="https://front-starwork.vercel.app" target="_blank">
            <img
              src="https://i.ibb.co/DKGSHWg/Screenshot-1.png"
              className="rounded-t-md"
              alt="starwork-project-screenshot"
            />
          </a>
          <a
            className="text-3xl size-fit"
            href="https://front-starwork.vercel.app"
            target="_blank"
          >
            Starwork 🌟
          </a>
          <div className="p-4 flex flex-col gap-y-2">
            <p>
              This is a group project I developed for a startup company called
              Starwork as a final project for Soy Henry's bootcamp.
            </p>
            <div className="flex justify-evenly">
              <img src={React} className="size-12" alt="" />
              <img src={Redux} className="size-12" alt="" />
              <img src={Tailwind} className="size-12" alt="" />
            </div>
          </div>
        </div>
        <div
          id="project-2"
          className={`flex flex-col hover:card-shadow items-center text-start bg-opacity-40 border-2 border-emerald-300 bg-emerald-400 hover:bg-opacity-50 rounded-md opacity-75 hover:opacity-100 scale-95 hover:scale-100 transition duration-300 max-w-[400px] max-h-[600px] ${
            isInView ? "" : "translate-y-[200px]"
          }`}
        >
          <a href="https://youtu.be/wgFoviwcjSo" target="_blank">
            <img
              src="https://i.ibb.co/SyLJgj9/Screenshot-2.png"
              className="rounded-t-md"
            />
          </a>
          <a
            className="text-3xl size-fit"
            href="https://youtu.be/wgFoviwcjSo"
            target="_blank"
          >
            Gameware 🎮
          </a>
          <div className="p-4 flex flex-col gap-y-2">
            <p>
              This is an individual project developed for the Soy Henry's
              bootcamp using RAWG's API.
            </p>
            <div className="flex justify-evenly">
              <img src={React} className="size-12" alt="" />
              <img src={Redux} className="size-12" alt="" />
              <img src={Nodejs} className="size-12" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
