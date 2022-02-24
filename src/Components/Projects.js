import { FaFolderOpen } from "react-icons/fa";
import interactiveStory from "../images/interactiveStory.png";
import todoBoard from "../images/todoboard.png";
import photopediaServer from "../images/photopediaServer.png";
import photopedia from "../images/photopedia.png";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-wrap gap-5 xl:ml-16 justify-around">
      <div className="flex gap-2 justify-end xl:ml-16 mr-2 rounded-xl bg-opacity-50">
        <FaFolderOpen className="text-green-text" size={50} />
        <div className="text-slate-light w-16 xl:w-[200px] h-[2px] translate-y-5 opacity-80 bg-slate-light"></div>
        <h2 className="text-slate-light font-bold text-xl translate-y-2">
          Projects
        </h2>
      </div>
      <div className="flex flex-wrap sm:justify-around gap-5 w-[40em] mt-5 translate-x-3 sm:text-justify bg-slate-dark rounded-xl bg-opacity-50 text-slate-dark py-6 px-3 mr-5 shadow-2xl">
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
          text={
            "A simple drag and drop todolist with many options for the cards."
          }
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
      </div>
    </div>
  );
}
