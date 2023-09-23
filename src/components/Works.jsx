import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2, zoomIn } from "../../src/utils/motion";
import { workExp } from "../utils/data";

function Works() {
  return (
    <motion.section
    id="experience"
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className="my-4"
    >
      <div className="container m-auto p-4">
        <h3 className="c-primary text-2xl font-bold text-center my-6">
          My Work Experiences
        </h3>
        <div className="flex-center  flex-col gap-8 relative">
          {workExp.map((exp, i) => (
            <motion.div
              className="flex w-full justify-between items-start gap-1"
              variants={textVariant2}
              key={i}
            >
              <div className="flex-1">
                <h4 className="c-primary mb-2 text-xl">{exp.place}</h4>
                <p className="text-sm">{exp.tenure}</p>
              </div>
              <div className="flex-1">
                <h4 className="c-primary mb-2 text-xl"> {exp.role}</h4>
                <p className="leading-8 text-base">{exp.detail}</p>
              </div>
            </motion.div>
          ))}
          <motion.div className="absolute h-full flex flex-col gap-2 left-[45%]"
          variants={zoomIn(1,1)}>
            <motion.div className="absolute h-[92%] w-[2px] bg-right bg-size-custom bg-repeat-y left-[48%] z-[1] rounded-md"
            variants={fadeIn("down", "tween", 2, 1.5)}></motion.div>
            <div className="flex-1 pt-3 z-[2]"><div className="rounded-full bg-black w-4 h-4" style={{background: "#286f6c"}}></div></div>
            <div className="flex-1 pt-3 z-[2]"><div className="rounded-full bg-black w-4 h-4"  style={{background: "#f2704e"}}></div></div>
            <div className="flex-1 pt-3 z-[2]"><div className="rounded-full bg-black w-4 h-4" style={{background: "#eec048"}}></div></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Works;
