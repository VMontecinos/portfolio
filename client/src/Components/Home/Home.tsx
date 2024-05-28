import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <div className="w-full mt-[310px]">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;