const CountryView = ({ country }) => {
    if (!country)
        return null;
    
    return <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
            {
                Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)
            }
        </ul>
        <img src={country.flags.svg} alt={country.name.common} width={128} />
    </div>
}

export default CountryView;