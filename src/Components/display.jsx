import React from "react";

function display(props) {
  return (
    <div className="display">
      <h1>
        {props.value1}
        {props.opera}
        {props.value2}
      </h1>
      <h1 style={{ textAlign: "right" }}>{props.ans}</h1>
    </div>
  );
}
export default display;
