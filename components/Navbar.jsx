"use client";
import Link from "next/link";

import useDarkMode from "../hooks/useDarkMode";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";
import TemporaryDrawer from "./MobileNav";

import { useDisclosure } from "@chakra-ui/react";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="dark:bg-purple-800 dark:text-yellow-300 text-white rounded-lg hover:text-white p-2 dark:hover:text-purple-800 hover:bg-blue-300 bg-gray-500  dark:hover:bg-yellow-400 mr-5">
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size="17" className="top-navigation-icon" />
        ) : (
          <FaMoon size="17" className="top-navigation-icon" />
        )}
      </span>
    </div>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <nav className="dark:bg-blue-300 bg-gray-200 text-gray-700 dark:text-blue-950 shadow font-mono">
      <div className="hidden md:block pr-5 pl-5">
        <div className="max-w-4xl py-4 px-1 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <Link className="flex items-center" href={`/`}>
                <svg
                  className="h-6 w-6 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
                <span className=" font-bold">Jesse</span>
              </Link>

              <div className="flex items-center space-x-3 pl-6 ml-4">
                <a>Projects</a>
                <Link href={`/blog`}>
                  <span className="transition duration-500 ease transform cursor-pointer">
                    Blog
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeIcon />
              <div className="flex mx-auto px-2 py-1 items-center bg-gray-500 dark:text-gray-200 dark:bg-blue-900 text-white rounded-full">
                <Link className="flex" href={"https://github.com/ducks23"}>
                  <span className="mr-1">@ducks23</span>
                  <FaGithub size="20" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden mx-auto py-3 flex justify-end pr-4">
        <div className="flex ">
          <ThemeIcon />
          <div className="bg-gray-300 rounded ml-0">
            <TemporaryDrawer />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
