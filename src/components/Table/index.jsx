import "./style.css";
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import { useState } from "react";
import Confirm from "../Confirm";

function Table() {
  const [asc, setAsc] = useState(true);
  const [openConfirm, setOpenConfirm] = useState(false)

  function handleDelete() {
    console.log('delete');
    setOpenConfirm(false);
  }

  return (
    <div className="container-table">
      <div className="table-head">
        <div
          className="table-column-s content-date"
          onClick={() => setAsc(!asc)}
        >
          <strong>Data</strong>
          <img src={asc ? ArrowUp : ArrowDown} alt="order" />
        </div>

        <strong className="table-column-m">Dia da Semana</strong>
        <strong className="table-column-l">Descrição</strong>
        <strong className="table-column-s">Categoria</strong>
        <strong className="table-column-s">Valor</strong>
        <div className="table-column-s"></div>
      </div>

      <div className="table-body">
        <div className="table-row">
          <strong className="table-column-s content-date">11/04/2022</strong>
          <span className="table-column-m">Segunda</span>
          <span className="table-column-l">Venda de um produto</span>
          <span className="table-column-s">Vendas</span>
          <strong className="table-column-s">R$100,00</strong>
          <div className="table-column-s action-buttons">
            <img src={EditIcon} alt="edit" />
            <img
              src={DeleteIcon}
              alt="delete"
              onClick={() => setOpenConfirm(true)}
            />
          </div>
          <Confirm
            open={openConfirm}
            handleClose={() => setOpenConfirm(false)}
            handleConfirm={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Table;
