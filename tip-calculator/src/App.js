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
    // const value = parseFloat(e.target.value)
    // console.log(value);

    setBill(e.target.value);
  }

  function handlePeople(e) {
    const value = parseFloat(e.target.value)

    setPeople(value);
  }

  function handleTip(e) {
    const value = parseFloat(e.target.value)
    console.log(`tip value: ${tip}`);
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
      <header>/get-started
        <div className="logo"><img src="./images/logo.svg" alt="splitter-logo" ></img></div>
      </header>
      <div className='main__container'>
        <Calculator
          bill={bill}
          people={people}
          tip={tip}
          handleBill={handleBill}
          handleTip={handleTip}
          handlePeople={handlePeople}
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
      </div>
      <Attribution />
    </main>
  );
}

export default App;
