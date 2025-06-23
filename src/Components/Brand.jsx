import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Brand = () => {
  const brandImages = [
    assets.brand_img_1,
    assets.brand_img_2,
    assets.brand_img_3,
    assets.brand_img_4,
    assets.brand_img_5,
    assets.brand_img_6,
    assets.brand_img_7,
    assets.brand_img_8,
    assets.brand_img_9,
  ];

  // Duplicate array for seamless scrolling
  const scrollingImages = [...brandImages, ...brandImages];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 2.0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-16 lg:px-32 px-6 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Brands <span className="underline underline-offset-4 decoration-1 font-light">Worked with</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
        We are proud to have collaborated with a diverse range of popular brands and local businesses,
        contributing to their online success and growth.
      </p>

      {/* Marquee Rows */}
      <div className="space-y-8">
        {[1, 2, 3].map((row) => (
          <div key={row} className="relative w-full overflow-x-auto md:overflow-hidden scrollbar-hide">
            <div className={`md:animate-marquee${row} whitespace-nowrap flex`}>
              {scrollingImages.map((img, i) => (
                <img
                  key={`${row}-${i}`}
                  src={img}
                  alt={`Brand ${i + 1}`}
                  className="h-20 min-w-[120px] mx-6 object-contain inline-block"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Animations for desktop */}
      <style jsx>{`
        @keyframes marquee1 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes marquee3 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .md\\:animate-marquee1 {
          animation: marquee1 22s linear infinite;
        }
        .md\\:animate-marquee2 {
          animation: marquee2 22s linear infinite;
        }
        .md\\:animate-marquee3 {
          animation: marquee3 22s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default Brand;
