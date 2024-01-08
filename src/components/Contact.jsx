import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation("global");

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-blue-200 p-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-blue-950 text-yellow-400">
            {t("contact.title")}
          </p>
          <p className="py-6">{t("contact.content")}</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/6103311d-a321-4ea3-befa-95b3bcc14ae6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder={t("contact.formPlaceholderName")}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder={t("contact.formPlaceholderEmail")}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder={t("contact.formPlaceholderMessage")}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-yellow-500 to-yellow-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              {t("contact.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
