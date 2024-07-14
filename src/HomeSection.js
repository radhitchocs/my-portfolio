import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="pt-36 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 md:mb-4">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Hi Everyone!! <span className="wave">👋</span> I am
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Radhit Pribadi Tegar</span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl typewriter" id="typewriter-text">Back End Developer</h2>
            <p className="font-medium text-secondary mb-10">I am a student currently studying in vocational high school majoring in software engineering and focuses on back end developers.</p>
            <a href="#contact" className="text-base font-semibold bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Contact Me</a>
          </div>
          <div className="w-full mt-20 self-end px-4 lg:w-1/2">
            <div className="relative lg:mt-0">
              <img className="w-64 h-64 rounded-full object-cover mx-auto my-auto hover:bg-primary duration-500" src={`${process.env.PUBLIC_URL}/img/download-removebg-preview.png`} alt="" />
              {/* Jika ingin menambahkan elemen SVG latar belakang */}
              {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-125 -z-10">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#14B8A6" d="M52.1,-53.4C67.2,-36.9,79,-18.5,78.2,-0.8C77.4,16.8,63.8,33.5,48.7,48.6C33.5,63.8,16.8,77.3,-0.7,78C-18.2,78.7,-36.4,66.7,-48.6,51.6C-60.7,36.4,-66.8,18.2,-66,0.9C-65.1,-16.5,-57.3,-33,-45.2,-49.5C-33,-66,-16.5,-82.4,1,-83.4C18.5,-84.4,36.9,-69.9,52.1,-53.4Z" transform="translate(100 100)" />
                </svg>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;