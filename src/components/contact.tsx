import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import ReturnArrow from "./return-arrow";
import Link from "next/link";
import MessageForm from "./message-form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative h-screen w-full flex bg-zinc-900 text-zinc-50 justify-center"
    >
      <div className="h-[240px] flex flex-col justify-center gap-y-4 px-24  pt-24 bg-zinc-900 text-zinc-50">
        <div className="flex gap-x-8 items-center">
          <h3 className="text-4xl font-bold tracking-wider">
            Want to get in touch?
          </h3>
          <div className="w-[60px] h-[2px] bg-zinc-600 rounded-full" />
        </div>
        <h5 className="text-zinc-600 tracking-wide text-sm">
          Let&apos;s work together to build some cool stuff!
        </h5>
      </div>
      <div className="px-24">
        <MessageForm />
      </div>
      <Link className="absolute bottom-2 left-[50%]" href="#home">
        <BsCaretUpFill />
      </Link>
    </section>
  );
}
