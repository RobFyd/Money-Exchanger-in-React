import { ResultContainer, Outcome } from "./styled.js";

export const Result = ({ result }) => (
  <ResultContainer>
    <Outcome>
      Result:{" "}
      {result !== undefined && (
        <>
          <span>
            {result.sourceAmount.toFixed(2)}&nbsp;GBP&nbsp;={" "}
            <strong>
              {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
          </span>
        </>
      )}
    </Outcome>
  </ResultContainer>
);
