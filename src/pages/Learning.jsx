import React from "react";

const Learning = () => {
  //   const handleColor = () => {
  //     const getBox = document.getElementById("box");
  //     getBox.style.backgroundColor = "green";
  //     getBox.innerHTML = "Change the color";
  //     getBox.style.borderRadius = "50%";
  //     getBox.style.display = "flex";
  //     getBox.style.justifyContent = "center";
  //     getBox.style.alignItems = "center";
  //     getBox.style.color = "white";
  //   };

  const handleFlag = () => {};
  return (
    <div>
      {/* <div
        id="box"
        style={{ width: "400px", height: "400px", backgroundColor: "red" }}
      ></div>
      <button onClick={handleColor} id="btn" style={{ marginTop: "20px" }}>
        Change Color
      </button> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          height: "300px",
          backgroundColor: "green",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Learning;
