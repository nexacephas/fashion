import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("jp"); // default language is now Japanese

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "jp" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
