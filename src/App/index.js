// import { useState } from 'react';
// import './App.css';
// import { Form } from './Form';
// import { curriencies } from './curriencies';

function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = curriencies
            .find(({ short }) => short === currency)
            .rate;

            setResult({
                sourceAmount: +amount,
                targetAmount: amount / rate,
                currency,
            });
    }
}