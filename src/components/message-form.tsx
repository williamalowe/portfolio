export default function MessageForm() {
  return (
    <form action="" className="border-2 w-full flex flex-col gap-y-8 rounded-lg bg-zinc-50 p-4">
      <div>
        <h3>Let&apos;s Connect!</h3>
      </div>
      <div className="flex flex-col gap-y-4">
      <input id="name" type="text" placeholder="Name" className="border-b-2 bg-zinc-50 w-full"/>
      <input id="email" type="email" placeholder="Email" className="border-b-2 bg-zinc-50 w-full"/>
      <input id="subject" type="text" placeholder="Subject" className="border-b-2 bg-zinc-50 w-full"/>
      <textarea name="message" id="message" placeholder="Message" rows={6} className="border-b-2 bg-zinc-50 w-full"></textarea>
      </div>
    </form>
  );
}
