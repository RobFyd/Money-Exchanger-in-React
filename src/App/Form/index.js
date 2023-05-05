import { useState } from "react";
import { curriencies } from "../curriencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(curriencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">Money Exchanger</h1>
            <p>
                <label className="form__label">
                    <span className="form__labelText">
                        Great Britain Pound*
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="amount"
                        className="form__field"
                        type="number"
                        required
                        step="0.01"
                        autoFocus
                    />
                </label>
            </p>
            <p>
                <label className="form__label">
                    <span className="form__labelText">
                        Currency
                    </span>
                    <select
                        className="form__currency"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        name="currency"
                    >
                        {curriencies.map((currency = (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Convert</button>
            </p>
            <Result result={result} />
            <div className="form__info">
                <p>Currency rates come from the Western Union website as of April 30, 2023</p>
                <p>*The field with a star (*) symbol must be completed</p>
            </div>
        </form>
    )
}