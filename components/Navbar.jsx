"use client";
import Link from "next/link";

import useDarkMode from "../hooks/useDarkMode";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TemporaryDrawer from "./MobileNav";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="dark:bg-purple-800 cursor-pointer dark:text-yellow-300 text-white rounded-lg hover:text-white p-2 dark:hover:text-purple-800 hover:bg-blue-300 bg-gray-500  dark:hover:bg-yellow-400 mr-5">
      <span onClick={handleMode}>
        {darkTheme ? (
          <LightModeIcon size="10" className="top-navigation-icon" />
        ) : (
          <DarkModeIcon size="10" className="top-navigation-icon" />
        )}
      </span>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="dark:bg-blue-300 bg-gray-200 text-gray-700 dark:text-blue-950 shadow font-mono">
      <div className="hidden md:block pr-5 pl-5">
        <div className="max-w-4xl py-4 px-1 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-2 hover:underline-offset-2 ">
              <Link
                className=" hover:bg-gray-300 px-1 hover:rounded-lg rounded-lg pr-2 flex items-center  transition duration-500 ease cursor-pointer "
                href={`/`}
              >
                <RocketLaunchIcon />
                <span className="font-bold">Jesse</span>
              </Link>

              <div className="flex items-center">
                <Link href={`/resume`}>
                  <span className=" hover:bg-gray-300 px-2 py-[7px] rounded-lg border-red-700 font-bold mr-2 hover:rounded-lg transition duration-500 ease transform cursor-pointer">
                    Resume
                  </span>
                </Link>{" "}
                <Link href={`/blog`}>
                  <span className="transition hover:bg-gray-300 px-2 py-[7px] hover:rounded-lg font-bold duration-500 rounded-lg ease  transform cursor-pointer">
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
      <div className="md:hidden mx-auto  flex justify-end pr-4">
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
