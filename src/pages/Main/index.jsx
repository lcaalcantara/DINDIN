import { useEffect, useState } from "react";
import AddTransactionModal from "../../components/AddTransactionModal";
import EditTransactionModal from "../../components/EditTransactionModal";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import ProfileModal from "../../components/ProfileModal";
import Resume from "../../components/Resume";
import Table from "../../components/Table";
import { loadTransactions } from "../../utils/requests";
import "./style.css";

function Main() {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const [openModalAddTransaction, setOpenModalAddTransaction] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [currentItemEdit, setCurrentItemEdit] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    async function listTransactions() {
      const allTransactions = await loadTransactions();

      if (!filterApplied) {
        setTransactions([...allTransactions]);
      } else {
        setFilterApplied(false);
      }
    };

    listTransactions();
  }, [filterApplied]);

  function updateTransactions(filteredTransactions) {
    setTransactions(filteredTransactions);
  }

  return (
    <div className="container-main">
      <Header
        handleEditProfile={() => setOpenModalProfile(true)}
      />

      <section>
        <div className="width-limit">
          <div className="container-data">
            <div className="container-left">
              <Filter
                transactions={transactions}
                updateTransactions={updateTransactions}
              />
              <Table
                transactions={transactions}
                setTransactions={setTransactions}
                setOpenModalEdit={setOpenModalEdit}
                setCurrentItemEdit={setCurrentItemEdit}
              />
            </div>
            <div className="container-right">
              <Resume
                transactions={transactions}
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
        setTransactions={setTransactions}
      />

      <EditTransactionModal
        open={openModalEdit}
        setTransactions={setTransactions}
        handleClose={() => setOpenModalEdit(false)}
        currentItemEdit={currentItemEdit}
      />

      <ProfileModal
        open={openModalProfile}
        handleClose={() => setOpenModalProfile(false)}
      />
    </div>
  );
}

export default Main;
