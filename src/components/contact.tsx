import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import ReturnArrow from "./return-arrow";
import Link from "next/link";
import MessageForm from "./message-form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative h-screen w-full flex flex-col justify-center gap-y-12"
    >
    <div className="flex flex-col mt-24 pb-12">
      <div className="h-[240px] flex flex-col justify-center gap-y-4 px-24 bg-zinc-900 text-zinc-50">
        <div className="flex gap-x-8 items-center">
          <h3 className="text-4xl font-bold tracking-wider">
            Let&apos;s Connect.
          </h3>
          <div className="w-[60px] h-[2px] bg-zinc-600 rounded-full" />
        </div>
        <h5 className="text-zinc-600 tracking-wide text-sm">
          Feel free to reach out regarding employment, projects, suggestions, or even just to say hi!
        </h5>
      </div>
    </div>
    <div className="flex-1 px-24 mt-16">
      <MessageForm />
    </div>
      <Link className="absolute bottom-2 left-[50%]" href="#home">
        <BsCaretUpFill />
      </Link>
    </section>
  );
}
