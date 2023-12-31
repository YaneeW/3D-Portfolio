import css from "../assets/css.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import postgres from "../assets/postgresql.png";
import postman from "../assets/postman.png";
import react from "../assets/react.png";
import vscode from "../assets/vscode.png";
import tailwild from "../assets/tailwind.png";

function Skill() {
  return (
    <section
      id="skill"
      className="absolute top-[220%] flex flex-col items-center "
    >
      <header
        id="skill-detail"
        className="text-8xl syne m-[7%] custom-text-shadow"
      >
        SKILL
      </header>
      <div
        id="icons"
        className="grid grid-cols-6 gap-20 justify-items-center justify-self-center w-[80%]"
      >
        <img
          src={html}
          alt="html"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={css}
          alt="css"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={js}
          alt="js"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={react}
          alt="react"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={tailwild}
          alt="tailwild"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={nodejs}
          alt="nodejs"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={express}
          alt="express"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={mongodb}
          alt="mongodb"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={postgres}
          alt="postgres"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={git}
          alt="git"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={vscode}
          alt="vscode"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
        <img
          src={postman}
          alt="postman"
          className="w-[50%] h-[90%] scale-100 hover:scale-150 transition ease-in-out duration-700 "
        />
      </div>
    </section>
  );
}

export default Skill;
