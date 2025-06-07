import React from 'react';

const TopContributors = () => {
    return (
      <section className="py-16 px-4 bg-base-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Top Contributors</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-base-200 rounded-xl p-6 shadow-md">
            <img
              src="https://i.pravatar.cc/100?u=user1"
              alt="User 1"
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Ayesha Rahman</h3>
            <p className="text-sm opacity-70">25 Articles</p>
          </div>

          <div className="bg-base-200 rounded-xl p-6 shadow-md">
            <img
              src="https://i.pravatar.cc/100?u=user2"
              alt="User 2"
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Ravi Kumar</h3>
            <p className="text-sm opacity-70">19 Articles</p>
          </div>

          <div className="bg-base-200 rounded-xl p-6 shadow-md">
            <img
              src="https://i.pravatar.cc/100?u=user3"
              alt="User 3"
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Fatima Noor</h3>
            <p className="text-sm opacity-70">17 Articles</p>
          </div>
        </div>
      </section>
    );
};

export default TopContributors;