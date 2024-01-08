import React from "react";
import fotoImage from "../assets/portfolio/foto_final_px_art.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-blue-600 via-blue-600 to-blue-900 text-blue-100"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:px-0 md:flex-row md:py-3">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-blue-100">
            I'm a Full Stack Developer
          </h2>
          <p className="py-4">
            I'm Carlos, a recent graduate with a background in Multiplatform
            Application Development (DAM) and Web Application Development
            (DAW). My academic journey has instilled in me a solid foundation
            in software development. Eager to contribute my skills to dynamic
            projects, I bring adaptability and a commitment to ongoing learning.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-yellow-300 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <FaCircleArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="px-4 mt-8 md:mt-0">
          <img
            src={fotoImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
