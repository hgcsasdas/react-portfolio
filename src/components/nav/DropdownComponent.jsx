import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "flowbite-react";
import { FaFlag } from "react-icons/fa";

const DropdownComponent = () => {
  const [t, i18n] = useTranslation("global");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const languageOptions = [
    {
      code: "es",
      label: "Español",
      flag: <FaFlag className="text-xl mr-2 " />,
    },
    {
      code: "en",
      label: "English",
      flag: <FaFlag className="text-xl mr-2 " />,
    },
    // Agrega más idiomas según sea necesario
  ];

  const dropdownStyle = {
    border: "2px solid #FFC107", // Color opuesto al fondo (amarillo)
  };

  return (
    <div className="relative inline-block text-left">
      <Dropdown
        label={
          <span className="capitalize font-bold text-blue-100 hover:scale-105 duration-200">
            {t("nav.dropdown-lng")}
          </span>
        }
        style={dropdownStyle}
      >
        {languageOptions.map((option) => (
          <Dropdown.Item
            key={option.code}
            onClick={() => changeLanguage(option.code)}
            className="flex items-center text-blue-200 hover:text-blue-500"
          >
            {option.flag}
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
