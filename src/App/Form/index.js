import { useState } from "react";
import { curriencies } from "../curriencies";
import { Result } from "./Result";
import { Label, Title, AmountField, Select, Button, Info } from "./styled.js";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(curriencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>
        <Label>
          <Title>Exchanged amount in Great Britain Pound*</Title>
          <AmountField
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="amount"
            type="number"
            required
            step="0.01"
          />
        </Label>
      </p>
      <p>
        <Label>
          <Title>Chosen currency</Title>
          <Select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
            name="currency"
          >
            {curriencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </Select>
        </Label>
      </p>
      <p>
        <Button>Convert</Button>
      </p>
      <Result result={result} />
      <Info>
        <p>
          Currency rates come from the Western Union website as of April 30,
          2023
        </p>
        <p>*The field with a star symbol must be completed</p>
      </Info>
    </form>
  );
};
