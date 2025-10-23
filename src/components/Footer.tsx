
import React from "react";
import { Github, Linkedin } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/nicomargo",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolas-margossian/",
    icon: Linkedin,
  },
];

const Footer = () => (
  <footer className="w-full bg-black py-8 flex flex-col items-center justify-center">
    <div className="flex gap-5 md:gap-7 mb-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className="
            rounded-full 
            w-11 h-11 flex items-center justify-center
            text-fuchsia-200 hover:text-white 
            bg-zinc-900 hover:bg-zinc-800 transition-all duration-200
            shadow-lg hover:scale-110
          "
        >
          <social.icon size={25} strokeWidth={2.2} />
        </a>
      ))}
    </div>
    <a
      href="mailto:nmargo@pm.me"
      className="text-fuchsia-300 hover:text-white font-medium mb-1 transition-colors"
    >
      nmargo@pm.me
    </a>
    <div className="text-pink-100/40 text-xs">
      © {new Date().getFullYear()} Nicolas Margossian. All rights reserved.
    </div>
  </footer>
);

export default Footer;
