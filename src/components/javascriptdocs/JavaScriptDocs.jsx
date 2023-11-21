import React from "react";
import "./JavaScriptDocs.css";
import { useState } from "react"; // Hook

const JavaScriptDocs = () => {
  const [result, setResult] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResult({
      ...result,
      [name]: value,
    });
  };

  const handleData = (e) => {
    e.preventDefault();
    console.log(result);
  };

  return (
    <div>
      <div className="java container">
        <div className="java_wrapper">
          <form action="" onSubmit={handleData}>
            <input type="email" name="email" onChange={handleInputChange} />
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          <div style={{ background: "white", padding: "8px 200px" }}>
            <h1>Email: {result.email}</h1>
            <h1>Password: {result.password}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptDocs;
