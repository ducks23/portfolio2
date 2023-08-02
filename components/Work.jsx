import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col pt-10 p-8">
      <div className="flex">
        <div className=" text-gray-700 pl-3 pr-3 pt-1 pb-1 mx-auto bg-gray-300 max-w-2xl rounded-full">
          Hello, I'm an App Developer based in Austin Texas.
        </div>
      </div>
      <div className="mx-auto">
        <div className=" pt-5 max-w-3xl text-gray-800 ">
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
        <div className="text-black">
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
        <button className="bg-blue-200 rounded-full p-3">
          <a className="font-semibold text-lg text-blue-500">RESUME</a>
        </button>
      </div>
    </div>
  );
};

export default Work;
