import { useState } from "react";
import ArrowDown from "../../assets/arrow-down.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import EditIcon from "../../assets/edit-icon.svg";
import api from "../../services/api";
import { formatToBRL, formatToDate, formatToWeek } from "../../utils/formatter";
import { loadTransactions } from "../../utils/requests";
import { getItem } from "../../utils/storage";
import Confirm from "../Confirm";
import "./style.css";

function Table({ transactions, setTransactions, setOpenModalEdit, setCurrentItemEdit }) {
  const [asc, setAsc] = useState(true);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [currentItem, setCurrentItem] = useState(null)

  function handleOpenConfirm(transact) {
    setCurrentItem(transact);
    setOpenConfirm(!openConfirm);
  };

  function handleOpenEdit(transact) {
    setCurrentItemEdit(transact);
    setOpenModalEdit(true);
  };

  const token = getItem('token');

  async function handleDelete() {
    try {
      const response = await api.delete(`/transaction/${currentItem.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      if (response.status > 204) {
        return;
      };

      const allTransactions = await loadTransactions();

      setTransactions([...allTransactions]);

    } catch (error) {
      console.log(error.response)
    }

    finally {
      setOpenConfirm(false);
    }
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
              <img
                src={EditIcon}
                alt="edit"
                onClick={() => handleOpenEdit(transact)}
              />
              <img
                src={DeleteIcon}
                alt="delete"
                onClick={() => handleOpenConfirm(transact)}
              />
            </div>
            <Confirm
              open={openConfirm && transact.id === currentItem.id}
              handleClose={() => setOpenConfirm(false)}
              handleConfirm={handleDelete} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Table;
