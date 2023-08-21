import React from "react";
import { Table } from "react-bootstrap";

function ArrayList() {
  const students = ["Shubham", "Arpita", "Priyanki", "Adrija"];
  const employee = [
    {
      name: "Shubham",
      email: "shubham.bhowmick",
      phone: 7684906341,
    },
    {
      name: "Priyanki",
      email: "priyanki.das",
      phone: 9078025179,
    },
  ];
  return (
    <div>
      <h1>Array of List</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <b>Name</b>
            </td>
            <td>EMail</td>
            <td>Phone</td>
          </tr>

          {employee.map((item) =>
            item.name == "Shubham" ? (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ArrayList;

const students = ["Shubham", "Arpita", "Priyanki", "Adrija"];
