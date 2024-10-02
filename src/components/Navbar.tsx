"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons from react-icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-16 p-6 border-b-2 flex items-center justify-between backdrop-blur-md">
      <h1 className="font-bold text-xl">Invoice</h1>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-xl">
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu items for desktop and tablet (hidden on mobile) */}
      <ul className="hidden md:flex items-center justify-center gap-6">
        <li>
          <Button variant={"link"} asChild>
            <Link href={"/"}>Home</Link>
          </Button>
        </li>

        <li>
          <Button variant={"link"} asChild>
            <Link
              href={"https://github.com/ypratham/invoice-generator"}
              target="_blank"
            >
              Contribute
            </Link>
          </Button>
        </li>

        <li>
          <Button variant={"outline"} asChild>
            <Link href={"/"}>Sign in</Link>
          </Button>
        </li>
      </ul>

      {/* Mobile menu (hidden by default, shown when the menu is open) */}
      <ul
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } absolute top-16 left-0 right-0 bg-white border-b-2 shadow-md flex-col items-center p-6 gap-4 md:hidden`}
      >
        <li>
          <Button variant={"link"} asChild>
            <Link href={"/"} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </Button>
        </li>

        <li>
          <Button variant={"link"} asChild>
            <Link
              href={"https://github.com/ypratham/invoice-generator"}
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contribute
            </Link>
          </Button>
        </li>

        <li>
          <Button variant={"outline"} asChild>
            <Link href={"/"} onClick={() => setIsMobileMenuOpen(false)}>
              Sign in
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
