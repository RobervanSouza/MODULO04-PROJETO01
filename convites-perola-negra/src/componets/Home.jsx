import "./Home.css";
import sacola from "../assets/icons/sacola.svg";
import logo from "../assets/logo.jpg";

import ListaConvite from "./ListaConvite";

function Home() {
  return (
    <div className="Home">
      <div className="header-header">
        <div className="row">
          <div className="header-logo">
          <img src={logo} width= "70px" alt="logo" className="logo-icone"/>
          <span className="logo-nome" >Perola Negra Convite </span>
          </div>
          <div className="sacola">
          <img src={sacola} width= "70px" className="sacola-icone" alt=" sacola" />
          </div>
        </div>
      </div>

      <div className="Home__container">
        <ListaConvite />
      </div>
    </div>
  );
}

export default Home;
