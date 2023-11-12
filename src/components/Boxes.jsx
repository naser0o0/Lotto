import "./Boxes.css";
// BoxGrid.js


export default function Boxes({
  totalBoxes,
  selectedBoxes,
  handleBoxClick,
  cursorStyle,
  maxSelectedBoxes,
}) {
  return (
    <div className="grid-container" style={{ cursor: cursorStyle }}>
      {Array.from({ length: totalBoxes }, (_, i) => {
        const boxNumber = i + 1;
        //     const boxes = [...Array(totalBoxes)].map((_, i) => {
        //   const boxNumber = i + 1;

        //---- .includes() Methode gibt einen Booleschen Wert zurück -----
        const isSelected = selectedBoxes.includes(boxNumber);

        return (
          <div
            key={boxNumber}
            className={`box ${isSelected ? "selected" : ""}`}
            onClick={() => handleBoxClick(boxNumber)}
            style={{ cursor: cursorStyle }}
          >
            {isSelected ? (
              <img
                src="./public/icon-cross.svg"
                alt="cross"
                className={isSelected ? "icon-cross" : "icon-cross-inactive"}
                style={{ color: "#fffff", cursor: "pointer" }}
              />
            ) : (
              <span
                style={{
                  animation:
                    selectedBoxes.length <= maxSelectedBoxes
                      ? "number-inactive 0.3s"
                      : "none",
                }}
                className={
                  selectedBoxes.length === maxSelectedBoxes
                    ? "low-opacity-active"
                    : "low-opacity-inactive number-inactive"
                }
              >
                {boxNumber}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
