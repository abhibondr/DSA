var countriesData = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai", "Nagpur"] },
  { name: "Bangladesh", value: "BL", cities: ["Dhaka", "Baroli"] },
  { name: "Pakistan", value: "PAK", cities: ["Lahore", "Karachi"] },
  { name: "Australia", value: "AUS", cities: ["sydney", "melbourne"] },
];

var countryDropdown = document.getElementById("country");
var stateDropdown = document.getElementById("state");

countriesData.forEach((country) => {
  var option = document.createElement("option");
  option.value = country.value;
  option.textContent = country.name;

  countryDropdown.appendChild(option);
});

function handleStateChange() {
  var selectedCountry = countryDropdown.value;

  stateDropdown.innerHTML = '<option value="">--select state--</option>';

  if (selectedCountry) {
    var selectedCountryData = countriesData.find(
      (country) => country.value === selectedCountry
    );

    if (selectedCountryData) {
      selectedCountryData.cities.map((city) => {
        var option = document.createElement("option");
        option.textContent = city;
        stateDropdown.appendChild(option);
      });
    }
  }
}

handleStateChange();
