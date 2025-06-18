import { useEffect, useState } from "react";
import CountryItem from "./CountryItem";
import SearchBy from "./SearchBy";
import SelectBy from "./SelectBy";
import CountryListsShimmer from "./CountryListsShimmer";

function CountryLists() {
  const [countryData, setCountryData] = useState([]);
  const [query, setQuery] = useState("");
  const [byRegion, setByRegion] = useState("All");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,borders"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);
  return (
    <div className="main-country-wrapper">
      <div className="container">
        <div className="sec-title">
          <h1>Country Lists</h1>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-3">
            <div className="country-count">
              Total
              <span> {countryData.length} </span>
              Countries
            </div>
          </div>
          <div className="col-lg-5">
            <SearchBy query={query} setQuery={setQuery} />
          </div>
          <div className="col-lg-3">
            <SelectBy
              countryData={countryData}
              region={byRegion}
              setByRegion={setByRegion}
            />
          </div>
        </div>

        {!countryData.length ? (
          <CountryListsShimmer />
        ) : (
          <div className="row pt-3">
            {countryData
              .filter((country) =>
                country.name.common.toLowerCase().includes(query)
              )
              .filter((country) =>
                byRegion === "All" ? true : country.region === byRegion
              )
              .map((country) => (
                <div className="col-lg-3 py-3" key={country.name.common}>
                  <CountryItem country={country} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryLists;
