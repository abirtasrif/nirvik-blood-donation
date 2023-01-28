import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact container mx-auto mt-[6.5rem] px-6 flex flex-row">
      <div className="contact-left pr-6">
        <div className="contact-us-header text-4xl text-left pt-10 pb-5">
          Contact Us
        </div>
        <p className="text-justify">
          At our organization, we value the importance of clear and effective
          communication. We understand that you may have questions or concerns,
          and we are here to help. If you need assistance, please don't hesitate
          to reach out to us. Our friendly and knowledgeable team will be happy
          to assist you. You can also connect with us on social media [Facebook,
          Instagram, Twitter etc.], where we regularly post updates and helpful
          information. Thank you for choosing our organization and we look
          forward to hearing from you soon!
        </p>
        <div className="social-icons flex flex-row text-3xl py-5 gap-2">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterSquare />
          <AiFillLinkedin />
        </div>
      </div>
      <div className="contact-right pl-6">
        <label for="name">Name</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-red-900 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Type your name"
        ></input>
        <label for="mail">E-mail</label>
        <br />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-red-900 leading-tight focus:outline-none focus:shadow-outline"
          id="mail"
          type="e-mail"
          placeholder="Type your E-mail address"
        ></input>
        <label for="phone">Phone</label>
        <br />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-red-900 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="phone"
          placeholder="Type your contact number"
        ></input>
        <label for="query">Your query / feedback</label>
        <br />
        <input
          className="shadow h-32 appearance-none border rounded w-full py-2 px-3 text-red-900 leading-tight focus:outline-none focus:shadow-outline"
          id="query"
          type="text"
          placeholder="Type your questions / feedback"
        ></input>
        <button className="button py-2 px-4 mt-5 text-white bg-red-900 hover:bg-red-600 hover:text-black duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
