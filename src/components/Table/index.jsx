import { useState } from "react";
import ArrowDown from "../../assets/arrow-down.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import EditIcon from "../../assets/edit-icon.svg";
import { formatToBRL, formatToDate, formatToWeek } from "../../utils/formatter";
import Confirm from "../Confirm";
import "./style.css";

function Table({ transactions }) {
  const [asc, setAsc] = useState(true);
  const [openConfirm, setOpenConfirm] = useState(false);

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
        {transactions.map((transact) => (
          <div className="table-row" key={transact.id}>
            <strong className="table-column-s content-date">{formatToDate(transact.data)}</strong>
            <span className="table-column-m">{formatToWeek(transact.data)}</span>
            <span className="table-column-l">{transact.descricao}</span>
            <span className="table-column-s">{transact.categoria_nome}</span>
            <strong
              className={`table-column-s ${transact.tipo === 'entrada' ? 'positive' : 'negative'}`}
            >
              {formatToBRL(transact.valor)}
            </strong>
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
        ))}

      </div>
    </div>
  );
}

export default Table;
