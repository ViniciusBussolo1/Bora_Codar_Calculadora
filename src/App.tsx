import { useState } from "react";
import "./global.scss";

export default function App() {
  const [number, setNumber] = useState("0");
  const [result, setResult] = useState("0");

  function handleNumber(num: any) {
    if (number.includes(",") && num === ",") return;
    if (number === "0") {
      setNumber(num);
    } else {
      setNumber(`${number}${num}`);
    }
  }

  function handlePercent() {
    const numberPercent = parseFloat(number);
    setResult((numberPercent / 100).toString());
    setNumber("0");
  }

  function handleChangeSign() {
    const num = parseFloat(number);

    if (number > "0") {
      const numberNegative = num * -1;
      setNumber(numberNegative.toString());
    } else {
      const numberPositive = Math.abs(num);
      setNumber(numberPositive.toString());
    }
  }

  function handleOperations(operation: string) {
    if (number.slice(-1) !== ".") {
      setNumber(`${number}${operation}`);
    }
  }

  function handelResult() {
    setResult(eval(number).toString());
  }

  function handleClear() {
    setNumber("0");
    setResult("0");
  }

  function handleDeleteNumber() {
    setNumber(number.substring(0, number.length - 1));
  }

  return (
    <div className="container_main">
      <div className="container_calculadora">
        <div className="container_calculo">
          <span>{number}</span>
          <div className="div_result">
            <span className="equals">
              <img src="../src/assets/Equals.png" alt="" />
            </span>
            <span className="result">{result}</span>
          </div>
        </div>
        <div className="container_buttons">
          <button className="clean" onClick={handleClear}>
            AC
          </button>
          <button onClick={handleDeleteNumber}>C</button>
          <button onClick={handlePercent}>
            <img src="../src/assets/Percent.png" alt="" />
          </button>
          <button
            className="button_operations"
            onClick={() => handleOperations(" / ")}
          >
            <img src="../src/assets/Divide.png" alt="" />
          </button>
          <button onClick={() => handleNumber("7")}>7</button>
          <button onClick={() => handleNumber("8")}>8</button>
          <button onClick={() => handleNumber("9")}>9</button>
          <button
            className="button_operations"
            onClick={() => handleOperations(" * ")}
          >
            <img src="../src/assets/X.png" alt="" />
          </button>
          <button onClick={() => handleNumber("4")}>4</button>
          <button onClick={() => handleNumber("5")}>5</button>
          <button onClick={() => handleNumber("6")}>6</button>
          <button
            className="button_operations"
            onClick={() => handleOperations(" - ")}
          >
            <img src="../src/assets/Minus.png" alt="" />
          </button>
          <button onClick={() => handleNumber("1")}>1</button>
          <button onClick={() => handleNumber("2")}>2</button>
          <button onClick={() => handleNumber("3")}>3</button>
          <button
            className="button_operations"
            onClick={() => handleOperations(" + ")}
          >
            <img src="../src/assets/Plus.png" alt="" />
          </button>
          <button onClick={handleChangeSign}>
            <img src="../src/assets/PlusMinus.png" alt="" />
          </button>
          <button onClick={() => handleNumber("0")}>0</button>
          <button onClick={() => handleNumber(".")}>.</button>
          <button className="button_equals" onClick={handelResult}>
            <img src="../src/assets/ButtonEquals.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
