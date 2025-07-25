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
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    try {
      const rate = ratesData.data[currency].value;
      setResult({
        sourceAmount: +amount,
        targetAmount: +amount * rate,
        currency,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {ratesData.state === "running" ? (
        <>
          <Loading>
            <p>Wait a second...</p>
            <p>Loading in progress...</p>
          </Loading>
          <Loader>
            <div className="load_0">
              <div className="load_1"></div>
              <div className="load_2"></div>
            </div>
          </Loader>
        </>
      ) : ratesData.state === "error" ? (
        <Error>
          <div className="icon">❌</div>
          <p>Oops... something went wrong</p>
          <p>Please check your internet connection, or try again later :)</p>
        </Error>
      ) : (
        <>
          <p>
            <Label>
              <Title>Amount in British Pounds*</Title>
              <AmountField
                name="amount"
                as="input"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="amount"
                type="number"
                required
                step="0.1"
                min={0}
              />
            </Label>
          </p>
          <p>
            <Label>
              <Title>Chosen currency</Title>
              <Select
                name="currency"
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {!!ratesData.data &&
                  Object.keys(ratesData.data).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                ;
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
              Exchange rates come from <b>currencyapi.com</b> which offers free
              currency exchange and historical foreign exchanges rates.
            </p>
          </Info>
        </>
      )}
    </form>
  );
};
