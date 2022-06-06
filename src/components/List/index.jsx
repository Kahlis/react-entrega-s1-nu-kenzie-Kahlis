import "./style.css";
import { useState } from "react";
import Card from "./Card";

function List({ statement, setStatement }) {
  const [selected, setSelected] = useState(0);
  const types = {
    0: "Todos",
    1: "Entrada",
    2: "Despesa",
  };

  return statement.length > 0 ? (
    <div className="main-container">
      <div className="list-header">
        <h2>Resumo Financeiro</h2>
        <div className="buttons">
          <button
            className={selected === 0 ? "selected" : ""}
            onClick={() => {
              setSelected(0);
            }}
          >
            Todos
          </button>
          <button
            className={selected === 1 ? "selected" : ""}
            onClick={() => {
              setSelected(1);
            }}
          >
            Entradas
          </button>
          <button
            className={selected === 2 ? "selected" : ""}
            onClick={() => {
              setSelected(2);
            }}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul className="cards-container">
        {statement.map((element, index) => {
          if (element.type === types[selected] || selected === 0) {
            return (
              <Card
                description={element.description}
                setStatement={setStatement}
                statement={statement}
                value={element.value}
                type={element.type}
                uniqueKey={index}
                key={index}
              />
            );
          } else {
            return "";
          }
        })}
      </ul>
    </div>
  ) : (
    <div className="main-container">
      <div className="list-header">
        <h2>Resumo Financeiro</h2>
        <div className="buttons">
          <button
            className={selected === 0 ? "selected" : ""}
            onClick={() => {
              setSelected(0);
            }}
          >
            Todos
          </button>
          <button
            className={selected === 1 ? "selected" : ""}
            onClick={() => {
              setSelected(1);
            }}
          >
            Entradas
          </button>
          <button
            className={selected === 2 ? "selected" : ""}
            onClick={() => {
              setSelected(2);
            }}
          >
            Despesas
          </button>
        </div>
      </div>
      <span className="noTransactions">
        Você ainda não possui nenhum lançamento
      </span>
    </div>
  );
}

export default List;
