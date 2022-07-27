import { FaFolderOpen } from "react-icons/fa";
import interactiveStory from "../images/interactiveStory.png";
import todoBoard from "../images/todoboard.png";
import photopediaServer from "../images/photopediaServer.png";
import photopedia from "../images/photopedia.png";
import fightingGame from "../images/fightingGame.png";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <span id="projects" className="mt-[-50px]"></span>
      <div id="projects" className="flex flex-wrap gap-5 justify-around">
        <div className="flex gap-2 justify-end mr-2 rounded-xl">
          <FaFolderOpen className="text-green-text" size={50} />
          <div className="text-slate-light w-16 xl:w-[200px] h-[2px] translate-y-5 bg-slate-light"></div>
          <h2 className="text-slate-light font-bold text-xl translate-y-2">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap sm:justify-around gap-5 w-[41.6em] mt-5 translate-x-3 -translate-y-8 sm:text-justify  rounded-xl text-slate-dark py-6 px-3 mr-5">
          <ProjectCard
            title={"Interactive Story"}
            tech={"React"}
            hero={interactiveStory}
            text={
              "Follow the adventures of Timmy and Lea as you learn all about recycling!"
            }
            links={[
              "https://sustainablefuture.github.io/interactivestory/",
              "https://github.com/sustainablefuture/interactivestory",
            ]}
          />
          <ProjectCard
            title={"TodoBoard"}
            tech={"React"}
            hero={todoBoard}
            text={"A photo repository for amateur photographers."}
            links={[
              "https://TheCodingBrie.github.io/todolist-team/",
              "https://github.com/TheCodingBrie/todolist-team",
            ]}
          />
          <ProjectCard
            title={"Photopedia"}
            tech={"MERN stack"}
            hero={photopedia}
            text={
              "A simple drag and drop todolist with many options for the cards."
            }
            links={[
              "https://TheCodingBrie.github.io/photopedia/",
              "https://github.com/TheCodingBrie/Photopedia",
            ]}
          />
          <ProjectCard
            title={"Photopedia API"}
            tech={"Node.js, Express"}
            hero={photopediaServer}
            text={
              "An Express / Node.js server to use as an API with several routes to deliver data from MongoDB for our frontend application"
            }
            links={[
              "https://photopedia-server.herokuapp.com/api/locations",
              "https://github.com/TheCodingBrie/photopedia-server-mongo",
            ]}
          />
          <ProjectCard
            title={"Fighting Game"}
            tech={"Javascript, HTML, CSS"}
            hero={fightingGame}
            text={
              "A classic fighting game made with OOP and with many extra features, have fun and... FIGHT!"
            }
            links={[
              "https://thecodingbrie-fighting-game.netlify.app/",
              "https://github.com/TheCodingBrie/fighting-game",
            ]}
          />
        </div>
      </div>
    </>
  );
}
