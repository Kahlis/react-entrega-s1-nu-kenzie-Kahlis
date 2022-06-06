import { useState } from "react";
import "./style.css";
function Form({ statement, setStatement }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("Entrada");

  const add = (event) => {
    if (description !== "" && value !== 0) {
      event.preventDefault();
      const newStatement = {
        value: value,
        description: description,
        type: type,
      };

      setStatement([...statement, newStatement]);
    }
  };

  return (
    <form className="newValue">
      <label>Descrição:</label>
      <input
        type={"text"}
        placeholder={"Digite aqui sua descrição..."}
        id={"description"}
        maxLength={23}
        onChange={(event) => {
          setDescription(event.currentTarget.value);
        }}
        required
      ></input>
      <label className="example">Ex: compra de roupas</label>
      <div className="half-sized">
        <div className="half">
          <label>Valor</label>
          <input
            type={"number"}
            placeholder={"1"}
            step={0.01}
            id={"value"}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
            required
          ></input>
        </div>
        <div className="half">
          <label>Tipo de valor</label>
          <select
            onChange={(event) => {
              setType(event.currentTarget.value);
            }}
          >
            <option value={"Entrada"}>Entrada</option>
            <option value={"Despesa"}>Despesa</option>
          </select>
        </div>
      </div>
      <button className="submitValue" onClick={add}>
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
