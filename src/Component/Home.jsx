import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/Images/todesktop-logo.bn2Qe8sb.avif";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-4 py-3 md:px-10 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={icon} alt="logo" className="h-10" />
          <p className="text-xl font-bold">To Desktop</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-sky-500">Home</a>
          <a href="#" className="hover:text-sky-500">About</a>
          <a href="#" className="hover:text-sky-500">Contact</a>
          <a href="#" className="hover:text-sky-500">Location</a>
          <a href="#" className="hover:text-sky-500">Help</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="border px-3 py-1 rounded hover:bg-sky-600 hover:text-white">
            Login
          </button>

          <Link to="/add">
            <button className="border px-3 py-1 rounded bg-sky-600 text-white">
              Add
            </button>
          </Link>

          <button className="border px-3 py-1 rounded hover:bg-sky-600 hover:text-white">
            Register
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-5 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={icon} className="h-10" />
              <p className="font-bold text-lg">To Desktop</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="mt-10 space-y-5 text-lg font-medium">
            <a href="#" className="block hover:text-sky-500">Home</a>
            <a href="#" className="block hover:text-sky-500">About</a>
            <a href="#" className="block hover:text-sky-500">Contact</a>
            <a href="#" className="block hover:text-sky-500">Location</a>
            <a href="#" className="block hover:text-sky-500">Help</a>

            <Link to="/add" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-6 bg-sky-600 text-white py-2 rounded">
                Add Food
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* ================= HERO SECTION ================= */}
      <main className="text-center px-4">
        {/* Version Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-yellow-100 px-3 py-1 text-orange-500 rounded-full flex items-center gap-2 hover:text-red-500">
            <i className="fa-solid fa-circle-dot text-sm"></i>
            v0.35.0
            <i className="fa-solid fa-arrow-right transition-transform hover:translate-x-1"></i>
          </button>
        </div>

        {/* Heading */}
        <h1 className="mt-10 text-3xl md:text-5xl lg:text-7xl font-bold">
          Web app to <span className="text-blue-600">desktop</span>
          <br /> app in minutes
        </h1>

        <p className="mt-8 text-lg md:text-2xl lg:text-3xl font-semibold">
          Take Your Webpage To Next Level with <br /> TO DESKTOP
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 px-4 sm:px-10 md:px-20 lg:px-60">
          <button className="bg-blue-600 text-white py-3 rounded-lg hover:shadow-xl transition">
            Download
          </button>
          <button className="bg-gray-300 py-3 rounded-lg hover:shadow-xl transition">
            Docs
          </button>
        </div>
      </main>
    </>
  );
}
