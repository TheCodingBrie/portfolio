import { GiCheeseWedge } from "react-icons/gi";

export default function Bio() {
  return (
    <>
      <span id="about" className="mt-[-50px]"></span>
      <div className="flex flex-wrap gap-5 justify-around">
        <div className="flex gap-2 justify-end mr-2 -translate-x-2 rounded-xl">
          <GiCheeseWedge className="text-green-text" size={50} />
          <div className="text-slate-light w-16 xl:w-[200px] h-[2px] translate-y-5 bg-slate-light"></div>
          <h2 className="text-slate-light font-bold text-xl translate-y-2">
            About me
          </h2>
        </div>
        <div className="w-[40em] translate-x-3 translate-y-2 sm:text-justify pr-3 border-slate-dark border-2 rounded-xl p-3 sm:p-5 mr-5 shadow-2xl">
          <p>
            Welcome to my portfolio! My name is Guillaume and I'm having a blast
            creating so many things to populate the web. I always had a thing
            for IT related activities, but in 2021 I decided that this would be
            my new life. I had a fullfiling career in management and
            hospitality, but now I am living my passion. This brilliant past
            allows me to bring with me so many soft skills that translate
            greatly to the field. Teamwork and leadership are like a second
            nature to me.
          </p>
          <br />
          <p>
            I am motivated by creation and original projects that allow me to
            bring meaning to users. I am also discovering lately that I might
            have a crush for indie game development. It's exciting to see what
            the future has in store!
          </p>
        </div>
      </div>
    </>
  );
}
