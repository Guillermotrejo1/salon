import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-4 md:justify-self-center order-last md:order-0">
      <button
        // aria-expanded={isOpen}
        aria-controls="main-menu"
        aria-label="Menu"
        type="button"
        className="md:hidden "
      >
        ☰
      </button>
      <ul id="main-menu" aria-controls="main-menu" className="hidden md:flex gap-2  ">
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#work">Work</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
