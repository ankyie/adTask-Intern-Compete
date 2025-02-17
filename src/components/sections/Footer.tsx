import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center gap-16 py-8 pt-16 border-t border-[#5C73AE]">
        <div className="flex justify-evenly w-3/4">
          <div className="footer-contact w-1/2 flex flex-col justify-center gap-6">
            <div className="cursor-default">
              <h1 className="text-7xl text-[#C5CDE3]">
                ad<span className="font-semibold">Task</span>.ai
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-end gap-2">
                <div className="contact-icon">
                  <MdOutlineEmail className="text-[#5C73AE] w-6 h-6" />
                </div>
                <div className="contact-info text-xs font-light text-[#788199]">
                  <a href="#">contact@adtask.ai</a>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="contact-icon">
                  <IoLocationOutline className="text-[#5C73AE] w-6 h-6" />
                </div>
                <div className="contact-info text-xs font-light text-[#788199]">
                  <a href="#">San Francisco Bay Area</a>
                </div>
              </div>
            </div>
          </div>
          <div className="quick-links w-1/2 flex justify-evenly">
            <div className="flex flex-col gap-4 text-center">
                <h3 className="font-semibold text-xl">Utilities</h3>
                <div className="flex flex-col gap-4">
                    <Link href={"#"} className="font-extralight text-gray-300">Home</Link>
                    <Link href={"#"} className="font-extralight text-gray-300">Products</Link>
                    <Link href={"#"} className="font-extralight text-gray-300">Tools</Link>
                    <Link href={"#"} className="font-extralight text-gray-300">Contact Us</Link>
                </div>
            </div>
            <div className="flex flex-col gap-4 text-center">
                <h3 className="font-semibold text-xl">Socials</h3>
                <div className="flex flex-col gap-4">
                    <Link href={"#"} className="font-extralight text-gray-300">X</Link>
                    <Link href={"#"} className="font-extralight text-gray-300">LinkedIn</Link>
                    <Link href={"#"} className="font-extralight text-gray-300">Instagram</Link>
                    <Link href={"#"} className="font-extralight text-gray-300">Facebook</Link>
                </div>
            </div>
          </div>
        </div>
        <div className="text-[#788199] text-sm font-light">All rights reserved © 2025 adTask</div>
      </div>
    </footer>
  );
};

export default Footer;
