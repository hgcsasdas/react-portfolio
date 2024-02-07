import React from "react";
import PortfolioItem from "./portfolio/PortfolioItem";
import ShortUrl from "../assets/portfolio/ShortUrl.png";
import AVPEPE from "../assets/portfolio/VirtualAssistant.png";
import SecondHandMarket from "../assets/portfolio/SecondHandMarket.png";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [t] = useTranslation("global");

  // Función para obtener la imagen del proyecto
  const getProjectImage = (projectId) => {
    // Implementa la lógica para obtener la imagen correspondiente a projectId
    // Puedes usar un mapa o una lógica similar
    switch (projectId) {
      case "urlShort":
        return ShortUrl;
      case "virtualAssistantPepe":
        return AVPEPE;
      case "secondHandMarketSpring":
        return SecondHandMarket;
      // Agrega más casos según sea necesario
      default:
        return null;
    }
  };

  const projects = t("portfolio.projects", { returnObjects: true });

  const portfolio = Object.keys(projects).map((projectId) => {
    const project = projects[projectId];
    return {
      src: getProjectImage(projectId),
      title: project.title,
      explanation: project.explanation,
      demoLink: project.demoLink,
      gitBackendRepository: project.gitBackendRepository,
      gitFrontendRepository: project.gitFrontendRepository,
      technologies: Object.values(project.technologies),
    };
  });

  return (
    <div
      name="portfolio"
      className="w-full h-full text-blue-200 bg-gradient-to-b from-blue-600 to-blue-900 max-sm:pt-44 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-5xl font-bold text-yellow-400 border-b-4 border-blue-950">
            {t("portfolio.title")}
          </p>
          <p className="py-6"> {t("portfolio.content")} </p>
        </div>

        <div className="flex flex-col items-center">
          {portfolio.map((item) => (
            <PortfolioItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
