import React from 'react';
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
const AboutUs = () => {
    return (
      <section className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
            About <span className="text-primary">KnowSync</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 font-sans">
            KnowSync is a collaborative knowledge sharing platform where you can
            publish articles, exchange ideas, and learn from a global community.
            Whether you’re an expert or a beginner, your voice matters here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white  dark:bg-base-200 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3449/3449520.png"
              alt="Share Knowledge"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Share Your Knowledge
            </h3>
            <p className="text-gray-600 font-sans">
              Publish articles, tutorials, and insights to help others grow
              while building your personal brand.
            </p>
          </div>

          <div className="bg-white  dark:bg-base-200 border-gray-200 dark:border-gray-700shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Learn from Others"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Learn from Others
            </h3>
            <p className="text-gray-600 font-sans">
              Explore content from diverse voices and gain insights to enhance
              your skills and understanding.
            </p>
          </div>

          <div className="bg-white  dark:bg-base-200 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              alt="Build Community"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Build a Community
            </h3>
            <p className="text-gray-600 font-sans">
              Connect with like-minded individuals and collaborate on meaningful
              projects and discussions.
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-gray-700 font-sans">
            At <span className="font-semibold text-primary">KnowSync</span>,
            we believe that knowledge grows when shared. Join us to be part of a
            vibrant learning ecosystem.
          </p>
        </div>
      </section>
    );
};

export default AboutUs;