import React from "react";
import SubmitButton from "../SubmitButton";
import { useState } from "react";

const ContactSection = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const postData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <article
      className="h-screen flex flex-col space-y-4 justify-center border-t-2 border-darkPurple bg-primary font-Poppins xl:flex-row xl:items-center xl:justify-evenly"
      id="contact"
    >
      {/*  form heading*/}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl p-2 xl:text-5xl xl:p-6 xl:border-b-2 xl:border-darkPurple">
          contact-me-☎️
        </h1>
        <p className="xl:text-xl xl:p-6">drop a message, let's connect. fueled with firebase</p>
      </div>
      <div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col w-[350px] mx-auto space-y-2 xl:w-[400px]"
        >
          <input
            type="text"
            name="firstName"
            id=""
            placeholder="first name"
            className="p-4 border-2 border-darkPurple"
            value={userData.firstName}
            onChange={(e) => postData(e)}
          />
          <input
            type="text"
            name="lastName"
            id=""
            placeholder="last name"
            className="p-4 border-2 border-darkPurple"
            value={userData.lastName}
            onChange={(e) => postData(e)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="p-4 border-2 border-darkPurple"
            value={userData.email}
            onChange={(e) => postData(e)}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="type your message"
            className="p-4 border-2 border-darkPurple"
            value={userData.message}
            onChange={(e) => postData(e)}
          ></textarea>
          <SubmitButton
            name="<send/>"
            {...userData}
            setUserData={setUserData}
          />
        </form>
      </div>
    </article>
  );
};

export default ContactSection;
