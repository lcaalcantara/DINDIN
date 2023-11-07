import "./style.css";

function Resume() {
  return (
    <div className="container-resume">
      <h1>Resumo</h1>
      <div className="line-resume">
        <span>Entradas</span>
        <span className="inflow">1500</span>
      </div>

      <div className="line-resume">
        <span>Saídas</span>
        <span className="outflow">800</span>
      </div>

      <div className="horizontal-line">

      </div>

      <div className="line-resume">
        <h3>Saldo</h3>
        <h3 className="balance">700</h3>
      </div>

    </div>
  );
}

export default Resume;
