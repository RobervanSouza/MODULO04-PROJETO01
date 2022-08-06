import {useState} from 'react';
import ListaConvite from "components/ListaConvite/ListaConvite";

import Navbar from 'components/NavBar/Navbar';
import AdicionaConvite from "components/ModalAdicionar/AdicionaConvite";

import "./Home.css";
function Home() {
  const [canShowAdicionaConvite, setCanShowAdicionaConvite]= useState(false);

  return (
    <div className="Home">
      <Navbar createConvite= {() => setCanShowAdicionaConvite(true)} />
      <div className="Home__container">
        <ListaConvite />
        {
          canShowAdicionaConvite && (<AdicionaConvite closeModal = {() =>  setCanShowAdicionaConvite(false) } />)
        }
      </div>
    </div>
  );
}

export default Home;
