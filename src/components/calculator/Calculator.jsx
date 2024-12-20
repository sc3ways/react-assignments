import { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import Display from "./Display";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const isLastCharSign = /[+\=*/]/.test(display.toString().slice(-1));
  const hasNumberBefore = /\d/.test(display);

  const handleNumberClick = (number) => {
    if (number === "=") {
      try {
        const result = evaluate(display);
        setDisplay(result);
      } catch (err) {
        console.error("Error", err);
      }
      return;
    }
    if (!isLastCharSign && display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperatorClick = (operator) => {
    if (isLastCharSign && hasNumberBefore) {
      setDisplay(display, slice(0, -1) + operator);
    } else if (!isLastCharSign && hasNumberBefore) {
      setDisplay(display + operator);
    }
  };
  const handleExtrasClick = (action) => {
    switch (action) {
      case "C":
        {
          setDisplay("");
        }
        break;
      case "%":
        {
          if (isLastCharSign && hasNumberBefore) {
            setDisplay(display, slice(0, -1) + action);
          } else if (!isLastCharSign && hasNumberBefore) {
            setDisplay(display + action);
          }
        }
        break;
      case ">":
        {
          setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
        }
        break;
      case "AC":
        {
          setDisplay("0");
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="calculator-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-12">
            <div className="calculator-body">
              <Display display={display} />
              <ButtonsContainer
                handleNumberClick={handleNumberClick}
                handleOperatorClick={handleOperatorClick}
                handleExtrasClick={handleExtrasClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
