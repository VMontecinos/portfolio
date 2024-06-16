import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col text-center w-fit mt-[25px]" id="contact">
      <h1 className="text-4xl">Contact links:</h1>
      <div className="flex flex-col">
        <div className="flex justify-evenly max-w-fit mt-[25px] gap-x-12">
          <a
            href="mailto:montecinosvalentino2005@hotmail.com"
            className="size-fit border-2 rounded-md p-2 flex items-center justify-evenly gap-x-4 w-[140px] text-xl hover:bg-slate-200 hover:text-slate-950 transition duration-200"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Mail
          </a>
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
