import FooterIcon from "./FooterIcon";
import { AiFillGithub } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="fixed flex flex-col gap-4 items-center bottom-0 left-10 scale-0 xl:scale-100 after:content-{<hr />}">
      <FooterIcon icon={<AiFillGithub size={30} />} />
      <FooterIcon icon={<SiTwitter size={30} />} />
      <FooterIcon icon={<BsLinkedin size={30} />} />
      <div className="w-1 h-[10em] bg-slate"></div>
    </div>
  );
}
