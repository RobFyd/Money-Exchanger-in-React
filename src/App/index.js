import { useState } from 'react';
import { Form } from './Form';
import { Clock } from './Clock';
import { curriencies } from './curriencies';
import './App.css';

function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = curriencies
            .find(({ short }) => short === currency)
            .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    return (
        <div className="app">
            <Clock />
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </div>
    );
}

export default App;