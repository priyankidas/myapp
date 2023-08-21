import React from "react";
import ChiComp from "./ChiComp";

function ListComponent() {
  const students = [
    {
      name: "Shubham",
      email: "shubham.bhowmick@test.com",
      phone: 7684906341,
    },
    {
      name: "Priyanki",
      email: "priyanki.das@test.com",
      phone: 9078025179,
    },
    {
      name: "Shayeri",
      email: "shayeri@test.com",
      phone: 9078025179,
    },
  ];
  return (
    <div>
      <h1>This is Array of Objects</h1>
      {students.map((data, i) =>
        data.phone == 9078025179 ? (
          <h1>
            {" "}
            <ChiComp item={data} />
          </h1>
        ) : null
      )}
    </div>
  );
}

export default ListComponent;
