import React from "react";
import { WhatDoIHelp, projectExperience } from "../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
function Expertise() {
  return (
    <section id="services">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className="container c-primary m-auto py-4 px-4 flex-center flex-wrap-reverse gap-6"
      >
        <div className="left grid gap-4">
          {projectExperience.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn("right", "tween", (i + 1) * 0.2, 0.4)}
              className="flex gap-4 items-center p-4 border-solid border border-gray-300 hover:border-gray-500 rounded-lg transition-all w-[250px]"
            >
              <item.icon
                color="white"
                size={25}
                style={{ background: item.bg }}
                className="p-1 rounded-full"
              />
              <div>
                <h3 className="font-bold mb-2">{item.name}</h3>
                <span>{item.projects} Projects</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={textVariant(0.2)}
          className="right flex flex-col text-center"
        >
          <h2 className="text-4xl font-bold mb-4">What do I help ?</h2>
          {WhatDoIHelp.map((text, i) => (
            <p key={i} className="mb-4 leading-9 max-w-[400px] mx-auto">
              {text}
            </p>
          ))}
          <div className="flex-between gap-4">
            <p>
              <span className="text-2xl font-extrabold mr-2">+285</span>Projects
              Completed
            </p>
            <p>
              <span className="text-2xl font-extrabold mr-2">+150</span>Happy
              Clients
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Expertise;
