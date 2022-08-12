import "./DetalhesModal.css";
import Modal from "components/Modal/Modal";

function DetalhesModal({ convite, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="detalhesModal">
        <div>
          <div className="ConviteDetalhesModal__titulo"> {convite.nome}</div>
          <div className="ConviteDetalhesModal__preco">
            Quantidade:
            {Number(convite.quantidade)}
          </div>
          <div className="ConviteDetalhesModal__descricao">
            {" "}
            {convite.descricao}
          </div>
        </div>
        <img
          src={convite.imageUrl}
          width="300px"
          className="ConviteDetalhesModal__foto"
          alt="foto"
        />
      </div>
    </Modal>
  );
}
export default DetalhesModal;
