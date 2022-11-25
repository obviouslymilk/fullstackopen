import axios from "axios";
import { useEffect, useState } from "react";
import CountriesContainer from "./CountriesContainer";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState(allCountries);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => setAllCountries(response.data))
  }, [])

  const handleCountryFilter = e => {
    setCountries(allCountries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
  };

  return (
    <div>
      <label>find countries </label>
      <input onInput={handleCountryFilter} />

      <CountriesContainer countries={countries} />
    </div>
  );
}

export default App;
