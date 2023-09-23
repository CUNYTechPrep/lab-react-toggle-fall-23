import React from "react";
import ReactDOM from "react-dom/client";
import BoardSwitcher from "./components/BoardSwitcher";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>CTP In-Class Assignment</h1>
    <BoardSwitcher numBoards={20} />
  </React.StrictMode>
);
