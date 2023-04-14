import './App.css';
import Attribution from './components/Attribution';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { useState } from 'react';
import { logo } from './images/logo.svg'

function App() {
  const [bill, setBill] = useState(0.00);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0.00);

  const tipPercentage = [
    .05,
    .10,
    .15,
    .25,
    .50
  ]

  function handleBill(e) {
    const value = parseFloat(e.target.value)
    console.log(value);

    setBill(value);
  }

  function handlePeople(e) {
    const value = parseFloat(e.target.value)
    setPeople(value);
  }

  function handleTip(e) {
    const value = parseFloat(e.target.value)
    setTip(value);
  }

  const handleReset = function () {
    setBill(0.00);
    setTip(0.00);
    setPeople(1);
    document.getElementById("entry").value = { bill };
    document.getElementById("people").value = { people };
  }

  return (
    <main>
      <header>
        <div className="logo"><img src="./images/logo.svg" alt="splitter-logo" ></img></div>
      </header>
      <Calculator
        bill={bill}
        people={people}
        tip={tip}
        selectBill={handleBill}
        selectTip={handleTip}
        selectPeople={handlePeople}
        tipPercentage={tipPercentage}
        handleReset={handleReset}
      />
      <Result
        bill={bill}
        people={people}
        tip={tip}
        setBill={setBill}
        setPeople={setPeople}
        setTip={setTip}
        handleReset={handleReset} />
      <Attribution />
    </main>
  );
}

export default App;
