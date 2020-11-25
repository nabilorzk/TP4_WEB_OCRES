import React, { useState, useEffect } from "react";
import "../styles/profil.css";

const Profil = (props) => {
  const [background, setBackground] = useState("white");
  const [count, setCount] = useState(0);

  return (
    <div className="containerProfil">
      <div className="profilCard" style={{ backgroundColor: background }}>
        <div className="imgContainer">
          <img src={props.src} alt={`image de ${props.prenom}`} />
        </div>
        <div className="infoName">
          <h1>
            {props.nom} {props.prenom}
          </h1>
        </div>
        <div className="infoBirth">
          <span>{props.birth}</span>
        </div>
        <div className="buttonColor">
          <button onClick={() => setBackground(props.backgroundColorButton)}>
            Change style
          </button>
        </div>
      </div>

      <div className="postContainer">
        <p>{props.lastPost}</p>
        <div className="containerLike">
          <button onClick={() => setCount(count + 1)}>C'est super !</button>
          <span>
            {props.nom} {props.prenom} à obtenu(e) {count} like !
          </span>
        </div>
        {/* {console.log(props.like)}
        {console.log(count)} */}
      </div>
    </div>
  );
};

export default Profil;
