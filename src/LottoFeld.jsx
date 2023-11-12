import { useState } from "react";
import DeleteBtn from "./components/DeleteBtn";
import NextBtn from "./components/NextBtn";
import Zufall from "./components/Zufall";
import Boxes from "./components/Boxes";
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

  

  return (
    <section className="game-section">
      <div className="main-container">
        <div className="spiel-feld-container">
          <div className="box-wrapper">
            <h3 className="header">
              <span>Ihr Spielfeld</span>
              <span>1 von 12</span>
            </h3>
     
            {/* <div className="number-grid" style={{ border: "solid red" }}> */}
              <Boxes
                totalBoxes={totalBoxes}
                selectedBoxes={selectedBoxes}
                handleBoxClick={handleBoxClick}
                cursorStyle={cursorStyle}
                maxSelectedBoxes={maxSelectedBoxes}
              />
            {/* </div> */}
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
