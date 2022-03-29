import './App.css';
import Header from './Components/Header'
import Country from './Components/Country'
import CountryDetail from './Components/CountryDetails'
import SearchIcon from '@mui/icons-material/Search';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={
          <div className="app-body">
            <div className="inputs">
              <div className="search-input">
                <SearchIcon />
                <input type="text" placeholder="Search for a country" />
              </div>
              <div className="select-region">
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
              <Country />
            </div>
          </div>
        }
        />
        <Route path="country-details" element={<CountryDetail />} />

      </Routes>

    </div>
  );
}

export default App;
