import { formatToBRL } from "../../utils/formatter";
import "./style.css";

function Resume({ statement }) {

  return (
    <div className="container-resume">
      <h1>Resumo</h1>
      <div className="line-resume">
        <span>Entradas</span>
        <span
          className="inflow"
          key={1}
        >{statement.inflow}</span>
      </div>

      <div className="line-resume">
        <span>Saídas</span>
        <span
          className="outflow"
          key={2}
        >{statement.outflow}</span>
      </div>

      <div className="horizontal-line">

      </div>

      <div className="line-resume">
        <h3>Saldo</h3>
        <h3
          className="balance"
          key={3}
        >{statement.balance}</h3>
      </div>

    </div>
  );
}

export default Resume;
