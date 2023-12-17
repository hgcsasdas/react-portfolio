import React from "react";
import SecondHandMarket from "../assets/portfolio/SecondHandMarket.png";
import AVPEPE from "../assets/portfolio/AVPEPE.jpeg";
//importar imagenes para el portfolio

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: SecondHandMarket,
      name: "Second Hand Markt Spring",
      gitRepo: "https://github.com/hgcsasdas/Spring_boot_course",
    },
    {
      id: 2,
      src: AVPEPE,
      name: "Virtual Asistant PEPE",
      gitRepo: "https://github.com/hgcsasdas/AVPEPE",
    },
    //{
    //   id: 3,
    //   src: SecondHandMarket,
    // },
    // {
    //   id: 4,
    //   src: SecondHandMarket,
    // },
    // {
    //   id: 5,
    //   src: SecondHandMarket,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-blue-600 to-blue-900 text-blue-200 w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-blue-950 text-yellow-400">
            Portfolio
          </p>
          <p className="py-6">Here are some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, hasLink, gitRepo, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="bg-cyand-200">
                <p className="flex justify-center text-xl duration-200 hover:scale-105 ">{name}</p>
              </div>

              <img
                src={src}
                alt=""
                className="rounded-md w-full h-48 object-cover mx-auto duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {hasLink ? (
                  <>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-yellow-500">
                      Demo
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="w-1/2 px-6 py-3 m-4 duration-200 bg-slate-500"
                      disabled
                    >
                      Demo
                    </button>
                  </>
                )}

                {gitRepo ? (
                  <>
                    <a
                      href={gitRepo}
                      className=" justify-center px-6 py-3 m-4 duration-200 hover:scale-105 bg-yellow-500 rounded-sm text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Git
                    </a>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
