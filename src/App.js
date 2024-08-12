import './App.css';
import Navbar from './components/Navbar';
import CounterMechanism from './components/CounterMechanism'
import { useState } from 'react';

function App() {

  const [counterValue, setCounterValue] = useState(0);

  const handleOnPlus = () =>{
    setCounterValue(counterValue + 1);
  }
  const handleOnReset = () =>{
    setCounterValue(0);
  }
  const handleOnMinus = () =>{
    console.log("Im minus");
    setCounterValue(Math.max(counterValue - 1,0));
  }
  return (
    <>
    <Navbar/>
    <CounterMechanism 
    counterValue={counterValue}
    handleOnPlus = {handleOnPlus} 
    handleOnReset={handleOnReset} handleOnMinus={handleOnMinus}/>
    </>
  );
}

export default App;
