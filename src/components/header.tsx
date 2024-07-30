import Link from "next/link";

export default function Header() {
  const navLinks = [
    {
      name: "about",
      href: "/about",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "experience",
      href: "/experience",
    },
    {
      name: "contact",
      href: "/contact",
    },
  ];
  return (
    <header className="fixed top-0 left-0 z-50 px-8 py-4 flex items-center w-full bg-zinc-50">
      <Link href="#">
        <div className="w-12 h-12 rounded-full bg-zinc-900"/>
      </Link>
      <nav className="ml-auto">
        <ul className="flex gap-x-4 uppercase">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
