import Bun from "../../assets/Bun.svg";
import Express from "../../assets/Express.svg";
import Nodejs from "../../assets/Nodejs.svg";
import Postgresql from "../../assets/Postgresql.svg";
import React from "../../assets/React.svg";
import Redux from "../../assets/Redux.svg";
import Tailwind from "../../assets/Tailwind.svg";
import Typescript from "../../assets/Typescript.svg";

const Techs = () => {
  return (
    <div className="flex flex-col text-center mt-[100px]">
      <h1 className="text-5xl">My tech stack:</h1>
      <div className="w-full flex flex-col gap-y-6 items-center p-6">
        <div className="flex w-full justify-between">
          <img
            src={React}
            className="size-24 opacity-45 hover:opacity-100 scale-95 hover:scale-105 transition duration-200"
            alt=""
          />
          <img
            src={Redux}
            className="size-24 opacity-45 hover:opacity-100 scale-95 hover:scale-105 transition duration-200"
            alt=""
          />
          <img
            src={Tailwind}
            className="size-24 opacity-45 hover:opacity-100 scale-95 hover:scale-105 transition duration-200"
            alt=""
          />
          <img
            src={Typescript}
            className="size-24 opacity-45 hover:opacity-100 scale-95 hover:scale-105 transition duration-200"
            alt=""
          />
        </div>
        <div className="flex w-full justify-evenly">
          <img
            src={Nodejs}
            className="size-24 opacity-45 hover:opacity-100 scale-95 hover:scale-105 transition duration-200"
            alt=""
          />
          <img
            src={Express}
            className="size-24 opacity-45 hover:opacity-100 scale-95 hover:scale-105 transition duration-200"
            alt=""
          />
          <img
            src={Postgresql}
            className="size-24 opacity-45 hover:opacity-100 scale-95 hover:scale-105 transition duration-200"
            alt=""
          />
          <img
            src={Bun}
            className="size-24 opacity-45 hover:opacity-100 scale-95 hover:scale-105 transition duration-200"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Techs;
