import React, { useEffect } from "react";
import { useCountryStore } from "../page/Store";

const CountryDropdown = () => {
  const { countries, selectedCountry, setCountries, setSelectedCountry } =
    useCountryStore();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryData = data.map((country) => ({
          name: country.name.common,
          code: country.cca3,
          flag: country.flags.png,
          callingCode: country.idd?.root
            ? `${country.idd.root}${
                country.idd.suffixes ? country.idd.suffixes[0] : ""
              }`
            : "N/A",
        }));
        setCountries(countryData.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [setCountries]);

  const handleSelectChange = (event) => {
    const selected = countries.find(
      (country) => country.code === event.target.value
    );
    setSelectedCountry(selected);
  };

  return (
    <div className="CountryCode">
      <select id="country" onChange={handleSelectChange}>
        <option value="">N/A</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.callingCode}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <img src={selectedCountry.flag} width="30" height="20" alt="flag" />
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
