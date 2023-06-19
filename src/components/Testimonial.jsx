import { testimonialData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  //destruction testmonial data
  const { title, slider, subtitle, modelImg } = testimonialData;
  return (
    <section className='bg-testimonial bg-cover bg-no-repeat relative top-[340px] z-10 lg:top-[390px] h-[800px] pt-[60px] md:pt-[120px]'>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial='hidden'
          whileInView={"show"}
          className='text-center capitalize flex flex-col items-center'>
          <h2 className='h2 text-white'>{title}</h2>
          <p className='text-white/70 capitalize mb-8'>{subtitle}</p>
          <div className='mb-12'>
            <img src={modelImg} alt='decor' />
          </div>
        </motion.div>
        {/* slider */}
        <motion.div
          variants={fadeIn("down", "tween", 0.4, 1.6)}
          initial='hidden'
          whileInView={"show"}
          className='flex justify-center items-center'>
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
