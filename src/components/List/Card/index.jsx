import trash from "./trash.svg";

function Card({
  description,
  type,
  value,
  uniqueKey,
  statement,
  setStatement,
}) {
  const deleteValue = () => {
    let statementFilter = [...statement];
    statementFilter.splice(uniqueKey, 1);
    setStatement(statementFilter);
  };
  return (
    <li>
      <div
        className={type === "Entrada" ? "left-indicator" : "left-indicator out"}
      ></div>
      <div className="section-info">
        <h3>{description}</h3>
        <span>{type}</span>
      </div>
      <span className="transaction-value">
        R${" "}
        {parseFloat(value)
          .toFixed(2)
          .toString()
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </span>
      <button
        id="trash"
        onClick={() => {
          deleteValue(uniqueKey);
        }}
      >
        <img src={trash} alt={"Ícone de lixeira"} />
      </button>
    </li>
  );
}

export default Card;
