import React, { useState } from "react";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants } from "../utils/motion";
import useHeaderShadow from "../hooks/useHeaderShadow";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const headerShadow = useHeaderShadow();
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: true, amount: 0 }}
      className="bg-primary sticky top-0 transition z-50"
      style={{ boxShadow: headerShadow }}
    >
      <div className="container relative flex-between m-auto p-4">
        <div className="logo font-semibold c-secondary">Noaman</div>
        <nav className="">
          <ul className="list-none sm:flex-between hidden gap-2 md:gap-4">
            <li className=" c-primary hover:c-secondary ">
              <a href="#services">Services</a>
            </li>
            <li className=" c-primary hover:c-secondary ">
              <a href="#experience">Experience</a>
            </li>
            <li className=" c-primary hover:c-secondary ">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className=" c-primary hover:c-secondary ">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="flex-center gap-2  c-primary">
              <p className="text-sm  c-primary">+123 456 789</p>
              <BiPhoneCall className="bg-white text-2xl w-[35px] h-[35px] p-2 rounded-full c-primary cursor-pointer hover:c-secondary" />
            </li>
          </ul>

          <div className="sm:hidden">
            <BiMenuAltRight
              className="text-4xl cursor-pointer hover:c-secondary c-primary bg-white rounded-full p-2"
              onClick={() => setToggle((pre) => !pre)}
            />
            <div
              className={
                `${toggle ? "flex": "hidden"}
                p-6 bg-white absolute top-20 right-0 duration-[.5s] mx-4 my-2 min-w-[140px] rounded-xl sidebar`
              }
            >
              <ul className="list-none flex flex-col gap-5">
                <li className=" c-primary hover:c-secondary ">
                  <a href="#">Services</a>
                </li>
                <li className=" c-primary hover:c-secondary ">
                  <a href="#">Experience</a>
                </li>
                <li className=" c-primary hover:c-secondary ">
                  <a href="#">Portfolio</a>
                </li>
                <li className=" c-primary hover:c-secondary ">
                  <a href="#">Testimonials</a>
                </li>
                <li className="flex-center gap-2  c-primary">
                  <p className="text-sm  c-primary">+123 456 789</p>
                  <BiPhoneCall className="bg-white text-2xl w-[35px] h-[35px] p-2 rounded-full c-primary cursor-pointer hover:c-secondary" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
