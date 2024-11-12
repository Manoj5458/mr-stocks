"use client";

import Link from "next/link";
import { REDIRECT_URL, API_KEY } from "../utils/constants";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Team", href: "/theme" },
];

const loginWithUpstox = () => {
  window.location.href = `https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${API_KEY}&redirect_uri=${REDIRECT_URL}`;
};

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://www.upstox.com" className="flex items-center">
          <img
            src="assests/logo-black.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Upstox Logo"
          />
        </a>
        <ul className="flex flex-row space-x-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={loginWithUpstox}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
