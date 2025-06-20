'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavbarStore } from '../store/navbarStore';

const Navbar: React.FC = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavbarStore();
  const pathname = usePathname();

  // ===== TAMBAHKAN 'CONTACT' DI SINI =====
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }, // <-- Link baru ditambahkan
  ];
  // ======================================

  return (
    <nav className="bg-slate-800 border-b border-slate-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Modern Wheel Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Modern Wheel
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-menu"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-slate-800 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded transition md:p-0 hover:bg-slate-700 md:hover:bg-transparent md:hover:text-blue-400 ${
                    pathname === link.href 
                      ? 'text-white bg-blue-600 md:bg-transparent md:text-blue-500' 
                      : 'text-gray-400'
                  }`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;