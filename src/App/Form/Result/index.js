import "./style.css";


export const Result = ({ result }) => (
    <div className="result__container">
        <p className="form__result">Result:{" "}
            {result !== undefined && (
                <>
                    <span>
                        {result.sourceAmount.toFixed(2)}&nbsp;GBP&nbsp;=
                        {" "}
                        <strong>
                            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                        </strong>
                    </span>
                </>
            )}
        </p>
    </div>
);

