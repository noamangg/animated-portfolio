import { motion } from "framer-motion";
import { staggerChildren } from "../utils/motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../utils/data";
function People() {
  return (
    <motion.section
    id="testimonials"

      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container p-4 m-auto">
        <h3 className="c-primary text-2xl font-bold text-center my-6">
          My Work Experiences
        </h3>
        <div className="flex text-center c-primary flex-col gap-1 mb-6">
          <p className="flex-1">
            I will help you with finging a solution and solve your problem, We
            use process design to create digital products. Besides that also
            help their business.
          </p>
          <p className="flex-1">
          We use process design to create digital products. Besides that also help their business
          </p>
        </div>
        
        <div className="comment">
          <Slider {...sliderSettings} className="">
            {comments.map((comment, i) => (
              <div key={i} className="shadow-2xl p-8 bg-white rounded-lg">
                <img src={comment.img} alt="person" className="w-[100px] h-[100px]  rounded-full m-auto mb-4" />
                <p className="mb-4">{comment.comment}</p>
                <hr />
                <div className="bio mt-4 text-center">
                  <h5 className="font-bold c-primary">{comment.name}</h5>
                  <p>{comment.post}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
}

export default People;
