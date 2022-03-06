import FooterIcon from "./FooterIcon";
import { AiFillGithub } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="fixed flex flex-col gap-4 items-center bottom-0 right-10 scale-0 xl:scale-100 after:content-{<hr />}">
      <FooterIcon
        icon={<AiFillGithub size={30} />}
        link={"https://github.com/TheCodingBrie"}
      />
      <FooterIcon
        icon={<SiTwitter size={30} />}
        link={"https://twitter.com/BrieCoding"}
      />
      <FooterIcon
        icon={<BsLinkedin size={30} />}
        link={"https://www.linkedin.com/in/guillaumebelangerbrie"}
      />
      {/* <FooterIcon icon={<AiOutlineMail size={30} />} /> */}
      <div className="w-1 h-[10em] bg-slate"></div>
    </div>
  );
}
