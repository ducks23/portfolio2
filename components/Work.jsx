import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col pt-1 pl-9 pr-9">
      <div className="flex">
        <div className=" flex md:text-base text-sm dark:text-gray-900 bg-gray-300 text-center pl-2 pr-2 pt-1 pb-1 mx-auto dark:bg-blue-300 rounded-full">
          <div>Hello, I'm a&nbsp;</div>
          <p className="font-semibold">human being</p>{" "}
          <div>&nbsp;based in Austin Texas.</div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="dark:text-white pt-5 max-w-2xl text-gray-500 ">
          <div className="text-left">
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
        <div className="dark:text-white text-gray-500">
          <div className="bio text-3xl underline underline-offset-2 pt-8">
            Bio
          </div>
          <div className="entries pt-4 text-lg flex">
            <div className="">
              {" "}
              <p className="font-bold">1995</p>
            </div>
            <div className="t ml-5">Born in Phoneix, AZ</div>
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
      </div>
      <div className="flex pt-6 justify-center space-x-5 ">
        {" "}
        <button className="dark:bg-blue-200 text-blue-500 rounded-full hover:bg-gray-400 hover:text-blue-700 bg-gray-300 p-3">
          <a className="font-semibold text-lg">RESUME</a>
        </button>
      </div>
    </div>
  );
};

export default Work;
