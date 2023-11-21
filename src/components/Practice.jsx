import React, { useState } from "react";
import "./JavaScriptDocs.css";

const JavaScriptDocs = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [selectedOperation, setSelectedOperation] = useState("+"); // Default to addition

  const handleFirstNumberChange = (e) => {
    setFirstNumber(parseInt(e.target.value) || 0);
  };

  const handleSecondNumberChange = (e) => {
    setSecondNumber(parseInt(e.target.value) || 0);
  };

  const calculateResult = () => {
    switch (selectedOperation) {
      case "+":
        setResult(firstNumber + secondNumber);
        break;
      case "-":
        setResult(firstNumber - secondNumber);
        break;
      case "*":
        setResult(firstNumber * secondNumber);
        break;
      case "/":
        setResult(
          secondNumber !== 0
            ? firstNumber / secondNumber
            : "Cannot divide by zero"
        );
        break;
      default:
        setResult("Invalid operation");
        break;
    }
  };

  return (
    <div className="java container">
      <div className="java_wrapper">
        <input
          type="number"
          placeholder="number 1"
          onChange={handleFirstNumberChange}
          value={firstNumber}
        />
        <input
          type="number"
          placeholder="number 2"
          onChange={handleSecondNumberChange}
          value={secondNumber}
        />

        <select onChange={(e) => setSelectedOperation(e.target.value)}>
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>

        <input type="number" placeholder="result" value={result} />
        <button onClick={calculateResult}>Submit</button>
      </div>
    </div>
  );
};

export default JavaScriptDocs;




import React from "react";
import "./JavaScriptDocs.css";
import { useState } from "react";

const JavaScriptDocs = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleFirstNumber = (e) => {
    setFirstNumber(parseInt(e.target.value) || 0);
  };

  const handleSecondNumber = (e) => {
    setSecondNumber(parseInt(e.target.value) || 0);
  };
  const calculateResult = () => {
    setResult(firstNumber + secondNumber);
  };

  return (
    <div>
      <div className="java container">
        <div className="java_wrapper">
          <input
            type="number"
            value={firstNumber}
            onChange={handleFirstNumber}
          />
          <input
            type="number"
            value={secondNumber}
            onChange={handleSecondNumber}
          />
          <input type="number" value={result} />
          <button type="submit" onClick={calculateResult}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptDocs;
