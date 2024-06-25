import React, { useState } from 'react';
import LatexRendered from './Components/LatexRendered';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showLatex, setShowLatex] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <div className='app-container'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type 'Hi' and Submit"
      />
      <button onClick={() => setShowLatex(true)}>Genrate Response</button>
      {showLatex && <LatexRendered />}
    </div>
  );
}

export default App;
