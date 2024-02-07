import React from "react";

const PortfolioItem = ({
  src,
  title,
  explanation,
  technologies,
  demoLink,
  gitFrontendRepository,
  gitBackendRepository,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full mb-8 overflow-hidden bg-white rounded-md shadow-lg">
      <div className="md:w-1/3 h-full">
        <div className="h-full flex items-center justify-center">
          <img
            className="object-cover h-full"
            src={src}
            alt={title + " image"}
          />
        </div>
      </div>

      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="mb-2 text-xl font-bold text-blue-800">{title}</div>
          <p className="mb-2 text-blue-700">{explanation}</p>
          <p className="mb-2 text-blue-700">
            Technologies: {technologies.join(", ")}
          </p>
        </div>

        <div className="flex gap-2 flex-col md:flex-row items-center mb-4">
          {demoLink ? (
            <a
              href={demoLink}
              className="w-full md:w-1/2 md:mr-2 px-4 py-2 text-center text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600 mb-2 md:mb-0"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          ) : (
            <button
              className="w-full md:w-1/2 md:mr-2 px-4 py-2 text-center text-white bg-gray-400 rounded-md cursor-not-allowed mb-2 md:mb-0"
              disabled
            >
              Demo
            </button>
          )}

          {gitFrontendRepository && (
            <a
              href={gitFrontendRepository}
              className="w-full md:w-1/2 md:ml-2 px-4 py-2 text-center text-white transition duration-300 bg-yellow-500 rounded-md hover:bg-yellow-600"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Git
            </a>
          )}

          {gitBackendRepository && (
            <a
              href={gitBackendRepository}
              className="w-full md:w-1/2 md:ml-2 px-4 py-2 text-center text-white transition duration-300 bg-yellow-500 rounded-md hover:bg-yellow-600"
              target="_blank"
              rel="noreferrer"
            >
              Backend Git
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
