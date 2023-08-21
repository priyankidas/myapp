import React, { useState } from "react";

function UseState1() {
  const [data, setData] = useState("Priyanki");
  function ChangeName() {
    setData("Shubham");
  }
  return (
    <div>
      <h1>{data}</h1>

      <button onClick={ChangeName}>ClickMe</button>
    </div>
  );
}

export default UseState1;
