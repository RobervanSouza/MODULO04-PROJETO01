import React, { useState } from "react";
import DetalhesModal from "components/DetalheModal/DetalhesModal";
import ListaConviteItem from "components/ListaConviteItem/ListaConviteItem";
import { convites } from "mocks/convites.js";
import "./ListaConvite.css";

function ListaConvite() {
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
      ;
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

