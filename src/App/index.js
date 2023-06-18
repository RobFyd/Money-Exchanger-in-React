import { useState } from "react";
import { Form } from "./Form";
import { Clock } from "./Clock";
import { curriencies } from "./curriencies";
import { AppBody } from "./styled.js";
import { Header } from "./styled.js";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = curriencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <AppBody>
      <Clock />
      <Header>Money Exchanger</Header>
      <Form result={result} calculateResult={calculateResult} />
    </AppBody>
  );
}

export default App;
