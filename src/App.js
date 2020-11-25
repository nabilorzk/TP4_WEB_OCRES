import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// components
import Profil from "./components/Profil";
import FooterContent from "./components/FooterContent";

const profils = [
  {
    id: 0,
    prenom: "Jeanne",
    nom: "Myriam",
    birth: "07/09/1993",
    src: "femme1.jpeg",
    lastPost:
      "Bonjour moi c'est Jeanne, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme",
    like: 0,
    backgroundColorButton: "blue",
  },
  {
    id: 1,
    prenom: "Martine",
    nom: "Ouhorezki",
    birth: "04/07/2001",
    src: "femme2.jpeg",
    lastPost:
      "Bonjour moi c'est Martine, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme",
    like: 0,
    backgroundColorButton: "green",
  },
  {
    id: 2,
    prenom: "Claude",
    nom: "Rachel",
    birth: "10/12/1945",
    src: "femme3.jpeg",
    lastPost:
      "Bonjour moi c'est Claude, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme",
    like: 0,
    backgroundColorButton: "red",
  },
];

const App = () => {
  const [user, setUser] = useState(profils[0].prenom);

  return (
    <>
      <header>
        <div className="containerHeaderButton">
          {profils.map((profil) => {
            return (
              <button key={profil.id} onClick={() => setUser(profil.prenom)}>
                {profil.prenom}
              </button>
            );
          })}
        </div>
      </header>
      <main>
        {profils.map((profil) => {
          if (profil.prenom === user) {
            return (
              <Profil
                key={profil.id}
                prenom={profil.prenom}
                nom={profil.nom}
                birth={profil.birth}
                src={profil.src}
                lastPost={profil.lastPost}
                backgroundColorButton={profil.backgroundColorButton}
                like={profil.like}
              />
            );
          }
        })}
      </main>
      <footer>
        <FooterContent></FooterContent>
      </footer>
    </>
  );
};

export default App;
