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
    // const newSelectedBoxes = [...selectedBoxes];: Ein neues Array newSelectedBoxes wird erstellt, 
    // das eine Kopie des aktuellen selectedBoxes-Arrays darstellt. 
    // Dies wird gemacht, um die Unveränderlichkeit zu wahren und Änderungen an einem Klon 
    // des Arrays vorzunehmen.
    const newSelectedBoxes = [...selectedBoxes];
    //  Überprüfung, ob die geklickte Kistennummer bereits im newSelectedBoxes-Array vorhanden ist
    if (newSelectedBoxes.includes(clickedBoxNumber)) {
      // Wenn ja, wird die Kistennummer aus dem Array entfernt (splice wird verwendet, um das Element zu entfernen).
      newSelectedBoxes.splice(newSelectedBoxes.indexOf(clickedBoxNumber), 1);
      // Wenn nein und die Anzahl der ausgewählten Kisten kleiner als maxSelectedBoxes ist, wird die Kistennummer zum Array hinzugefügt.
    } else if (newSelectedBoxes.length < maxSelectedBoxes) {
      //  Das selectedBoxes-State wird mit dem aktualisierten Array newSelectedBoxes aktualisiert.
      newSelectedBoxes.push(clickedBoxNumber);
    }
    setSelectedBoxes(newSelectedBoxes);

    setCursorStyle(
      newSelectedBoxes.length === maxSelectedBoxes ? "no-drop" : "pointer"
    );
  };
  // Dieser Ausdruck berechnet das Verhältnis der Anzahl der ausgewählten Kisten zur maximal zulässigen Anzahl
  // * 100: Multiplikation mit 100 wird durchgeführt, um das Verhältnis in Prozent umzuwandeln.
  const fillPercentage = (selectedBoxes.length / maxSelectedBoxes) * 100;

  const handleReset = () => {
    setSelectedBoxes([]);
    setCursorStyle("pointer");
  };

  const handleRandomSelection = () => {
    const randomBoxes = [];
    // while-Schleife wird verwendet, um zufällige Kisten auszuwählen,
    while (randomBoxes.length < maxSelectedBoxes) {
      // Eine zufällige Kistennummer wird generiert. Math.random() gibt eine zufällige Dezimalzahl zwischen 0 (inklusive) und 1 (ausschließlich) zurück. 
      // Durch Multiplikation mit totalBoxes wird dieser Wert in den Bereich von 0 bis totalBoxes skaliert. 
      // Math.floor rundet dann die Dezimalzahl auf die nächstkleinere ganze Zahl ab, und + 1 wird hinzugefügt,
      // um sicherzustellen, dass die Kistennummer im Bereich von 1 bis totalBoxes liegt.
      const randomBox = Math.floor(Math.random() * totalBoxes) + 1;
      // Überprüfung, ob die generierte Kistennummer bereits in randomBoxes enthalten ist. Wenn nicht, wird die Kistennummer zum Array hinzugefügt.
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
              fillPercentage={fillPercentage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
