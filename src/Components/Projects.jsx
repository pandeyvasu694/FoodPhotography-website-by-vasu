import React, { useEffect, useRef, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const visibleCards = 1;
  const cardWidth = 300; // px

  const extendedProjects = [...projectsData, ...projectsData.slice(0, visibleCards)];

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === projectsData.length) {
      setTimeout(() => {
        carouselRef.current.style.transition = "none";
        setCurrentIndex(0);
      }, 500);
    } else {
      carouselRef.current.style.transition = "transform 0.5s ease";
    }
  }, [currentIndex]);

  const nextProject = () => setCurrentIndex((prev) => prev + 1);
  const prevProject = () => setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));

  const handleImageClick = (img) => {
    setModalImage(img);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

 

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 2.0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.back_img_2})` }}
      id="Projects"
    >
      <div className="absolute inset-0 bg-opacity-50 z-0" />

      <div className="relative z-10 container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-black">
          Projects <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
        </h1>
        <p className="text-center text-gray-800 mb-8 max-w-80 mx-auto">Explore my projects</p>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden" ref={containerRef}>
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-transparent rounded-full shadow-md hover:bg-gray-700"
            aria-label="Previous Project"
          >
            <img src={assets.left_arrow} alt="Previous" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-transparent rounded-full shadow-md hover:bg-gray-700"
            aria-label="Next Project"
          >
            <img src={assets.right_arrow} alt="Next" />
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex gap-8"
              ref={carouselRef}
              style={{
                transform: `translateX(-${currentIndex * (cardWidth + 32)}px)`,
                transition: "transform 0.5s ease",
              }}
            >
              {extendedProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[300px] cursor-pointer transform transition duration-300 ease-in-out hover:scale-105"
                  onClick={() => handleImageClick(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto mb-14 rounded-lg shadow-lg"
                  />
                  <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                    <div className="inline-block bg-fuchsia-100 w-3/4 px-4 py-2 shadow-md">
                      <h2 className="text-xl font-semibold text-gray-800 text-center">{project.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center px-2 md:px-10"
              onClick={handleCloseModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="relative flex flex-col md:flex-row w-full h-full bg-white overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 right-4 w-10 text-black bg-fuchsia-200 rounded-full p-2 shadow-lg z-50 hover:bg-gray-200"
                  aria-label="Close Modal"
                >
                  ✕
                </button>

                <div className="w-full md:w-[70%] h-1/2 md:h-full bg-black flex justify-center items-center">
                  <img
                    src={modalImage}
                    alt="Fullscreen Project"
                    className="object-contain w-full h-full p-4"
                  />
                </div>

                <div className="w-full md:w-[30%] h-1/2 md:h-full p-6 flex flex-col justify-center bg-fuchsia-100 text-black overflow-y-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    {projectsData.find((p) => p.image === modalImage)?.title}
                  </h2>
                  <p className="text-lg mb-3">
  <span className="text-black font-bold">Price: </span>
  <span className="text-gray-700">{projectsData.find((p) => p.image === modalImage)?.price}</span>
</p>
<p className="text-lg">
  <span className="text-black font-bold">Location: </span>
  <span className="text-gray-700">{projectsData.find((p) => p.image === modalImage)?.location}</span>
</p>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;