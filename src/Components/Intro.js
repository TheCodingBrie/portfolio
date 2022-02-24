import portrait from "../images/portrait.jpg";

export default function Intro() {
  return (
    <div className="flex flex-wrap sm:justify-around lg:mt-10 xl:mt-16">
      <div className="flex flex-col gap-1 min-h-[200px] p-4 sm:pl-16">
        <h3 className="text-green-text text-md">hi, my name is</h3>
        <h1 className="font-sans text-slate-light text-3xl font-bold mt-2 mb-4">
          Guillaume Belanger Brie
        </h1>
        <h2 className="text-slate text-xl font-bold">
          I'm a full stack web and app developer
        </h2>
      </div>
      <img
        className="max-w-sm mt-3 min-h-[200px] xl:min-w-[300px] translate-x-3"
        src={portrait}
        alt="myself"
      ></img>
    </div>
  );
}
