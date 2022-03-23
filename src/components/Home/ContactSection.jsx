import React from "react";
import SubmitButton from "../SubmitButton";

const ContactSection = () => {
  return (
    <article
      className="h-screen flex flex-col space-y-4 justify-center border-t-2 border-darkPurple bg-primary font-Poppins xl:flex-row xl:items-center xl:justify-evenly"
      id="contact"
    >
      {/*  form heading*/}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl p-2 xl:text-5xl xl:p-6 xl:border-b-2 xl:border-darkPurple">contact-me-☎️</h1>
        <p className="xl:text-xl xl:p-6">drop a message, let's connect</p>
      </div>
      <div>
        <form className="flex flex-col w-[350px] mx-auto space-y-2">
          <input
            type="text"
            name="firstName"
            id=""
            placeholder="first name"
            className="p-4 border-2 border-darkPurple"
          />
          <input
            type="text"
            name="lastName"
            id=""
            placeholder="second name"
            className="p-4 border-2 border-darkPurple"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="p-4 border-2 border-darkPurple"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="type your message"
            className="p-4 border-2 border-darkPurple"
          ></textarea>
          <SubmitButton name="<send/>" />
        </form>
      </div>
    </article>
  );
};

export default ContactSection;
