import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/message`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h1>React + Node.js Full Stack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
