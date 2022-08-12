import { useState, } from "react";
import "./AdicionaConvite.css";
import Modal from "components/Modal/Modal";

function AdicionaConvite({ closeModal }) {
  const form = {
    descricao: "",
    preco: "",
    foto: "",
  };

  const [state, setState] = useState(form);
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  
  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaConvite">
        <form autoComplete="off">
          <h2> Adiciona Convite</h2>
          <div>
            <label className="AdicionaConvite__text" htmlFor="preco">
              Quantidade:
            </label>
            <input
              id="preco"
              type="text"
              placeholder="Quantidade do Convite"
              value={state.quantidade}
              onChange={(e) => handleChange(e, "preco")}
              required
            ></input>
          </div>
          <div>
            <label className="AdicionaConvite__text" htmlFor="descricao">
              Descrição:
            </label>
            <input
              id="descricao"
              type="text"
              placeholder="Detalhes do Convite"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            ></input>
          </div>
          <div>
            <label
              className="AdicionaConvite__text AdicionaConvite__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecione uma imagem" : state.foto}
            </label>

            <input
              className="AdicionaConvite__foto"
              id="foto"
              type="text"
              accept="image/png, image/jpeg, image/gif"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
              required
            ></input>
          </div>
          <button
            type="submitt"
           
            className="AdicionaConvite__enviar"
          >
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  );
}
export default AdicionaConvite;

/*
const [canDisable, setCanDisable] = useState(true);
  const canbutton = () => {
    const response = !Boolean(
      ( state.preco.length && state.descricao.length &&  state.foto.length  )
    );
    setCanDisable(response);
  };

  useEffect(() => {
    canbutton();
  });
   disabled={canDisable}
   */
