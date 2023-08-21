import React from "react";

function ChiComp(props) {
  return (
    <div>
      <h1>User: {props.item.name}</h1>
      <h1>User: {props.item.email}</h1>
      <h1>User: {props.item.phone}</h1>
    </div>
  );
}

export default ChiComp;
