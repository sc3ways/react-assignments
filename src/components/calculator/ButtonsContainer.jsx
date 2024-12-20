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
            {[">", "AC", "C", "%"].map((extra) => (
              <span
                key={extra}
                className="spExtra"
                onClick={() => handleExtrasClick(extra)}
              >
                {extra}
              </span>
            ))}
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
          </div>
        </div>
      </div>
    </>
  );
};
export default ButtonsContainer;
