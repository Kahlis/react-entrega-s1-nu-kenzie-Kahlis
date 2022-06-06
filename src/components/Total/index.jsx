import { useEffect, useState } from "react";
import "./style.css";

function Total({ statement }) {
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    setTotal(
      statement.reduce((prev, current) => {
        return current.type === "Entrada"
          ? (prev += parseFloat(current.value))
          : (prev -= parseFloat(current.value));
      }, 0)
    );
  };

  useEffect(() => {
    getTotal();
  });

  return (
    <div className="total-container">
      <div className="left-sided">
        <h3>Valor total: </h3>
        <span>O valor se refere ao saldo</span>
      </div>
      <span className="value">
        R${" "}
        {total
          .toFixed(2)
          .toString()
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </span>
    </div>
  );
}

export default Total;
