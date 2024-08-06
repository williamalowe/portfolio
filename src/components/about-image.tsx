import Image from "next/image";
import picture from "../../public/me_alt.jpg"

export default function AboutImage() {
  return (
    <div className="relative w-[200px] h-[250px] sm:w-[348px] sm:h-[448px]">
      <div className="absolute top-12 right-12 w-[160px] h-[200px] sm:h-[400px] sm:w-[300px] bg-[repeating-linear-gradient(-45deg,transparent,#fff,transparent_2px,transparent_16px)]" />
      <Image
      src={picture}
        alt="picture of me"
        width={500}
        height={500}
        quality={95}
        className="w-[160px] h-[200px] absolute top-0 right-0 sm:h-[400px] sm:w-[300px] bg-zinc-900"
      />
    </div>
  )
}
