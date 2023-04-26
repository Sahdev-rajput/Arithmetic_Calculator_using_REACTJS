import React from "react";

function value(props) {
  return (
    <button
      value={props.value}
      style={{
        color:
          props.value === "AC" || props.value === "+/-" || props.value === "%"
            ? "#666699"
            : "black",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor:
          props.value === "/" ||
          props.value === "+" ||
          props.value === "-" ||
          props.value === "=" ||
          props.value === "*"
            ? "Orange"
            : ""
      }}
      className="btn1"
      onClick={(event) => {
        props.changed(event);
        //console.log(event.target.value);
      }}
    >
      {props.value}
    </button>
  );
}

export default value;
