import { Form } from "./Form";
import { Clock } from "./Clock";
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
