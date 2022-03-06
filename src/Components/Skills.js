import { GiSkills } from "react-icons/gi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { ImBubbles } from "react-icons/im";
import { GiTeamUpgrade } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import SkillIcon from "./SkillIcon";

export default function Skills() {
  return (
    <>
      <span id="skills" className="mt-[-50px]"></span>
      <div id="skills" className="flex flex-wrap gap-5  justify-around">
        <div className="flex gap-2 justify-end mr-2  rounded-xl -translate-x-2">
          <GiSkills className="text-green-text" size={50} />
          <div className="text-slate-light w-16 xl:w-[200px] h-[2px] translate-y-5 bg-slate-light"></div>
          <h2 className="text-slate-light font-bold text-xl translate-y-2">
            Skills
          </h2>
        </div>
        <div className="flex flex-col flex-wrap sm:justify-around gap-5 w-[41.6em] translate-x-4 -translate-y-6 sm:text-justify  rounded-xl text-slate-dark py-6 px-3 mr-5 sm:mr-3">
          <h1 className="text-xl self-start text-slate-light font-bold bg-slate-dark w-fit ml-5 mt-3 px-3 py-1 rounded-xl shadow-2xl">
            Tech
          </h1>
          <div className="flex flex-wrap sm:justify-around gap-5 mt-5 border-slate-dark border-2 rounded-xl p-3 shadow-2xl">
            <div className="flex flex-col items-start gap-5">
              <SkillIcon text={"HTML5"} icon={<AiFillHtml5 size={40} />} />
              <SkillIcon text={"CSS3"} icon={<DiCss3Full size={40} />} />
              <SkillIcon text={"React"} icon={<FaReact size={40} />} />
              <SkillIcon
                text={"JavaScript"}
                icon={<SiJavascript size={40} />}
              />
            </div>
            <div className="flex flex-col gap-5">
              <SkillIcon text={"Node.js"} icon={<FaNodeJs size={40} />} />
              <SkillIcon text={"Express"} icon={<SiExpress size={40} />} />
              <SkillIcon text={"MongoDB"} icon={<SiMongodb size={40} />} />
              <SkillIcon
                text={"PostgreSQL"}
                icon={<SiPostgresql size={40} />}
              />
            </div>
            <div className="flex flex-col gap-5">
              <SkillIcon text={"Git"} icon={<DiGit size={40} />} />
              <SkillIcon
                text={"TailwindCSS"}
                icon={<SiTailwindcss size={40} />}
              />
              <SkillIcon
                text={"Bootstrap 5"}
                icon={<FaBootstrap size={40} />}
              />
            </div>
          </div>
          <h1 className="text-xl self-start text-slate-light font-bold bg-slate-dark w-fit ml-5 mt-6 px-3 py-1 rounded-xl shadow-2xl">
            Soft
          </h1>
          <div className="flex flex-wrap sm:justify-around gap-5 mt-5 border-slate-dark border-2 rounded-xl p-3 shadow-2xl">
            <SkillIcon text={"Leadership"} icon={<RiTeamFill size={40} />} />
            <SkillIcon
              text={"Team Building"}
              icon={<GiTeamUpgrade size={40} />}
            />
            <SkillIcon text={"Communication"} icon={<ImBubbles size={40} />} />
          </div>
        </div>
      </div>
    </>
  );
}
