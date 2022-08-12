import React, { useState, useEffect } from "react";
import DetalhesModal from "components/DetalheModal/DetalhesModal";
import ListaConviteItem from "components/ListaConviteItem/ListaConviteItem";
import { ConviteService } from "service/ConviteService";

/*import { convites } from 'mocks/convites.js'*/
import "./ListaConvite.css";

function ListaConvite() {
  const [convites, setConvites] = useState([]);
  const [conviteSelecionado, setConviteSelecionado] = useState([]);
  const adicionarItem = (conviteIndex) => {
    const convite = {
      [conviteIndex]: Number(conviteSelecionado[conviteIndex] || 0) + 1,
    };
    setConviteSelecionado({ ...conviteSelecionado, ...convite });
  };
  const [conviteModal, setConviteModal] = useState(false);
  const removerItem = (conviteIndex) => {
    const convite = {
      [conviteIndex]: Number(conviteSelecionado[conviteIndex] || 0) - 1,
    };
    setConviteSelecionado({ ...conviteSelecionado, ...convite });
  };

  const getLista = async () => {
    const response = await ConviteService.getLista();
    setConvites(response.allconvites);
  };
  useEffect(() => {
    getLista();
  }, []);

  console.log(convites);
  return (
    <div className="ListaConvite">
      {convites.map((convite, index) => (
        <ListaConviteItem
          key={`ListaConviteitem-${index}`}
          convite={convite}
          quantidadeSelecionada={conviteSelecionado}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
          clickItem={(conviteId) => setConviteModal(convite)}
        />
      ))}

      {conviteModal && (
        <DetalhesModal
          convite={conviteModal}
          closeModal={() => setConviteModal(false)}
        />
      )}
    </div>
  );
}

export default ListaConvite;
/*
const [convites, setConvites] = useState({});
const  getLista = async () => {
  const response = await conviteService.getLista();
  setConvites(response);
}
useEffect(() => {
getLista();
}, [])
*/
/*
{ convites.map((convite, index) => (
  <ListaConviteItem
    key={`ListaConviteitem-${index}`}
    convite={convite}
    quantidadeSelecionada={conviteSelecionado}
    index={index}
    onRemove={(index) => removerItem(index)}
    onAdd={(index) => adicionarItem(index)}
    clickItem={(conviteId) => setConviteModal(convite)}
  />
)) }
*/
/*
convites.map((convite, index) => (
  <div>
  <span> {convite.descricao}</span>
  <span> {convite.descricao}</span>
  <span> {convite.descricao}</span>
  <div className="ListaConviteitem__titulo">{convite.titulo}</div>
  <img
           className="ListaConviteitem__foto"
           src={convite.foto}
           alt="imagens"
         />
         <div className="ListaConviteitem__descricao">{convite.descricao}</div>
  </div>
    
   
 ))
*/
