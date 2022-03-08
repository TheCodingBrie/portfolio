export default function ProjectCard({ title, tech, hero, text, links }) {
  return (
    <div className="flex flex-col justify-between text-center font-sans w-fit max-w-[270px] p-0 rounded-2xl shadow-2xl border-2 border-slate-dark hover:border-green-text">
      <h1 className="font-bold text-xl my-2 text-slate-light">{title}</h1>
      <h2 className="font-bold text-md my-2 text-slate-light">{tech}</h2>
      <div className="">
        <img className="w-[90%] mx-auto" src={hero} alt=""></img>
      </div>
      <div className="p-2">
        <p className="font-sans text-slate-light">{text}</p>
      </div>
      <div className="flex justify-evenly gap-2 mb-4 mt-2">
        <a
          className="bg-slate-dark text-slate-light rounded-md px-2 hover:text-green-text hover:cursor-pointer"
          href={links[0]}
        >
          Project
        </a>
        <a
          className="bg-slate-dark text-slate-light rounded-md px-2 hover:text-green-text hover:cursor-pointer"
          href={links[1]}
        >
          Code
        </a>
      </div>
    </div>
  );
}
