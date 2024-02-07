import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation("global");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    // Validación del nombre
    if (formData.name.trim() === "") {
      newErrors.name = t("Pon un nombre válido !!");
      valid = false;
    }

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = t("Usa un email válido !!");
      valid = false;
    }

    // Validación del mensaje
    if (formData.message.trim() === "") {
      newErrors.message = t("Escriba al menos una letra por favor");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Lógica de envío del formulario
      console.log("Formulario válido. Enviar datos:", formData);
    } else {
      console.log("Formulario inválido. Por favor, corrija los errores.");
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-blue-200 max-sm:pt-44 p-4"
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
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("contact.formPlaceholderName")}
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.name && "border-red-500"
              }`}
            />
            <p className="text-red-500">{errors.name}</p>

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("contact.formPlaceholderEmail")}
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.email && "border-red-500"
              }`}
            />
            <p className="text-red-500">{errors.email}</p>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t("contact.formPlaceholderMessage")}
              rows="10"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.message && "border-red-500"
              }`}
            ></textarea>
            <p className="text-red-500">{errors.message}</p>

            <button
              onClick={handleSubmit}
              className="text-white bg-gradient-to-r from-yellow-500 to-yellow-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              {t("contact.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
