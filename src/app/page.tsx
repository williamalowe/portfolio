import Intro from "@/components/intro";
import IntroPicture from "@/components/intro-picture";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main
      id="#"
      className="flex min-h-screen flex-col items-center justify-between p-24 gap-x-8"
    >
      <div className="flex-1 w-full max-w-[1200px] flex items-center">
          <Intro />
        <IntroPicture />
      </div>
      <div className="w-full max-w-[1200px] flex items-start">
        <Socials />
      </div>
    </main>
  );
}
