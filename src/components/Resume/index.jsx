import { useEffect, useState } from "react";
import api from "../../services/api";
import { formatToBRL } from "../../utils/formatter";
import { getItem } from "../../utils/storage";
import "./style.css";

function Resume({ transactions }) {

  const [statement, setStatement] = useState({
    inflow: 0,
    outflow: 0,
    balance: 0
  });

  const token = getItem('token');

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
    loadStatement();
  }, [transactions]);

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
