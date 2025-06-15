import React, { useState } from "react";

function SelectBy({ countryData }) {
  const [options, setOptions] = useState([
    "Africa",
    "Asia",
    "Oceania",
    "Americas",
    "Europe",
  ]);
  console.log(countryData);
  return (
    <div className="select-by">
      <select className="form-control">
        <option value="All" hidden="">
          All
        </option>
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
