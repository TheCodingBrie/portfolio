import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          alert(
            "Message sent, I will contact you in a timely manner",
            result.text
          );
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <>
      <span id="contact" className="mt-[-50px]"></span>
      <div id="contact" className="flex flex-wrap gap-5 justify-around">
        <div className="flex gap-2 justify-end mr-2  rounded-xl sm:-translate-x-8">
          <AiOutlineMail className="text-green-text" size={50} />
          <div className="text-slate-light w-16 xl:w-[200px] h-[2px] translate-y-5 bg-slate-light"></div>
          <h2 className="text-slate-light font-bold text-xl translate-y-2">
            Contact
          </h2>
        </div>
        <div className="flex justify-center gap-5 w-[36em] min-h-[370px] mt-5 translate-x-3 sm:-translate-x-3 -translate-y-8 sm:text-justify rounded-xl text-slate-dark pt-6 px-3 mr-5 sm:mr-2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-around gap-4 w-full"
          >
            <input
              name="name"
              className="bg-transparent text-gray-400 border border-slate-dark rounded-lg p-2 focus:outline-none focus:border-2 focus:border-slate"
              placeholder="Your name"
              type="text"
              required
            ></input>
            <input
              name="email"
              className="bg-transparent text-gray-400 border border-slate-dark rounded-lg p-2 focus:outline-none focus:border-2 focus:border-slate"
              placeholder="Email"
              type="email"
              required
              autoComplete="email"
            ></input>
            <input
              name="subject"
              className="bg-transparent text-gray-400 border border-slate-dark rounded-lg p-2 focus:outline-none focus:border-2 focus:border-slate"
              placeholder="Subject"
              type="text"
              required
            ></input>
            <textarea
              name="message"
              className="bg-transparent text-gray-400 border border-slate-dark rounded-lg p-2 focus:outline-none focus:border-2 focus:border-slate min-h-[100px]"
              placeholder="Message"
              required
            ></textarea>
            <input
              type="submit"
              className="bg-slate-dark text-slate-light w-fit px-2 rounded-md self-center mb-4 shadow-2xl hover:text-green-text hover:cursor-pointer"
              value="Send"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}
