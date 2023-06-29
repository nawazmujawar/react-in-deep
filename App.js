import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React In Dept by Namaste React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
