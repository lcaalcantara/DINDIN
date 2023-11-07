import "./style.css";
import Header from "../../components/Header";
import Table from "../../components/Table";
import Resume from "../../components/Resume";
import ProfileModal from "../../components/ProfileModal";
import { useState } from "react";
import AddTransactionModal from "../../components/AddTransactionModal";
import Filter from "../../components/Filter";

function Main() {
  const [openModalProfile, setOpenModalProfile] = useState(false)
  const [openModalAddTransaction, setOpenModalAddTransaction] = useState(false)

  return (
    <div className="container-main">
      <Header
        handleEditProfile={() => setOpenModalProfile(true)}
      />

      <section>
        <div className="width-limit">
          <Filter />
          <div className="container-data">
            <Table />
            <div className="container-right">
              <Resume />
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
