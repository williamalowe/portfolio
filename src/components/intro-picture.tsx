import Image from "next/image";
import profilePic from "../../public/me.png";

export default function IntroPicture() {
  return (
    <div className="relative flex-1 flex items-center justify-center">
      <div className="text-[400px] font-extrabold text-zinc-600">WL</div>
      <Image
        src={profilePic}
        alt="Profile picture of me"
        width={500}
        height={500}
        priority
        className="w-400 h-400 absolute top-0 grayscale rounded-full opacity-90 brightness-0 hover:brightness-100 hover:opacity-100 transition duration-300"
      />
    </div>
  );
}
