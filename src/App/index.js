// import { useState } from "react";
import { Form } from "./Form";
import { Clock } from "./Clock";
// import { curriencies } from "./curriencies";
import { AppBody } from "./styled.js";
import { Header } from "./styled.js";

function App() {
  return (
    <AppBody>
      <Clock />
      <Header>Money Exchanger</Header>
      <Form />
    </AppBody>
  );
}

export default App;
