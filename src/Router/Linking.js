import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Linking() {
  return (
    <div>
      {/* <h1>Routing Example</h1> */}
      <BrowserRouter>
        <Link to={"/home"}>Home Page</Link>
        <br></br>
        <Link to={"/about"}>About Page</Link>
        <Route path="home">
          <Home />
        </Route>
        <Route path="about">
          <About />
        </Route>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is Home Page Website</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is About Page Website</p>
    </div>
  );
}

export default Linking;
