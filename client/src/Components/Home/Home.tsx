import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <div className="w-full">
        <About />
        <Projects />
        <Techs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
