import { useInView } from "framer-motion";
import { useRef } from "react";
import Contact from "../Contact/Contact";

const About = () => {
  const wrapRef = useRef(null);
  const isWrapInView = useInView(wrapRef, { once: true });

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <div
      className="p-4 px-8 sm:px-16 flex flex-col justify-between"
      id="about"
      ref={wrapRef}
    >
      <section className="sm:mt-[310px] mt-[200px]">
        <h1 className="sm:text-7xl text-4xl">
          <span className="reveal clone">
            Hi! I'm <strong>Valentino</strong>
          </span>{" "}
          🎇
        </h1>
        <h2
          className="sm:text-5xl text-2xl font-ubuntu"
          style={{
            transform: isWrapInView ? "none" : "translateX(-200px)",
            opacity: isWrapInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
        >
          Full Stack Dev 👨‍💻
        </h2>
        <Contact />
      </section>
      <section className="mt-[200px] flex flex-col items-end" ref={sectionRef}>
        <h1 className="text-6xl">
          <span className={isSectionInView ? "reveal clone duration-100" : ""}>
            Who am I?
          </span>{" "}
          🤔
        </h1>
        <p
          className="max-w-2xl text-right text-2xl"
          style={{
            transform: isSectionInView ? "none" : "translateY(150px)",
            opacity: isSectionInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
        >
          Self taught, Front End oriented, 19 years old.
          <p className="font-semibold">
            Open to work, feel free to contact me!
          </p>
        </p>
      </section>
    </div>
  );
};

export default About;
