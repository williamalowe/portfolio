import Image from "next/image";
import picture from "../../public/me_alt.jpg"

export default function AboutImage() {
  return (
    <div className="relative">
      <div className="absolute top-12 -left-12 h-[360px] w-[300px] bg-[repeating-linear-gradient(-45deg,transparent,#fff,transparent_2px,transparent_16px)]" />
      <Image
      src={picture}
        alt="picture of me"
        width={500}
        height={500}
        quality={95}
        className="absolute top-0 h-[360px] w-[300px] bg-zinc-900"
      />
    </div>
  )
}
