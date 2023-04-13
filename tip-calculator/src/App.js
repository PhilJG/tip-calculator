import './App.css';
import Attribution from './components/Attribution';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState(0.00);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0.00);
  // const [reset, setReset] = useState(false)

  const tipPercentage = [
    .05,
    .10,
    .15,
    .25,
    .50
  ]

  function handleBill(e) {
    const value = parseFloat(e.target.value)
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
    setBill(0);
    setTip(0);
    setPeople(0);
    console.log(bill, tip, people);

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
