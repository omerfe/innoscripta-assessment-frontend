import moment from "moment";
import { Github, Linkedin, Instagram } from "lucide-react";
import Spotify from "./icons/Spotify";

const Footer = () => {
  const currYear = moment().format("YYYY");
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/omerfe",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/omerfeker/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/coldgroove",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/0CXZKXVmbBZTIF1DODTpQY?si=h1DTBO_-SiWEYyCCSCnevg",
      icon: <Spotify className="w-6 h-6" />,
    },
  ];
  return (
    <footer className="flex items-center justify-between w-full h-16 border-t border-stone-400 dark:border-stone-600 container">
      <ul className="flex items-center gap-5">
        {socialLinks.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 dark:text-stone-300"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-center text-stone-700 dark:text-stone-300">
        &copy; {currYear} AllTheNews. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
