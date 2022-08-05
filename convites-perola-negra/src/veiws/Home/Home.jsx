import ListaConvite from "components/ListaConvite/ListaConvite";

import Navbar from 'components/NavBar/Navbar'

import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <div className="Home__container">
        <ListaConvite />
      </div>
    </div>
  );
}

export default Home;
