import AboutImage from "./about-image";

export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen w-full flex bg-zinc-900 text-zinc-50 justify-center px-24"
    >
    <div className="flex items-center justify-center max-w-[1200px]">
      <div className="flex-1">
        <AboutImage />
      </div>
      <div className="flex-1 flex flex-col gap-y-4">
        <p className="text-4xl tracking-wider leading-[4rem]">I am a passionate <span className="font-bold">front-end developer</span> who loves bringing digital experiences to life.</p>
        <p className="leading-[2rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit non numquam quasi fugiat quisquam iusto ipsa recusandae quia repellendus itaque dolor perferendis vitae nihil officia, dolorum hic beatae ducimus facilis.</p>
      </div>
    </div>
    </section>
  );
}
