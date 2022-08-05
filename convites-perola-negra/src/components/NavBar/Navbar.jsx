import "./Navbar.css";

import sacola from "assets/icons/sacola.svg";
import icone from "assets/icons/icone.png";
import logo from "assets/logo.jpg";

function Navbar({createConvite}){
    return (
        <div className="Header-header">
        <div className="row">
          <div className="header-logo">
            <img src={logo} width="70px" alt="logo" className="logo-icone" />
            <span className="logo-nome">Perola Negra Convite </span>
          </div>
          <button type="button" className="Opcoes__convite convite" onClick={( ) => createConvite()}>
            <img src={icone} width="40px" className="convite__icone" alt="icone de adicionar" />
          </button>
          <div className="sacola">
            <img
              src={sacola}
              width="70px"
              className="sacola-icone"
              alt=" sacola"
            />
          </div>
        </div>
      </div>
    );
}


export default Navbar;