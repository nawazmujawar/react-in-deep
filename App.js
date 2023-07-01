import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Hello</h1>;
};

const Heading = () => {
  return (
    <div>
      <Title />
      <p>World</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
