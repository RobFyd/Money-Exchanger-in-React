import { useState } from "react";
import { Result } from "./Result";
import {
  Label,
  Title,
  AmountField,
  Select,
  Button,
  Info,
  Loading,
  Error,
} from "./styled.js";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [currency, setCurrency] = useState("PLN");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {ratesData.status === "running" ? (
        <Loading>
          Wait a second... <br /> Loding in progress...
        </Loading>
      ) : ratesData.status === "error" ? (
        <Error>
          TRY <br /> <br /> TRY
        </Error>
      ) : (
        <>
          <p>
            <Label>
              <Title>Exchanged amount in Great Britain Pound*</Title>
              <AmountField
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="amount"
                type="number"
                required
                step="0.1"
              />
            </Label>
          </p>
          <p>
            <Label>
              <Title>Chosen currency</Title>
              <Select
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
                name="currency"
              >
                {!!ratesData.rates &&
                  Object.keys(ratesData.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
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
        </>
      )}
    </form>
  );
};
