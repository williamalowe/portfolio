import AboutImage from "./about-image";

export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen w-full flex bg-zinc-900 text-zinc-50"
    >
      <div className="max-w-[1200px] p-24 flex flex-col">
        <p className="pl-[200px] text-4xl w-[75%] tracking-wide leading-[4rem]">I am a passionate <span className="font-bold">front-end developer</span> who loves bringing digital experiences to life.</p>
        <AboutImage />
      </div>
    </section>
  );
}
