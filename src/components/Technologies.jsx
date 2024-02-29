import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javaScript from "../assets/javascript.png";
import node from "../assets/node.png";
import angular from "../assets/angular.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import java from "../assets/java.png";
import springBoot from "../assets/SpringBoot5.png";
import kotlin from "../assets/kotlin.png";
import flutter from "../assets/flutter.png";
import { useTranslation } from "react-i18next";

function Technologies() {
  const [t] = useTranslation("global");

  const technologies = [
    {
      id: 1,
      src: springBoot,
      title: "Spring Boot 5",
      style: "shadow-green-400",

    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: java,
      title: "Java",
      style: "shadow-red-700",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: angular,
      title: "Angular",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-300",
    },
    {
      id: 10,
      src: react,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 11,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-purple-400",
    },
    {
      id: 12,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-600",
    },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b  from-blue-900 to-blue-600 text-blue-200 w-full max-sm:pt-44 md:h-screen h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center md:pt-44 w-full h-full">
        <div>
          <p className="text-5xl font-bold inline border-b-4 border-blue-950 text-yellow-400">
            {t("technologies.title")}
          </p>
          <p className="py-6">{t("technologies.content")}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" loading="lazy" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
