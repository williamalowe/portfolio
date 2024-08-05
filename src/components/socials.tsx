export default function Socials() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/williamalowe",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/william-lowe-b08707297/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/will.lowe.webdev/",
    },
  ];
  return (
    <ul className="flex gap-x-4">
      {socialLinks.map((link, index) => (
        <>
          {index !== 0 && "/"}
          <li key={link.name} className="opacity-60 hover:opacity-100 transition duration-300">
            <a href={link.href} target="_blank">{link.name}</a>
          </li>
        </>
      ))}
    </ul>
  );
}
