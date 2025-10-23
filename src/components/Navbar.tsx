
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SquareCode, Laptop, Users } from "lucide-react";

const navItems = [
  { name: "Portfolio", to: "/", icon: Users },
  //{ name: "Conferences", to: "/work", icon: Laptop },
  //{ name: "Projects", to: "/projects", icon: SquareCode },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full flex justify-center mb-6 px-2">
      <ul className="flex gap-1 md:gap-6 p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg max-w-full overflow-x-auto">
        {navItems.map(({ name, to, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            <li key={to} className="flex-shrink-0">
              <Link
                to={to}
                className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-md font-normal text-sm transition-all whitespace-nowrap ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{name}</span>
                <span className="sm:hidden text-xs">{name.split(' ')[0]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
