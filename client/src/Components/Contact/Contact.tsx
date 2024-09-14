import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col pt-4" id="contact">
      <h1 className="text-2xl sm:text-4xl whitespace-nowrap">Contact links:</h1>
      <div className="flex flex-col sm:flex-row gap-y-4 justify-evenly max-w-fit mt-[25px] gap-x-12">
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
  );
};

export default Contact;
