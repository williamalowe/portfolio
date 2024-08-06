"use client";

import Image from "next/image";
import profilePicture from "../../public/me.png";

export default function IntroPicture() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Image
        src={profilePicture}
        alt="profile picture of me"
        quality={90}
        width={500}
        height={500}
        priority
        className="aspect-square sm:w-[360px] sm:h-[360px] bg-zinc-800 rounded-full border-4 border-zinc-800 grayscale"
      />
    </div>
  );
}
