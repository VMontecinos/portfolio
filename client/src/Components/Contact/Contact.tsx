import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col text-center mt-[100px]" id="contact">
      <h1 className="text-4xl">You can reach out to me at:</h1>
      <div className="flex flex-col">
        <h2 className="text-2xl py-6">
          📧 montecinosvalentino2005@hotmail.com
        </h2>
        <div className="flex justify-evenly pb-6">
          <a
            href="https://linkedin.com/in/vmontecinos"
            target="_blank"
            className="size-fit border-2 rounded-md p-2 flex items-center justify-evenly gap-x-4 w-[140px] text-xl hover:bg-slate-200 hover:text-slate-950 transition duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            Linkedin
          </a>
          <a
            href="https://github.com/vmontecinos"
            target="_blank"
            className="size-fit border-2 rounded-md p-2 flex items-center justify-evenly gap-x-4 w-[140px] text-xl hover:bg-slate-200 hover:text-slate-950 transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
