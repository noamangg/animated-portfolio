import React from "react";
import certificate from "../assets/certificate.png";
import person from "../assets/person.png";
import splash from "../assets/splash.png";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

function Hero() {
  return (
    <section className="bg-primary w-full overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className="container relative min-h-[80vh] m-auto py-4 px-4 flex flex-col justify-between h-full c-primary"
      >
        <div className="upper flex-between flex-col sm:flex-row z-[1] gap-2">
          <motion.h1
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="sm:text-4xl text-2xl font-bold"
          >
            Hey There,
            <br className="sm:block hidden" />
            I'm Noaman
          </motion.h1>
          <motion.p
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="text-center"
          >
            I design beautiful simple
            <br />
            things, And I love what I do
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("top", "tween", 0.4, 1)}
          className=" w-full relative flex justify-center items-center"
        >
          <motion.img
            variants={slideIn("top", "tween", 0.4, 1)}
            src={person}
            alt="person"
            className=" m-auto z-[1] block"
          />
          <motion.img
            variants={slideIn("left", "tween", 0.4, 1)}
            src={splash}
            alt="splash"
            className="absolute h-full block"
          />
        </motion.div>
        <motion.div 
                  variants={fadeIn("right", "tween", 0.4, 1)}

        className="lower flex-between z-[1] gap-2 text-center">
          <p className="flex gap-2 items-center">
            <span className="text-3xl font-bold">10</span>Years
            <br />
            Experience
          </p>
          <div>
            <img src={certificate} alt="certificate" className="m-auto mb-2" />
            <span className="text-center">
              Certified probational
              <br />
              front-end developer
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
