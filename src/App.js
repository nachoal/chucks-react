import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://api.chucknorris.io/jokes/random');
      setQuote(result.data.value);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>The best Chuck Norris Quotes</h1>
      <div id="quote">{quote}</div>
      <button className="btn" onClick={refreshPage}>
        Generate a new quote
      </button>
    </div>
  );
}

export default App;
