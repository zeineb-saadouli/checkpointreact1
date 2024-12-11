import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "./App.css";
const App = () => {
  const firstName = "Zeineb"; // Remplacez par votre prénom ou laissez vide.

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <Image />
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <div className="text-center mt-4">
        {firstName ? (
          <>
            <h2>Bonjour, {firstName}!</h2>
            <img
              src="https://img.freepik.com/photos-gratuite/femme-plan-moyen-travaillant-hijab-interieur_23-2150751930.jpg?semt=ais_hybrid"
              alt="Greeting"
              className="mt-3 rounded-circle"
            />
          </>
        ) : (
          <h2>Bonjour !</h2>
        )}
      </div>
    </div>
  );
};

export default App;
