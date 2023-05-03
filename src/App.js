

function App() {
  return (
    <div className="container">
      <form className="form">
        <h1 className="form__header">Money Exchanger</h1>
        <p>
          <label className="form__label">
            <span className="form__labelText">
              Great Britain Pound*
            </span>
            <input placeholder="amount" className="form__field" type="number" required step="0.01" autofocus />
          </label>
        </p>
        <p>
          <label className="form__label">
            <span className="form__labelText">
              Currency
            </span>
            <select className="form__currency" name="currency">
              <option value="PLN" selected>Polish Zloty</option>
              <option value="EUR">Euro</option>
              <option value="USD">US Dollar</option>
              <option value="THB">Thai Baht</option>
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Convert</button>
        </p>
        <div className="result__container">
          <p className="form__result">Result</p>
        </div>
        <div className="form__info">
          <p>Currency rates come from the Western Union website as of April 30, 2023</p>
          <p>*The field with a star (*) symbol must be completed</p>
        </div>
      </form>
    </div>
  );
}

export default App;
