import Header from "../../components/Header";
import Table from "../../components/Table";
import Resume from "../../components/Resume";
import Filter from "../../components/Filter";
import AddTransactionModal from "../../components/AddTransactionModal";
import ProfileModal from "../../components/ProfileModal";
import { useEffect, useState } from "react";
import "./style.css";
import api from '../../services/api';
import { getItem } from "../../utils/storage";
import { formatToBRL } from "../../utils/formatter";

function Main() {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const [openModalAddTransaction, setOpenModalAddTransaction] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [statement, setStatement] = useState([{
    inflow: 0,
    outflow: 0,
    balance: 0
  }]);

  const token = getItem('token')

  async function loadTransactions() {
    try {
      const response = await api.get('/transaction', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setTransactions([...response.data]);
    } catch (error) {
      console.log(error.response);
    }
  }

  async function loadStatement() {
    try {
      const response = await api.get('/transaction/statement', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const { entrada, saida } = response.data

      setStatement({
        inflow: formatToBRL(entrada),
        outflow: formatToBRL(saida),
        balance: formatToBRL(entrada - saida)
      });

    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    loadTransactions()
    loadStatement()
  }, [])

  return (
    <div className="container-main">
      <Header
        handleEditProfile={() => setOpenModalProfile(true)}
      />

      <section>
        <div className="width-limit">
          <div className="container-data">
            <div className="container-left">
              <Filter />
              <Table
                transactions={transactions}
              />
            </div>
            <div className="container-right">
              <Resume
                statement={statement}
              />
              <button
                className="btn-purple btn-s"
                onClick={() => setOpenModalAddTransaction(true)}
              >
                Adicionar Registro
              </button>
            </div>
          </div>
        </div>
      </section>

      <AddTransactionModal
        open={openModalAddTransaction}
        handleClose={() => setOpenModalAddTransaction(false)}
      />

      <ProfileModal
        open={openModalProfile}
        handleClose={() => setOpenModalProfile(false)}
      />
    </div>
  );
}

export default Main;
