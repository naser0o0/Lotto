import "./DeleteBtn.css";
import { VscTrash } from "react-icons/vsc";
export default function DeleteBtn({ handleClick, selectedBoxes }) {
  return (
    <>
      <button
        className={
          selectedBoxes.length > 0 ? "delete-btn-active" : "delete-btn-inactive"
        }
        onClick={handleClick}
      >
        <span className="wrapper-delete-btn">
          <VscTrash className="trashIcon " />
          <span className="btn-hover">Löschen</span>
        </span>
      </button>
    </>
  );
}
