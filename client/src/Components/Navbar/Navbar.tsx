import Brand from "../../assets/Brand.svg";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToProjects = () => {
    window.scrollTo(0, 1180);
  };

  return (
    <div className="fixed z-10 p-3 backdrop-blur-sm flex justify-between items-center w-full">
      <div className="flex items-center gap-x-4" id="brand">
        <img src={Brand} className="logo" alt="logo" onClick={scrollToTop} />
        <a
          className="text-xl link"
          href="https://github.com/vmontecinos"
          target="_blank"
        >
          @VMontecinos
        </a>
      </div>
      <div className="flex gap-x-10 items-center" id="links">
        <a href="#" onClick={scrollToTop}>
          About
        </a>
        <a href="#" onClick={scrollToProjects}>
          Projects
        </a>
        <a className="p-3 gradient-animation gradient-button" href="#contact">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
