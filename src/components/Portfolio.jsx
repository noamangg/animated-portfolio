import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../utils/motion";
import showCase1 from "../assets/showCase1.png";
import showCase2 from "../assets/showCase2.png";
import showCase3 from "../assets/showCase3.png";
function Portfolio() {
  return (
    <motion.section
    id="portfolio"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-white"
    >
      <div className="container m-auto p-4">
        <h3 className="c-primary text-2xl font-bold text-center my-6">
          My Latest Works
        </h3>
        <div className="flex-center gap-4 mb-6">
          <p>Perfect solution for digital experience</p>{" "}
          <a href="#" className="c-yellow underline">
            Explore more works
          </a>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.img className="md:w-full rounded-3xl max-w-[25rem] cursor-pointer"
            src={showCase1}
            alt="project"
            variants={fadeIn("up", "tween", 0.5, 0.6)}
          />
          <motion.img className="md:w-full rounded-3xl max-w-[25rem] cursor-pointer hover:translate-y-4"
            src={showCase2}
            alt="project"
            variants={fadeIn("up", "tween", 0.7, 0.6)}
          />
          <motion.img className="md:w-full rounded-3xl max-w-[25rem] cursor-pointer hover:translate-y-4"
            src={showCase3}
            alt="project"
            variants={fadeIn("up", "tween", 0.9, 0.6)}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
