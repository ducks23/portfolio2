"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

import jesse from "../assets/me2.jpg";

const Work = () => {
  return (
    <div className="flex flex-col w-full dark:bg-darkmain text-secondary pt-1 pl-9 pr-9">
      <div className="flex">
        <div className=" flex md:text-lg  text-sm dark:bg-darkthird dark:text-darksecondary bg-[#90ee90] text-center px-4 py-2 mx-auto dark:bg-blue-300 rounded-full">
          <div className=" font-semibold">
            Hello, I'm a human being based in Austin Texas.
          </div>
        </div>
      </div>
      <div className=" "></div>
      <div className="mx-auto">
        <div className=" dark:text-darksecondary pt-5 max-w-2xl  ">
          <div className="flex justify-between">
            <div>
              <div className=" text-4xl pt-2">Jesse Leonard</div>
              <div>Full Stack Developer / Entereprenuer</div>
            </div>
            <div className=" rounded-full p-1">
              <div className="dark:bg-darksecondary rounded-full p-1">
                <div className=" h-[100px] w-[100px] dark:bg-darksecondary overflow-hidden rounded-full ">
                  <Image alt="picture of me" src={jesse} />
                </div>
              </div>
            </div>
          </div>

          <div className="text-left pt-5">
            <h1 className="header underline-offset-2 underline text-3xl">
              Work
            </h1>
          </div>

          <div className="text-left text-lg pt-2">
            &nbsp; &nbsp; &nbsp; Jesse is a freelance and full-stack developer
            with a passion for elegant design. He has knack for solving real
            world problems with code. When not online, he loves to explore used
            book stores and play ice hockey. Currently, he is working at IPTA
            Solutions. He publishes content to grow his online brand on his
            YouTube channel.
          </div>
        </div>
        <div>
          <Link className="text-center" href={"/resume"}>
            <div className="pt-14">
              <button className="p-3 transition duration-500 dark:text-darksecondary  dark:bg-darkthird dark:hover:bg-third  hover:bg-third rounded-xl bg-main">
                <p className="px-1"> {`Resume`} &#10140;</p>
              </button>
            </div>
          </Link>
        </div>
        <div className="dark:text-darksecondary">
          <div className="bio text-3xl underline underline-offset-2 pt-8">
            Bio
          </div>
          <div className="entries pt-4 text-lg flex">
            <div className="">
              {" "}
              <p className="font-bold">1995</p>
            </div>
            <div className="t ml-5">Born in Phoneix, AZ.</div>
          </div>

          <div className="entries pt-2 text-lg flex">
            <div className="">
              {" "}
              <p className="font-bold">2018</p>
            </div>
            <div className="t ml-5 max-w-2xl">
              Graduated from University of Oregon, B.S. in Computer and
              Information Sciences.
            </div>
          </div>
          <div className="entries pt-2 text-lg flex">
            <div className="">
              {" "}
              <p className="font-bold">2019</p>
            </div>
            <div className="t ml-5 max-w-2xl">
              Worked at OmniVector Solutions, building High Performance
              Computers.
            </div>
          </div>
          <div className="entries pt-2 text-lg flex">
            <div className="">
              {" "}
              <p className="font-bold">2021</p>
            </div>
            <div className="t ml-5 max-w-2xl">
              Worked as a Backend Engineer at Vectra AI.
            </div>
          </div>
          <div className="entries pt-2 text-lg flex">
            <div className="">
              {" "}
              <p className="font-bold">2023</p>
            </div>
            <div className="t ml-5 max-w-2xl">
              Worked as a Full Stack Engineer at IPTA.
            </div>
          </div>
        </div>
        <div className=" dark:text-darksecondary  max-w-2xl  ">
          <div className="max-w-2xl text-3xl underline underline-offset-2 pt-10">
            {" "}
            I ♥
          </div>
          <div className="max-w-2xl pt-4 text-center text-xl">
            Ice Hockey, Art, Music, Reading, Chess, Next JS, Python, Three JS.{" "}
          </div>
        </div>
        <div className=" dark:text-darksecondary  max-w-2xl  ">
          <div className="max-w-2xl text-3xl underline underline-offset-2 pt-10">
            {" "}
            On the Interwebz
          </div>
          <div className="flex flex-col max-w-2xl pt-4 text-lg">
            <div>
              <Link
                className=" hover:underline hover:text-main  hover:rounded-lg rounded-lg pr-2 flex items-center  transition duration-500 cursor-pointer "
                href={`https://www.instagram.com/jesselynyrd/`}
              >
                <FaInstagram /> <div className="p-2">@jesselynyrd </div>{" "}
              </Link>
            </div>{" "}
            <div>
              <Link
                className=" hover:underline hover:text-main hover:rounded-lg rounded-lg pr-2 flex items-center  transition duration-500 cursor-pointer "
                href={`https://www.linkedin.com/in/jesseleonard/`}
              >
                <FaLinkedin /> <div className="p-2">Professional Me </div>{" "}
              </Link>
            </div>{" "}
            <div>
              <Link
                className=" hover:underline hover:text-main hover:rounded-lg rounded-lg pr-2 flex items-center  transition duration-500 cursor-pointer "
                href={`https://github.com/ducks23`}
              >
                <FaGithub />
                <div className="p-2">Code I have written </div>
              </Link>
            </div>{" "}
            <div>
              <Link
                className=" hover:underline hover:text-main hover:rounded-lg rounded-lg pr-2 flex items-center  transition duration-500 cursor-pointer "
                href={`https://www.youtube.com/channel/UCsbiWRPPhj6BfmqGqQeIhVw`}
              >
                <FaYoutube /> <div className="p-2">Me On Video </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
