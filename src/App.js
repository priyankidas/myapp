import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Props1 from "./Props1";
import SetState1 from "./Components/SetState1";
import Counter from "./Components/Counter";
import HoverText from "./Components/HoverText";
import EventBind from "./Components/EventBind";
import Operator from "./Components/Ifelse";
import VariableOperator from "./Components/VariableOperator";

import UseState1 from "./Components/UseState1";
import InputBox from "./Components/InputBox";
import ArrayList from "./Components/ArrayList";
import ListComponent from "./Components/ListComponent";

import Linking from "./Router/Linking";
import C1 from "./Router/C1";
import C2 from "./Router/C2";
import C3 from "./Router/C3";

function App() {
  return (
    <div className="App">
      {/* <UseState1 />
      <InputBox /> */}

      {/* <VariableOperator />
      <Operator />
      <EventBind />
      <Counter />
      <HoverText />
      <SetState1></SetState1>
      <h1>Hello World</h1>
      <Greet></Greet>
      <Welcome name="Bruce" heroName="Padman">
        <p>This is children prop</p>
      </Welcome>
      <Welcome name="John" heroName="Superman"></Welcome>
      <button>ClickMe</button>
      <Welcome name="Benny" heroName="Spiderman"></Welcome>
      <Props1 name="Bruce" heroName="Batman">
        <p>This is children prop</p>
      </Props1>
      <Props1 name="John" heroName="Superman">
        <button>Action</button>
      </Props1>
      <Props1 name="Benny" heroName="Spiderman"></Props1> */}
      {/* <ArrayList /> */}
      <Linking></Linking>
      
    </div>
  );
}

export default App;
