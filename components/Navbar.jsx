"use client";
import Link from "next/link";

import useDarkMode from "../hooks/useDarkMode";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import TemporaryDrawer from "./MobileNav";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div
      onClick={handleMode}
      className=" hover:bg-third transition duration-500 cursor-pointer  rounded-lg p-2 mr-1"
    >
      <span>
        {darkTheme ? (
          <FaSun size="18" className="top-navigation-icon" />
        ) : (
          <FaMoon size="18" className="top-navigation-icon" />
        )}
      </span>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="dark:bg-darkthird opacity-90 fixed w-full z-20 dark:text-darksecondary text-secondary bg-main shadow-md font-mono">
      <div className="hidden md:block pr-5 pl-5">
        <div className="max-w-4xl py-4 px-1 mx-auto">
          <div className="flex dark:text-darksecondary text-secondary justify-between">
            <div className="flex space-x-2 hover:underline-offset-2 ">
              <Link
                className=" hover:bg-third hover:text-main px-1 hover:rounded-lg rounded-lg pr-2 flex items-center  transition duration-500 cursor-pointer "
                href={`/`}
              >
                <RocketLaunchIcon />
                <span className="font-bold">Jesse</span>
              </Link>

              <div className="flex items-center">
                <Link href={`/resume`}>
                  <span className=" hover:bg-third hover:text-main px-2 py-[7px] rounded-lg border-red-700 font-bold mr-2 hover:rounded-lg transition duration-500 ease transform cursor-pointer">
                    Resume
                  </span>
                </Link>{" "}
                <Link href={`https://jesseleonard.app/`}>
                  <span className="transition hover:bg-third px-2 py-[7px] hover:rounded-lg hover:text-main font-bold duration-500 rounded-lg ease  transform cursor-pointer">
                    Blog
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeIcon />
              <div className="flex mx-auto px-2 py-2 items-center hover:bg-third transition duration-500 hover:text-main dark:text-gray-200 dark:bg-blue-900 text-white rounded-lg">
                <Link
                  className="flex"
                  href={"https://github.com/ducks23/portfolio2"}
                >
                  <FaGithub size="20" />

                  <span className="ml-1">Source </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden z-10 dark:bg-darkthird shadow-md bg-main  w-full fixed p-3 mx-auto flex justify-between pr-4">
        <Link className="my-auto  cursor-pointer" href={"/"}>
          <div className="flex font-bold">
            {" "}
            <RocketLaunchIcon className=" ml-4" />{" "}
            <div className="my-auto ml-1"> Jesse </div>
          </div>
        </Link>
        <div className="flex">
          <ThemeIcon />
          <div className=" bg-grayer dark:bg-darksecondary rounded ml-0">
            <TemporaryDrawer sx={{ color: "white" }} />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
