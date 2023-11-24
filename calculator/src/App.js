import React from 'react';
import Input from './components/Input';
import Operands from './components/Operands';
import Keypad from './components/Keypad';
import Operators from './components/Operators';
import './App.css';

function App() {
  const [inputValue, setInputValue] = React.useState('');
  const [expressionParts, setExpressionParts] = React.useState([]);

  const handleOperandClick = (value) => {
    if (value === 'AC') {
      setInputValue('');
      setExpressionParts([]);
    } else {
      setInputValue((prevValue) => prevValue + value);
      setExpressionParts((prevParts) => [...prevParts, value]);
    }
  };

  const handleKeypadClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
    setExpressionParts((prevParts) => [...prevParts, value]);
  };

  const handleOperatorClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else {
      const lastPart = expressionParts[expressionParts.length - 1];
      if (!isOperator(lastPart)) {
        setExpressionParts((prevParts) => [...prevParts, value]);
        setInputValue((prevValue) => prevValue + value);
      } else {
        setInputValue('Error: Consecutive Operators');
      }
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(expressionParts.join(''));
      setInputValue(result.toString());
      setExpressionParts([]);
    } catch (error) {
      setInputValue('Error');
      setExpressionParts([]);
    }
  };

  const isOperator = (value) => {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(value);
  };

  return (
    <div className='calc'>
      <Input value={inputValue} />
      <div className="obj">
        <div>
          <Operands onOperandClick={handleOperandClick} />
          <Keypad onKeypadClick={handleKeypadClick} />
        </div>
        <Operators onOperatorClick={handleOperatorClick} />
      </div>
    </div>
  );
}

export default App;
