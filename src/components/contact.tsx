import { BsCaretDownFill } from "react-icons/bs";
import ReturnArrow from "./return-arrow";
import Link from "next/link";

export default function Contact() {
  return (
  <section
    id="contact"
    className="relative min-h-screen w-full flex flex-col bg-zinc-900 text-zinc-50"
  >
    <div className="flex-1 flex flex-col mt-24">

      <div className="h-[240px] flex flex-col justify-center gap-y-4 px-24">
        <div className="flex gap-x-8 items-center">
          <h3 className="text-4xl font-bold tracking-wider">Let&apos;s work together!</h3>
          <div className="w-[60px] h-[2px] bg-zinc-600 rounded-full"/>
        </div>
        <h5 className="text-zinc-600 tracking-wide text-sm">Shoot me a message or contact me directly.</h5>
      </div>

      <div className="px-24 flex-1 flex gap-x-12 pb-24">
        <form action="" className="bg-zinc-50 flex-1 rounded-lg text-zinc-800">
          MESSAGE FORM HERE
        </form>
        <div className="flex-1 flex flex-col gap-y-4 justify-center">
            <h3 className="text-2xl tracking-wider">Message me on: </h3>
            <div>
              <h5 className="uppercase tracking-wider font-bold text-zinc-400/40">Email Address: </h5>
              <p className="ml-6 text-zinc-200">WilliamLoweDev@Gmail.com</p>
            </div>
            <div>
              <h5 className="uppercase tracking-wider font-bold text-zinc-400/40">LinkedIn: </h5>
              <p className="ml-6 text-zinc-200">linkedin.com/in/william-lowe-b08707297/</p>
            </div>
            <div>
              <h5 className="uppercase tracking-wider font-bold text-zinc-400/40">Instgram: </h5>
              <p className="ml-6 text-zinc-200">instagram.com/will.lowe.webdev/</p>
            </div>
        </div>
      </div>
    </div>
   
    <div className="absolute top-16 right-0">
      <ReturnArrow 
        isDark={true}
      />
    </div>
  </section>
  )
}
