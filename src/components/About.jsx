import React from "react";

function About() {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-blue-900 to-blue-600 text-blue-200 w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-5xl font-bold inline border-b-4 border-blue-950 text-yellow-400">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        👋🏻 Hi everyone! I'm Carlos, a recent graduate with a focus on
            Multiplatform Application Development (DAM) and Web Application
            Development (DAW). As a junior programmer, my experiences as an
            intern have equipped me with practical skills in software
            development. I engage with various technologies and languages,
            exploring Java, PHP, JavaScript, HTML, CSS, SQL, and Git, along with
            frameworks like Spring Boot, Tailwind, Angular, and React. I also
            delve into emerging technologies such as Flutter, Kotlin Jetpack Compose, and
            python.
        </p>

        <br />

        <p className="text-xl">
          🧪 My approach centers on creating high-quality solutions to boost project success. I stay updated on technological trends, committed to continuous learning for skill enhancement. Recognized for adaptability, teamwork, and efficient problem-solving, I embrace new technologies with a proactive mindset. Open to opportunities for professional growth and eager to contribute to exciting projects
        </p>
      </div>{" "}
    </div>
  );
}

export default About;
