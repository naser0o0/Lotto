import { HiArrowNarrowRight } from "react-icons/hi";
import "./NextBtn.css";

export default function NextBtn({
  handleNextClick,
  selectedBoxes,
  maxSelectedBoxes,
  fillPercentage,
}) {
  const isBtnActive = selectedBoxes.length === maxSelectedBoxes;

  return (
    <>
      <button
        type="button"
        className={`next-btn-inactive next-btn ${
          isBtnActive ? "next-btn-hover" : ""
        }`}
        onClick={handleNextClick}
        disabled={selectedBoxes.length !== maxSelectedBoxes}
      >
        <span
          className="wrapper-text-btn"
          style={{ cursor: isBtnActive ? "pointer" : "" }}
        >
          <span className="next-btn-text">Weiter zum 2. Feld</span>
          <HiArrowNarrowRight className="icon-next" />
          <span
            className={
              isBtnActive
                ? "next-btn-active"
                : "next-btn-inactive next-btn-back"
            }
            style={{ width: `${fillPercentage}%` }} 
          ></span>
        </span>
      </button>
    </>
  );
}
