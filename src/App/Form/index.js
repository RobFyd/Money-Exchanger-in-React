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
  Loader,
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
      targetAmount: +amount * rate,
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
        <>
          <Loading>
            <p>Wait a second...</p>
            <p>Loading in progress...</p>
          </Loading>
          <Loader>
            <div className="load">
              <div className="a"></div>
              <div className="b"></div>
            </div>
          </Loader>
        </>
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
            <p>*The field with a star symbol must be completed</p>
            <p>
              Exchange rates come from <b>exchangerate.host</b> which offers
              free currency exchange, cryptocurrency rates and EU VAT rates API
            </p>
          </Info>
        </>
      )}
    </form>
  );
};
