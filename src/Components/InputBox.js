import React, { useState } from "react";

function InputBox() {
  const [data, setData] = useState(0);
  const [print, setPrint] = useState(false);
  function changeName(val) {
    setData(val.target.value);
  }
  function PrintData() {
    setPrint(true);
  }
  return (
    <div>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={changeName}></input>
      <button
        onClick={() => {
          PrintData();
        }}
      >
        Click on Shubham
      </button>
    </div>
  );
}

export default InputBox;
