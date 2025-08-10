
import React from "react";

const WeeklyKnowledgeChallenge = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-purple-600 text-text py-12 px-6  shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">
          📚 Weekly Knowledge Challenge
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Test your knowledge and earn rewards! Every week we post a new
          challenge on various topics. Participate, learn, and climb the
          leaderboard.
        </p>

        {/* Challenge Card */}
        <div className="bg-white  dark:bg-base-200 border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            🧠 This Week’s Challenge:
          </h3>
          <p className="mb-4">
            “Explain the concept of{" "}
            <span className="font-semibold">JWT Authentication</span>
            in under 200 words.”
          </p>

          {/* Deadline */}
          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <span>⏳ Deadline: August 17, 2025</span>
            <span>🏆 Prize: 50 Points</span>
          </div>

          {/* Participate Button */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition">
            Participate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeeklyKnowledgeChallenge;
