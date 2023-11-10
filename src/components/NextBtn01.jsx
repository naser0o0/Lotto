import { HiArrowNarrowRight } from "react-icons/hi";
import "./NextBtn.css";

export default function NextBtn({
  handleNextClick,
  selectedBoxes,
  maxSelectedBoxes,
}) {
  const isBtnActive = selectedBoxes.size === maxSelectedBoxes;

  return (
    <>
      <button
        type="button"
        className={`next-btn-inactive next-btn ${
          isBtnActive ? "next-btn-hover" : ""
        }`}
        onClick={handleNextClick}
        disabled={selectedBoxes.size !== maxSelectedBoxes}
      >
        <span
          className="wrapper-next-btn"
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
          ></span>
        </span>
      </button>
    </>
  );
}
