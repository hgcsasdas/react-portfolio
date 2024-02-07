import fotoImage from "../assets/portfolio/foto_final_px_art.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <div
      name="home"
      className={`h-screen w-full bg-gradient-to-b from-blue-600 via-blue-600 to-blue-900 max-sm:pt-44 text-blue-100`}
      >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:px-0 md:flex-row md:py-3">
        <div className="flex flex-col justify-center h-full">
          <h2 className={`text-4xl sm:text-7xl font-bold text-blue-100 `}>
            {t("home.title")}
          </h2>
          <p className="py-4">{t("home.description")}</p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-yellow-500 to-yellow-300"
            >
              {t("portfolio.title")}
              <span className="ml-1 duration-300 group-hover:rotate-90">
                <FaCircleArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="px-4 mt-8 md:mt-0">
          <img
            src={fotoImage}
            alt="my profile"
            className="w-2/3 mx-auto rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
