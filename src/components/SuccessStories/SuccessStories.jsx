import React from "react";

const successStories = [
  {
    name: "Sarah Khan",
    story:
      "I shared my first article here, and it got featured on the homepage. My writing skills improved a lot!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John Lee",
    story:
      "This platform helped me connect with experts in my field. I’ve learned more here than in any course!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Aisha Ahmed",
    story:
      "I joined the Weekly Challenge and now my article is one of the most popular pieces of the month!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          🌟 Success Stories
        </h2>
        <p className="text-lg text-text-muted mb-10">
          Our community members are achieving amazing things. Here are some of
          their inspiring journeys.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white  dark:bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-text mb-2">
                {story.name}
              </h3>
              <p className="text-text">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
