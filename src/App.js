import './App.css';
import Header from './Components/Header'
import Country from './Components/Country'
import CountryDetail from './Components/CountryDetails'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    
    setCountries(data);
  }
  useEffect(() => {
    fetchData()
  }, [fetchData()])

  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header onClick={switchMode} darkMode={darkMode} />

      <Routes>
        <Route path="/" element={
          <div className="app-body">
            <div className="inputs">
              <div className={`search-input ${darkMode ? 'darkMode' : ''}`}>
                <SearchIcon />
                <input type="text" placeholder="Search for a country" />
              </div>
              <div className={`select-region ${darkMode ? 'darkMode' : ''}`}>
                <select>
                  <option>All</option>
                  <option>Africa</option>
                  <option>America</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Oceania</option>
                </select>
              </div>
            </div>
            <div className="countries">
              {countries.map((country) => (
                <Country darkMode={darkMode}/>
              ) )}
            </div>
          </div>
        }
        />
        <Route path="country-details" element={<CountryDetail darkMode={darkMode}/>} />

      </Routes>

    </div>
  );
}

export default App;
