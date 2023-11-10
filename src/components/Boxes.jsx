import "../LottoFelder.css";


export default function Boxes({
  totalBoxes, selectedBoxes, maxSelectedBoxes, cursorStyle, handleBoxClick, newSelectedBoxes
  totalBoxes,
  handleBoxClick,
  handleReset,
  setSelectedBoxes,
  selectedBoxes,
}) {
  const boxes = Array.from({ length: totalBoxes }, (_, i) => {
    const boxNumber = i + 1;
    //---- .has() mehtode return bolien -----
    const isSelected = selectedBoxes.has(boxNumber);

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
            className="icon-cross"
            style={{ background: "#ffffff" }}
          />
        ) : (
          { boxNumber }
        )}
      </div>
    );
  });

  return <>{boxes}</>;
}
