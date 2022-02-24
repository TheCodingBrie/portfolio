export default function ProjectCard({ title, tech, hero, text, links }) {
  return (
    <div className="flex flex-col justify-between text-center font-sans w-fit max-w-[250px] bg-slate-dark p-0 rounded-2xl shadow-2xl border-2 border-slate-dark hover:border-green-text">
      <h1 className="font-bold text-xl my-2 text-slate-light">{title}</h1>
      <h2 className="font-bold text-md my-2 text-slate-light">{tech}</h2>
      <div className="">
        <img className="w-[90%] mx-auto" src={hero}></img>
      </div>
      <div className="p-2">
        <p className="font-sans text-slate-light">{text}</p>
      </div>
      <div className="flex justify-evenly gap-2 mb-2">
        <button className="bg-slate text-gray-800 rounded-md p-1 hover:text-green-text">
          Project
        </button>
        <button className="bg-slate text-gray-800 rounded-md p-1 hover:text-green-text">
          Code
        </button>
      </div>
    </div>
  );
}
