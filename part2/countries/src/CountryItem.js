const CountryItem = ({ country, onClick }) => {
    return <div>
        {country.name.official}
        <button onClick={onClick}>show</button>
    </div>
}

export default CountryItem;