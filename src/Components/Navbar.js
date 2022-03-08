import NavbarIcon from "./NavbarIcon";
import { GiCheeseWedge } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { FaFolderOpen } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 pt-2 pb-8 flex flex-col gap-1 justify-between bg-navy-light text-slate-light shadow-2xl">
      <div>
        <NavbarIcon
          text={"About me"}
          icon={<GiCheeseWedge size={30} />}
          link={"#about"}
        />
        <NavbarIcon
          text={"Skills"}
          icon={<GiSkills size={30} />}
          link={"#skills"}
        />
        <NavbarIcon
          text={"Projects"}
          icon={<FaFolderOpen size={30} />}
          link={"#projects"}
        />
        <NavbarIcon
          text={"Contact"}
          icon={<AiOutlineMail size={30} />}
          link={"#contact"}
        />
      </div>
      <div className="scale-100 xl:scale-0">
        <NavbarIcon
          text={"Github"}
          icon={<AiFillGithub size={40} />}
          link={"https://github.com/TheCodingBrie"}
        />
        <NavbarIcon
          text={"Twitter"}
          icon={<SiTwitter size={30} />}
          link={"https://twitter.com/BrieCoding"}
        />
        <NavbarIcon
          text={"LinkedIn"}
          icon={<BsLinkedin size={28} />}
          link={"https://www.linkedin.com/in/guillaumebelangerbrie"}
        />
      </div>
    </div>
  );
}
