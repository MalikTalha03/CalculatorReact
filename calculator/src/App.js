import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Keypad from './components/Keypad';
import Operands from './components/Operands';
import Operators from './components/Operators';
import React from 'react';

function App() {
  const [inputValue, setInputValue] = React.useState('');

  const handleOperandClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleKeypadClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleOperatorClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };
  return (
    <>
    <div>
      <Input value={inputValue}/>
      <div className="obj">
        <div>
          <Operands onOperandClick={handleOperandClick}/>
          <Keypad onKeypadClick={handleKeypadClick}/>
        </div>
        <Operators onOperatorClick={handleOperatorClick}/>
      </div>
    </div>
    </>
  );
}

export default App;
