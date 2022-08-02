import React, {useState} from 'react';
import { convites } from "../mocks/convites.js";
import './ListaConvite.css';


function ListaConvite() {
const [conviteSelecionado, setConviteSelecionado] = useState({});
const adicionarItem = (conviteIndex) => {
    const convite = {[conviteIndex]: Number(conviteSelecionado[conviteIndex] || 0) +1}
    setConviteSelecionado({ ...conviteSelecionado, ...convite });
}

    return <div className="ListaConvite">
        {convites.map((convite, index) => (
                <div className="ListaConviteitem" key = {`ListaConviteitem-${index}`} >
                    <span className='ListaConviteitem__numero'>{conviteSelecionado[index] || 0} </span>
                    <div className="ListaConviteitem__titulo">{convite.titulo}</div>
                    <img className="ListaConviteitem__foto" src={convite.foto} alt="imagens" />
                    <div className="ListaConviteitem__descricao">{convite.descricao}</div>
                    <div className="ListaConviteitem__preco">{convite.preco.toFixed(2)}</div>
                    <div className="ListaConviteitem__acao Acoes">
                        <button className="Acoes__adicionar Acoes__adicionar--preecher" onClick={() => adicionarItem(index) }>Adicionar</button>
                    </div>
                    
                </div>
                ))}
    </div>;
  }
  
  export default ListaConvite;