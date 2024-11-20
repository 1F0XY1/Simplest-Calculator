import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(result + parseFloat(inputValue || 0));
    setInputValue('');
  };

  const handleMultiply = () => {
    setResult(result * parseFloat(inputValue || 1));
    setInputValue('');
  };

  const handleDivide = () => {
    const divisor = parseFloat(inputValue || 1);
    if (divisor === 0) {
      setResult("Error: Division by zero");
    } else {
      setResult(result / divisor);
    }
    setInputValue('');
  };

  const handleSubtract = () => {
    setResult(result - parseFloat(inputValue || 0));
    setInputValue('');
  };

  const handleReset = () => {
    setInputValue('');
    setResult(0);
  };

  return (
    <div className="calculator">
      <h3>Simplest Calculator</h3>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <h1>Result: {result}</h1>
        <div className="operation-buttons">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleMultiply}>Multiply</button>
          <button onClick={handleDivide}>Divide</button>
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
