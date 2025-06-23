import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden bg-fixed bg-center bg-cover text-black"
      style={{ backgroundImage: `url(${assets.back_img})` }}
      id="About"
    >
      {/* Optional overlay for readability */}
      <div className=" bg-opacity-50 w-full h-full absolute top-0 left-0 z-0" />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Myself
          </span>
        </h1>

        <p className="text-gray-800 text-lg text-center mb-8">
          Nitish Agrawal, Professional Photographer
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <img
            src={assets.brand_img}
            alt="Brand"
            className="w-full lg:w-95 sm:w-1/2 max-w-lg rounded-4xl"
          />

          <div className="flex flex-col items-center md:items-start mt-10 text-gray-800">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              {[
                { title: "Food", subtitle: "Photography" },
                { title: "10+", subtitle: "Years Experience" },
                { title: "Wildlife", subtitle: "Photography" },
                { title: "Star", subtitle: "Client Reviews" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-4xl font-medium text-gray-950">{item.title}</p>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>

            <p className="my-6 max-w-lg text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              minima quo rerum a laboriosam nesciunt, debitis quod eos, quaerat
              eveniet doloribus, corrupti nisi alias fugiat tenetur optio eaque
              aspernatur dolores.
            </p>

            <p className="mb-10 max-w-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              repudiandae a non aliquam voluptates repellat officia nisi iusto
              ipsum eius reiciendis provident possimus totam, fuga, sed velit
              necessitatibus officiis repellendus.
            </p>

            <a
              href="https://www.linkedin.com/in/nitish-agrawal07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-700 transition text-white px-8 py-2 transform transition-transform duration-300 hover:scale-[1.1] rounded inline-block bg-gradient-to-r from-[#cd1c18] to-[#66023c]"
            >
              Connect With Me
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
