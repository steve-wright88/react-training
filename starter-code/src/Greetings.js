import React from "react";

function Greetings({ lang, children }) {
  const whichLanguage = () => {
    if (lang === "fr") {
      return "Bonjour ";
    } else if (lang === "de") {
      return "Hallo ";
    } else if (lang === "es") {
      return "Hola ";
    } else return "Hello ";
  };

  return (
    <div className="greetings container">
      {whichLanguage()}
      {children}
    </div>
  );
}

export default Greetings;
