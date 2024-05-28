import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const wrapRef = useRef(null);
  const isWrapInView = useInView(wrapRef, { once: true });

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <div className="p-4 flex flex-col justify-between" ref={wrapRef}>
      <section className="">
        <h1 className="text-6xl">
          <span className="reveal clone">Hi! I'm Valentino</span> 🎇
        </h1>
        <h2
          className="text-4xl font-ubuntu"
          style={{
            transform: isWrapInView ? "none" : "translateX(-200px)",
            opacity: isWrapInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
          }}
        >
          Full Stack Dev 👨‍💻
        </h2>
      </section>
      <section className="mt-[300px] flex flex-col items-end" ref={sectionRef}>
        <h1 className={isSectionInView ? "text-5xl" : "invisible"}>
          <span className={isSectionInView ? "reveal clone duration-100" : ""}>
            What do I do?
          </span>{" "}
          🤔
        </h1>
        <p
          className="max-w-2xl text-right text-2xl"
          style={{
            transform: isSectionInView ? "none" : "translateX(200px)",
            opacity: isSectionInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
          }}
        >
          As a Full Stack dev, I enjoy doing both front and back end code,{" "}
          <i className="font-ubuntu">but...</i> I admit I'm more of a Front end
          guy.
        </p>
      </section>
    </div>
  );
};

export default About;
