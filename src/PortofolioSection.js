import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portofolio" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-3xl text-primary mb-2">Portfolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Little Achievement</h2>
            <p className="font-medium text-md text-secondary md:text-lg">This page showcases my achievements and accomplishments.</p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <a href="https://radhitchocs.github.io/smartti.github.io/" target="_blank" rel="noopener noreferrer" className="block mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={`${process.env.PUBLIC_URL}/img/websitesmartti.jpeg`} alt="First Website" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 hover:text-primary">SmartTi Website</h3>
            <p className="font-medium text-base text-secondary">SmartTi is a website specializing in website creation, game development, and domain hosting.</p>
          </a>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={`${process.env.PUBLIC_URL}/img/juara1codingcompetition.jpeg`} alt="Coding Competition Champion" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 hover:text-primary">Coding Competition Champion</h3>
            <p className="font-medium text-base text-secondary">First place in the coding competition organized by Bee Id, an accounting software company.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={`${process.env.PUBLIC_URL}/img/juara1lombasilat.jpeg`} alt="Smamda Cup Champion" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 hover:text-primary">Smamda Cup Champion</h3>
            <p className="font-medium text-base text-secondary">First place in the Smamda Cup in 2017.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={`${process.env.PUBLIC_URL}/img/juara2futsalsoccerfest.jpeg`} alt="Futsal Soccer Fest Runner-Up" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 hover:text-primary">Futsal Soccer Fest Runner-Up</h3>
            <p className="font-medium text-base text-secondary">Runner-up in the tournament organized by Ciputra Land with a 3vs3 format.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;