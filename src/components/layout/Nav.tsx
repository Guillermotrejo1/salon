"use client";

import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const links = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  // Shared link styles: dimmed until hover, pink underline that grows from the left,
  // visible outline for keyboard users
  const linkClass = [
    "relative inline-block py-2 text-white/85 transition-colors hover:text-white",
    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left",
    "after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300",
    "hover:after:scale-x-100 motion-reduce:after:transition-none",
    "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
  ].join(" ");

  return (
    <nav className="flex gap-4 md:justify-self-center order-last md:order-0">
      <button
        aria-expanded={isOpen}
        aria-controls="main-menu"
        aria-label="Menu"
        type="button"
        className="md:hidden cursor-pointer"
        onClick={toggleOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <ul
        id="main-menu"
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col text-lg md:text-base gap-4 p-6 absolute top-full left-0 right-0 bg-surface md:static md:flex-row md:gap-6 md:p-0 md:bg-transparent`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={closeMenu} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
