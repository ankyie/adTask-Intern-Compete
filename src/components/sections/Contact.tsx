import React from "react";
import BlackButton from "../ui/black-gradient-button";
import GradientButton from "../ui/gradient-button";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="contact py-16">
      <div className="flex flex-col justify-center items-center gap-16">
        <div>
          <BlackButton>CONTACT US</BlackButton>
        </div>

        <div className="flex w-[1032px] justify-between">
          <div className="contact-text flex flex-col gap-8 w-1/2 pr-16">
            <div className="text-4xl">
              <h2>Ask whatever you have</h2>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8]">
                in your mind now
              </h2>
            </div>

            <div className="text-sm font-light">
              <p>
                Whether you have questions or are ready to discuss your
                business, we’re here to help. Reach out today.
              </p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-end gap-2">
                    <div className="contact-icon">
                        <MdOutlineEmail className="text-[#5C73AE] w-6 h-6"/>
                    </div>
                    <div className="contact-info text-xs font-light">
                        <a href="#">
                        contact@adtask.ai
                        </a>
                    </div>
                </div>
                <div className="flex items-end gap-2">
                    <div className="contact-icon">
                        <MdOutlinePhone className="text-[#5C73AE] w-6 h-6"/>
                    </div>
                    <div className="contact-info text-xs font-light">
                        <a href="#">
                        (969) 819-8061
                        </a>
                    </div>
                </div>
                <div className="flex items-end gap-2">
                    <div className="contact-icon">
                        <IoLocationOutline className="text-[#5C73AE] w-6 h-6"/>
                    </div>
                    <div className="contact-info text-xs font-light">
                        <a href="#">
                        San Francisco Bay Area
                        </a>
                    </div>
                </div>
            </div>
          </div>

          <div className="contact-form w-1/2">
            <form className="w-full">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white text-xs font-light mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-[#333B4F] rounded text-white bg-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white text-xs font-light mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-[#333B4F] rounded text-white bg-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white text-xs font-light mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-[#333B4F] rounded text-white bg-transparent h-32" // Styling, height
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <GradientButton
                  buttonColor="#7687B5"
                  buttonColorOpacity={30}
                  gradientColor="white"
                  text="Submit"
                  className="px-16 py-1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
