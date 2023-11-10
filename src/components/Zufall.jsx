import { LiaDiceThreeSolid } from "react-icons/lia";
import "./Zufall.css";


export default function Zufall() {
  return (
    <div className="zufall-container">
      <h3 className="zufall-header">Quick-Tipps</h3>
      <p className="text">
        Falls Sie Vorschläge für Zahlen per Quick-Tipp generieren möchten,
        stellen wir Ihnen die folgende Auswahlhilfe zur Verfügung. Die
        Gewinnwahrscheinlichkeit ändert sich durch Ihre Auswahl nicht.
      </p>
      <div className="zufall-btn-wrapper">
        <div className="zufall-item">
          <button className="zufall-btn">
              <LiaDiceThreeSolid className="zufall-icon" />
              <span className="zufall-btn-text">Zufall</span>
          </button>
        </div>
      </div>
    </div>
  );
}
