import React, { useEffect, useState } from "react";

function SelectBy({ countryData, region, setByRegion }) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const regions = countryData.map((country) => {
      return country.region;
    });
    const uniqueRegions = [...new Set(regions)];
    setOptions(uniqueRegions);
  }, [countryData]);
  return (
    <div className="select-by">
      <select
        className="form-control"
        value={region}
        onChange={(e) => setByRegion(e.target.value)}
      >
        <option value="All">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBy;
