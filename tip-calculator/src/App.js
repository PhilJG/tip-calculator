import './App.css';
import Attribution from './components/Attribution';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState(0.00);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  // const [reset, setReset] = useState(false)

  const tipPercentage = [
    .05,
    .10,
    .15,
    .25,
    .50
  ]

  function handleBill(e) {
    setBill(e.target.value);

  }

  function handlePeople(e) {
    setPeople(e.target.value);

  }

  function handleTip(e) {
    setTip(e.target.value)

  }

  return (
    <main>
      <header>
        <div className="logo"><img src="./images/logo.svg"></img></div>
      </header>
      <Calculator
        bill={bill}
        people={people}
        tip={tip}
        selectBill={handleBill}
        selectTip={handleTip}
        selectPeople={handlePeople}
        tipPercentage={tipPercentage}
      />
      <Result
        bill={bill}
        people={people}
        tip={tip} />
      <Attribution />
    </main>
  );
}

export default App;
