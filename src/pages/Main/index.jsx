import "./style.css";
import Header from "../../components/Header";
import Table from "../../components/Table";
import Resume from "../../components/Resume";

function Main() {
  return (
    <div className="container-main">
      <Header />

      <section>
        <div className="width-limit">
          <button>Filtros</button>
          <div className="container-data">
            <Table />
            <div className="container-right">
              <Resume />
              <button className="btn-purple btn-s">Adicionar Registro</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
