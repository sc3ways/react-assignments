import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

function CountryDetail() {
  const navigate = useNavigate();
  const { country } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          flag: data.flags?.svg,
          flagAlt: data.flags?.alt,
          name: data.name?.common,
          native: data.name?.official,
          population: data.population?.toLocaleString("en-IN"),
          capital: data.capital?.join(", "),
          region: data.region,
          subRegion: data.subregion,
          languages: data.languages
            ? Object.values(data.languages).join(", ")
            : "N/A",
          currencies: data.currencies
            ? Object.values(data.currencies)
                .map((currency) => currency.name)
                .join(", ")
            : "N/A",
          borders: [],
        });
        Promise.all(
          data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderCountry]) => borderCountry.name.common);
          })
        ).then((borders) => {
          setCountryData((prev) => ({ ...prev, borders }));
        });
      });
  }, [country]);

  if (!countryData) return <p>Loading...</p>;
  return (
    <section className="inner-page-wrapper">
      <div className="container py-5">
        <button onClick={() => navigate(-1)} className="btn btn-sm mb-5">
          <FaLongArrowAltLeft /> Back
        </button>
        <div className="row">
          <div className="col-lg-6">
            <div className="country-flag">
              <img src={countryData.flag} alt={countryData.flagAlt} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="country-page-infos">
              <h1>{countryData.name}</h1>
              <p>
                <strong>Native Name:</strong> {countryData.native}
              </p>
              <p>
                <strong>Population:</strong> {countryData.population}
              </p>
              <p>
                <strong>Capital:</strong> {countryData.capital}
              </p>
              <p>
                <strong>Region:</strong> {countryData.region}
              </p>
              {countryData.subRegion && (
                <p>
                  <strong>Subregion:</strong> {countryData.subRegion}
                </p>
              )}

              <p>
                <strong>Languages:</strong> {countryData.languages}
              </p>
              <p>
                <strong>Currencies:</strong> {countryData.currencies}
              </p>
              {countryData.borders.length > 0 && (
                <div className="border-country">
                  <strong>Borders: </strong>
                  <span className="d-flex flex-wrap">
                    {countryData.borders.map((border, index) => (
                      <Link
                        to={`/react-assignment/${border}`}
                        key={index + 1}
                        className="me-2"
                      >
                        {border}
                      </Link>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetail;
