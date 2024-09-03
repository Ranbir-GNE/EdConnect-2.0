"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";

const navLinks = [
  { id: 1, href: "#", label: "Dashboard" },
  { id: 2, href: "#", label: "Event Calendar" },
  { id: 3, href: "#", label: "Online Session" },
  { id: 4, href: "#", label: "Chat App" },
  { id: 5, href: "#", label: "My Account" },
  { id: 6, href: "#", label: "Settings" },
  { id: 7, href: "#", label: "Logout" },
];

const AdminNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-white shadow-md h-[10vh] ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="brand_logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="hidden space-x-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-gray-700 hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="lg:hidden" onClick={() => setShow(true)}>
          <PiHamburgerBold size={32} className="text-gray-700" />
        </div>
      </div>

      {show && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white bg-opacity-90 p-4">
          <div className="mb-8 flex items-center justify-between">
            <Image
              src="/images/logo.png"
              alt="brand_logo"
              width={120}
              height={50}
              className="object-contain"
            />
            <div onClick={() => setShow(false)}>
              <ImCross size={26} className="text-gray-700" />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-lg text-gray-700 hover:text-blue-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
