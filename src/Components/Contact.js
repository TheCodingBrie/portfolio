import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="flex flex-wrap gap-5 xl:ml-16 justify-around">
      <div className="flex gap-2 justify-end xl:ml-16 mr-2  rounded-xl bg-opacity-50">
        <AiOutlineMail className="text-green-text" size={50} />
        <div className="text-slate-light w-16 xl:w-[200px] h-[2px] translate-y-5 opacity-80 bg-slate-light"></div>
        <h2 className="text-slate-light font-bold text-xl translate-y-2">
          Contact
        </h2>
      </div>
      <div className="flex flex-col flex-wrap sm:justify-around gap-5 w-[40em] mt-5 translate-x-3 sm:text-justify bg-slate-dark rounded-xl bg-opacity-50 text-slate-dark py-6 px-3 mr-5 sm:mr-0 shadow-2xl">
        <div className="bg-slate"></div>
        <div className="bg-slate"></div>
        <div className="bg-slate"></div>
      </div>
    </div>
  );
}
