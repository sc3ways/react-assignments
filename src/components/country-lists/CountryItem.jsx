import { Link } from "react-router-dom";

function CountryItem({ country }) {
  return (
    <Link to="" className="country-card card">
      <div className="card-img">
        <img src={country.flags.png} alt={country.name.common} />
      </div>
      <div className="card-body">
        <h3>{country.name.common}</h3>
        <p>
          <strong>Population: </strong>
          {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
      </div>
    </Link>
  );
}

export default CountryItem;
