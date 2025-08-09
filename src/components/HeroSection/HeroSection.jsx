import React from "react";
import { Link } from "react-router";
import { easeInOut, motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="hero h-screen md:max-h-[590px]  bg-linear-to-br from-primary to-accent relative">
      <div className="absolute left-0 bottom-0 hidden xl:block">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          src="https://www.radiustheme.com/demo/wordpress/themes/docfi/wp-content/uploads/2023/09/shape_1.png"
          alt=""
        />
      </div>
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Share Your Knowledge
          </h1>
          <p className="mb-6 text-white text-lg">
            Empower students by posting helpful articles, tips, and resources.
            Learn together. Grow together.
          </p>
          <Link to="/all-articles">
            <button className="btn btn-primary text-white">
              Explore Articles
            </button>
          </Link>
        </div>
      </div>

      <dir className="hidden xl:block">
        <motion.img
          className="absolute right-0 bottom-0"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          src="https://www.radiustheme.com/demo/wordpress/themes/docfi/wp-content/uploads/2023/09/shape2.png"
          alt=""
        />
      </dir>
    </div>
  );
};

export default HeroSection;
