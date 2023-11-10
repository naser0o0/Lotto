import { useState } from "react";
import DeleteBtn from "./components/DeleteBtn01";
import NextBtn from "./components/NextBtn01";
import Zufall from "./components/Zufall";
import "./lottoFeld.css";

const numRows = 7;
const numCols = 7;
const maxSelectedBoxes = 6;
const totalBoxes = numRows * numCols;

export default function LottoFeld() {
  const [selectedBoxes, setSelectedBoxes] = useState(new Set());
  const [cursorStyle, setCursorStyle] = useState("pointer");

  const handleBoxClick = (clickedBoxNumber) => {
    const newSelectedBoxes = new Set(selectedBoxes);

    if (newSelectedBoxes.has(clickedBoxNumber)) {
      newSelectedBoxes.delete(clickedBoxNumber);
    } else if (newSelectedBoxes.size < maxSelectedBoxes) {
      newSelectedBoxes.add(clickedBoxNumber);
    }

    setSelectedBoxes(newSelectedBoxes);
    setCursorStyle(
      newSelectedBoxes.size === maxSelectedBoxes ? "no-drop" : "pointer"
    );
  };

  const handleReset = () => {
    setSelectedBoxes(new Set());
    setCursorStyle("pointer");
  };

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
            className={isSelected ? "icon-cross" : "icon-cross-inactive"}
            style={{ color: "#fffff", cursor: "pointer" }}
          />
        ) : (
          <span
            style={{
              animation:
                selectedBoxes.size <= maxSelectedBoxes
                  ? "number-inactive 0.3s"
                  : "none",
            }}
            className={
              selectedBoxes.size === maxSelectedBoxes
                ? "low-opacity-active"
                : "low-opacity-inactive number-inactive"
            }
          >
            {boxNumber}
          </span>
        )}
      </div>
    );
  });

  return (
    <section className="game-section">
      <div className="main-container">
        <div className="spiel-feld-container">
          <div className="box-wrapper">
            <h3 className="header">
              <span>Ihr Spielfeld</span>
              <span>1 von 12</span>
            </h3>

            <div className="number-grid" style={{ cursor: cursorStyle }}>
              {boxes}
            </div>
            <div className="delete-btn-container">
              <DeleteBtn
                handleClick={handleReset}
                selectedBoxes={selectedBoxes}
              />
            </div>
          </div>
        </div>
        <div className="nex-btn-feld">
          <div className="zufall">
            <Zufall />
          </div>
          <div className="nextBtn">
            <NextBtn
              handleNextClick={handleReset}
              selectedBoxes={selectedBoxes}
              maxSelectedBoxes={maxSelectedBoxes}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
