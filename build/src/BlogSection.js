// src/BlogSection.js

import React from 'react';

const BlogSection = () => {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-500">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-3xl text-primary mb-2">Blog</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Latest Posts</h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Read the latest text articles on various programming and technology related topics.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzOTl8MHwxfGFsbHwxfHx8fHx8fHwxNjg4OTEyNzMxfA&ixlib=rb-1.2.1&q=80&w=1080"
                alt="Programming Tips" className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://www.freecodecamp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Programming Tips
                  </a>
                </h3>
                <p className="font-medium text-secondary text-base mb-6">
                  Discover the best tips and tricks to improve your programming skills and become a more efficient coder.
                </p>
                <a
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://www.beritabulukumba.com/wp-content/uploads/2023/08/IMG_20230827_3465.jpg"
                alt="Mechanical Keyboards" className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://www.pcgamer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Mechanical Keyboards
                  </a>
                </h3>
                <p className="font-medium text-secondary text-base mb-6">
                  Explore the world of mechanical keyboards and find out why they're preferred by many typists and gamers.
                </p>
                <a
                  href="https://www.pcgamer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://news.mit.edu/sites/default/files/images/inline/newsofficeimages/cubes.jpg"
                alt="Rubik's Cube Tutorial" className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://www.rubiks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Rubik's Cube Tutorial
                  </a>
                </h3>
                <p className="font-medium text-secondary text-base mb-6">
                  Learn how to solve a Rubik's Cube with our step-by-step tutorial and impress your friends with your skills.
                </p>
                <a
                  href="https://www.rubiks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
