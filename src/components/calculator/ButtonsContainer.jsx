const ButtonsContainer = ({
  handleNumberClick,
  handleOperatorClick,
  handleExtrasClick,
}) => {
  return (
    <>
      <div className="calcuator-buttons">
        <div className="extra-btns-row">
          <div className="extra-btns-group">
            {[">", "(", ")", "AC"].map((extra) => (
              <span
                key={extra}
                className="spExtra"
                onClick={() => handleExtrasClick(extra)}
              >
                {extra}
              </span>
            ))}
            {/* <span className="sy_backspace">{">"}</span>
            <span className="sy_parentheses_open">(</span>
            <span className="sy_parentheses_close">)</span>
            <span className="sy_clear">AC</span> */}
          </div>
        </div>
        <div className="number-btns-row">
          <div className="number-btns-group">
            {[..."7894561230.="].map((number) => (
              <span
                key={number}
                className="numText"
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </span>
            ))}
            {/* <span>9</span>
            <span>8</span>
            <span>7</span>
            <span>6</span>
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
            <span>0</span>
            <span>.</span>
            <span className="btn-equal">=</span> */}
          </div>
          <div className="operator-btns-group">
            {["+", "-", "*", "/"].map((sign) => (
              <span
                key={sign}
                className="operator"
                onClick={() => handleOperatorClick(sign)}
              >
                {sign}
              </span>
            ))}
            {/* <span className="sy_mais">+</span>
            <span className="sy_menos">-</span>
            <span className="sy_vezes">*</span>
            <span className="sy_divisao">/</span> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ButtonsContainer;
