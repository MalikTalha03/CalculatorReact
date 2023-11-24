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
    } else if (value === '%') {
      // Handle percentage operation
      handlePercentage();
    } else if (value === '+/-') {
      // Handle +/- operation
      handleToggleSign();
    } else {
      setInputValue((prevValue) => prevValue + value);
      setExpressionParts((prevParts) => [...prevParts, value]);
    }
  };
  const handleToggleSign = () => {
    // Handle +/- operation if there is a number before "+/-"
    const lastPartIndex = expressionParts.length - 1;
    if (lastPartIndex >= 0 && !isNaN(expressionParts[lastPartIndex])) {
      const lastPart = parseFloat(expressionParts.pop()) * -1;
      setInputValue(lastPart.toString());
      setExpressionParts([lastPart.toString()]);
    } else {
      setInputValue('Error: Invalid +/-');
    }
  };

  const handleKeypadClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
    setExpressionParts((prevParts) => [...prevParts, value]);
  };

  const handleOperatorClick = (value) => {
    if (value === '=') {
      // Perform the calculation when '=' is clicked
      calculateResult();
    } else {
      // Check for consecutive operators
      const lastPart = expressionParts[expressionParts.length - 1];
      if (!isOperator(lastPart)) {
        // Record the entire expression when an operator is clicked
        setExpressionParts((prevParts) => [...prevParts, value]);
        setInputValue((prevValue) => prevValue + value);
      } else {
        setExpressionParts([]);
        setInputValue('Error: Consecutive Operators');

      }
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(expressionParts.join(''));
      setInputValue(result.toString());
      
      setExpressionParts([result.toString()]); // Set expressionParts to result for further calculations
    } catch (error) {
      setInputValue('Error');
      setExpressionParts([]);
    }
  };

  const handlePercentage = () => {
    // Handle percentage operation if there is a number before "%"
    const lastPartIndex = expressionParts.length - 1;
    if (lastPartIndex >= 0 && !isNaN(expressionParts[lastPartIndex])) {
      const lastPart = parseFloat(expressionParts.pop()) / 100;
      setInputValue(lastPart.toString());
      setExpressionParts([lastPart.toString()]);
    } else {
      setInputValue('Error: Invalid Percentage');
    }
  };

  // Helper function to check if a string is an operator
  const isOperator = (value) => {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(value);
  };

  return (
    <>
      <Input value={inputValue} />
      <div className="obj">
        <div>
          <Operands onOperandClick={handleOperandClick} />
          <Keypad onKeypadClick={handleKeypadClick} />
        </div>
        <Operators onOperatorClick={handleOperatorClick} />
      </div>
    </>
  );
}

export default App;
