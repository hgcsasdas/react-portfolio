import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const [t] = useTranslation("global");

  return (
    <div
      name="about"
      className="bg-gradient-to-b from-blue-900 to-blue-600 text-blue-200 w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-5xl font-bold inline border-b-4 border-blue-950 text-yellow-400">
            {t("about.title")}
          </p>
        </div>
        <p className="text-xl mt-20">{t("about.content")}</p>

        <br />

        <p className="text-xl">{t("about.content2")}</p>
      </div>{" "}
    </div>
  );
}

export default About;
