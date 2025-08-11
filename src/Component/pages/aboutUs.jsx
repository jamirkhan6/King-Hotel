import React from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only run once
    threshold: 0.2, // % of the element visible before triggering
  });

  return (
    <div className="mt-16" ref={ref}>
      <div className="text-3xl font-bold font-titleAll text-center text-[#03045e]">
        A<span className="text-2xl">BOUT US</span>{" "}
      </div>

      <div className="flex items-center gap-6 mt-6 w-full h-full">
        {/* animated image */}
        <motion.div
          initial={{ x: -500 }}
          animate={inView ? { x: 0 } : {}}
          transition={{
            duration: 2,
          }}
          className="w-1/2 relative"
        >
          <img
            className="absolute w-[450px] top-[200px] left-[51%]"
            src="./img/about1.jpg"
            alt=""
          />
          <img className="w-11/12 h-full" src="./img/about2.jpg" alt="" />
        </motion.div>

        {/* descriptions */}
        <div className="w-1/2 ">
          <p className="text-base font-bold text-[#03045e] mt-16">
            Welcome To King Hotel
          </p>
          <h1 className="text-7xl font-bold text-[#e9c46a] mt-4">
            Your Comfort, Our Commitment
          </h1>
          <p className="text-[18px] font-normal text-gray-600 mt-12">
            At Hotel Haven, we prioritize your comfort above all else. From
            luxurious accommodations to personalized services, every detail is
            crafted with care to ensure your stay is nothing short of
            extraordinary. Our commitment to excellence means providing you with
            a seamless experience, where relaxation and satisfaction come
            together to create lasting memories. Your comfort is our promise.
          </p>
        </div>
      </div>

      {/* title */}
      <div className="flex justify-center mt-36">
        <div className="w-2/5">
          <h1 className="text-3xl font-bold font-titleAll text-center text-[#03045e]">
            H<span className="text-2xl">APPY</span> C
            <span className="text-2xl">USTOMERS</span>
          </h1>
          <p className="text-[18px] font-normal text-center text-gray-600">
            Our satisfied guests are a testament to our exceptional service and
            hospitality. With countless positive reviews and glowing
            testimonials
          </p>
        </div>
      </div>

      {/* stats */}
      <div className="w-full flex justify-center mt-20 mb-24">
        <div className="w-2/3 grid grid-cols-3 rounded-xl shadow-2xl py-4 bg-[#90e0ef]">
          <div className="text-center">
            <p className="text-base font-bold text-[#03045e]">
              {inView && (
                <CountUp start={0} end={18000} duration={3} separator="," />
              )}
              +
            </p>
            <p className="text-xl font-bold text-[#00b4d8]">Happy Customer</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-[#03045e]">
              {inView && <CountUp start={0} end={99} duration={3} />}+
            </p>
            <p className="text-xl font-bold text-[#00b4d8]">Positive Review</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-[#03045e]">
              {inView && <CountUp start={0} end={26} duration={3} />}+
            </p>
            <p className="text-xl font-bold text-[#00b4d8]">
              Year of Experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
