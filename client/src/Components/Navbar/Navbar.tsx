import Brand from "../../assets/Brand.svg";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed p-3 backdrop-blur-sm flex justify-between items-center w-full">
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
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a className="p-3 gradient-animation gradient-button" href="#">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
