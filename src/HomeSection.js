import React, { useEffect, useState } from 'react';

const HomeSection = () => {
  const titles = ['Back End Developer', 'Full Stack Developer'];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState(titles[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        const oldText = titles[currentTitle];
        const newIndex = (currentTitle + 1) % titles.length;
        const newText = titles[newIndex];
        
        // Animasi menghilangkan teks lama karakter per karakter
        const eraseText = () => {
          let currentLength = oldText.length;
          const eraseInterval = setInterval(() => {
            if (currentLength > 0) {
              setDisplayText(oldText.substring(0, currentLength - 1));
              currentLength--;
            } else {
              clearInterval(eraseInterval);
              // Setelah selesai menghapus, mulai mengetik teks baru
              typeNewText();
            }
          }, 50);
        };

        // Animasi mengetik teks baru karakter per karakter
        const typeNewText = () => {
          let currentLength = 0;
          const typeInterval = setInterval(() => {
            if (currentLength < newText.length) {
              setDisplayText(newText.substring(0, currentLength + 1));
              currentLength++;
            } else {
              clearInterval(typeInterval);
              setCurrentTitle(newIndex);
              setIsTransitioning(false);
            }
          }, 80);
        };

        eraseText();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTitle, isTransitioning]);

  return (
    <section id="home" className="pt-36 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 md:mb-4">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Hi Everyone!! <span className="wave">👋</span> I am
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Radhit Pribadi Tegar</span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl typewriter" id="typewriter-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="font-medium text-secondary mb-10">I am a student currently studying in vocational high school majoring in software engineering and focuses on back end developers.</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a href="#contact" className="text-base font-semibold bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Contact Me</a>
              <a href="https://drive.google.com/file/d/1sw3QPyJLcvGghpVN8FfFU_voHBDOR4za/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="sm:ml-4 text-base font-semibold bg-slate-500 text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">See CV</a>
            </div>
          </div>
          <div className="w-full mt-20 self-end px-4 lg:w-1/2">
            <div className="relative lg:mt-0">
              <img className="w-64 h-64 rounded-full object-cover mx-auto my-auto hover:bg-primary duration-500" src={`${process.env.PUBLIC_URL}/img/download-removebg-preview.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;