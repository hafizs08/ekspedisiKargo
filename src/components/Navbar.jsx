import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { dark, setDark } = useTheme();

  const menuItems = [
    { label: "Beranda", href: "#beranda", active: true },
    { label: "Layanan", href: "#layanan" },
    { label: "Promo", href: "#diskon" },
    { label: "Reviews", href: "#reviews" },
    { label: "Tentang", href: "#tentang" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Kiri: Logo */}
        <div className="flex cursor-pointer items-center gap-3">
          <img
            src={logo}
            alt="Daksa Jaya Express"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-black tracking-tight text-[#022E72] dark:text-white">
            Daksa Jaya{" "}
            <span className="text-[#C48C3A]">Express</span>
          </span>
        </div>


        <div className="flex items-center gap-6">

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium transition ${item.active
                    ? "font-semibold text-[#4472C4]"
                    : "text-gray-600 hover:text-[#4472C4] dark:text-gray-300 dark:hover:text-[#ED7D31]"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden h-5 w-[1px] bg-gray-200 md:block dark:bg-slate-700" />

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle Dark Mode"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 transition hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              {dark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-700 dark:text-slate-300" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden dark:hover:bg-slate-800"
            >
              {isOpen ? (
                <X size={26} className="text-[#4472C4] dark:text-white" />
              ) : (
                <Menu size={26} className="text-[#4472C4] dark:text-white" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Open */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white shadow-lg md:hidden dark:border-slate-700 dark:bg-slate-900">
          <div className="space-y-2 px-4 py-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${item.active
                    ? "bg-[#4472C4]/10 text-[#4472C4]"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}