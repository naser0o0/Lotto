# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- ----------- Beschreibung --------------------  -->
Hier ist eine einfache und klare Beschreibung für jeden Teil des Codes:

1. `import "./LottoFelder.css";`: Importiert die CSS-Datei für das Styling der Komponente.

2. `import { useState } from "react";`: Importiert den `useState`-Hook aus React, der für die Verwaltung von Zuständen verwendet wird.

3. `import { VscTrash } from "react-icons/vsc";`: Importiert das Trash-Icon aus der Bibliothek "React Icons".

4. `const numRows = 7;`: Definiert die Anzahl der Zeilen im Gitter auf 7.

5. `const numCols = 7;`: Definiert die Anzahl der Spalten im Gitter auf 7.

6. `const maxSelectedBoxes = 6;`: Definiert die maximale Anzahl der auswählbaren Kästchen auf 6.

7. `const [selectedBoxes, setSelectedBoxes] = useState(new Set());`: Initialisiert einen Zustand für ausgewählte Kästchen mit einem leeren Set und verwaltet ihn mit `useState`.

8. `const [cursorStyle, setCursorStyle] = useState("pointer");`: Initialisiert einen Zustand für den Cursor-Stil mit "pointer" und verwaltet ihn mit `useState`.

9. `const handleBoxClick = (boxNumber) => { ... }`: Eine Funktion, die aufgerufen wird, wenn auf ein Kästchen geklickt wird. Sie aktualisiert den ausgewählten Zustand und den Cursor-Stil basierend auf den Klicks.

10. `const handleReset = () => { ... }`: Eine Funktion, die aufgerufen wird, wenn der "Zurücksetzen"-Button geklickt wird. Sie setzt den ausgewählten Zustand und den Cursor-Stil zurück.

11. `const boxes = Array.from({ length: numRows * numCols }, (_, i) => { ... }`: Erzeugt eine Liste von Kästchen für das Gitter basierend auf der Anzahl der Zeilen und Spalten.

12. `const rows = Array.from({ length: numRows }, (_, i) => { ... }`: Erzeugt Zeilen für das Gitter, wobei jede Zeile eine Gruppe von Kästchen enthält.

13. Die `return`-Anweisung rendert die Haupt-React-Komponente. Sie verwendet Semantic Elements wie `<section>`, `<div>`, und `<button>` und füllt sie mit den erstellten Zeilen und Kästchen. Der "Löschen"-Button wird gerendert und der "Weiter"-Button wird nur angezeigt, wenn die maximale Anzahl der ausgewählten Kästchen erreicht ist.

Die Kommentare im Code dienen dazu, die verschiedenen Teile zu erklären und ihre Funktionen zu verdeutlichen.