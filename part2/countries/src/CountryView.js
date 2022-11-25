import axios from "axios";
import { useEffect, useState } from "react";

const CountryView = ({ country }) => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (!country)
            return;
        
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => setWeather(response.data))
    }, [country])

    if (!country)
        return null;
    
    return <div>
        <h1>{country.name.official}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
            {
                Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)
            }
        </ul>
        <img src={country.flags.svg} alt={country.name.offical} width={128} />
        {weather ? 
         <div>
             <h2>Weather in {country.capital[0]}</h2>
             <p>temperature {weather.main.temp} Celcius</p>
             <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].main} />
             <p>wind {weather.wind.speed} m/s</p>
         </div> : null   
        }

    </div>
}

export default CountryView;