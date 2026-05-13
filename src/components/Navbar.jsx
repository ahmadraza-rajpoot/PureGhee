import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full flex justify-center bg-green-50 border border-green-100 shadow-sm">
      <div className="w-full max-w-6xl px-6 md:px-10 h-14 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-semibold text-yellow-500 tracking-wide">
          Gaon Dairy Co.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-yellow-500 font-medium">
          <Link to="/" className="hover:text-yellow-600 transition">
            Home
          </Link>

          <a href="#products" className="hover:text-yellow-600 transition">
            Products
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-500 text-2xl"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <div
            ref={menuRef}
            className="absolute top-full mt-2 right-6 w-56 bg-white border border-emerald-100 rounded-2xl shadow-lg p-5 flex flex-col gap-4 text-yellow-500 font-medium md:hidden"
          >
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-yellow-600">
              Home
            </Link>

            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-600"
            >
              Products
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;