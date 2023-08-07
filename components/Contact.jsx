"use client";

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jc1unvt",
        "template_pnzl32f",
        form.current,
        "K2i9c6y8AURAqNsTW"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Oops... " + JSON.stringify(error));
        }
      );
  };

  return (
    <>
      <div>
        <div className="contact-page dark:bg-darkmain dark:text-darksecondary flex justify-center p-6 text-cetner mx-auto ">
          <div className="bg-main dark:bg-darkthird text-secondary dark:text-darksecondary p-4 max-w-3xl text-center rounded-lg">
            <h1 className="p-4 text-2xl underline underline-offset-4">
              Contact Me
            </h1>
            <p>
              I am interested in freelance opportunities - especially on
              ambitious or large projects. However, if you have any other
              requests or questions, don't hesitate to contact me using below
              form either.
            </p>
            <div className="contact-form p-3">
              <form ref={form} onSubmit={sendEmail}>
                <ul className=" rounded">
                  <li className="half p-1 rounded">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half p-1 rounded">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li className="p-1">
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li className="p-1">
                    <textarea
                      className="h-20 md:min-w-[350px] md:min-h-[125px]"
                      placeholder="Message"
                      name="message"
                    ></textarea>
                  </li>
                  <li>
                    <input
                      className="rounded-full hover:bg-third text-secondary px-5 py-2 cursor-pointer transition duration-500 bg-grayer"
                      type="submit"
                      value="SEND"
                    />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
