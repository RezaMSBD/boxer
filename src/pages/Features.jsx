import React from "react";

const Features = () => {
  const x = 20;
  const y = 10;
  const add = x + y;
  const substruction = x - y;

  function functionName() {} //normal JS function
  const functionName1 = () => {}; // JS arrow function

  return (
    <div>
      <div style={{ backgroundColor: "red" }}>{x}</div>
      <div>{y}</div>
      <div style={{ fontFamily: "san-sarif" }}>
        This is the <span style={{ fontSize: "50px" }}>result</span> = {add}
      </div>
      <div>{substruction}</div>
    </div>
  );
};

export default Features;
