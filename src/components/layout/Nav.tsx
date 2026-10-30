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
        aria-controls="main-menu"
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col gap-4 p-6 absolute top-full left-0 right-0 bg-surface md:static md:flex-row md:gap-2 md:p-0 md:bg-transparent`}
      >
        <li>
          <Link href="#services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#work" onClick={closeMenu}>
            Work
          </Link>
        </li>
        <li>
          <Link href="#about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="#faq" onClick={closeMenu}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
