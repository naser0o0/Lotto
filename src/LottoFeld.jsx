import { useState } from "react";
import DeleteBtn from "./components/DeleteBtn";
import NextBtn from "./components/NextBtn";
import Zufall from "./components/Zufall";
import "./lottoFeld.css";

const numRows = 7;
const numCols = 7;
const maxSelectedBoxes = 6;
const totalBoxes = numRows * numCols;

export default function LottoFeld() {
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const [cursorStyle, setCursorStyle] = useState("pointer");

  const handleBoxClick = (clickedBoxNumber) => {
    const newSelectedBoxes = [...selectedBoxes];

    if (newSelectedBoxes.includes(clickedBoxNumber)) {
      newSelectedBoxes.splice(newSelectedBoxes.indexOf(clickedBoxNumber), 1);
    } else if (newSelectedBoxes.length < maxSelectedBoxes) {
      newSelectedBoxes.push(clickedBoxNumber);
    }

    setSelectedBoxes(newSelectedBoxes);
    setCursorStyle(
      newSelectedBoxes.length === maxSelectedBoxes ? "no-drop" : "pointer"
    );
  };

  const handleReset = () => {
    setSelectedBoxes([]);
    setCursorStyle("pointer");
  };

    const handleRandomSelection = () => {
      const randomBoxes = [];

      while (randomBoxes.length < maxSelectedBoxes) {
        const randomBox = Math.floor(Math.random() * totalBoxes) + 1;

        if (!randomBoxes.includes(randomBox)) {
          randomBoxes.push(randomBox);
        }
      }

      setSelectedBoxes(randomBoxes);
      setCursorStyle("no-drop");
    };

  const boxes = Array.from({ length: totalBoxes }, (_, i) => {
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
            <Zufall handleRandomSelection={handleRandomSelection} />
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
