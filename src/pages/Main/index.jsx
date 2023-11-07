import "./style.css";
import Header from "../../components/Header";
import Table from "../../components/Table";

function Main() {
  return (
    <div className="container-main">
      <Header />

      <section>
        <Table />
      </section>
    </div>
  );
}

export default Main;
