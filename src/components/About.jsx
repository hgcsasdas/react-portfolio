import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const [t] = useTranslation("global");

  return (
    <div
      name="about"
      className="w-full h-full text-blue-200 bg-gradient-to-b from-blue-900 max-sm:pt-44 to-blue-600 md:h-screen"
      >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8 ">
          <p className="inline text-5xl font-bold text-yellow-400 border-b-4 border-blue-950">
            {t("about.title")}
          </p>
        </div>
        <p className="mt-20 text-xl">{t("about.content")}</p>

        <br />

        <p className="text-xl">{t("about.content2")}</p>
      </div>{" "}
    </div>
  );
}

export default About;
