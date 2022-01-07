import React, { useState } from 'react';
import './style.css';
import { fetchWeather } from './api/fetchWeather';

const App = () => {
  const [query, setQuery] = useState('');

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
    </div>
  );
};
export default App;
