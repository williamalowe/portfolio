import Intro from "@/components/intro"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-x-8">
     <div className="flex-1 w-full max-w-[1200px] flex items-center">
      <Intro />
      <div className="flex-1"></div>
     </div>
    </main>
  );
}
