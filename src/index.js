import React from "react";
import ReactDOM from "react-dom/client";
import BoardSwitcher from "./components/BoardSwitcher";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const totalBoards = 5;
root.render(
  <React.StrictMode>
    <BoardSwitcher numBoards={totalBoards} />
  </React.StrictMode>
);
