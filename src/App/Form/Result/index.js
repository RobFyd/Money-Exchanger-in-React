import "./style.css";


export const Result = ({ result }) => (
    <div className="result__container">
        <p className="form__result">
            {result !== undefined && (
                <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;= {" "}

                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
                </>
            )}
        </p>
    </div>
);

