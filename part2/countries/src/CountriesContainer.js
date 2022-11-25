import { useState } from "react";
import CountryItem from "./CountryItem";
import CountryView from "./CountryView";

const CountriesContainer = ({ countries }) => {

    const [countryToShow, setCountryToShow] = useState(null);
    

    const handleShowCountry = (country) => {
        setCountryToShow(country)
    }

    const length = countries.length;
    if (length > 10)
        return <p>Too many countries, specify another filter</p>;
    
        if (length > 1) {
            return <div>
                {countries.map(country => <CountryItem country={country} key={country.name.common} onClick={() => { handleShowCountry(country) }} />)}
                {<CountryView country={countryToShow}/>}
            </div>
        } else {
            return <CountryView country={countries[0]}/>
        }
}

export default CountriesContainer